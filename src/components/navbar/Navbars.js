import './Navbars.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar(){
    return (
    <div className="navbar">
        <div className="navbar-cont">
            <h1>Manan Agrawal</h1>
            <FontAwesomeIcon icon={faBars} className='baricon'/>
        </div>
    </div>
    )
}

export default Navbar;