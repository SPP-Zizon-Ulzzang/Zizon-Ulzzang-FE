import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import { IcBallon } from '../../assets/icons';
import { LottieLoading } from '../../assets/lottie';
import ProgressBar from './ProgressBar';

const Loading = () => {
  const [dots, setDots] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots % 3) + 1);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <StLoading>
      <StBallon>
        <p>
          인스타그램 게시물을 기반으로
          <br />
          MBTI를 분석하는 중입니다
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
`;

const StBallon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: -2rem;

  & > p {
    position: absolute;
    margin-bottom: 3rem;

    /* text-align: center; */
  }
`;

const StDots = styled.span`
  margin-top: 0.5rem;
  text-align: center;
`;
