import './Services.css';
import backenddev from '../../assets/service-assets/backenddev.png';
import dataanalyst from '../../assets/service-assets/dataanalyst.webp';
import datascientist from '../../assets/service-assets/datascientist.png';
import mlengineer from '../../assets/service-assets/mlengineer.png';
import quant from '../../assets/service-assets/quant.webp';
import ServiceCard from './ServiceCard';

function Services(){
    return (
        <div id='services' className="services">
            <div className='services-head'>
                <h2>Services/Roles</h2>
            </div>
            <div className='services-body'>
                <p>I am currently in the hunt for open-roles/internships. Here are the roles for which I would like to offer my services.</p>
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

const roles= ['Data Scientist','Data Analyst', 'Backend Developer', 'ML Engineer','Quant'];

const roleImages = (role)=>{
    switch(role){
        case 'Data Scientist':
            return datascientist;
        case 'Data Analyst':
            return dataanalyst;
        case 'Backend Developer':
            return backenddev;
        case 'ML Engineer':
            return mlengineer;
        case 'Quant':
            return quant;
    }
};