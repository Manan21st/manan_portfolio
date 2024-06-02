import './Navbars.css';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavCard({icon, page}){
    return (
        <div className="nav-card">
            <FontAwesomeIcon className='nav-icon' icon={icon} />
            <div className="redirect-to">{page}</div>
        </div>
    )
}

export default NavCard;