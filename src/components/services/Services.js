import './Services.css';
import backenddev from '../../assets/service-assets/backenddev.png';
import dataanalyst from '../../assets/service-assets/dataanalyst.webp';
import datascientist from '../../assets/service-assets/datascientist.png';
import mlengineer from '../../assets/service-assets/mlengineer.png';
import quant from '../../assets/service-assets/quant.webp';
import ServiceCard from './ServiceCard';
import Typing from '../../TypingEffect';

function Services(){
    return (
        <div id='services' className="services">
            <div className='services-head'>
                <h2>Services/Roles</h2>
            </div>
            <div className='services-body'>
                <p><Typing text={['I am currently in the hunt for open-roles/internships. Here are the roles for which I would like to offer my services.']} /></p>
                <div className='services-cards'>
                    {roles.map((role) => (
                        <ServiceCard service={role} image={roleImages(role)}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Services;

const roles= ['Data Scientist','Quant', 'Backend Developer', 'Data Analyst','ML Engineer'];

const roleImages = (role)=>{
    switch(role){
        case 'Data Scientist':
            return datascientist;
        case 'Quant':
            return quant;
        case 'Backend Developer':
            return backenddev;
        case 'Data Analyst':
            return dataanalyst;
        case 'ML Engineer':
            return mlengineer;
    }
};