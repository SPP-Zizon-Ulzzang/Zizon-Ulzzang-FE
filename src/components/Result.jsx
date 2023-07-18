import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Button from './Button';
import Error from './Error';
import Loading from './Loading';
import { MBTI_RESULT } from '../constants/mbti';
import { getMBTI } from '../lib/api';
import styled from 'styled-components';

const Result = () => {
    const [mbti, setMbti] = useState("ISFP");
    const mbtiInfo = MBTI_RESULT.find(item => item.MBTI === mbti);
    // const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    const location = useLocation();
    const { url } = location.state;

    // useEffect(() => {
    //     getMBTIData(url);
    // }, [url]);

    const getMBTIData = async (url) => {
        setLoading(true);
        try {
            const resMbti = await getMBTI(url);
            setMbti(resMbti?.mbti);
        } catch (error) {
            console.log('Error fetching MBTI data:', error);
        } finally {
            setLoading(false);
        }
    }

    // if (loading) {
    //     return <Loading />;
    // }

    return (
        mbtiInfo ? 
        <StResultWrapper>
            <StResult mbtiColor={mbtiInfo.COLOR}>
                <h1>{mbti}</h1>
                <StDescription>
                    <p>{mbtiInfo.DESCRIPTION}</p>
                </StDescription>
                {/* <StRestartBtn type="button" onClick={() => {navigate('/')}}>
                    Do It Again
                </StRestartBtn> */}
                <StBtnWrapper>
                    <Button btnName="Do It Again" onClick={() => {navigate('/')}}/>
                    <Button btnName="Copy Link" onClick={() => {navigate('/')}}/>
                </StBtnWrapper>
            </StResult>
        </StResultWrapper >
        :
        <Error />
    );
};

    /* margin: 12rem 0 0 11rem; */
    /* padding: 1rem 2rem; */
export default Result;

const StResultWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
    
    width: 100%;
    height: 170vh;
    
    background: url("./BG.png") center;
    background-size: contain;
    background-repeat: repeat-y;
    font-size: 10rem;
`;


const StResult = styled.article`
    display: flex;
    flex-direction: column;
    
    width: 100rem;
    height: 160rem;
    margin: 10rem 0;

    background: url("./BG_result.png") center;
    background-size: contain;
    background-repeat: no-repeat;

    & > h1 {
        margin: 14rem 0 0 10rem;
        
        color : ${props => props.mbtiColor};
        font-family: 'NeoDunggeunmo';
        font-size: 12rem;
        font-weight: 800;

        text-shadow: -0.3rem 0 black, 0 0.3rem black, 0.3rem 0 black, 0 -0.3rem black;
    }
`;

const StDescription = styled.section`
    overflow-y: scroll;

    width: 40rem;
    height: 46rem;
    margin: 17rem 0 0 13rem;

    & > p {
        font-family: 'NeoDunggeunmo';
        font-size: 2rem;
        font-weight: 300;
        line-height: 2.6rem;
    }
`;

const StBtnWrapper = styled.div`
    display: flex;
    gap : 2rem;
    
    margin: 12rem 0 0 11rem;
`