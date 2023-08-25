import { styled } from 'styled-components';

import { IcDelete } from '../../../assets/icons';

interface InputIdProps {
  id: string;
  handleDelete: () => void;
}
const InputId = ({ id, handleDelete }: InputIdProps) => {
  return (
    <StInputIdWrapper>
      <StInputId>{id}</StInputId>
      <StInputIdBtn type="button" onClick={handleDelete}>
        <IcDelete />
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
`;

const StInputId = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 1.248rem 2.352rem;

  border-radius: 7.2rem;
  color: #363636;
  background-color: ${({ theme }) => theme.colors.Input_Area};
  ${({ theme }) => theme.fonts.Input_After};
`;

const StInputIdBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 4.8rem;
  height: 4.8rem;

  border-radius: 7.2rem;
  background-color: ${({ theme }) => theme.colors.Input_Area};
`;
