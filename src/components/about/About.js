import './About.css';
import aboutgif from '../../assets/guy_coding_blue.gif';
function About(){
    return (
        <div id='about' className="about">
            <div className='line'></div>
            <div className='about-body'>    
                <div className='about-description'>
                    <h2>About Me</h2>
                    <p> 
                        My name's Manan Agrawal. I am a CS Undergrad based in Bengaluru, India.
                        <br />
                        <br />
                        I am passionate about Backend Development, Data Science and Competitive Programming. 
                        I have built projects in Python, Java and JavaScript. I spend my leisure time playing video games and watching anime. Right now I am learning MERN stack and CS fundamentals.
                        Everyday I strive to learn something new and improve my skills.
                    </p>
                </div>
                <div className='about-img'>
                    <img src={aboutgif} />
                </div>
            </div>
        </div>
    );
}

export default About;