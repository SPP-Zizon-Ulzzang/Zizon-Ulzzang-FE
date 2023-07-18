import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();

    return (
        <StErrorWrapper>
            <img src="./error.svg" alt="error" />
            <button type="button" onClick={()=>{navigate('/')}}>
                <img src="./retry.png" alt="retry" />
            </button>
        </StErrorWrapper>
    );
};

export default Error;

const StErrorWrapper = styled.section`
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
        width: 40rem;
    }
    & > button {
        width: 10rem;

        margin-top: -6rem;
    }
    & > button > img {
        width: 100%;
    }
`