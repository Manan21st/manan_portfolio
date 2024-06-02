import './Landing.css';
import manan_potrait from '../../assets/manan_potrait.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { resumeManan } from '../../assets/Manan_Agrawal_Resume.pdf';

function Landing(){
    return (
        <div className="landing">
            <div className='landing-cont'>
                <div className='left-cont'>
                    <div className='container-contents'>
                        <a href='https://www.linkedin.com/in/manan-agrawal-bb6b19291/'>
                            <FontAwesomeIcon icon={faLinkedin} className='social-media'/>
                        </a>
                        <a href='https://github.com/Manan21st'>
                            <FontAwesomeIcon icon={faGithub} className='social-media'/>
                        </a>
                        <a href='https://www.youtube.com/@NaughtyJoke'>
                            <FontAwesomeIcon icon={faYoutube} className='social-media'/>
                        </a>
                    </div>
                </div>
                <img src={manan_potrait} alt='Manan' className='landing-img'/>
                <div className="right-cont">
                    <div className='container-contents'>
                        <h6>Computer Science Undergrad</h6>
                        <h1>Manan Agrawal</h1>
                        <p>"Trust is a garden; nurture it with honesty, and it will bloom with loyalty. Neglect it, and only weeds of doubt will grow."</p>
                        <a download={ manan_potrait }>
                            <button className='button-icon'>Download Resume</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;