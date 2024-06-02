import './Projects.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCode} from '@fortawesome/free-solid-svg-icons';
import {faPlay} from '@fortawesome/free-solid-svg-icons';

function ProjectCard({title, image, deployedlink,repolink}){
    return (
        <div className="project-card">
            <div className="project-content">
                <h2>{title}</h2>
                <img src={image} />
                <div className="project-repo">
                    <a target='_blank'href={deployedlink}>
                        <FontAwesomeIcon icon={faPlay} />
                    </a>
                    <a target='_blank'href={repolink} >
                        <FontAwesomeIcon icon={faCode} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;