import './Skills.css';

function SkillCard({skill,image}){
    return (
        <div className="skill-card">
            <img src={image} />
            <h4>{skill}</h4>
        </div>
    )
}

export default SkillCard;