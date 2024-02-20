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
                                {component: <FaReact />, color: '#61DBFB'},
                                {component: <SiJavascript />, color: '#F0DB4F'},
                                {component: <TbBrandVite />, color: '#8a3ffc'},
                                {component: <SiRedux />, color: '#764ABC'},
                            ]}
                        />
                        <TechnologiesBox
                            title="Design"
                            paragraph="Toutes les applications que j'ai utilisées lors de mes études."
                            icons={[
                                {component: <SiAdobephotoshop />, color: '#4FCCFE'},
                                {component: <SiFigma />, color: '#000000'},
                            ]}
                        />
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default TechnologieSection;
