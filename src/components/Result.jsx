import React from 'react';
import styled from 'styled-components';

const Result = () => {
    return (
        <StResultWrapper>
            <img src="BG_result2.png" alt="결과 배경" />
        </StResultWrapper>
    );
};

export default Result;

const StResultWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
    
    width: 100%;
    height: 100vh;
    
    background: url("./BG.png") center;
    background-size: cover;
    background-repeat: repeat-y;

    & > img {
        width: 45%;

        object-fit: contain;
    }
`;