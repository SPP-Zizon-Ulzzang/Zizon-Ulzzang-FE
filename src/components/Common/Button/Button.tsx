import { styled } from 'styled-components';

interface ButtonProps {
  buttonName: string;
  isActive: boolean;
  onClick: () => void;
}

const Button = ({ buttonName, isActive, onClick }: ButtonProps) => {
  return (
    <StButton type="button" isactive={isActive.toString()} disabled={!isActive} onClick={onClick}>
      {buttonName}
    </StButton>
  );
};

export default Button;

const StButton = styled.button<{ isactive: string }>`
  box-sizing: border-box;

  width: 70%;
  height: 4.8rem;

  border-radius: 7.2rem;
  color: ${({ theme }) => theme.colors.White};
  background-color: ${({ theme, isactive }) =>
    isactive === 'true' ? theme.colors.Gray5 : theme.colors.Gray4};
  ${({ theme }) => theme.fonts.Body3};
`;
