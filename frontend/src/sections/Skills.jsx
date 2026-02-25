import React from 'react';
import {
    SiReact, SiNodedotjs, SiMysql,
    SiGit, SiPhp, SiExpress, SiHtml5, SiCss3, SiJavascript
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
    const techStack = [
        { name: 'Html', icon: <SiHtml5 />, color: '#E44D26' },
        { name: 'Css', icon: <SiCss3 />, color: '#3B82F6' },
        { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
        { name: 'React', icon: <SiReact />, color: '#61DAFB' },
        { name: 'Php', icon: <SiPhp />, color: '#7e74e5ff' },
        { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
        { name: 'MySql', icon: <SiMysql />, color: '#2f69ccff' },
        { name: 'Git', icon: <SiGit />, color: '#F05032' }
    ];

    return (
        <section id="skills" className="skills">
            <div className="section-header" data-aos="fade-up">
                <h2 className="section-title gradient-text">Tech Stack</h2>
                <div className="underline"></div>
            </div>

            <div className="skills-container">
                {techStack.map((tech, index) => (
                    <div
                        className="tech-card glass-card"
                        key={index}
                        data-aos="zoom-in"
                        data-aos-delay={index * 50}
                    >
                        <div className="tech-icon" style={{ color: tech.color }}>
                            {tech.icon}
                        </div>
                        <span className="tech-name">{tech.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
