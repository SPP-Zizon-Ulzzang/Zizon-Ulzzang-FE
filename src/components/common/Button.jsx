import React from 'react';
import styled from 'styled-components';

const Button = ({btnName, onClick}) => {
    return (
        <StBtn type="button" onClick={onClick}>
            {btnName}
        </StBtn>
    );
};

export default Button;


const StBtn = styled.button`
    width: 18rem;
    height: 8rem;
    
    border: 0.3rem solid #0A6EBD;
    border-radius: 2rem;
    color: #0A6EBD;
    background: #AEE2FF;
    font-family: 'NeoDunggeunmo';
    font-size: 2.4rem;
    
    transform-style: preserve-3d;
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1);

    &::before {
        content: '';

        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        background: #5A96E3;
        border-radius: inherit;
        box-shadow: 0 0 0 0.2rem #0A6EBD;

        transform: translate3d(0, 0.75rem, -1rem);
        transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
        box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
    } 
    &:hover {
        background: #5A96E3;
        color: white;
        
        transform: translate(0, 0.25em);

        &::before {
            box-shadow: 0 0 0 0.2rem #0A6EBD,
                0 0.5rem 0 0 #0A6EBD;
            transform: translate3d(0, 0.5rem, -1rem);
        }
    }
    &:active {
        background: #AEE2FF;
        transform: translate(0rem, 0.75rem);

        &::before {
            box-shadow: 0 0 0 0.2rem #0A6EBD,
                0 0 #0A6EBD;
            transform: translate3d(0, 0, -1em);
        }
    }
`;