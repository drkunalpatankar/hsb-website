import React from 'react';
import './Card.css';

const Card = ({
    children,
    className = '',
    hoverEffect = false,
    glass = false,
    glow = false,
    ...props
}) => {
    const cardClasses = [
        'card',
        hoverEffect ? 'card--hover' : '',
        glass ? 'card--glass' : '',
        glow ? 'card--glow' : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <div className={cardClasses} {...props}>
            {children}
        </div>
    );
};

export default Card;
