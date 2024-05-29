import './About.css';
import manan_full from '../../assets/manan_full.jpg';
function About(){
    return (
        <div className="about">
            <div className='line'></div>
            <div className='about-body'>    
                <div className='about-description'>
                    <h3>About Me</h3>
                    <p>
                        My name is Manan Agrawal. I am a CS Undergrad based in Bengaluru, India.
                        <br />
                        <br />
                        I am passionate about Backend Development, Data Science and Competitive Programming. 
                        I have built projects in Python, Java and JavaScript. I spend my leisure time playing video games and watching anime. Right now I am learning MERN stack and CS fundamentals.
                        Everyday I strive to learn something new and improve my skills.
                    </p>
                </div>
                <div className='about-img'>
                    <img src={manan_full} />
                </div>
            </div>
        </div>
    );
}

export default About;