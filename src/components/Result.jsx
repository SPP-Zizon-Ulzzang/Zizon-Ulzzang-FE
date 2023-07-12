import React, { useState } from 'react';

import { MBTI_RESULT } from '../constants/mbti';
import styled from 'styled-components';

const Result = () => {
    const [mbti, setMbti] = useState("ENFP");
    const mbtiInfo = MBTI_RESULT.find(item => item.MBTI === mbti);
    
    // TODO
    // 1. get MBTI result from server

    return (
        <StResultWrapper>
            <StResult mbtiColor={mbtiInfo.COLOR}>
                <h1>{mbti}</h1>
                <StDescription>
                    <p>{mbtiInfo.DESCRIPTION}</p>
                </StDescription>
            </StResult>
        </StResultWrapper>
    );
};

export default Result;

const StResultWrapper = styled.section`
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
        width: 60rem;

        object-fit: contain;
    }
`;


const StResult = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    width: 60rem;
    height: 60rem;

    background: url("./BG_result2.png");
    background-size: cover;

    & > h1 {
        margin: 10rem 0 0 -30rem;
        
        color : ${props => props.mbtiColor};
        font-family: 'NeoDunggeunmo';
        font-size: 10rem;
        font-weight: 800;

        text-shadow: -0.3rem 0 black, 0 0.3rem black, 0.3rem 0 black, 0 -0.3rem black;
    }
`;

const StDescription = styled.section`
    overflow-y: scroll;

    width: 50rem;
    height: 25rem;
    
    margin-top: 5rem;

    & > p {
        padding: 0 2rem;
        
        font-family: 'NeoDunggeunmo';
        font-size: 1.6rem;
        font-weight: 300;
        line-height: 2rem;
    }
`;