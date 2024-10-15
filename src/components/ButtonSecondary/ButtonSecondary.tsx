import React from 'react';

interface BtnProps {
    children: React.ReactNode; // Content inside the button
    className?: string; // Additional class names for styling
    onClick?: () => void; // Click event handler
    disabled?: boolean; // Optional prop to disable the button
}

const ButtonSecondary: React.FC<BtnProps> = ({ children, className = '', onClick, disabled = false }) => {
    return (
        <button 
            className={`${className}`} 
            onClick={onClick} 
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default ButtonSecondary;