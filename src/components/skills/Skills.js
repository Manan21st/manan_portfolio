import './Skills.css';
import React from 'react';
import Marquee from "react-fast-marquee";
import SkillCard from './SkillCard';
import html from '../../assets/skill-assets/html.svg';
import css from '../../assets/skill-assets/css.svg';
import javascript from '../../assets/skill-assets/javascript.svg';
import react from '../../assets/skill-assets/react.svg';
import nodejs from '../../assets/skill-assets/node.svg';
import java from '../../assets/skill-assets/java.svg';
import springboot from '../../assets/skill-assets/springboot.svg';
import mysql from '../../assets/skill-assets/mysql.svg';
import python from '../../assets/skill-assets/python.svg';
import numpy from '../../assets/skill-assets/numpy.svg';
import pandas from '../../assets/skill-assets/pandas.svg';
import cpp from '../../assets/skill-assets/c++.svg';
import loading from '../../assets/skill-assets/loading.svg';
import fastapi from '../../assets/skill-assets/fastapi.svg';
import scikitlearn from '../../assets/skill-assets/scikitlearn.svg';



function Skills(){
    return (
        <div className="skills">
            <div className='skills-header'>
                <h2>Skills</h2>
            </div>
            <div className='skills-body'>
                <div className='skills-rotate'>
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left">
                            {skills.map((skill) => (
                                <SkillCard skill={skill} image={images(skill)}/>
                                ))}
                        </Marquee>
                </div>
            </div>
        </div>
    );
}

export default Skills;

const skills = [
    'HTML','CSS','JavaScript','React','Node.js','Java','SpringBoot','FastApi','MySQL','Python','Scikit-learn','Numpy','Pandas','C++'
];

const images = (skills) => {
    const skillId = skills.toLowerCase();
    switch (skillId) {
        case 'html':
            return html;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'react':
            return react;
        case 'node.js':
            return nodejs;
        case 'java':
            return java;
        case 'springboot':
            return springboot;
        case 'fastapi':
            return fastapi;
        case 'mysql':
            return mysql;
        case 'python':
            return python;
        case 'scikit-learn':
            return scikitlearn;
        case 'numpy':
            return numpy;
        case 'pandas':
            return pandas;
        case 'c++':
            return cpp;
        default:
            return loading;
    }
}