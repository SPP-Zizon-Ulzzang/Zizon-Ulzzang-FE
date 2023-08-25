import { useState } from 'react';
import { styled } from 'styled-components';

import { IcPlusActive, IcPlusDisabled } from '../../assets/icons';
import { BaseLayout } from '../../layouts/BaseLayout';
import { InputId } from '../Common/Input';
import { StInput } from '../Common/Input/Input';

const Chemistry = () => {
  const [inputId, setInputId] = useState('');

  const handleChemistry = () => {
    console.log('handleChemistry');
  };
  const handleAddMemeber = () => {
    console.log('handleAddMemeber');
  };
  const handleDeleteMemeber = () => {
    console.log('handleDeleteMemeber');
  };

  return (
    <BaseLayout
      handlePredict={handleChemistry}
      mainText="AI가 분석한 MBTI 궁합은?"
      descriptText1="인스타그램 피드 게시글을 분석해"
      descriptText2="여러 사람들과 궁합을 분석해 보세요!"
    >
      <StPredictWrapper>
        <StInputWrapper>
          <StInputMember
            type="text"
            value={inputId}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setInputId(e.target.value);
            }}
            placeholder="인스타그램 ID를 입력하세요."
          ></StInputMember>
          <StInputBtn type="button" onClick={handleAddMemeber}>
            {inputId ? <IcPlusActive /> : <IcPlusDisabled />}
          </StInputBtn>
        </StInputWrapper>
        <InputId id="wasabiihater" handleDelete={handleDeleteMemeber} />
      </StPredictWrapper>
    </BaseLayout>
  );
};

export default Chemistry;

const StPredictWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 43rem;
`;

export const StInputWrapper = styled.div`
  display: flex;
  gap: 0.836rem;

  width: 70%;
`;

export const StInputBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 4.8rem;
  height: 4.8rem;

  border-radius: 7.2rem;
  background-color: ${({ theme }) => theme.colors.Input_Area};
`;

export const StInputMember = styled(StInput)`
  width: 100%;

  padding: 1.248rem 2.352rem;
`;
