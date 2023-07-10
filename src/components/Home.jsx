import React, { useState } from 'react';

import styled from 'styled-components';

const Home = () => {
    const [userName, setUserName] = useState("");

    const handleSubmit = () => {
        console.log(userName)
    }

    const handleNameChange = (e) => {
        setUserName(e.target.value)
        localStorage.setItem('userName', userName);
    }

    return (
        <StHomeWrapper >
            <h1>I listen to songs when I'm sad..♬ </h1>
            <p>[SPP 2023] Team Zizon-Ulzzang</p>
            <StNameInput>
                <label for="userName">name :
                    <input
                        type="text"
                        name="userName"
                        value={userName}
                        onChange={handleNameChange}
                        placeholder='Enter your name.'></input>
                </label>
                <button type="button" onClick={handleSubmit}> Today is...</button>
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

    background: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("./BGminiroom.gif");
    background-size: cover;
    background-repeat: no-repeat;

    & > h1 {
        color: white;
        font-family: 'NeoDunggeunmo';
        font-size: 4rem;    
        font-weight: 700;
    }

    & > p {
        padding-top: 2rem;
        
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

    & > label > input {
        margin-left: 1rem;
        width: 20rem;
        height: 3rem;

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
        font-size: 2rem;    
        font-weight: 100;
    }

    & > button {
        width: 17rem;
        margin-top: 4.5rem;

        border: 0.3rem solid white;
        color: white;
        background-color: rgba(255,255,255, 0.164);
        font-family: 'NeoDunggeunmo';
        font-size: 1.8rem;
        font-weight: 500;
        line-height: 3.5rem;
    }
`;