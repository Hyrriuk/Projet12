import React, {useEffect, useState} from 'react';
import './animationfallinghero.scss';

const AnimationFallingHero = ({text, delay = 0.15, startDelay = 0, nameclass}) => {
    const [animationClass, setAnimationClass] = useState('');

    useEffect(() => {
        setAnimationClass('animate');
    }, []);

    const words = text ? text.split(' ') : [];

    return (
        <div className="animation">
            {words.map((word, i) => (
                <span
                    key={i}
                    className={`animation__word ${animationClass} ${nameclass}`}
                    style={{
                        animationDelay: `${startDelay + i * delay}s`,
                        WebkitAnimationDelay: `${startDelay + i * delay}s`,
                    }}>
                    {word}
                </span>
            ))}
        </div>
    );
};

export default AnimationFallingHero;
