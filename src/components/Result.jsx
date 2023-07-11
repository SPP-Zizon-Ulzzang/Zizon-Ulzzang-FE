import React from 'react';
import styled from 'styled-components';

const Result = () => {
    return (
        <StResultWrapper>
            <img src="BG_result.png" alt="결과 배경" />
        </StResultWrapper>
    );
};

export default Result;

const StResultWrapper = styled.div`
    display: flex;
    justify-content: center;
    overflow-y: scroll;
    
    width: 100%;
    height: fit-content;
    padding: 10rem 0;
    
    background: url("./BG.png") center;
    background-size: contain;
    background-repeat: repeat-y;

    & > img {
        width: 60%;
        object-fit: contain;
    }
`;