import html2canvas from 'html2canvas';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

import { IcChemistryBg } from '../../assets/icons';
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

  const [loading, setLoading] = useState(true);
  const [errorStatus, setErrorStatus] = useState<number>();

  const resultRef = useRef<HTMLElement | null>(null);

  const handleSaveImage = () => {
    if (resultRef.current) {
      const originalWidth = resultRef.current.offsetWidth;
      const originalHeight = resultRef.current.offsetHeight;
      resultRef.current.style.width = `450px`;
      resultRef.current.style.height = `800px`;
      // resultRef.current.style.padding = `0 18px 18px 18px`;
      // resultRef.current.style.boxSizing = `border-box`;

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
      resultRef.current.style.background = originalBackgroundColor;

      resultRef.current.style.width = `${originalWidth}px`;
      resultRef.current.style.height = `${originalHeight}px`;
      // resultRef.current.style.padding = `0 18px`;
      // resultRef.current.style.boxSizing = `border-box`;
    }
  };

  const handleScoreMent = () => {
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
      // handleScoreMent();
    } else {
      setErrorStatus(resData);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (state) {
      getChemistryData(inputIdList);
    }
  }, [state]);

  useEffect(() => {
    handleScoreMent();
  }, [chemistry]);

  if (loading) return <Loading isChemistry />;
  if (errorStatus) {
    return <Error code={errorStatus} />;
  }

  let chemistryComponent;
  let memberNum = '';
  switch (memberData?.length) {
    case 2:
      memberNum = '둘';
      chemistryComponent = <Two memberData={memberData} />;
      break;
    case 3:
      memberNum = '셋';
      chemistryComponent = <Three memberData={memberData} />;
      break;
    case 4:
      memberNum = '넷';
      chemistryComponent = <Four memberData={memberData} />;
      break;
    case 5:
      memberNum = '다섯';
      chemistryComponent = <Five memberData={memberData} />;
      break;
    default:
      chemistryComponent = null;
      break;
  }

  return (
    <StChemistryResultWrapper className="Result">
      {chemistry && memberData && (
        <StChemistryResult>
          <StScore>
            <h2>우리 {memberNum}의 MBTI 궁합은?</h2>
            <p style={{ color: randomColor }}>{scoreData?.title}</p>
            <p style={{ color: randomColor }}>{scoreData?.tag}</p>
            <h1>{Math.floor(chemistry.data.avg)}점!</h1>
            <IcChemistryBg />
          </StScore>
          <StImageDownload ref={resultRef}>{chemistryComponent}</StImageDownload>
          <ResultButton onClickDownload={handleSaveImage} />
        </StChemistryResult>
      )}
    </StChemistryResultWrapper>
  );
};

export default ChemistryResult;

const StChemistryResultWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

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

  justify-content: center;
  align-items: center;

  width: 100%;
`;

const StImageDownload = styled.section`
  /* display: flex; */
  margin-bottom: 4rem;
`;
