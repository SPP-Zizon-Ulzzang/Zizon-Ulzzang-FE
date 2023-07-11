import React from 'react';
import styled from 'styled-components';

const Result = () => {
    return (
        <StResultWrapper>
            결과 컴포넌트
        </StResultWrapper>
    );
};

export default Result;

const StResultWrapper = styled.div`
    width: 100%;
    height: 100vh;

    background: url("./BG.png") center;
    background-size: cover;
    background-repeat: no-repeat;
`;