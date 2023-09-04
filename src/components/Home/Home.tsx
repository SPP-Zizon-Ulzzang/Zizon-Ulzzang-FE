import Lottie from 'lottie-react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { IcHomeLogo, IcMainBallon } from '../../assets/icons';
import { LottieLoading } from '../../assets/lottie';
import { Button } from '../Common/Button';

const Home = () => {
  const navigate = useNavigate();

  const handleClickPersonal = () => {
    navigate('/mbti');
  };
  const handleClickChemistry = () => {
    navigate('/chemistry');
  };

  return (
    <StHomeWrapper>
      <h1 className="sr-only">MBTIgram</h1>
      <IcHomeLogo className="home-logo" />
      <StCounter>
        <IcMainBallon />
        <span>현재까지</span>
        <img
          src="https://www.cutercounter.com/hits.php?id=hexodxcq&nd=6&style=3"
          alt="website counter"
        />
        <span>명 참여했어요</span>
      </StCounter>

      <StHomeContent>
        <StMainImage>
          <Lottie className="lottie" animationData={LottieLoading} loop={true} />
        </StMainImage>
        <h2>AI가 분석한 나의 MBTI는?</h2>
        <p>
          인스타그램 피드 게시글을 분석해 MBTI를
          <br />
          예측하고 여러 사람들과 궁합을 측정해 보세요!
        </p>
      </StHomeContent>

      <StBtnWrapper>
        <Button buttonName="나의 MBTI 예측하기" isActive={true} onClick={handleClickPersonal} />
        <Button buttonName="MBTI 궁합 분석하기" isActive={true} onClick={handleClickChemistry} />
      </StBtnWrapper>
    </StHomeWrapper>
  );
};

export default Home;

const StHomeWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  & > .sr-only {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    -webkit-clip-path: inset(0px 0px 99.9% 99.9%);
    clip-path: inset(0px 0px 99.9% 99.9%);
    overflow: hidden;
    height: 1px;
    width: 1px;
    padding: 0;
    border: 0;
  }
  & > .home-logo {
    padding: 5.316rem 0 3.254rem 0;

    path {
      fill: ${({ theme }) => theme.colors.Logo};
    }
  }
`;

const StHomeContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > h2 {
    margin-bottom: 0.718rem;
    color: ${({ theme }) => theme.colors.Gray5};
    ${({ theme }) => theme.fonts.Head3};
  }
  & > p {
    margin-bottom: 2.449rem;

    color: ${({ theme }) => theme.colors.Gray4};
    ${({ theme }) => theme.fonts.Body6};

    text-align: center;
  }
`;

const StMainImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 3.5rem;
  margin-bottom: -1rem;
  width: 33.7rem;
  height: 27rem;
`;

export const StBtnWrapper = styled.div`
  position: fixed;
  bottom: 2.33rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  width: 100%;
  max-width: 43rem;
`;

const StCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.35rem;

  position: relative;
  width: 100%;
  padding-top: 1.3rem;

  & > span {
    z-index: 1;
    box-sizing: border-box;

    color: #414141;
    ${({ theme }) => theme.fonts.Title2};
  }
  & > img {
    z-index: 1;
  }
  & > svg {
    position: absolute;
    top: 0;

    width: 100%;
  }
`;
