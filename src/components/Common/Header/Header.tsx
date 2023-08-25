import { styled } from 'styled-components';

const Header = () => {
  return (
    <StHeaderWrapper>
      <h1 className="sr-only">MBTIgram</h1>
    </StHeaderWrapper>
  );
};

export default Header;

const StHeaderWrapper = styled.header`
  & > .sr-only {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    -webkit-clip-path: inset(0px 0px 99.9% 99.9%);
    clip-path: inset(0px 0px 99.9% 99.9%);
    overflow: hidden;
    height: 1px;
    width: 1px;
    padding: 0;
    border: 0;
  }
`;
