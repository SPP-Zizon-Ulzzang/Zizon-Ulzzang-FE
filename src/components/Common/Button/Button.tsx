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
  width: 70%;
  height: 4.8rem;

  border-radius: 7.2rem;
  color: white;
  background-color: ${({ theme, isactive }) =>
    isactive === 'true' ? theme.colors.Button_Active : theme.colors.Button_Disabled};
  ${({ theme }) => theme.fonts.Button};
`;
