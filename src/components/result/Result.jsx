import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Button from '../common/Button';
import Error from '../common/Error';
import Loading from '../common/Loading';
import { MBTI_RESULT } from '../../constants/mbti';
import { getMBTI } from '../../lib/api';
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
            <StResult>
                <StMbtiResult mbtiColor={mbtiInfo.COLOR}>
                    <h1>{mbti}</h1>
                    <p>어쩌고저쩌고 설명 적을꺼임</p>
                    <p>어쩌고저쩌고 설명 적을꺼임</p>
                    <p>어쩌고저쩌고 설명 적을꺼임</p>
                    <p>어쩌고저쩌고 설명 적을꺼임</p>
                </StMbtiResult>    
                <StDescription>
                    <h2>Description</h2>    
                    <p>{mbtiInfo.DESCRIPTION}</p>
                </StDescription>
                {/* <StCelebrity>
                    <h2>Celebrity</h2>    
                    <p>{mbtiInfo.DESCRIPTION}</p>
                </StCelebrity> */}
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

const StResult = styled.section`
    display: flex;
    flex-direction: column;
    
    width: 100rem;
    height: 160rem;
    margin: 10rem 0;

    background: url("./BG_result.png") center;
    background-size: contain;
    background-repeat: no-repeat;
`;

const StMbtiResult = styled.header`
    font-family: 'NeoDunggeunmo';

    & > h1 {
        margin: 14rem 0 0 10rem;
        
        color : ${props => props.mbtiColor};
        font-size: 12rem;
        font-weight: 800;

        text-shadow: -0.3rem 0 black, 0 0.3rem black, 0.3rem 0 black, 0 -0.3rem black;
    }
    & > p {
        font-size: 2rem;
    }
`;

const StDescription = styled.article`
    width: 40rem;
    margin: 9rem 0 0 13rem;
    
    font-family: 'NeoDunggeunmo';

    & > h2 {
        margin-bottom: 1rem;

        font-size: 3.5rem;
        font-weight: 800;
    }
    & > p {
        overflow-y: scroll;
        
        height: 42rem;
        
        font-size: 2rem;
        font-weight: 300;
        line-height: 2.6rem;
    }
`;

const StCelebrity = styled.article`
  width: 35rem;
`;
const StBtnWrapper = styled.section`
    display: flex;
    gap : 2rem;
    
    margin: 12rem 0 0 11rem;
`