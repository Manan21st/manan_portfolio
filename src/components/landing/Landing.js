import './Landing.css';
import manan_potrait from '../../assets/manan_potrait.jpg';

function Landing(){
    return (
        <div className="landing">
            <div className='landing-cont'>
                <div className='left-cont'>
                    <div className='container-contents'>
                        <a href='google.com'></a>
                        <a href='google.com'></a>
                        <a href='google.com'></a>
                    </div>
                </div>
                <img src={manan_potrait} alt className='landing-img'/>
                <div className="right-cont">
                    <div className='container-contents'>
                        <h5>Computer Science Undergrad</h5>
                        <h1>Manan Agrawal</h1>
                        <div className='btn'>Download Resume</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;