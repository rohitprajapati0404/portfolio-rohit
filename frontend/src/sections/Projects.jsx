import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Job Portal',
            description: 'A Job Portal application built with React, Node.js, Express.js, MySQL2, and Multer.',
            image: project1,
            tech: ['React', 'Node.js', 'Express.js', 'MySQL2', 'Multer'],
            github: 'https://github.com/rohitprajapati0404/Job-Portal.git',

        },
        {
            title: 'Weather Forecast',
            description: 'A Weather Forecast application that shows weather and sends alerts to users.',
            image: project2,
            tech: ['React', 'Node.js', 'Express.js', 'NodeMailer', 'WeatherAPI', 'Twilio', 'Mailhog'],
            github: 'https://github.com/rohitprajapati0404/Whether-Forecast.git',

        },
        {
            title: 'Portfolio Website',
            description: 'Portfolio website built with React, Node.js, Express.js, MySQL2, and Multer.',
            image: project3,
            tech: ['React', 'HTML5', 'CSS3 (Flexbox, Grid, Animations)', 'JavaScript (ES6+)'],
            github: 'https://github.com/rohitprajapati0404/Portfolio-website.git',
            demo: 'https://demo.com'
        },
        {
            title: 'Restaurant Management System',
            description: 'Restaurant Management System built with React, Node.js, Express.js, PostgreSQL.',
            image: project4,
            tech: ['React', 'Node.js', 'Express.js', 'PostgreSQL'],

        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="section-header" data-aos="fade-up">
                <h2 className="section-title gradient-text">Featured Projects</h2>
                <div className="underline"></div>
            </div>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div
                        className="project-card glass-card"
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                    >
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                            <div className="project-overlay">
                                <a href={project.github} target="_blank" rel="noreferrer"><FiGithub /></a>
                                <a href={project.demo} target="_blank" rel="noreferrer"><FiExternalLink /></a>
                            </div>
                        </div>
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tech">
                                {project.tech.map((t, i) => (
                                    <span key={i}>{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
