import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

import { getMBTI, getRank } from '../../libs/apis/mbti';
import { MBTIInfo, RankInfo } from '../../types/mbti';
import { Error } from '../Common/Error';
import { Loading } from '../Loading';

const PersonalResult = () => {
  const { id } = useParams();
  const [mbti, setMbti] = useState<MBTIInfo>();
  const [rank, setRank] = useState<RankInfo>();

  const [loading, setLoading] = useState(true);
  const [errorStatus, setErrorStatus] = useState<number>();

  const getMBTIData = async (id: string) => {
    const resMbti = await getMBTI(id);

    if (resMbti?.status === 200) {
      setMbti(resMbti);
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
    } finally {
      // setLoading(false);
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
      {mbti && rank && (
        <>
          <h2>{mbti.mbti}</h2>
          <ol>
            내 MBTI 예측 순위
            {Object.entries(mbti.prob).map(([key, value], index) => (
              <li key={key}>
                {index + 1}위: {key} {value}%
              </li>
            ))}
          </ol>
          <ol>
            MBTIgram 사용자 랭킹
            {Object.entries(rank.rank).map(([key, value], index) => (
              <li key={key}>
                {index + 1}위: {key} {value}%
              </li>
            ))}
          </ol>
        </>
      )}
    </StPersonalResult>
  );
};

export default PersonalResult;

const StPersonalResult = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  & > h2 {
    margin-bottom: 2rem;

    ${({ theme }) => theme.fonts.Input_Main};
  }

  & > ol {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 2rem;

    ${({ theme }) => theme.fonts.Main};
  }
  & > ol > li {
    ${({ theme }) => theme.fonts.Description};
  }
`;
