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
                    <p>어쩌고저쩌고 설명 적을꺼임 어쩌고저쩌고 설명 적을꺼임 어쩌고저쩌고 설명 적을꺼임 어쩌고저쩌고 설명 적을꺼임 어쩌고저쩌고 설명 적을꺼임 어쩌고저쩌고 설명 적을꺼임 어쩌고저쩌고 설명 적을꺼임 어쩌고저쩌고 설명 적을꺼임 어쩌고저쩌고 설명 적을꺼임 어쩌고저쩌고 설명 적을꺼임 어쩌고저쩌고 설명 적을꺼임 어쩌고저쩌고 설명 적을꺼임 어쩌고저쩌고 설명 적을꺼임 어쩌고저쩌고 설명 적을꺼임 어쩌고저쩌고 설명 적을꺼임 어쩌고저쩌고 설명 적을꺼임어쩌고저쩌고 설명 적을꺼임 어쩌고저쩌고 설명 적을꺼임 어쩌고저쩌고 설명 적을꺼임어쩌고저쩌고 설명 적을꺼임 어쩌고저쩌고 설명 적을꺼임 어쩌고저쩌고 설명 적을꺼임</p>
                </StMbtiResult>

                <StMbtiContents>
                    <StDescription>
                        <h2>Description</h2>    
                        <p>{mbtiInfo.DESCRIPTION}</p>
                    </StDescription>
                    <StBtnWrapper>
                        <Button btnName="Do It Again" onClick={() => {navigate('/')}}/>
                        <Button btnName="Copy Link" onClick={() => {navigate('/')}}/>
                    </StBtnWrapper>
                    <StCelebrity>
                        <h2>Celebrity</h2>    
                        <StCelebImgWrapper>
                            <figure>
                                <img src={mbtiInfo.IMG_CELEB} alt={mbtiInfo.CELEB} />
                                <figcaption>{mbtiInfo.CELEB}</figcaption>
                            </figure>
                            <figure>
                            <img src={mbtiInfo.IMG_CELEB_KOR} alt={mbtiInfo.CELEB_KOR} />
                                <figcaption>{mbtiInfo.CELEB_KOR}</figcaption>
                            </figure>
                        </StCelebImgWrapper>
                        <p>이런 연예인이랑 같은 mbti입니당 이런 연예인이랑 같은 mbti입니당 이런 연예인이랑 같은 mbti입니당 이런 연예인이랑 같은 mbti입니당 이런 연예인이랑 같은 mbti입니당 이런 연예인이랑 같은 mbti입니당 이런 연예인이랑 같은 mbti입니당</p>
                    </StCelebrity>
                    <StChemistry>
                        <h2>Chemistry</h2>    
                        <p>mbti 궁합</p>
                    </StChemistry>
                </StMbtiContents>

            </StResult>
        </StResultWrapper >
        :
        <Error />
    );
};

export default Result;

const StResultWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
    
    width: 100%;
    height: 170vh;
    padding-top: 10rem;
    
    background: url("./BG.png") center;
    background-size: contain;
    background-repeat: repeat-y;
    font-size: 10rem;
`;

const StResult = styled.div`
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
    width: 73rem;
    margin: 14rem 0 0 8rem;
    
    font-family: 'NeoDunggeunmo';

    & > h1 {
        margin-bottom: 1rem;
        
        color : ${props => props.mbtiColor};
        font-size: 12rem;
        font-weight: 800;

        text-shadow: -0.3rem 0 black, 0 0.3rem black, 0.3rem 0 black, 0 -0.3rem black;
    }
    & > p {  
        overflow-y : hidden;
        height: 10rem;
        
        font-size: 1.8rem;
    }
`;

const StMbtiContents = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    
    width: 100%;
    height: 90rem;
`;

const StDescription = styled.article`
    width: 42rem;
    margin: 9.5rem 0 0 11rem;
    
    font-family: 'NeoDunggeunmo';

    & > h2 {
        margin-bottom: 1.5rem;

        font-size: 3.5rem;
        font-weight: 800;
    }
    & > p {
        overflow-y: scroll;
        
        height: 44rem;
        
        font-size: 2rem;
        font-weight: 300;
        line-height: 2.6rem;
    }
`;

const StBtnWrapper = styled.section`
    display: flex;
    gap : 2rem;
    
    margin: 13rem 0 0 10rem;
`

const StCelebrity = styled.article`
    width: 30rem;
    height: 35rem;
    margin-top: 7rem;

    background-color: yellow;
    font-family: 'NeoDunggeunmo';

    & > h2 {
        margin-bottom: 1rem;

        font-size: 3.5rem;
        font-weight: 800;
    }
    & > p {
        overflow-y: hidden;
        
        height: 15rem;
        
        font-size: 1.8rem;
        font-weight: 300;
        line-height: 2.6rem;
    }
`;

const StCelebImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;

    margin-bottom: 1rem;

    & > figure > img {
        width: 12rem;
        height: 12rem;

        object-fit: cover;
    }
     & > figure > figcaption {
        margin-top: 0.4rem;
        text-align: center;

        font-size: 1.6rem;
    }
`;

const StChemistry = styled.article`
    width: 30rem;
    height: 32rem;
    margin: 10rem 0 0 1rem;

    background-color: lightblue;
    font-family: 'NeoDunggeunmo';

    & > h2 {
        margin-bottom: 1rem;

        font-size: 3.5rem;
        font-weight: 800;
    }
    & > p {
        overflow-y: hidden;
        
        font-size: 1.8rem;
        font-weight: 300;
        line-height: 2.6rem;
    }
`;