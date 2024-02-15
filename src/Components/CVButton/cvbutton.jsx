import React from 'react';
import {FaAngleRight} from 'react-icons/fa';
import {motion} from 'framer-motion';
import './cvbutton.css';
import CV from '../../../assets/CV/CV_EDDIE_GHALEM.PDF';

const CVButton = () => {
    return (
        <motion.a whileHover={{scale: 1.05}} whileTap={{scale: 0.9}} className="CV__button" download href={CV}>
            <span>Voir mon CV</span>
            <FaAngleRight />
        </motion.a>
    );
};

export default CVButton;
