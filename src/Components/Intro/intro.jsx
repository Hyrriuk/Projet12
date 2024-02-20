import React from 'react';
import AnimationFallingHero from '../../Animations/animationfallinghero.jsx';
import CVButton from '../CVButton/cvbutton.jsx';
import './intro.css';
import photo from '../../../public/moikisouri.jpg';

const SectionHero = () => {
    return (
        <div className="hero--container">
            <section className="hero__section__aside">
                <div className="hero">
                    <AnimationFallingHero text="Salut, moi c'est" />
                    <AnimationFallingHero startDelay={0.5} nameclass="hero_title-color" text="Eddie-Tayeb Ghalem" />
                    <AnimationFallingHero startDelay={0.7} text="Developpeur Front-end" />
                    <p className="hero__text">
                        Aventurier du web en quête de connaissances et de compétences, en route vers l'apprentissage des
                        technologies de demain.
                    </p>
                    <CVButton />
                </div>
                <aside className="aside">
                    <div className="blob">
                        <img src={photo} alt="Photo de Eddie-Tayeb Ghalem" className="image" />
                    </div>
                </aside>
            </section>
            <div className="hero--icons--arrow"></div>
        </div>
    );
};

export default SectionHero;
