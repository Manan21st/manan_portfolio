import './Experience.css';
import experienceImage from '../../assets/experienceImage.svg';
import ExperienceCard from './ExperienceCard';

function Experience(){
    return(
        <div className="experience">
            <div className="experience-body">
                <div className="experience-description">
                    <h2>Experience</h2>
                    <ExperienceCard years='2024-Present' role='Proshows Coordinator' company='Yugaantar Fest SST'/>
                </div>
                <div className="experience-img">
                    <img src={experienceImage} />
                </div>
            </div>
        </div>
    );
}

export default Experience;