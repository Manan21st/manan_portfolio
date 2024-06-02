import './Contact.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {faAt} from '@fortawesome/free-solid-svg-icons';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return (
        <div id='contact' className="contact">
            <div className="contact-cont">
                <h2>Contact Me</h2>
                <div className="contact-body">
                    <div className="contact-form">
                        <form>
                            <div className="input-cont">
                                <label for="Name" className="label-mail">Name</label>
                                <input placeholder="Your Name" type="text" id="Name" className="input-mail" />
                            </div>
                            <div className="input-cont">
                                <label for="Email" className="label-mail">Email</label>
                                <input placeholder="YourEmail@something.com" type="email" id="Email" className="input-mail" />
                            </div>
                            <div className="input-cont">
                                <label for="Message" className="label-mail">Message</label>
                                <textarea placeholder="Type your message here...." id="Message" className="input-message" />
                            </div>
                            <div className="send-btn">
                                <button type="submit">
                                    <p>Send</p>
                                    <div className="send-icon">
                                    <FontAwesomeIcon icon={faPaperPlane} className='icon'/>
                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="contact-info">
                        <div className='personal-details'>
                            <div className='contact-image'>
                                <FontAwesomeIcon icon={faAt} />
                            </div>
                            <p>manan.23bcs10206@ms.sst.scaler.com</p>
                        </div>
                        <div className='personal-details'>
                            <div className='contact-image'>
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <p>+91 9892486611</p>
                        </div>
                        <div className='personal-details'>
                            <div className='contact-image'>
                                <FontAwesomeIcon icon={faLocationDot} />
                            </div>
                            <p>Electronic City, Bengaluru, India - 560100</p>
                        </div>
                        <div className='social-media-icons'>
                        <a target='_blank'href='https://www.linkedin.com/in/manan-agrawal-bb6b19291/'>
                            <FontAwesomeIcon icon={faLinkedin} className='social-media-icon'/>
                        </a>
                        <a target='_blank'href='https://github.com/Manan21st'>
                            <FontAwesomeIcon icon={faGithub} className='social-media-icon'/>
                        </a>
                        <a target='_blank'href='https://www.youtube.com/@NaughtyJoke'>
                            <FontAwesomeIcon icon={faYoutube} className='social-media-icon'/>
                        </a>
                            <a target='_blank'href='https://www.instagram.com/manan.agrawal21/'>
                                <FontAwesomeIcon icon={faInstagram} className='social-media-icon'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;