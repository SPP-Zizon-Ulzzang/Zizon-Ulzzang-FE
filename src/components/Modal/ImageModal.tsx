import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import { IcCloseModal, IcKakao, IcUrl } from '../../assets/icons';
import { shareKakao } from '../Result/ShareKakao';
import { CompleteModal } from './';

interface ImageModalProps {
  isShowing: boolean;
  handleClose: () => void;
  handleSave: () => void;
}
const ImageModal = ({ isShowing, handleClose, handleSave }: ImageModalProps) => {
  const [showCompleteModal, setShowCompleteModal] = useState(false);

  const handleSaveImg = () => {};

  useEffect(() => {
    if (showCompleteModal) {
      const timer = setTimeout(() => {
        setShowCompleteModal(false);
        handleClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showCompleteModal]);

  return (
    isShowing && (
      <StModalWrapper>
        <StModal className={showCompleteModal ? 'fade-out' : ''}>
          {showCompleteModal ? (
            <CompleteModal comment={['이미지 저장 완료!', '이제 스토리에 공유해볼까요?']} />
          ) : (
            <>
              이미지 저장하기
              <IcCloseModal onClick={handleClose} />
              <hr />
              <StBtnWrapper>
                <StShareBtn type="button" onClick={handleClose}>
                  취소하기
                </StShareBtn>
                <StDivider />
                <StShareBtn type="button" onClick={handleSave}>
                  저장하기
                </StShareBtn>
              </StBtnWrapper>
            </>
          )}
        </StModal>
      </StModalWrapper>
    )
  );
};

export default ImageModal;

const StModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  width: 100%;
  height: 100%;

  background: rgba(173, 173, 173, 0.4);
  backdrop-filter: blur(1.5px);
`;

const StModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  width: 25.7738rem;
  height: fit-content;
  padding: 1.25rem 1.44rem;

  box-sizing: border-box;
  border-radius: 2rem;
  background-color: #373737;
  color: ${({ theme }) => theme.colors.White};
  ${({ theme }) => theme.fonts.Body3};

  & > svg {
    position: absolute;
    top: 0.75rem;
    right: 1rem;

    padding: 1rem;

    cursor: pointer;
  }
  & > hr {
    width: 100%;

    border: none;
    border-top: 0.05rem solid ${({ theme }) => theme.colors.White};
    background-color: ${({ theme }) => theme.colors.White};
  }
  &.fade-out {
    opacity: 0;
    transition: opacity 3s ease-in-out;
  }
`;

const StBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.8rem;

  margin-top: 0.5rem;
`;

const StShareBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 6.3772rem;
  height: 4rem;

  color: ${({ theme }) => theme.colors.White};
`;

const StDivider = styled.div`
  width: 0.05rem;
  height: 4rem;
  margin: 0 1rem;

  background-color: ${({ theme }) => theme.colors.White};
`;
