import Button from '../common/Button';
import CopyToClipboard from 'react-copy-to-clipboard';
import { MBTI_RESULT } from '../../constants/mbti';
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Result = () => {
    const params = new URLSearchParams(location.search);
    const mbti = params.get('mbti');
    const mbtiInfo = MBTI_RESULT.find(item => item.MBTI === mbti);
    
    const navigate = useNavigate();

    return (
        <StResultWrapper>
            <StResult>
                <StMbtiResult>
                        <h1><span>MBTI</span>gram</h1>
                        <p>Let's predict MBTI with Instagram!</p> 
                        <img src='./assets/mbtiicons.png' alt='mbtiicons' />
                </StMbtiResult>
                <StMbtiContents>
                    <StDescription mbtiColor={mbtiInfo.COLOR}>
                        <h2>{mbti}</h2>    
                        <p>{mbtiInfo.DESCRIPTION}</p>
                    </StDescription>
                    <StBtnWrapper>
                        <Button btnName="Do It Again" onClick={() => {navigate('/')}}/>
                        <CopyToClipboard
                        text={window.location.href}
                        onCopy={() => alert('Link copied to clipboard')}
                        >
                            <Button btnName="Copy Link" />
                        </CopyToClipboard>
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
                            <strong>{mbtiInfo.TYPE}</strong>
                            <p>{mbtiInfo.KEYWORDS}</p>
                    </StCelebrity>
                    <StChemistry>
                        <h2>Chemistry</h2>    
                        <img src={mbtiInfo.CHEMISTRY} alt={mbtiInfo.MBTI} />
                    </StChemistry>
                </StMbtiContents>

            </StResult>
        </StResultWrapper >
    );
};

export default Result;

const StResultWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    
    width: 100vw;
    padding: 10rem 0;
    
    background: url("./assets/BG.png") center;
    background-size: contain;
    background-repeat: repeat-y;
    font-size: 10rem;
`;

const StResult = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 90rem;

    background: url("./assets/BG_result.png");
    background-size: contain;
    background-repeat: no-repeat;
`;

const StMbtiResult = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    width: 95%;
    height: 38rem;
    margin-right: 20rem;

    /* background-color: yellow;
    opacity: 0.8; */
    
    font-family: 'NeoDunggeunmo';

    & > h1 {
        padding-top: 13rem;
        margin-bottom: 1.5rem;
        
        color : #99D8FF;
        font-size: 12rem;
        font-weight: 800;

        text-align: center;
        text-shadow: -0.3rem 0 black, 0 0.3rem black, 0.3rem 0 black, 0 -0.3rem black;
        letter-spacing : 2rem;

        & > span {
            color : #FDBECF;
            font-size: 12rem;
        }
    }
    & > p {  
        margin-bottom: 1rem;
        
        font-size: 2.5rem;
        text-align: center;
    }
    & > img {
        margin-left: -3rem;
        width: 75%;
    }
`;

const StMbtiContents = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    
    width: 100%;
    height: 78rem;

    /* background-color: pink;
    opacity: 0.8; */
`;

const StDescription = styled.article`
    width: 49rem;
    height: 54rem;
    padding-right: 4rem;
    
    font-family: 'NeoDunggeunmo';

    /* background-color: blue;
    opacity: 0.8; */

    & > h2 {
        margin-bottom: 0.5rem;
        padding: 4rem 0 0 9rem;

        color : ${props => props.mbtiColor};
        font-size: 9rem;
        font-weight: 800;
        text-shadow: -0.3rem 0 black, 0 0.3rem black, 0.3rem 0 black, 0 -0.3rem black;

    }
    & > p {
        overflow-y: scroll;
        
        height: 37rem;
        padding: 0rem 2rem 0rem 9rem;
        
        font-size: 2rem;
        font-weight: 300;
        line-height: 2.6rem;
    }
`;

const StBtnWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap : 2rem;
    
    height: 22rem;
    padding-bottom: 2rem;
    
    /* background-color: orange;
    opacity: 0.8; */
`

const StCelebrity = styled.article`
    width: 30rem;
    height: 38rem;
    padding-right: 7rem;

    font-family: 'NeoDunggeunmo';

    /* background-color: green;
    opacity: 0.8; */

    & > h2 {
        padding: 2rem 0 0 2rem;
        margin-bottom: 1rem;

        font-size: 3.5rem;
        font-weight: 800;
    }
    & > strong {
        padding-left: 1.5rem;

        font-size: 2.2rem;
        font-weight: 600;
    }
    & > p {
        overflow-y: scroll;
        
        height: 8rem;
        margin-top: 0.5rem;
        padding: 0 0.5rem 0 2rem;
        
        font-size: 1.8rem;
        font-weight: 300;
        line-height: 2rem;
    }
`;

const StCelebImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;

    width: 31rem;
    margin-bottom: 1.5rem;

    & > figure > img {
        width: 13rem;
        height: 13rem;

        object-fit: cover;
    }
    & > figure > figcaption {
        margin-top: 0.4rem;
        text-align: center;

        font-size: 1.6rem;
    }
`;

const StChemistry = styled.article`
    width: 34rem;
    height: 40rem;
    padding-left: 3rem;

    font-family: 'NeoDunggeunmo';

    /* background-color: red;
    opacity: 0.8; */

    & > h2 {
        padding-top: 5rem;
        
        font-size: 3.5rem;
        font-weight: 800;
    }
    & > img {
        width: 75%;
    }
`;