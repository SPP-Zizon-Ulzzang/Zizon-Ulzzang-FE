import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Error = ({code}) => {
    const [status, setStatus] = useState("./assets/error.svg");
    const navigate = useNavigate();

    const getCode = () => {
        switch (code) {
            case 400:
                setStatus("./assets/error400.svg")
                break;
            case 401:
                setStatus("./assets/error401.svg")
                break;
            case 404:
                setStatus("./assets/error404.svg")
                break;
            default:
                setStatus("./assets/error.svg")
                break;
        }
    }

    useEffect(() => {
        getCode();
    }, [code])

    return (
        <StErrorWrapper>
            <img src={status} alt="error" />
            <button type="button" onClick={()=>{navigate('/')}}>
                <img src="./assets/retry.png" alt="retry" />
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
    
    background: url("./assets/BG.png") center;
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