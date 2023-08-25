import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

import { getMBTI } from '../../libs/apis/mbti';

const PersonalResult = () => {
  const { id } = useParams();
  const [mbti, setMbti] = useState('');

  const [loading, setLoading] = useState(true);
  const [errorStatus, setErrorStatus] = useState<number>();

  const getMBTIData = async (id: string) => {
    try {
      const resMbti = await getMBTI(id);
      console.log(resMbti);
      if (resMbti?.status === 200) {
        setMbti(resMbti.mbti);
      } else {
        setErrorStatus(resMbti?.status);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      console.log(id);
      getMBTIData(id);
    }
  }, [id]);

  if (loading) return '로딩중...';

  return <StPersonalResult>{mbti}</StPersonalResult>;
};

export default PersonalResult;

const StPersonalResult = styled.main`
  width: 100%;
  height: 100%;
  background-color: yellow;
`;
