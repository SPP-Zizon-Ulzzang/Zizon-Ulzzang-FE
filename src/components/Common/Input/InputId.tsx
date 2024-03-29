import { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { styled } from 'styled-components';

import { IcDelete } from '../../../assets/icons';

interface InputIdProps {
  id: string;
  handleDelete: () => void;
}
const InputId = ({ id, handleDelete }: InputIdProps) => {
  const deleteButtonRotation = useSpring({
    transform: 'rotate(-90deg)',
    config: { mass: 1, tension: 80, friction: 60 },
  });

  return (
    <StInputIdWrapper>
      <StInputId>{id}</StInputId>
      <StInputIdBtn type="button" onClick={handleDelete}>
        <animated.div style={deleteButtonRotation}>
          <IcDelete className="deleteBtn" />
        </animated.div>
      </StInputIdBtn>
    </StInputIdWrapper>
  );
};

export default InputId;

const StInputIdWrapper = styled.div`
  display: flex;
  gap: 0.836rem;

  width: 70%;
  margin-top: 0.886rem;

  z-index: 1000000;
`;

const StInputId = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 1.248rem 2.352rem;

  border-radius: 7.2rem;
  color: ${({ theme }) => theme.colors.Black};
  background-color: ${({ theme }) => theme.colors.Gray2};
  ${({ theme }) => theme.fonts.Body1};
`;

const StInputIdBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 4.8rem;
  height: 4.8rem;

  border-radius: 7.2rem;
  background-color: ${({ theme }) => theme.colors.Gray2};

  .deleteBtn {
    path {
      fill: ${({ theme }) => theme.colors.ButtonActive};
    }
  }
`;
