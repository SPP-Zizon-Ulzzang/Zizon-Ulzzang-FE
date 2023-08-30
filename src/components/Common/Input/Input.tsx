import { styled } from 'styled-components';

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, onChange }: InputProps) => {
  return (
    <StInput
      type="text"
      placeholder="인스타그램 ID를 입력하세요."
      value={value}
      onChange={onChange}
    ></StInput>
  );
};

export default Input;

export const StInput = styled.input`
  box-sizing: border-box;

  padding: 1.248rem 5.2rem;
  width: 70%;
  min-width: 20.3rem;

  border-radius: 7.2rem;

  border: none;
  color: #363636;
  background-color: ${({ theme }) => theme.colors.Input_Area};
  ${({ theme }) => theme.fonts.Input_After};

  text-align: center;

  /* font-size: 1.6rem;
  padding: 1.664rem 8rem;
  width: 93.333331%;
  min-width: 27.06666rem;
  min-height: 6.34rem;
  border-radius: 9.6rem;

  transform: scale(0.75); */

  ::placeholder {
    ${({ theme }) => theme.fonts.Input_Before};
  }
  &:focus {
    outline: none;
  }
`;
