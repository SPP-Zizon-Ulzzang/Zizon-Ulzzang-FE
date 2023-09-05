import saveAs from 'file-saver';
import html2canvas from 'html2canvas';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { css, styled } from 'styled-components';

import { IcBottomLogo, IcChemistryBg } from '../../assets/icons';
import { ChemistryResultInfo, MBTI_CHEMISTRY } from '../../constants/MBTI';
import { getChemistry } from '../../libs/apis/mbti';
import { ChemistryInfo, MemberData } from '../../types/mbti';
import { randomColor } from '../../utils/randomColor';
import { Error } from '../Common/Error';
import { Loading } from '../Loading';
import { ResultButton } from './';
import { Five, Four, Three, Two } from './Chemistry';

const ChemistryResult = () => {
  const { state } = useLocation();
  const inputIdList = state.inputIdList;
  const [chemistry, setChemistry] = useState<ChemistryInfo>();
  const [memberData, setMemberData] = useState<MemberData[]>();
  const [scoreData, setScoreData] = useState<ChemistryResultInfo>();
  const [isTwo, setIsTwo] = useState<boolean>(false);
  const resultRef = useRef<HTMLElement | null>(null);
  const paddingRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLElement | null>(null);
  const componentRef = useRef<HTMLElement | null>(null);

  const [loading, setLoading] = useState(true);
  const [errorStatus, setErrorStatus] = useState<number>();

  const handleSaveImage = async () => {
    if (resultRef.current && footerRef.current) {
      const originalWidth = resultRef.current.offsetWidth;
      const originalHeight = resultRef.current.offsetHeight;

      resultRef.current.style.width = `375px`;
      resultRef.current.style.height = `666px`;
      resultRef.current.style.boxSizing = `border-box`;
      footerRef.current.style.display = 'block';
      if (paddingRef.current) {
        paddingRef.current.style.display = 'none';
      }

      const originalBackgroundColor = resultRef.current.style.background;
      resultRef.current.style.background =
        'linear-gradient(162deg, rgba(255, 142, 223, 0.5) 0.69%,rgba(255, 188, 125, 0.5) 101.5%)';

      html2canvas(resultRef.current).then((canvas) => {
        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = image;
        link.download = 'mbtigram_result_image.png';
        link.click();
      });

      if (memberData?.length === 2 && paddingRef.current) {
        paddingRef.current.style.display = 'block';
      }
      footerRef.current.style.display = 'none';
      resultRef.current.style.paddingTop = `81.42px`;
      resultRef.current.style.background = originalBackgroundColor;
      resultRef.current.style.width = `${originalWidth}px`;
      resultRef.current.style.height = `${originalHeight}px`;
    }
  };

  const getScoreMent = () => {
    const avg = chemistry?.data.avg || 0;

    if (avg >= 20 && avg <= 40) {
      setScoreData(MBTI_CHEMISTRY[3]);
    } else if (avg >= 41 && avg <= 60) {
      setScoreData(MBTI_CHEMISTRY[2]);
    } else if (avg >= 61 && avg <= 80) {
      setScoreData(MBTI_CHEMISTRY[1]);
    } else if (avg >= 81 && avg <= 100) {
      setScoreData(MBTI_CHEMISTRY[0]);
    }
  };

  const getChemistryData = async (idList: string[]) => {
    const resData = await getChemistry(idList);

    if (resData?.status === 200) {
      setChemistry(resData);
      setMemberData(resData.data.member_data);
    } else {
      setErrorStatus(resData);
    }

    setLoading(false);
  };

  const getChemistryComponent = () => {
    let component;
    let memberNum = '';

    switch (memberData?.length) {
      case 2:
        memberNum = '둘';
        component = <Two memberData={memberData} />;
        break;
      case 3:
        memberNum = '셋';
        component = <Three memberData={memberData} />;
        break;
      case 4:
        memberNum = '넷';
        component = <Four memberData={memberData} ref={componentRef} />;
        break;
      case 5:
        memberNum = '다섯';
        component = <Five memberData={memberData} />;
        break;
      default:
        component = null;
        break;
    }

    return { component, memberNum };
  };

  useEffect(() => {
    getChemistryData(inputIdList);
  }, [state]);
  useEffect(() => {
    memberData?.length === 2 ? setIsTwo(true) : setIsTwo(false);
    getChemistryComponent();
  }, [memberData]);
  useEffect(() => {
    getScoreMent();
  }, [chemistry]);

  if (loading) return <Loading isChemistry />;
  if (errorStatus) {
    return <Error code={errorStatus} />;
  }

  const { component: chemistryComponent, memberNum } = getChemistryComponent();

  return (
    <StChemistryResultWrapper className="Result">
      {chemistry && memberData && (
        <StChemistryResult>
          <StImageDownload ref={resultRef}>
            {isTwo && <StIsTwo ref={paddingRef} />}
            <StScore>
              <h2>우리 {memberNum}의 MBTI 궁합은?</h2>
              <p style={{ color: randomColor }}>{scoreData?.title}</p>
              <p style={{ color: randomColor }}>{scoreData?.tag}</p>
              <h1>{Math.floor(chemistry.data.avg)}점!</h1>
              <IcChemistryBg />
            </StScore>
            {chemistryComponent}
            <footer ref={footerRef}>
              <IcBottomLogo />
            </footer>
          </StImageDownload>
          <StResultButtonWrapper>
            <ResultButton onClickDownload={handleSaveImage} />
          </StResultButtonWrapper>
        </StChemistryResult>
      )}
    </StChemistryResultWrapper>
  );
};

export default ChemistryResult;

const StChemistryResultWrapper = styled.main`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;

  background: linear-gradient(
    162deg,
    rgba(255, 142, 223, 0.5) 0.69%,
    rgba(255, 188, 125, 0.5) 101.5%
  );
`;

const StScore = styled.section`
  position: relative;

  width: 31.9rem;

  & > h1 {
    position: absolute;
    bottom: 2rem;

    width: 100%;

    color: #212121;
    ${({ theme }) => theme.fonts.Head1};
    text-align: center;
  }
  & > h2 {
    position: absolute;
    top: 1.5rem;

    width: 100%;

    color: #fbfbfb;
    ${({ theme }) => theme.fonts.Head3};
    text-align: center;
  }
  & > p {
    position: absolute;
    top: 5.77rem;

    width: 100%;

    ${({ theme }) => theme.fonts.Head3};
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2rem; /* 125% */
    letter-spacing: -0.032rem;
    text-align: center;

    &:nth-child(3) {
      top: 7.77rem;
    }
  }
`;

const StChemistryResult = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

const StImageDownload = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  padding-top: 8.142rem;
  margin-bottom: 4rem;
  min-height: 66.6rem;
  max-height: 66.6rem;

  & > footer {
    display: none;

    position: absolute;
    top: 63rem;
  }
`;

const StResultButtonWrapper = styled.div`
  position: absolute;
  bottom: 1.509rem;
`;

const StIsTwo = styled.div`
  width: 100%;
  height: 4.82rem;
`;
