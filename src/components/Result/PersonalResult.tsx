import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import { getMBTI } from '../../libs/apis/mbti';

interface PersonalResultProps {
  id: string;
}

const PersonalResult = ({ id }: PersonalResultProps) => {
  const [mbti, setMbti] = useState('');

  const [loading, setLoading] = useState(true);
  const [errorStatus, setErrorStatus] = useState<number>();

  const getMBTIData = async (id: string) => {
    try {
      const resMbti = await getMBTI(id);
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
    getMBTIData(id);
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
