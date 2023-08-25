import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

import { getChemistry } from '../../libs/apis/mbti';
import { ChemistryInfo } from '../../types/mbti';

const ChemistryResult = () => {
  const { state } = useLocation();
  const inputIdList = state.inputIdList;
  const [chemistry, setChemistry] = useState<ChemistryInfo>();

  const [loading, setLoading] = useState(true);
  const [errorStatus, setErrorStatus] = useState<number>();

  const getChemistryData = async (idList: string[]) => {
    try {
      const resData = await getChemistry(idList);
      console.log(resData);
      if (resData?.status === 200) {
        setChemistry(resData);
      } else {
        setErrorStatus(resData?.status);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (state) {
      getChemistryData(inputIdList);
    }
  }, [state]);

  if (loading) return '로딩중...';

  return <StChemistryResult>궁합 결과</StChemistryResult>;
};

export default ChemistryResult;

const StChemistryResult = styled.main``;
