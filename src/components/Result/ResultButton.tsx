import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { IcDownload, IcUpload } from '../../assets/icons';
import useModal from '../../hooks/useModal';
import { ImageModal, ShareModal } from '../Modal';

interface ResultButtonProps {
  onClickDownload: () => void;
  isChemistry?: boolean;
}

const ResultButton = ({ onClickDownload, isChemistry }: ResultButtonProps) => {
  const navigate = useNavigate();

  const shareModalState = useModal();
  const imageModalState = useModal();

  return (
    <>
      <StResultButton>
        <StRestart
          type="button"
          onClick={() => {
            navigate('/');
          }}
          style={{ width: isChemistry ? '20.2rem' : '14.5807rem' }}
        >
          처음으로
        </StRestart>
        {isChemistry ? null : (
          <StShare type="button" onClick={imageModalState.toggle}>
            <IcDownload />
          </StShare>
        )}
        <StShare type="button" onClick={shareModalState.toggle}>
          <IcUpload />
        </StShare>
      </StResultButton>
      <ShareModal isShowing={shareModalState.isShowing} handleClose={shareModalState.toggle} />
      <ImageModal
        isShowing={imageModalState.isShowing}
        handleClose={imageModalState.toggle}
        handleSave={onClickDownload}
      />
    </>
  );
};

export default ResultButton;

const StResultButton = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;

  width: 100%;
`;

const StRestart = styled.button`
  width: 14.5807rem;
  height: 4.8rem;

  border-radius: 7.2rem;
  color: #fff;
  background-color: #373737;
  ${({ theme }) => theme.fonts.Body3};
`;

const StShare = styled.button`
  width: 4.7637rem;
  height: 4.8rem;
  border-radius: 7.2rem;

  background-color: #373737;
`;
