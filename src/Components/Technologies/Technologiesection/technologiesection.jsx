import React from 'react';
import {FaReact} from 'react-icons/fa';
import {SiJavascript, SiAdobephotoshop, SiFigma, SiRedux} from 'react-icons/si';
import {TbBrandVite} from 'react-icons/tb';
import TechnologiesBox from '../Technologiesbox/technologiesbox.jsx';
import './technologiesection.scss';
import {motion} from 'framer-motion';

const TechnologieSection = () => {
    return (
        <>
            <div id="technos" className="mes-techno">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                    transition={{duration: 0.6}}
                    variants={{
                        visible: {opacity: 1, y: -50},
                        hidden: {opacity: 0, y: 0},
                    }}>
                    <h1 className="mes-techno__title">Mes technologies</h1>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                    transition={{duration: 0.9}}
                    variants={{
                        visible: {opacity: 1, y: -50},
                        hidden: {opacity: 0, y: 0},
                    }}>
                    <div className="mes-techno__content">
                        <TechnologiesBox
                            title="Front-end"
                            paragraph="Technologies que j'ai apprises au cours de ma formation et en autodidacte."
                            icons={[
                                {component: <FaReact />, color: '#61DBFB', title: 'React'},
                                {component: <SiJavascript />, color: '#F0DB4F', title: 'JavaScript'},
                                {component: <TbBrandVite />, color: '#8a3ffc', title: 'ViteJS'},
                                {component: <SiRedux />, color: '#764ABC', title: 'Redux'},
                            ]}
                        />
                        <TechnologiesBox
                            title="Design"
                            paragraph="Toutes les applications que j'ai utilisées lors de mes études."
                            icons={[
                                {component: <SiAdobephotoshop />, color: '#4FCCFE', title: 'Photoshop'},
                                {component: <SiFigma />, color: '#000000', title: 'Figma'},
                            ]}
                        />
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default TechnologieSection;
