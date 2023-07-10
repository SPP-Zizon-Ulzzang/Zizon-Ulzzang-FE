import React from 'react';
import styled from 'styled-components';

const Login = () => {
    return (
        <StLoginWrapper >
            로그인 컴포넌트
        </StLoginWrapper>
    );
};

export default Login;

const StLoginWrapper = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("./BGminiroom.gif");
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
`