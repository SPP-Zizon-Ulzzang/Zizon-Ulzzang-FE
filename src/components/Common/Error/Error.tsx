import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '../Button';

interface ErrorProps {
  code?: number;
}
const Error = ({ code }: ErrorProps) => {
  const [status, setStatus] = useState('잘못된 URL입니다');
  const navigate = useNavigate();

  const getCode = () => {
    switch (code) {
      case 400:
        setStatus('게시물이 없습니다');
        break;
      case 401:
        setStatus('비공개 계정입니다');
        break;
      case 404:
        setStatus('존재하지 않는 계정입니다');
        break;
      default:
        setStatus('잘못된 URL입니다');
        break;
    }
  };

  useEffect(() => {
    getCode();
  }, [code]);

  return (
    <StErrorWrapper>
      <p>{status}</p>
      <Button
        buttonName="다시 시도하기"
        onClick={() => {
          navigate(-1);
        }}
        isActive
      ></Button>
    </StErrorWrapper>
  );
};

export default Error;

const StErrorWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 70%;

  & > p {
    padding: 30% 0;

    /* ${({ theme }) => theme.fonts.Input_Main}; */
  }
`;
