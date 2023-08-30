import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

import { MBTI_COLOR, MBTIColor } from '../../constants/color';
import { MBTI_RESULT, MBTIResult } from '../../constants/MBTI';
import { getMBTI, getRank } from '../../libs/apis/mbti';
import { MBTIInfo, RankInfo } from '../../types/mbti';
import { Error } from '../Common/Error';
import { Loading } from '../Loading';

const PersonalResult = () => {
  const { id } = useParams();
  const [mbti, setMbti] = useState<MBTIInfo>();
  const [resultMainColor, setResultMainColor] = useState<string>();

  const [mbtiResult, setMbtiResult] = useState<MBTIResult>();
  const [rank, setRank] = useState<RankInfo>();

  const [loading, setLoading] = useState(true);
  const [errorStatus, setErrorStatus] = useState<number>();

  const getMBTIData = async (id: string) => {
    const resMbti = await getMBTI(id);

    if (resMbti?.status === 200) {
      setMbti(resMbti);
      setMbtiResult(MBTI_RESULT.find((item) => item.MBTI === resMbti.mbti));

      const colorInfo = MBTI_COLOR.find((item) => item.MBTI === resMbti.mbti);
      setResultMainColor(colorInfo?.main_color);
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
          <span>{mbtiResult.instaId}</span>
          <StMainImg src={mbtiResult.img_main} alt="mbti캐릭터" />
          <h2>{mbtiResult.gram}</h2>
          <h1>{mbtiResult.MBTI}</h1>

          <StDescWrapper>
            <strong>{mbtiResult.title}</strong>
            <p style={{ color: resultMainColor }}>{mbtiResult.tag}</p>
            <p>{mbtiResult.description}</p>
          </StDescWrapper>

          <StProbWrapper>
            <h2>나의 MBTI 예측 순위</h2>
            <StMBTIProb>
              {Object.entries(mbti.prob).map(([key, value], index) => {
                const colorInfo = MBTI_COLOR.find((item) => item.MBTI === key);
                const mainColor = colorInfo ? colorInfo.main_color : '#000';

                return (
                  <StProb key={key}>
                    <StProbRank style={{ backgroundColor: mainColor }}>{index + 1}</StProbRank>
                    <div>{key}</div>
                    <div>{value}%</div>
                  </StProb>
                );
              })}
            </StMBTIProb>
          </StProbWrapper>

          <StRankWrapper>
            <h2>AI가 분석한 이용자 MBTI 순위</h2>
            <ol>
              {Object.entries(rank.rank).map(([key, value], index) => (
                <li key={key}>
                  {index + 1}위: {key} {value}%
                </li>
              ))}
            </ol>
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
  height: 100%;
  padding: 0 1.8rem;

  box-sizing: border-box;
  background-color: #fbfbfb;
`;

const StMainImg = styled.img`
  width: 19.0284rem;
`;

const StDescWrapper = styled.section`
  width: 100%;
  margin-bottom: 2.54rem;
  padding: 1.56rem 2rem 1.28rem 2rem;

  box-sizing: border-box;

  border-radius: 2rem;
  background-color: #ffffff;
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.1));
`;

const StProbWrapper = styled(StDescWrapper)`
  padding: 1.76rem 1.8rem 1.8rem 1.8rem;
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
`;

const StProbRank = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 3.446rem;
  height: 3.446rem;

  color: #ffffff;
  border-radius: 10rem;
`;

const StRankWrapper = styled.section``;
