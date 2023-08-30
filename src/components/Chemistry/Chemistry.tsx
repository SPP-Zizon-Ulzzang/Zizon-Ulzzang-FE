import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';
import { styled } from 'styled-components';

import { IcPlusActive, IcPlusDisabled } from '../../assets/icons';
import { BaseLayout } from '../../layouts/BaseLayout';
import { InputId } from '../Common/Input';
import { StInput } from '../Common/Input/Input';

const Chemistry = () => {
  const [inputId, setInputId] = useState('');
  const [inputIdList, setInputIdList] = useState<string[]>([]);

  const navigate = useNavigate();

  const transitions = useTransition(inputIdList, {
    from: { opacity: 0.8, transform: 'translateY(-40px) rotate(0deg)' },
    enter: { opacity: 1, transform: 'translateY(0px) rotate(0deg)' },
    config: { tension: 220, friction: 25 },
  });

  const handleChemistry = () => {
    if (inputIdList.length < 2) {
      alert('2개 이상의 ID를 입력하세요.');
      return;
    }
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
    setInputIdList((prev) => [inputId, ...prev]);
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
        {transitions((style, id) => (
          <animated.div
            key={id}
            style={{ ...style, width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <InputId id={id} handleDelete={() => handleDeleteMember(inputIdList.indexOf(id))} />
          </animated.div>
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

  /* min-width: 6.4rem;
  height: 6.4rem;
  margin-left: -33.333333333%;

  transform: scale(0.75);
  transform-origin: right;

  border-radius: 9.6rem; */
  background-color: ${({ theme }) => theme.colors.Input_Area};
`;

export const StInputMember = styled(StInput)`
  width: 100%;
  padding: 1.248rem 2.352rem;

  /* width: 133.3333%;
  padding: 1.664rem 3.1356rem;

  transform: scale(0.75);
  transform-origin: left; */
`;
