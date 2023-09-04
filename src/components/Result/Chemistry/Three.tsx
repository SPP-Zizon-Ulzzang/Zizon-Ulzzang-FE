import { styled } from 'styled-components';

import { IcThreeLine } from '../../../assets/icons';
import { MemberData } from '../../../types/mbti';
import { mapMBTIToColor } from '../../../utils/mapMBTIToColor';
import { mapMBTIToImage } from '../../../utils/mapMBTIToImage';

interface ThreeProps {
  memberData: MemberData[];
}

const Three = ({ memberData }: ThreeProps) => {
  return (
    <StThreeWrapper>
      {memberData.map((member, index) => {
        return (
          <StMembers key={index}>
            <div>{mapMBTIToImage(member.mbti).rank_image}</div>
            <p style={{ backgroundColor: mapMBTIToColor(member.mbti).sub_color }}>{member.mbti}</p>
            <span>@{member.instaId}</span>
          </StMembers>
        );
      })}
      <StScore>
        <IcThreeLine />
        <span>{memberData[0].relationships[2]}</span>
        <span>{memberData[0].relationships[1]}</span>
        <span>{memberData[2].relationships[1]}</span>
      </StScore>
    </StThreeWrapper>
  );
};

export default Three;

const StThreeWrapper = styled.section`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 3.437rem;
  grid-column-gap: 8.945rem;

  position: relative;
  width: 100%;
  height: fit-content;
  margin-top: 1.3rem;

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

  & > div {
    z-index: 1;
  }
  & > div > svg {
    width: 10rem;
    height: 7.93rem;
  }
  & > p {
    margin-top: -1.5rem;
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

const StScore = styled.div`
  & > svg {
    position: absolute;
    top: 10.9rem;
    left: 7.411rem;
  }
  & > span {
    display: flex;
    justify-content: center;

    position: absolute;
    width: 2.4rem;

    color: ${({ theme }) => theme.colors.Gray4};
    ${({ theme }) => theme.fonts.Body5};

    &:nth-child(2) {
      top: 12.5rem;
      left: 7.7rem;
    }
    &:nth-child(3) {
      top: 12.5rem;
      right: 7.1rem;
    }
    &:nth-child(4) {
      top: 24.4rem;
      left: 15.7rem;
    }
  }
`;
