import { styled } from 'styled-components';

import { BaseLayout } from '../../layouts/BaseLayout';
import { Button } from '../Common/Button';
import { Input } from '../Common/Input';

const Predict = () => {
  const handlePredict = () => {
    console.log('handlePredict');
  };

  return (
    <BaseLayout>
      <StPredictWrapper>
        <h2>AI가 분석한 나의 MBTI는?</h2>
        <p>
          인스타그램 피드 게시글을 분석해 MBTI를
          <br />
          예측하고 여러 사람들과 궁합을 측정해 보세요!
        </p>
        <Input />
        <Button buttonName="분석하기" isActive={true} onClick={handlePredict} />
      </StPredictWrapper>
    </BaseLayout>
  );
};

export default Predict;

const StPredictWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 8.7rem;
  width: 100%;
  max-width: 43rem;

  & > h2 {
    color: #272727;
    ${({ theme }) => theme.fonts.Input_Main};
  }
  & > p {
    padding: 1.633rem 0 3.684rem;
    text-align: center;

    color: ${({ theme }) => theme.colors.Description};
    ${({ theme }) => theme.fonts.Description};
  }
`;
