import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { BaseLayout } from '../../layouts/BaseLayout';
import { IsButtonActive } from '../../recoil/atom';
import { Input } from '../Common/Input';

const Predict = () => {
  const [input, setInput] = useState('');
  const [isBtnActive, setIsBtnActive] = useRecoilState(IsButtonActive);

  const navigate = useNavigate();

  const handlePredict = () => {
    const inputTrimed = input.replace(/\s/g, '');
    navigate(`/result/${inputTrimed}`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const curInput = e.target.value;
    setInput(e.target.value);

    if (curInput.length > 0) {
      setIsBtnActive(true);
    } else setIsBtnActive(false);
  };

  return (
    <BaseLayout
      handlePredict={handlePredict}
      mainText="AI가 분석한 나의 MBTI는?"
      descriptText1="인스타그램 피드 게시글을 분석해 MBTI를"
      descriptText2="예측하고 여러 사람들과 궁합을 측정해 보세요!"
    >
      <StPredictWrapper>
        <Input value={input} onChange={handleInputChange} />
      </StPredictWrapper>
    </BaseLayout>
  );
};

export default Predict;

const StPredictWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 43rem;
`;
