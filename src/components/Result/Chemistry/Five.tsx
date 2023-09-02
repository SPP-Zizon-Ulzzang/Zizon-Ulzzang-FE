import { styled } from 'styled-components';

import { MemberData } from '../../../types/mbti';
import { mapMBTIToColor } from '../../../utils/mapMBTIToColor';
import { mapMBTIToImage } from '../../../utils/mapMBTIToImage';

interface FiveProps {
  memberData: MemberData[];
}
const Five = ({ memberData }: FiveProps) => {
  return (
    <StFiveWrapper>
      {memberData.map((member, index) => {
        return (
          <StMembers key={index}>
            <div>{mapMBTIToImage(member.mbti).rank_image}</div>
            <p style={{ backgroundColor: mapMBTIToColor(member.mbti).sub_color }}>{member.mbti}</p>
            <span>@{member.instaId}</span>
          </StMembers>
        );
      })}
    </StFiveWrapper>
  );
};

export default Five;

const StFiveWrapper = styled.section`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;

  position: relative;
  width: 100%;
  height: fit-content;

  & > :first-child {
    grid-column: span 2;
    text-align: center;
  }
`;

const StMembers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div > svg {
    width: 10rem;
    height: 8rem;
  }
  & > p {
    margin-top: -1.5rem;
    padding: 1.21rem 3.3rem 1.05rem 3.3rem;

    border-radius: 5.8rem;
    color: #414141;
    ${({ theme }) => theme.fonts.Head2};
  }
  & > span {
    color: #fff;
    ${({ theme }) => theme.fonts.Body6};
  }
`;
