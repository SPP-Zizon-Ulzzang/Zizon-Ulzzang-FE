import React, { useState } from 'react';

import styled from 'styled-components';

const Home = () => {
    const [url, setUrl] = useState("");

    const handleSubmit = () => {
        console.log(url)
    }

    const handleNameChange = (e) => {
        setUrl(e.target.value)
        localStorage.setItem('url', url);
    }

    return (
        <StHomeWrapper >
            <h1>MBTIgram</h1>
            <p>[SPP 2023] Team Zizon-Ulzzang</p>
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
        </StHomeWrapper>
    );
};

export default Home;

const StHomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: 100vh;

    background: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.75)), url("./BG.png") center;
    background-size: cover;
    background-repeat: no-repeat;

    & > h1 {
        color: white;
        font-family: 'NeoDunggeunmo';
        font-size: 8rem;    
        font-weight: 700;
    }

    & > p {
        padding-top: 3rem;
        
        color: white;
        font-family: 'NeoDunggeunmo';
        font-size: 1.8rem;    
        font-weight: 300;
    }
`

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