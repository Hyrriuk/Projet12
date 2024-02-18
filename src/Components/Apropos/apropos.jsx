import React from 'react';
import {motion} from 'framer-motion';
import photo from '../../../public/moistyléuntoutpetitpeu.jpg';
import CVButton from '../CVButton/cvbutton';
import './apropos.scss';

const Apropos = () => {
    return (
        <section id="abouts" className="about">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
                transition={{duration: 0.6}}
                variants={{
                    visible: {opacity: 1, y: -50},
                    hidden: {opacity: 0, y: 0},
                }}>
                <h3 className="about-title">A Propos de moi</h3>
            </motion.div>

            <motion.div
                className="about-box"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
                transition={{duration: 0.6}}
                variants={{
                    visible: {opacity: 1, y: -50},
                    hidden: {opacity: 0, y: 0},
                }}>
                <div className="about-image">
                    <img src={photo} alt="Photo d'Eddie portant des lunettes en soirée" className="image" />
                </div>
                <aside className="about-aside">
                    <div className="about-me">
                        <h4>Mon histoire</h4>
                        <div className="about-me-paragraph">
                            <p>
                                Les jeux vidéo ont toujours été mon terrain de jeu préféré, ouvrant la porte à un monde
                                fascinant de technologie et d'innovation. En 2013, avec un enthousiasme débordant, je me
                                suis lancé dans un DUT informatique. Malheureusement, la vie, avec ses hauts et ses bas,
                                a rendu ce parcours plus compliqué que prévu, et j'ai dû faire une pause dans mes
                                études. Ce n'était pas la fin, mais juste une pause pour reprendre mon souffle.
                            </p>
                            <p className="paragraph_notessential">
                                Quelques années plus tard, avec un peu plus de sagesse et beaucoup de motivation, j'ai
                                décidé de reprendre le chemin qui me passionnait vraiment : le développement web. Armé
                                de tutoriels, de forums et du soutien inestimable d'amis partageant les mêmes idées,
                                j'ai plongé tête première dans l'apprentissage en autodidacte. C'est dans cette
                                communauté d'entraide et d'innovation que j'ai vraiment commencé à me sentir chez moi.
                            </p>

                            <p>
                                En 2023, j'ai franchi un nouveau cap en m'inscrivant à la formation OpenClassroom, une
                                étape de plus vers mon objectif de devenir développeur web. Bien que je n'aie pas encore
                                obtenu mon diplôme, je sens que je suis sur la bonne voie. Je suis impatient de voir où
                                cette aventure me mènera, convaincu que le meilleur reste à venir. Mon histoire avec
                                l'informatique est un voyage continu d'apprentissage et de croissance, ponctué à chaque
                                étape par la satisfaction de surmonter de nouveaux défis.
                            </p>
                        </div>
                    </div>
                    <CVButton />
                </aside>
            </motion.div>
        </section>
    );
};

export default Apropos;
