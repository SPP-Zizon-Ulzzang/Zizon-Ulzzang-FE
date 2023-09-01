import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { IcDownload, IcUpload } from '../../assets/icons';

const ResultButton = () => {
  const navigate = useNavigate();

  return (
    <StResultButton>
      <StRestart
        type="button"
        onClick={() => {
          navigate('/');
        }}
      >
        처음으로
      </StRestart>
      <StShare type="button">
        <IcDownload />
      </StShare>
      <StShare type="button">
        <IcUpload />
      </StShare>
    </StResultButton>
  );
};

export default ResultButton;

const StResultButton = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;

  width: 100%;
  margin-bottom: 3.11rem;
`;

const StRestart = styled.button`
  width: 14.5807rem;
  height: 4.8rem;

  border-radius: 7.2rem;
  color: ${({ theme }) => theme.colors.White};
  background-color: #373737;
  ${({ theme }) => theme.fonts.Body3};
`;

const StShare = styled.button`
  width: 4.7637rem;
  height: 4.8rem;
  border-radius: 7.2rem;

  background-color: #373737;
`;
