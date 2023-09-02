import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { IcError } from '../../../assets/icons';
import { StBtnWrapper } from '../../Home/Home';
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
        setStatus('게시물이 없습니다 🥲');
        break;
      case 401:
        setStatus('비공개 계정입니다 🥲');
        break;
      case 404:
        setStatus('존재하지 않는 계정입니다 🥲');
        break;
      default:
        setStatus('잘못된 주소입니다 🥲');
        break;
    }
  };

  useEffect(() => {
    getCode();
  }, [code]);

  return (
    <StErrorWrapper>
      <StError>
        <IcError />
        <span>ERROR {code ? code : 404}</span>
        <p>{status}</p>
      </StError>
      <StRetryBtnWrapper>
        <Button
          buttonName="다시 시도하기"
          onClick={() => {
            navigate(-1);
          }}
          isActive
        ></Button>
      </StRetryBtnWrapper>
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
  height: 100%;
`;

const StError = styled.section`
  position: relative;

  & > span {
    position: absolute;
    top: 1.3rem;
    left: 0;

    width: 31.9rem;

    color: #fff;
    ${({ theme }) => theme.fonts.Head3};
    text-align: center;
  }
  & > p {
    position: absolute;
    top: 7.3rem;
    left: 0;

    width: 31.9rem;

    color: #414141;
    ${({ theme }) => theme.fonts.Body1};
    text-align: center;
  }
`;

const StRetryBtnWrapper = styled(StBtnWrapper)``;
