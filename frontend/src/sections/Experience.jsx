import React, { useState } from 'react';
import { FiChevronDown, FiBriefcase, FiAward } from 'react-icons/fi';
import './Experience.css';

const Experience = () => {
    const [expanded, setExpanded] = useState(null);

    const entries = [
        {
            type: 'Intern',
            title: 'Software Engineer Intern',
            organization: 'App Saga Solutions',
            period: '2026 - Present',
            description: '',
            details: [
                'Learning and enhancing my skills in backend development.'

            ]
        },
        {
            type: 'Student',
            title: 'Bachelor of Engineering in Computer Science',
            organization: 'Shree Dhanvantary College of Engineering and Technology',
            period: '2026 - Present',
            description: 'Currently pursuing my Bachelor of Engineering in Computer Science.',
            details: [
                'Studying core subjects like Data Structures, Algorithms, DBMS, and Operating Systems',
                'Learning full-stack web development using React, Node.js, and MySQL',
                'Actively practicing coding and problem-solving',
                'Building academic and personal projects'
            ]
        },
        {
            type: 'Student',
            title: 'Diploma in Computer Engineering',
            organization: 'Shree Dhanvantary College of Engineering and Technology',
            period: '2022 - 2025',
            description: 'Completed Diploma in Computer Engineering.',
            details: [
                'Graduated with honors (8.7 GPA).',

            ]
        }
    ];

    return (
        <section id="experience" className="experience">
            <div className="section-header" data-aos="fade-up">
                <h2 className="section-title gradient-text">My Journey</h2>
                <div className="underline"></div>
            </div>

            <div className="timeline">
                {entries.map((item, index) => (
                    <div
                        className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                        key={index}
                        data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                    >
                        <div className="timeline-dot">
                            {item.type === 'work' ? <FiBriefcase /> : <FiAward />}
                        </div>
                        <div
                            className={`timeline-card glass-card ${expanded === index ? 'expanded' : ''}`}
                            onClick={() => setExpanded(expanded === index ? null : index)}
                        >
                            <div className="card-header">
                                <div>
                                    <span className="period">{item.period}</span>
                                    <h3>{item.title}</h3>
                                    <h4 className="org">{item.organization}</h4>
                                </div>
                                <FiChevronDown className={`expand-icon ${expanded === index ? 'rotate' : ''}`} />
                            </div>

                            <div className="card-body">
                                <p>{item.description}</p>
                                {expanded === index && (
                                    <ul className="details-list">
                                        {item.details.map((detail, dIndex) => (
                                            <li key={dIndex}>{detail}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
