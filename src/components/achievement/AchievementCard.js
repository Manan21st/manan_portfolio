import './Achievement.css';


function achievementcard({title, description, image,link}){
    return (
        <div className="achievement-card">
            <a target='_blank'href={link}></a>
            <div className="achievement-content">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="achievement-image">
                <img src={image} />
            </div>
        </div>
    );
}

export default achievementcard;