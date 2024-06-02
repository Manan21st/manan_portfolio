import './Navbars.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import NavCard from './NavCard';

function Navbar(){

    const menuRef = useRef(null); 

    const Pages = ['Home', 'About','Resume','Services', 'Contact'];

    const icons = (page) =>{
        switch(page){
            case 'Home':
                return faHouse;
            case 'About':
                return faUser;
            case 'Resume':
                return faFile;
            case 'Services':
                return faGear;
            case 'Contact':
                return faPhone;
        }
    };

    const handleClick = () => {
        menuRef.current?.classList.toggle('active');
        if(menuRef.current?.classList.contains('active')){
            document.querySelector('.space').style.filter = 'blur(20px)';
        }
        else{
            document.querySelector('.space').style.filter = 'blur(0px)';
        }
    }

    return (
    <div className="navbar">
        <div ref={menuRef} className="menu">
            <div className='close-btn'>
                <FontAwesomeIcon icon={faXmark}  onClick={handleClick} className='xmark'/>
            </div>
            <br/>
            <div className='nav-cont'>
                {Pages.map((page) => (
                    <NavCard icon={icons(page)} page={page}/>
                ))}
            </div>
        </div>

        <div className="navbar-cont">
            <h1>Manan Agrawal</h1>
            <FontAwesomeIcon icon={faBars} onClick={handleClick} className='baricon'/>
        </div>

    </div>
    )
}

export default Navbar;
