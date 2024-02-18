import React from 'react';
import {Link} from 'react-router-dom';
import {FiGithub, FiExternalLink} from 'react-icons/fi';
import './projects.scss';
import {motion} from 'framer-motion';

const Projects = () => {
    const projectsData = [
        {
            image: './kasa_app.png',
            projectName: "Kasa App - Site d'Agence Immobilière",
            projectLink: 'https://projet8-gl7rzyg09-hyrriuks-projects.vercel.app',
            projectDescription:
                "En utilisant la puissance de React et la flexibilité du SCSS, j'ai créé un site web innovant pour une agence immobilière appelée Kasa App lors de mon cursus sur Openclassrooms.",
            projectTech: ['React', 'SCSS'],
            projectExternalLinks: {
                github: 'https://github.com/Hyrriuk/Projet8OC/tree/main',
                externalLink: 'https://projet8-gl7rzyg09-hyrriuks-projects.vercel.app',
            },
            isNew: false,
            frontendmentor: false,
        },
        {
            image: './ohmyfood.png',
            projectName: 'Oh My Food - Restaurant à la Carte',
            projectLink: 'https://hyrriuk.github.io/Projet4OC/',
            projectDescription:
                "Mon rôle en tant que développeur était de structurer le site avec HTML, de créer des styles visuellement attrayants avec SASS et d'implémenter des animations fluides pour améliorer l'expérience utilisateur.",
            projectTech: ['HTML', 'SCSS'],
            projectExternalLinks: {
                github: 'https://github.com/Hyrriuk/Projet4OC',
                externalLink: 'https://hyrriuk.github.io/Projet4OC/',
            },
            isNew: false,
            frontendmentor: false,
        },
        {
            image: './724events.jpg',
            projectName: '724events - Agence évènementielle',
            projectLink: 'https://projet10-k9vym3syn-hyrriuks-projects.vercel.app',
            projectDescription:
                "En tant que développeur, ma mission principale consistait à détecter et résoudre une variété de bugs et d'erreurs, tout en exécutant des tests unitaires rigoureux pour garantir la stabilité et l'efficacité du système.",
            projectTech: ['Javascript'],
            projectExternalLinks: {
                github: 'https://github.com/Hyrriuk/Projet10OC',
                externalLink: 'https://projet10-k9vym3syn-hyrriuks-projects.vercel.app',
            },
            isNew: false,
            frontendmentor: false,
        },
    ];

    return (
        <div className="projects" id="work">
            <motion.div
                className="title"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
                transition={{duration: 0.6}}
                variants={{
                    visible: {opacity: 1, y: -50},
                    hidden: {opacity: 0, y: 0},
                }}>
                <h2>Mes Projets</h2>
            </motion.div>
            <div className="projects-container">
                {projectsData.map(
                    ({
                        image,
                        projectDescription,
                        projectLink,
                        projectExternalLinks,
                        projectName,
                        projectTech,
                        isNew,
                        frontendmentor,
                    }) => {
                        return (
                            <motion.div
                                className="project"
                                key={projectName}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: true}}
                                transition={{duration: 0.6}}
                                variants={{
                                    visible: {opacity: 1, y: -50},
                                    hidden: {opacity: 0, y: 0},
                                }}>
                                <div className="project-box">
                                    <div className="project-content">
                                        <div className="project-content-text">
                                            <h3 className="project-title">{projectName}</h3>
                                            <div className="project-description">
                                                <p>{projectDescription}</p>
                                            </div>
                                            <div className="project-links">
                                                <a
                                                    href={projectExternalLinks.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer">
                                                    <FiGithub />
                                                </a>
                                                <a
                                                    href={projectExternalLinks.externalLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer">
                                                    <FiExternalLink />
                                                </a>
                                            </div>
                                        </div>
                                        <ul className="project-tech">
                                            {projectTech.map((tech, index) => {
                                                return <li key={index}>{tech}</li>;
                                            })}
                                        </ul>
                                    </div>
                                    <div className="img-container">
                                        {isNew || frontendmentor ? (
                                            <div className="img-container-box">
                                                {isNew ? <span className="img-container-new">Nouveau</span> : null}
                                                {frontendmentor ? (
                                                    <span className="img-container-mentor">Front End Mentor</span>
                                                ) : null}
                                            </div>
                                        ) : null}
                                        <a
                                            className="link-img"
                                            href={projectLink}
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <div className="overlay">
                                                <span className="overlay-icon">
                                                    <FiExternalLink />
                                                </span>
                                            </div>
                                            <img src={image} alt={projectName} style={{objectFit: 'cover'}} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    }
                )}
            </div>
        </div>
    );
};

export default Projects;
