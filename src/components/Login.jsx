import React from 'react';
import styled from 'styled-components';

const Login = () => {
    return (
        <StLoginWrapper >
            <h1> 나는 슬플 때 노래를 들어..♬ </h1>
            <p>[SPP 2023] Team zㅣ존얼짱s2</p>
            <StNameInput>
                <label for="user_name">이름 : </label>
                <input type="text" name="user_name" value="name"></input>
            </StNameInput>
        </StLoginWrapper>
    );
};

export default Login;

const StLoginWrapper = styled.div`
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
    padding-top: 4rem;

    color: white;
    font-family: 'NeoDunggeunmo';
    font-size: 3.6rem;    
    font-weight: 500;

    & > input {
        width: 20rem;
        height: 3rem;
        padding-left: 1rem;

        border: 0.1rem solid white;
        border-radius: 1rem;
        background: transparent;

        color: white;
        font-family: 'NeoDunggeunmo';
        font-size: 2rem;    
        font-weight: 100;
    }    
`;