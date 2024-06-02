import './Services.css';

function ServiceCard({ service, image }) {
    return (
    <div className="service-card">
        <div className="service-details">
            <img src={image} />
            <h4>{service}</h4>
        </div>
    </div>
    );
}

export default ServiceCard;