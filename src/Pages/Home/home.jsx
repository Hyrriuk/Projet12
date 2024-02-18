import React from 'react';
import './home.css';
import Intro from '../../Components/Intro/intro';
import Projects from '../../Components/Projects/projects';
import Technologiesection from '../../Components/Technologies/Technologiesection/technologiesection';
import Apropos from '../../Components/APropos/APropos.jsx';

const Home = () => {
    return (
        <div className="home">
            <Intro />
            <Projects />
            <Technologiesection />
            <Apropos />
        </div>
    );
};

export default Home;
