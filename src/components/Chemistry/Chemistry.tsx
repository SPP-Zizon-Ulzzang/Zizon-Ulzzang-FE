import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { IcPlusActive, IcPlusDisabled } from '../../assets/icons';
import { BaseLayout } from '../../layouts/BaseLayout';
import { InputId } from '../Common/Input';
import { StInput } from '../Common/Input/Input';

const Chemistry = () => {
  const [inputId, setInputId] = useState('');
  const [inputIdList, setInputIdList] = useState<string[]>([]);

  const navigate = useNavigate();

  const handleChemistry = () => {
    navigate('/result/chemistry', { state: { inputIdList } });
  };

  const handleAddMemeber = () => {
    if (!inputId) {
      alert('인스타그램 ID를 입력하세요.');
      return;
    }
    if (inputIdList.includes(inputId)) {
      alert('이미 추가된 인스타그램 ID입니다.');
      return;
    }
    if (inputIdList.length >= 5) {
      alert('최대 5명까지 추가할 수 있습니다.');
      setInputId('');
      return;
    }
    setInputIdList((prev) => [...prev, inputId]);
    setInputId('');
  };

  const handleDeleteMember = (deleteIdx: number) => {
    setInputIdList((prev) => prev.filter((_, index) => index !== deleteIdx));
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
          <StInputBtn type="button" disabled={!inputId} onClick={handleAddMemeber}>
            {inputId ? <IcPlusActive /> : <IcPlusDisabled />}
          </StInputBtn>
        </StInputWrapper>
        {inputIdList.map((id, index) => (
          <InputId key={index} id={id} handleDelete={() => handleDeleteMember(index)} />
        ))}
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
