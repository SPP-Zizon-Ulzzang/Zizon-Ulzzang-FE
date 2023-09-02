import html2canvas from 'html2canvas';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

import { getChemistry } from '../../libs/apis/mbti';
import { ChemistryInfo, MemberData } from '../../types/mbti';
import { Error } from '../Common/Error';
import { Loading } from '../Loading';
import { ResultButton } from './';
import { Five, Four, Three, Two } from './Chemistry';

const ChemistryResult = () => {
  const { state } = useLocation();
  const inputIdList = state.inputIdList;
  const [chemistry, setChemistry] = useState<ChemistryInfo>();
  const [memberData, setMemberData] = useState<MemberData[]>();

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

  useEffect(() => {
    if (state) {
      getChemistryData(inputIdList);
    }
  }, [state]);

  if (loading) return <Loading isChemistry />;
  if (errorStatus) {
    return <Error code={errorStatus} />;
  }

  let chemistryComponent;
  switch (memberData?.length) {
    case 2:
      chemistryComponent = <Two memberData={memberData} />;
      break;
    case 3:
      chemistryComponent = <Three memberData={memberData} />;
      break;
    case 4:
      chemistryComponent = <Four memberData={memberData} />;
      break;
    case 5:
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
          <h1>{Math.floor(chemistry.data.avg)}점!</h1>
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

const StChemistryResult = styled.section`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  width: 100%;

  & > h1 {
    ${({ theme }) => theme.fonts.Head1};
    text-align: center;
  }
`;

const StImageDownload = styled.section`
  /* display: flex; */
  margin-bottom: 4rem;
`;
