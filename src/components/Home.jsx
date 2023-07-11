import React, { useState } from 'react';

import styled from 'styled-components';

const Home = () => {
    const [url, setUrl] = useState("");
    const [expanded, setExpanded] = useState(false);

    const handleSubmit = () => {
        console.log(url)
    }
    const handleNameChange = (e) => {
        setUrl(e.target.value)
        localStorage.setItem('url', url);
    }
    const handleNameClick = () => {
        setExpanded(!expanded);
    };


    return (
        <StHomeWrapper >
            <h1><span>MBTI</span>gram</h1>
            <StNameInput>
                <input
                    type="text"
                    name="url"
                    value={url}
                    onChange={handleNameChange}
                    placeholder='Please Enter a URL Link. ⏎'>
                </input>
                <button type="button" onClick={handleSubmit}>Find MBTI</button>
            </StNameInput>
            <StDevelopers onClick={handleNameClick} expanded={expanded}>
                © [SPP 2023] Team Zizon-Ulzzang
                {expanded && (
                    <p>
                        <a href="https://github.com/Yugyeong-Ji" target="_blank"><span>YUGYEONG JI</span></a>
                        <a href="https://github.com/Yuminyumin" target="_blank"><span>YUMUN SHIN</span></a>
                        <a href="https://github.com/iamphj3" target="_blank"><span>HYEONJI PARK</span></a>
                        <a href="https://github.com/juns1s" target="_blank"><span>JUNSEO JUNG</span></a>
                    </p>
                )}
            </StDevelopers>
        </StHomeWrapper>
    );
};

export default Home;

const StHomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    
    width: 100%;
    height: 100vh;

    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url("./BG.png") center;
    background-size: cover;
    background-repeat: no-repeat;

    & > h1 {
        color: white;
        font-family: 'NeoDunggeunmo';
        font-size: 8rem;    
        font-weight: 700;

        & > span{
            color: #B8DCFF;

            font-size: 8rem;    
            font-weight: 700;
        }
    }
`

const StDevelopers = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: 12rem;

    color: white;
    font-family: 'NeoDunggeunmo';
    font-size: 1.8rem;
    font-weight: 300;

    cursor: pointer;

    & > p {
        padding-top: 2rem;
        
        & > a,
        & > a > span {
            font-size: 1.8rem;
            color: inherit;
            
            text-decoration: none;
        }
        & > a:hover {
            color: #B8DCFF;
        }
        & > a:active,
        & > a:visited {
            color: white;

            text-decoration: none;
        }
        & > a:not(:last-child)::after {
            content: " | ";
            color: white;
        }
    }
`;

const StNameInput = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    padding-top: 4rem;

    color: white;
    font-family: 'NeoDunggeunmo';
    font-size: 3.6rem;    
    font-weight: 500;

    & > input {
        margin-left: 1rem;
        padding: 0 2rem;
        width: 50rem;
        height: 4.5rem;

        border: 0.1rem solid white;
        border-radius: 1rem;
        background: transparent;

        color: white;
        font-family: 'NeoDunggeunmo';
        font-size: 2rem;    
        font-weight: 100;
        
        text-align: center;

    }    
    ::placeholder {
        color: white;
        font-family: 'NeoDunggeunmo';
        font-size: 1.8rem;    
        font-weight: 100;
    }

    & > button {
        width: 17rem;
        margin-top: 4.5rem;

        border: 0.3rem solid white;
        color: white;
        background-color: rgba(255,255,255, 0.164);
        font-family: 'NeoDunggeunmo';
        font-size: 2rem;
        font-weight: 500;
        line-height: 3.5rem;
    }
`;