import './Projects.css';
import AptiQuiz from '../../assets/project-assets/AptiQuiz.png';
import WebScraper from '../../assets/project-assets/WebScraper.webp';
import YuluAnalysis from '../../assets/project-assets/YuluAnalysis.png';
import TicTacToe from '../../assets/project-assets/TicTacToe.svg';
import ProjectCard from './ProjectCard';

function projects() {
    return (
        <div className="projects">
            <div className="project-head">
                <h2>Projects</h2>
            </div>
            <div className='project-body'>
                <div className="project-container">
                    {projectTitles.map((project) => (
                        <ProjectCard title={project} image={projectImages(project)} deployedlink={projectDeployedLinks(project)} repolink={projectLinks(project)}/>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default projects;

const projectTitles = ['Yulu Analysis', 'Web-Scraper','TicTacToe','AptiQuiz'];

const projectImages = (project) => {
    const projectId = project.toLowerCase();
    switch (projectId) {
        case 'yulu analysis':
            return YuluAnalysis;
        case 'web-scraper':
            return WebScraper;
        case 'tictactoe':
            return TicTacToe;
        case 'aptiquiz':
            return AptiQuiz;
    }
};

const projectDeployedLinks = (project) => {
    const projectId = project.toLowerCase();
    switch (projectId) {
        case 'yulu analysis':
            return 'https://github.com/Manan21st/Yulu_DataAnalysis';
        case 'web-scraper':
            return 'https://github.com/Manan21st/Web-Scraper';
        case 'tictactoe':
            return 'https://github.com/Manan21st/TicTacToe';
        case 'aptiquiz':
            return 'https://manan21st.github.io/AptiQuiz/';
    }
};

const projectLinks = (project) => {
    const projectId = project.toLowerCase();
    switch (projectId) {
        case 'yulu analysis':
            return 'https://github.com/Manan21st/Yulu_DataAnalysis';
        case 'web-scraper':
            return 'https://github.com/Manan21st/Web-Scraper';
        case 'tictactoe':
            return 'https://github.com/Manan21st/TicTacToe';
        case 'aptiquiz':
            return 'https://github.com/Manan21st/AptiQuiz';
    }
};
