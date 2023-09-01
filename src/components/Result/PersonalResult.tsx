import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

import { IcArrowDown, IcBallon2, IcInstaHamburger, IcInstaPlus } from '../../assets/icons';
import { RESULT_IMG } from '../../constants/image';
import { MBTI_RESULT, MBTIResult } from '../../constants/MBTI';
import { MBTI_STYLE } from '../../constants/result';
import { getMBTI, getRank } from '../../libs/apis/mbti';
import { MBTIInfo, RankInfo } from '../../types/mbti';
import { Error } from '../Common/Error';
import { Loading } from '../Loading';

const PersonalResult = () => {
  const { id } = useParams();
  const [mbti, setMbti] = useState<MBTIInfo>();
  const [resultMainColor, setResultMainColor] = useState<string>();
  const [resultMainImg, setResultMainImg] = useState<React.ReactNode | null>(null);

  const [mbtiResult, setMbtiResult] = useState<MBTIResult>();
  const [rank, setRank] = useState<RankInfo>();

  const [loading, setLoading] = useState(true);
  const [errorStatus, setErrorStatus] = useState<number>();

  const getMBTIData = async (id: string) => {
    const resMbti = await getMBTI(id);

    if (resMbti?.status === 200) {
      setMbti(resMbti);
      setMbtiResult(MBTI_RESULT.find((item) => item.MBTI === resMbti.mbti));

      const colorInfo = MBTI_STYLE.find((item) => item.MBTI === resMbti.mbti);
      setResultMainColor(colorInfo?.main_color);

      const imgInfo = RESULT_IMG.find((item) => item.MBTI === resMbti.mbti);
      setResultMainImg(imgInfo?.main);
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
    <StPersonalResult>
      {mbti && mbtiResult && rank && (
        <>
          <StResultHeader>
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

          <StDescWrapper>
            <IcBallon2 />
            <strong>{mbtiResult.title}</strong>
            <h4 style={{ color: resultMainColor }}>{mbtiResult.tag}</h4>
            <p>{mbtiResult.description}</p>
          </StDescWrapper>

          <StProbWrapper>
            <h2>나의 MBTI 예측 순위</h2>
            <StMBTIProb>
              {Object.entries(mbti.prob).map(([key, value], index) => {
                const colorInfo = MBTI_STYLE.find((item) => item.MBTI === key);
                const mainColor = colorInfo ? colorInfo.main_color : '#000';

                return (
                  <StProb key={key}>
                    <StProbRank style={{ backgroundColor: mainColor }}>{index + 1}</StProbRank>
                    <p style={{ color: mainColor }}>{key}</p>
                    <span>{value}%</span>
                  </StProb>
                );
              })}
            </StMBTIProb>
          </StProbWrapper>

          <StRankWrapper>
            <h2>AI가 분석한 이용자 MBTI 순위</h2>
            <StRank>
              {Object.entries(rank.rank).map(([key], index) => {
                const rankInfo = MBTI_STYLE.find((item) => item.MBTI === key);
                const imgInfo = RESULT_IMG.find((item) => item.MBTI === key);
                const height = ['10.7rem', '7rem', '4.2rem', '2.8rem'][index] || 'auto';

                return (
                  <li key={key} className={key}>
                    {index < 4 ? (
                      <StTopWrapper>
                        <StResultImg className={key}>{imgInfo?.rank}</StResultImg>
                        <div style={{ backgroundColor: rankInfo?.sub_color, height: height }} />
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

  width: 100%;
  height: fit-content;
  padding: 0 1.8rem;

  box-sizing: border-box;
  background: linear-gradient(
    162deg,
    rgba(255, 142, 223, 0.5) 0.69%,
    rgba(255, 188, 125, 0.5) 101.5%
  );
`;

const StResultHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  width: 100%;
  height: 3.17rem;
  padding-top: 0.77rem;

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

  margin-top: 2.2rem;
  margin-bottom: 3.5rem;

  & > h2 {
    ${({ theme }) => theme.fonts.Head1};
    color: ${({ theme }) => theme.colors.Black};
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
  position: relative;
  width: 100%;
  margin-bottom: 2.54rem;
  padding: 1.56rem 2rem 1.28rem 2rem;

  box-sizing: border-box;

  border-radius: 2rem;
  background-color: #ffffff;
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.1));

  & > strong {
    color: ${({ theme }) => theme.colors.Gray5};
    ${({ theme }) => theme.fonts.Body2};
  }
  & > h4 {
    ${({ theme }) => theme.fonts.Body3};
  }
  & > p {
    color: ${({ theme }) => theme.colors.Gray5};
    ${({ theme }) => theme.fonts.Body4};

    word-break: keep-all;
  }
  & > svg {
    position: absolute;
    top: -3.6rem;
  }
`;

const StProbWrapper = styled(StDescWrapper)`
  padding: 1.76rem 1.8rem 1.8rem 1.8rem;

  & > h2 {
    color: ${({ theme }) => theme.colors.Gray5};
    ${({ theme }) => theme.fonts.Body2};
  }
`;

const StMBTIProb = styled.ol`
  display: flex;
  justify-content: space-between;

  width: 100%;
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
    color: ${({ theme }) => theme.colors.Gray4};
    ${({ theme }) => theme.fonts.Body2};
  }
`;

const StProbRank = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 3.446rem;
  height: 3.446rem;
  margin-top: 1.87rem;

  border-radius: 10rem;
  color: ${({ theme }) => theme.colors.White};
  ${({ theme }) => theme.fonts.Head3};
`;

const StRankWrapper = styled(StDescWrapper)`
  & > h2 {
    color: ${({ theme }) => theme.colors.Gray5};
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
  /* margin-bottom: 2.43rem; */

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

    color: ${({ theme }) => theme.colors.White};
    ${({ theme }) => theme.fonts.Body3};
  }
  & > p {
    margin-top: -0.5rem;
    margin-bottom: 0.5rem;

    color: ${({ theme }) => theme.colors.Gray5};
    ${({ theme }) => theme.fonts.Body3};
  }
`;

const StDownWrapper = styled.div`
  margin-top: -0.4rem;

  color: ${({ theme }) => theme.colors.Gray4};
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
