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
            <div>{mapMBTIToImage(member.mbti).chemistry_image}</div>
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

  margin-top: 3.2rem;
`;

const StMembers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: fit-content;

  & > div > svg {
    width: 15.8rem;
    height: 13.8rem;
  }
  & > p {
    margin-top: -0.5rem;
    padding: 1.21rem 3.3rem 1.05rem 3.3rem;
    max-width: 11.4rem;
    max-height: 4.7rem;

    border-radius: 5.8rem;
    color: #414141;
    ${({ theme }) => theme.fonts.Head2};
  }
  & > span {
    color: #fff;
    ${({ theme }) => theme.fonts.Body6};
  }
`;
