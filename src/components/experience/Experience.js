import './Experience.css';
import experienceImage from '../../assets/experienceImage.svg';
import ExperienceCard from './ExperienceCard';

function Experience(){
    return(
        <div className="experience">
            <div className="experience-body">
                <div className="experience-description">
                    <h2>Experience</h2>
                    <ExperienceCard years='08/2024-Present' role='Teaching Assistant' company='Scaler School of Technology'/>
                    <ExperienceCard years='08/2024 - 11/2024' role='ML intern' company='VideoVerse'/>
                </div>
                <div className="experience-img">
                    <img src={experienceImage} />
                </div>
            </div>
        </div>
    );
}

export default Experience;