import React from 'react';
import './About.css';

const About = () => {
    const skills = [
        { name: ' Node.js', level: 60 },
        { name: 'React', level: 60 },
        { name: 'Php', level: 60 },
        { name: 'MySql', level: 85 },
        { name: 'Git', level: 70 },
    ];

    return (
        <section id="about" className="about">
            <div className="section-header" data-aos="fade-up">
                <h2 className="section-title gradient-text">About Me</h2>
                <div className="underline"></div>
            </div>

            <div className="about-grid">
                <div className="about-text" data-aos="fade-right">
                    <p>
                        I am a passionate <strong>Software Engineer</strong> with a keen eye for detail and a love for creating interactive digital experiences.
                    </p>
                    <p>
                        I am currently pursuing my Bachelor of Engineering in Computer Science at Shree Dhanvantary College of Engineering and Technology.
                    </p>


                </div>

                <div className="about-skills" data-aos="fade-left">
                    {skills.map((skill, index) => (
                        <div className="skill-item" key={index}>
                            <div className="skill-info">
                                <span>{skill.name}</span>
                                <span>{skill.level}%</span>
                            </div>
                            <div className="skill-bar">
                                <div
                                    className="skill-progress"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
