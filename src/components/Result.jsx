import React, { useState } from 'react';

import { MBTI_RESULT } from '../constants/mbti';
import styled from 'styled-components';

const Result = () => {
    const [mbti, setMbti] = useState("ISTP");
    
    // TODO
    // 1. get MBTI result from server

    return (
        <StResultWrapper>
            <StResult>
                <h1>{mbti}</h1>
            </StResult>
        </StResultWrapper>
    );
};

export default Result;

const StResultWrapper = styled.section`
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


const StResult = styled.article`
    width: 60rem;
    height: 60rem;

    background: url("./BG_result2.png");
    background-size: cover;

    & > h1 {
        margin: 10rem 0 0 5rem;

        color: white;
        font-family: 'NeoDunggeunmo';
        font-size: 10rem;
        font-weight: 800;

        text-shadow: -0.3rem 0 black, 0 0.3rem black, 0.3rem 0 black, 0 -0.3rem black;
    }
`;