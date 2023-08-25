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
