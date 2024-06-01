import './Experience.css';
import workBag from '../../assets/workBag.svg';

function ExperienceCard({years,role,company}){
    return (
        <div className='experience-card'>
            <div className='experience-card-img'>
                <img src={workBag} />
            </div>
            <div className='experience-details'>
                <h6>{years}</h6>
                <h4>{role}</h4>
                <h5>{company}</h5>
            </div>
        </div>
    )
}

export default ExperienceCard;