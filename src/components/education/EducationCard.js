import './Education.css';
import eduHat from '../../assets/eduHat.svg';

function EducationCard(years,institute,degree){
    return (
        <div className='education-card'>
            <div className='card-img'>
                <img src={eduHat} />
            </div>
            <div className='education-details'>
                <h6>{years}</h6>
                <h4>{institute}</h4>
                <h5>{degree}</h5>
            </div>
        </div>
    )
}

export default EducationCard;