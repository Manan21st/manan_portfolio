import './Education.css'; 
import EducationCard from './EducationCard';
import learningcoding from '../../assets/learning-coding.gif';

function Education() {
    return (
        <div className="education">
            <div className='education-body'>
            <div className='education-img'>
                    <img src={learningcoding} />
                </div>
                <div className='education-description'>
                    <h2>Education</h2>
                    <EducationCard years='2023-2027' institute='Scaler School of Technology' degree='Professional Certificate'/>
                    <EducationCard years='2023-2026' institute='BITS Pilani' degree='Bsc Computer Science'/>
                    <EducationCard years='2026-2027' institute='WOOLF University' degree='Ms Computer Science'/>
                </div>
            </div>
        </div>
    );
}

export default Education;