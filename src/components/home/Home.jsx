import React, { useState } from 'react';

import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [username, setUsername] = useState("");
    const [introduction, setIntroduction] = useState("");
    const [expanded, setExpanded] = useState(false);
    const [selectedInput, setSelectedInput] = useState('Instagram ID');

    const navigate = useNavigate();

    const handleRadioChange = (e) => {
        setSelectedInput(e.target.value);
    };
    const handleSubmit = () => {
        // if (username==="" || !introduction==="") {
        //     alert("Please enter a value.");
        //     return;
        // }
        selectedInput === "Instagram ID" ? 
            navigate('/result', { state: { username } }) :
            navigate('/result', { state: { introduction } })
    }
    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    const handleIntroductionChange = (e) => {
        setIntroduction(e.target.value)
    }
    const handleNameClick = () => {
        setExpanded(!expanded);
    };

    return (
        <StHomeWrapper >
            <h1><span>MBTI</span>gram</h1>
            
            <StRadioWrapper>
                <StRadio>
                    <input
                    type="radio"
                    id="Instagram ID"
                    name="inputType"
                    value="Instagram ID"
                    checked={selectedInput === 'Instagram ID'}
                    onChange={handleRadioChange}
                    />
                    <span></span>
                    Instagram ID
                </StRadio>
                <StRadio isUsername={selectedInput === 'Instagram ID'}>
                    <input
                    type="radio"
                    id="Self Introduction"
                    name="inputType"
                    value="Self Introduction"
                    checked={selectedInput === 'Self Introduction'}
                    onChange={handleRadioChange}
                    />
                    <span></span>
                    Self Introduction
                </StRadio>
            </StRadioWrapper>
            
            <StNameInput>
                {selectedInput === 'Instagram ID' ?
                    <input
                        type='text'
                        name="username"
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder={`Please Enter Instagram ID. ⏎`}
                    />
                    : 
                    <textarea
                        name="introduction"
                        value={introduction}
                        onChange={handleIntroductionChange}
                        placeholder={`Please Enter your Introduction. ⏎`}
                    />
                }
                <button type="button" onClick={handleSubmit}>Find MBTI</button>
            </StNameInput>
            <StDevelopers onClick={handleNameClick} expanded={expanded}>
                <p>© [SPP 2023] Team Zizon-Ulzzang</p>
                {expanded && (
                    <div>
                        <a href="https://github.com/Yugyeong-Ji" target="_blank"><span>YUGYEONG JI</span></a>
                        <a href="https://github.com/Yuminyumin" target="_blank"><span>YUMUN SHIN</span></a>
                        <a href="https://github.com/iamphj3" target="_blank"><span>HYEONJI PARK</span></a>
                        <a href="https://github.com/juns1s" target="_blank"><span>JUNSEO JUNG</span></a>
                    </div>
                )}
            </StDevelopers>
        </StHomeWrapper>
    );
};

export default Home;

const StHomeWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    
    width: 100%;
    height: 100vh;

    background: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.75)), url("./assets/BG_home.png") center;
    background-size: cover;
    background-repeat: no-repeat;

    & > h1 {
        margin-top: -5rem;
        margin-bottom: 2rem;
        
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
    bottom: 6rem;
    
    color: white;
    font-family: 'NeoDunggeunmo';
    font-size: 1.8rem;
    font-weight: 300;

    & > p {
        color: white;
        font-family: 'NeoDunggeunmo';
        font-size: 1.8rem;

        cursor: pointer;
    }
    & > p:hover {
        color: #FEC880;
    }
    & > div {
        padding-top: 2rem;

        & > a,
        & > a > span {
            font-size: 1.8rem;
            color: inherit;
            
            text-decoration: none;
        }
        & > a:hover {
            color: #FEC880;
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

const StRadioWrapper = styled.div`
    display: flex;
    gap: 1rem;
    
    padding: 2rem 0;
`;

const StRadio = styled.label`
    display: inline-flex;
    align-items: center;

    margin-right: 1rem;
    
    color: white;
    font-family: 'NeoDunggeunmo';
    font-size: 1.8rem;    
    font-weight: 700;
    
    cursor: pointer;

    input[type='radio'] {
        display: none;
    }
    
    span {
        display: inline-block;
        position: relative;

        width: 1.4rem;
        height: 1.4rem;
        border: 0.25rem solid white;
        margin-right: 1rem;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 1.4rem;
        height: 1.4rem;
        
        background-color: rgba(255, 255, 255, 0.8);
        opacity: 0;
        transition: opacity 0.2s;
        }
    }

    input[type='radio']:checked + span:after {
        opacity: 1;
    };

`;

const StNameInput = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: white;
    font-family: 'NeoDunggeunmo';
    font-size: 3.6rem;    
    font-weight: 500;

    & > input {
        width: 50rem;
        height: 4.5rem;
        padding: 0 2rem;

        border: 0.1rem solid white;
        border-radius: 1rem;
        background: transparent;

        color: white;
        font-family: 'NeoDunggeunmo';
        font-size: 2rem;    
        font-weight: 100;
        
        text-align: center;
    } 
    & > textarea {
        width: 50rem;
        height: 25rem;
        padding: 1rem 2rem;

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
        margin-top: 2.5rem;

        border: 0.3rem solid white;
        color: white;
        background-color: rgba(255,255,255, 0.164);
        font-family: 'NeoDunggeunmo';
        font-size: 2rem;
        font-weight: 500;
        line-height: 3.5rem;
    }
    & > button:hover {
        border-color: #B8DCFF;
        color: #B8DCFF;
    }
`;