import { styled } from 'styled-components';

import { BaseLayout } from '../../layouts/BaseLayout';
import { Input } from '../Common/Input';

const Predict = () => {
  const handlePredict = () => {
    console.log('handlePredict');
  };

  return (
    <BaseLayout
      handlePredict={handlePredict}
      mainText="AI가 분석한 나의 MBTI는?"
      descriptText1="인스타그램 피드 게시글을 분석해 MBTI를"
      descriptText2="예측하고 여러 사람들과 궁합을 측정해 보세요!"
    >
      <StPredictWrapper>
        <Input />
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
