import { styled } from 'styled-components';

const Input = () => {
  return <StInput type="text" placeholder="인스타그램 ID를 입력하세요."></StInput>;
};

export default Input;

export const StInput = styled.input`
  box-sizing: border-box;

  padding: 1.248rem 5.2rem;
  width: 70%;
  min-width: 20.3rem;

  border: none;
  border-radius: 7.2rem;
  color: #363636;
  background-color: ${({ theme }) => theme.colors.Input_Area};
  ${({ theme }) => theme.fonts.Input_Before};

  text-align: center;

  ::placeholder {
    ${({ theme }) => theme.fonts.Input_After};
  }
  &:focus {
    outline: none;
  }
`;
