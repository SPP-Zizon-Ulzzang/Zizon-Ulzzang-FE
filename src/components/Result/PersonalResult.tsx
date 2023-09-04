import html2canvas from 'html2canvas';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

import {
  IcArrowDown,
  IcBallon2,
  IcBottomLogo,
  IcInstaHamburger,
  IcInstaPlus,
} from '../../assets/icons';
import { MBTI_RESULT, MBTIResult } from '../../constants/MBTI';
import { getMBTI, getRank } from '../../libs/apis/mbti';
import { MBTIInfo, RankInfo } from '../../types/mbti';
import { mapMBTIToColor } from '../../utils/mapMBTIToColor';
import { mapMBTIToImage } from '../../utils/mapMBTIToImage';
import { Error } from '../Common/Error';
import { Loading } from '../Loading';
import { ResultButton } from './';

const PersonalResult = () => {
  const { id } = useParams();
  const [mbti, setMbti] = useState<MBTIInfo>();
  const [mbtiResult, setMbtiResult] = useState<MBTIResult>();
  const [rank, setRank] = useState<RankInfo>();
  const [resultMainColor, setResultMainColor] = useState<string>();
  const [resultMainImg, setResultMainImg] = useState<React.ReactNode | null>(null);
  const resultRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const footerRef = useRef<HTMLElement | null>(null);
  const ballonRef = useRef<HTMLImageElement | null>(null);

  const [loading, setLoading] = useState(true);
  const [errorStatus, setErrorStatus] = useState<number>();

  const handleSaveImage = () => {
    if (resultRef.current && headerRef.current && footerRef.current && ballonRef.current) {
      const originalWidth = resultRef.current.offsetWidth;
      const originalHeight = resultRef.current.offsetHeight;
      const originalBackgroundColor = resultRef.current.style.background;

      headerRef.current.style.marginTop = '58px';
      headerRef.current.style.marginBottom = '0px';
      ballonRef.current.style.top = '360px';
      footerRef.current.style.display = 'block';
      resultRef.current.style.width = `450px`;
      resultRef.current.style.height = `800px`;
      resultRef.current.style.padding = `0 18px 18px 18px`;
      resultRef.current.style.boxSizing = `border-box`;
      resultRef.current.style.background =
        'linear-gradient(162deg, rgba(255, 142, 223, 0.5) 0.69%,rgba(255, 188, 125, 0.5) 101.5%)';

      html2canvas(resultRef.current).then((canvas) => {
        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = image;
        link.download = 'mbtigram_result_image.png';
        link.click();
      });

      headerRef.current.style.marginTop = '0px';
      headerRef.current.style.marginBottom = '22px';
      footerRef.current.style.display = 'none';
      ballonRef.current.style.top = '332px';
      resultRef.current.style.background = originalBackgroundColor;
      resultRef.current.style.width = `${originalWidth}px`;
      resultRef.current.style.height = `${originalHeight}px`;
      resultRef.current.style.padding = `0 18px`;
      resultRef.current.style.boxSizing = `border-box`;
    }
  };

  const getMBTIData = async (id: string) => {
    const resMbti = await getMBTI(id);

    if (resMbti?.status === 200) {
      setMbti(resMbti);
      setMbtiResult(MBTI_RESULT.find((item) => item.MBTI === resMbti.mbti));
      setResultMainColor(mapMBTIToColor(resMbti.mbti).main_color);
      setResultMainImg(mapMBTIToImage(resMbti.mbti).main_image);
    } else {
      setErrorStatus(resMbti);
    }
    setLoading(false);
  };

  const getRankData = async () => {
    try {
      const res = await getRank();
      if (res) {
        setRank(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      getMBTIData(id);
      getRankData();
    }
  }, [id]);

  if (loading) return <Loading />;
  if (errorStatus) {
    return <Error code={errorStatus} />;
  }

  return (
    <StPersonalResult className="Result">
      {mbti && mbtiResult && rank && (
        <>
          <StImageDownload ref={resultRef}>
            <StResultHeader ref={headerRef}>
              <div>
                <h1>{mbtiResult.instaId}</h1>
                <IcArrowDown />
              </div>
              <div>
                <IcInstaPlus />
                <IcInstaHamburger />
              </div>
            </StResultHeader>

            <StProfile>
              <div>{resultMainImg}</div>
              <h3 style={{ color: resultMainColor }}>{mbtiResult.gram}</h3>
              <h2>{mbtiResult.MBTI}</h2>
            </StProfile>

            <img src={IcBallon2} alt="ballon" ref={ballonRef} />
            <StDescWrapper>
              <strong>{mbtiResult.title}</strong>
              <h4 style={{ color: resultMainColor }}>{mbtiResult.tag}</h4>
              <p>{mbtiResult.description}</p>
            </StDescWrapper>

            <StProbWrapper>
              <h2>나의 MBTI 예측 순위</h2>
              <StMBTIProb>
                {Object.entries(mbti.prob).map(([key, value], index) => {
                  return (
                    <StProb key={key}>
                      <StProbRank style={{ backgroundColor: mapMBTIToColor(key).main_color }}>
                        {index + 1}
                      </StProbRank>
                      <p style={{ color: mapMBTIToColor(key).main_color }}>{key}</p>
                      <span>{value.toFixed(1)}%</span>
                    </StProb>
                  );
                })}
              </StMBTIProb>
            </StProbWrapper>
            <footer ref={footerRef}>
              <IcBottomLogo />
            </footer>
          </StImageDownload>

          <ResultButton onClickDownload={handleSaveImage} />

          <StRankWrapper>
            <h2>AI가 분석한 이용자 MBTI 순위</h2>
            <StRank>
              {Object.entries(rank.rank).map(([key], index) => {
                const height = ['10.7rem', '7rem', '4.2rem', '2.8rem'][index] || 'auto';
                return (
                  <li key={key}>
                    {index < 4 ? (
                      <StTopWrapper>
                        <StResultImg>{mapMBTIToImage(key).rank_image}</StResultImg>
                        <div
                          style={{
                            backgroundColor: mapMBTIToColor(key).sub_color,
                            height: height,
                          }}
                        />
                        <strong>{`${index + 1}`}</strong>
                        <p>{key}</p>
                      </StTopWrapper>
                    ) : (
                      <StDownWrapper>{`${index + 1}. ${key}`}</StDownWrapper>
                    )}
                  </li>
                );
              })}
            </StRank>
          </StRankWrapper>
        </>
      )}
    </StPersonalResult>
  );
};

export default PersonalResult;

const StPersonalResult = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: fit-content;

  box-sizing: border-box;
  background: linear-gradient(
    162deg,
    rgba(255, 142, 223, 0.5) 0.69%,
    rgba(255, 188, 125, 0.5) 101.5%
  );
`;

const StImageDownload = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  padding: 0 1.8rem;
  box-sizing: border-box;

  & > img {
    position: absolute;
    top: 33.2rem;
    left: 4.73rem;

    z-index: 1;
  }
  & > footer {
    display: none;
    margin-top: -1rem;
  }
`;

const StResultHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  width: 33.9rem;
  height: 3.17rem;
  padding-top: 0.77rem;
  margin-bottom: 2.2rem;

  & > div > h1 {
    margin-right: 0.5rem;
    ${({ theme }) => theme.fonts.Body1};
  }
  & > div {
    display: flex;
    align-items: center;

    &:last-child {
      gap: 2.03rem;
    }
  }
`;

const StProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* margin-top: 2.2rem; */
  margin-bottom: 3.5rem;

  & > h2 {
    ${({ theme }) => theme.fonts.Head1};
    color: #212121;
  }
  & > h3 {
    margin-top: 0.88rem;
    ${({ theme }) => theme.fonts.Head2};
  }

  & > div > svg {
    width: 19.5rem;
    height: 19.7rem;
  }
`;

const StDescWrapper = styled.section`
  margin-bottom: 1rem;
  padding: 1.56rem 2rem 1.28rem 2rem;

  box-sizing: border-box;

  border-radius: 2rem;
  background-color: #ffffff;
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.1));

  & > strong {
    color: #414141;
    ${({ theme }) => theme.fonts.Body2};
  }
  & > h4 {
    margin-top: -0.3rem;
    margin-bottom: 0.5rem;
    ${({ theme }) => theme.fonts.Body3};
  }
  & > p {
    color: #414141;
    ${({ theme }) => theme.fonts.Body4};

    word-break: keep-all;
  }
`;

const StProbWrapper = styled(StDescWrapper)`
  width: 100%;
  padding: 1.46rem 2.25rem 1.31rem 2.01rem;
  margin-bottom: 2.7rem;
  box-sizing: border-box;

  & > h2 {
    color: #414141;
    ${({ theme }) => theme.fonts.Body2};
  }
`;

const StMBTIProb = styled.ol`
  display: flex;
  justify-content: center;
  gap: 3rem;

  width: 100%;
  max-width: 29.5rem;
  margin: 0 auto;
`;

const StProb = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > p {
    ${({ theme }) => theme.fonts.Body2};
  }
  & > span {
    margin-top: -0.4rem;
    color: #727272;
    ${({ theme }) => theme.fonts.Body2};
  }
`;

const StProbRank = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 3.446rem;
  height: 3.446rem;
  margin-top: 0.67rem;

  border-radius: 10rem;
  color: #fff;
  ${({ theme }) => theme.fonts.Head2};
  font-size: 2.1046rem;
`;

const StRankWrapper = styled(StDescWrapper)`
  width: 91%;
  margin-top: 2.7rem;
  margin-bottom: 2.479rem;

  & > h2 {
    color: #414141;
    ${({ theme }) => theme.fonts.Body2};
  }
`;

const StRank = styled.ol`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: end;
`;

const StTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 2.5rem;

  & > div {
    display: flex;
    justify-content: center;

    width: 6.8rem;
    height: auto;
    margin-bottom: -0.5rem;

    border-radius: 0.3rem;
  }
  & > strong {
    margin-top: -1.5rem;

    color: #fff;
    ${({ theme }) => theme.fonts.Body3};
  }
  & > p {
    margin-top: -0.5rem;
    margin-bottom: 0.5rem;

    color: #414141;
    ${({ theme }) => theme.fonts.Body3};
  }
`;

const StDownWrapper = styled.div`
  margin-top: -0.4rem;

  color: #727272;
  ${({ theme }) => theme.fonts.Body3};
`;

const StResultImg = styled.div`
  z-index: 1;

  & > svg {
    width: 5.8rem;
    height: 5.8rem;

    margin-bottom: -1rem;
  }
`;
