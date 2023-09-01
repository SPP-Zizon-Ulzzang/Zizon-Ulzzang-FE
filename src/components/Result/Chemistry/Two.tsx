import { styled } from 'styled-components';

import { MemberData } from '../../../types/mbti';
import { mapMBTIToColor } from '../../../utils/mapMBTIToColor';
import { mapMBTIToImage } from '../../../utils/mapMBTIToImage';

interface TwoProps {
  memberData: MemberData[];
}
const Two = ({ memberData }: TwoProps) => {
  return (
    <StTwoWrapper>
      {memberData.map((member, index) => {
        return (
          <StMembers key={index}>
            <div>{mapMBTIToImage(member.mbti).rank_image}</div>
            <p style={{ backgroundColor: mapMBTIToColor(member.mbti).sub_color }}>{member.mbti}</p>
            <span>@{member.instaId}</span>
          </StMembers>
        );
      })}
    </StTwoWrapper>
  );
};

export default Two;

const StTwoWrapper = styled.section`
  display: flex;
`;

const StMembers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div > svg {
    width: 15rem;
    height: 13rem;
  }
  & > p {
    margin-top: -2.5rem;
    padding: 1.21rem 3.3rem 1.05rem 3.3rem;

    border-radius: 5.8rem;
    color: ${({ theme }) => theme.colors.Gray5};
    ${({ theme }) => theme.fonts.Head2};
  }
  & > span {
    color: ${({ theme }) => theme.colors.White};
    ${({ theme }) => theme.fonts.Body6};
  }
`;
