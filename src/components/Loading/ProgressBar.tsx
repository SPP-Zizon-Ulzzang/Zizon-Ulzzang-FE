import { styled } from 'styled-components';

const ProgressBar = () => {
  return (
    <StProgressBar>
      <StPercent />
    </StProgressBar>
  );
};

export default ProgressBar;

const StProgressBar = styled.div`
  width: 18.9605rem;
  height: 0.6675rem;

  margin-top: -1.5rem;

  border-radius: 7.2rem;
  background-color: #f6f6f6;
`;

const StPercent = styled(StProgressBar)`
  width: 12.9605rem;
  margin-top: 0rem;

  background-color: #373737;
`;
