import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import { IcCloseModal, IcKakao, IcUrl } from '../../assets/icons';
import { shareKakao } from '../Result/ShareKakao';
import { CompleteModal } from './';

interface ShareModalProps {
  isShowing: boolean;
  handleClose: () => void;
}

const ShareModal = ({ isShowing, handleClose }: ShareModalProps) => {
  const url = 'https://mbtigram.site';
  const [showCompleteModal, setShowCompleteModal] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url).then(() => {
      setShowCompleteModal(true);
    });
  };
  const handleKakaoShare = () => {
    shareKakao(url);
  };

  useEffect(() => {
    if (showCompleteModal) {
      const timer = setTimeout(() => {
        setShowCompleteModal(false);
        handleClose();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showCompleteModal]);

  return (
    isShowing && (
      <StModalWrapper>
        <StModal className={showCompleteModal ? 'fade-out' : ''}>
          {showCompleteModal ? (
            <CompleteModal comment={['링크가 클립보드에 복사되었습니다.']} />
          ) : (
            <>
              공유하기
              <IcCloseModal onClick={handleClose} />
              <hr />
              <StBtnWrapper>
                <StShareBtnWrapper>
                  <StShareBtn type="button" onClick={handleCopyLink}>
                    <IcUrl />
                  </StShareBtn>
                  링크복사
                </StShareBtnWrapper>
                <StShareBtnWrapper>
                  <StShareBtn type="button" onClick={handleKakaoShare}>
                    <IcKakao />
                  </StShareBtn>
                  카카오톡
                </StShareBtnWrapper>
              </StBtnWrapper>
            </>
          )}
        </StModal>
      </StModalWrapper>
    )
  );
};

export default ShareModal;

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
    transition: opacity 2.5s ease-in-out;
  }
`;

const StBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 4.82rem;

  margin-top: 1.34rem;
  margin-bottom: 0.78rem;
`;

const StShareBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.White};
  ${({ theme }) => theme.fonts.Body4};
`;

const StShareBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 6.3772rem;
  height: 6.4259rem;
  margin-bottom: 0.75rem;

  border-radius: 7.2rem;
  background-color: ${({ theme }) => theme.colors.White};
`;
