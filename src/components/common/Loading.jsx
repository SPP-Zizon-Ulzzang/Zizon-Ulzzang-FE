import React, {useEffect, useState} from 'react';

import styled from 'styled-components';

const Loading = () => {
    const [loadingText, setLoadingText] = useState('F');

    useEffect(() => {
    const text = 'inding MBTI...';
    let index = 0;

    const typeText = () => {
        setLoadingText(prevText => {
        const nextCharacter = text[index];
        index++;
        if (index === text.length) {
            setLoadingText("F")
            index = 0;
        }
        return prevText + nextCharacter;
        });

        setTimeout(typeText, 200);
    };

    typeText();
    }, []);

    
    return (
        <StLoadingWrapper>
            <img src="./assets/loading.gif" alt="loading" />
            <p>{loadingText}</p>
        </StLoadingWrapper>
    );
};

export default Loading;

const StLoadingWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
    
    width: 100%;
    height: 100vh;
    
    background: url("./assets/BG.png") center;
    background-size: cover;
    background-repeat: repeat-y;

    & > img {
        width: 20rem;
        
        margin-top: -11rem;
    }
    & > p {
        margin-top: -8rem;
        
        font-family: 'NeoDunggeunmo';
        font-size: 2rem;
        letter-spacing: 0.4rem;
    }
`;
