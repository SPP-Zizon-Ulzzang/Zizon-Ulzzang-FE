import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';

import { IcHeaderLogo } from '../../assets/icons';
import { Button } from '../../components/Common/Button';
import { StHeaderWrapper } from '../../components/Common/Header/Header';
import { StBtnWrapper } from '../../components/Home/Home';
import { IsButtonActive } from '../../recoil/atom';

interface BaseLayoutProps {
  children: React.ReactNode;
  mainText: string;
  descriptText1: string;
  descriptText2: string;
  handlePredict: () => void;
}

const BaseLayout = ({
  children,
  handlePredict,
  mainText,
  descriptText1,
  descriptText2,
}: BaseLayoutProps) => {
  const isBtnActive = useRecoilValue(IsButtonActive);
  return (
    <>
      <StHeader>
        <h1 className="sr-only">MBTIgram</h1>
        <IcHeaderLogo />
      </StHeader>
      <StMain>
        <h2>{mainText}</h2>
        <p>{descriptText1}</p>
        <p>{descriptText2}</p>
        {children}
        <span>*비공개 계정이거나, 게시물이 없는 경우 MBTI 예측이 불가합니다.</span>
      </StMain>
      <StBaseBtnWrapper>
        <Button buttonName="분석하기" isActive={isBtnActive} onClick={handlePredict} />
      </StBaseBtnWrapper>
    </>
  );
};

export default BaseLayout;

const StHeader = styled(StHeaderWrapper)`
  display: flex;
  justify-content: center;

  padding-top: 2.7rem;
  width: 100%;
  max-width: 43rem;
`;

const StMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 8.7rem;
  width: 100%;
  max-width: 43rem;

  & > h2 {
    padding-bottom: 1.633rem;
    color: ${({ theme }) => theme.colors.Gray5};
    ${({ theme }) => theme.fonts.Head2};
  }
  & > p {
    text-align: center;

    color: ${({ theme }) => theme.colors.Gray4};
    ${({ theme }) => theme.fonts.Body6};
  }
  & > p:nth-child(3) {
    padding-bottom: 3.684rem;
  }
  & > span {
    padding-top: 0.776rem;

    color: ${({ theme }) => theme.colors.Gray3};
    ${({ theme }) => theme.fonts.Body7};
  }
`;

const StBaseBtnWrapper = styled(StBtnWrapper)`
  /* bottom: 10.1rem; */
`;
