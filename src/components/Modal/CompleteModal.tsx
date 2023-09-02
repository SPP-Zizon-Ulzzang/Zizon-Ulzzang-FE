import { styled } from 'styled-components';

interface CompleteModalProps {
  comment: string[];
}
const CompleteModal = ({ comment }: CompleteModalProps) => {
  return (
    <StCompleteModal>
      {comment.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </StCompleteModal>
  );
};

export default CompleteModal;

const StCompleteModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 25.3285rem;
  height: 6.5006rem;
  padding: 1.64rem 0;

  box-sizing: border-box;
  border-radius: 2rem;
  background-color: #373737;

  & > p {
    color: #fff;
    ${({ theme }) => theme.fonts.Body5};
  }
`;
