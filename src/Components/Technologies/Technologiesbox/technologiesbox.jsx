import React from 'react';
import {motion} from 'framer-motion';
import './technologiesbox.scss';

const TechnologiesBox = ({title, paragraph, icons = []}) => {
    return (
        <motion.div className="techno-components" whileHover={{scale: 1.02}}>
            <div className="techno-components__content">
                <h2 className="techno-components__title">{title}</h2>
                <p className="techno-components__paragraph">{paragraph}</p>
            </div>
            <div className="techno-components__icons">
                {icons.map((icon, index) => (
                    <div key={index} className="icon-techno-components" style={{color: icon.color}}>
                        {React.cloneElement(icon.component, {
                            className: 'icon-techno-components__icon',
                            title: icon.title,
                        })}
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default TechnologiesBox;
