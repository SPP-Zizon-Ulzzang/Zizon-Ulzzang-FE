import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import { IcBallon } from '../../assets/icons';
import { LottieLoading } from '../../assets/lottie';
import ProgressBar from './ProgressBar';

interface LoadingProps {
  isChemistry?: boolean;
}

const Loading = ({ isChemistry }: LoadingProps) => {
  const [dots, setDots] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots % 3) + 1);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <StLoading>
      <StBallon isChemistry={isChemistry ? isChemistry : false}>
        <p>인스타그램 게시물을 기반으로</p>
        <p>
          {isChemistry ? 'MBTI 궁합을 ' : 'MBTI를 '}
          분석하는 중입니다
          <StDots>{'.'.repeat(dots)}</StDots>
        </p>
        <IcBallon />
      </StBallon>
      <Lottie className="lottie" animationData={LottieLoading} loop={true} />
      <ProgressBar />
    </StLoading>
  );
};

export default Loading;

const StLoading = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100dvh;
  margin-top: -4rem;

  background: linear-gradient(
    162deg,
    rgba(255, 142, 223, 0.5) 0.69%,
    rgba(255, 188, 125, 0.5) 101.5%
  );
`;

const StBallon = styled.div<{ isChemistry: boolean }>`
  position: relative;

  margin-bottom: -2rem;

  & > p {
    position: absolute;

    width: 16rem;

    color: ${({ theme }) => theme.colors.Gray4};
    ${({ theme }) => theme.fonts.Body5};
  }
  & > p:nth-child(1) {
    top: 2.4rem;
    left: 5.7rem;
  }
  & > p:nth-child(2) {
    top: 4rem;
    left: ${({ isChemistry }) => (isChemistry ? 4.9 : 6.1)}rem;
  }
  & > svg {
    width: 25.9rem;
  }
`;

const StDots = styled.span`
  color: ${({ theme }) => theme.colors.Gray4};
  ${({ theme }) => theme.fonts.Body5};
`;
