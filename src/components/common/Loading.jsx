import React from 'react';
import styled from 'styled-components';

const Loading = () => {
    return (
        <StLoadingWrapper>
            <img src="./loading.gif" alt="loading" />
            <p>Loading...</p>
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
    
    background: url("./BG.png") center;
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
