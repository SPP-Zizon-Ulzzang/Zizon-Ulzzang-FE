import { styled } from 'styled-components';

import { IcFiveLine } from '../../../assets/icons';
import { MemberData } from '../../../types/mbti';
import { mapMBTIToColor } from '../../../utils/mapMBTIToColor';
import { mapMBTIToImage } from '../../../utils/mapMBTIToImage';

interface FiveProps {
  memberData: MemberData[];
}
const Five = ({ memberData }: FiveProps) => {
  console.log(memberData);

  return (
    <StFiveWrapper>
      {memberData.map((member, index) => {
        return (
          <StMembers key={index}>
            <p style={{ backgroundColor: mapMBTIToColor(member.mbti).sub_color }}>
              <div>{mapMBTIToImage(member.mbti).rank_image}</div>
              {member.mbti}
            </p>
            <span>@{member.instaId}</span>
          </StMembers>
        );
      })}
      <StScore>
        <IcFiveLine />
        <span>{memberData[0].relationships[1]}</span>
        <span>{memberData[0].relationships[3]}</span>
        <span>{memberData[0].relationships[4]}</span>
        <span>{memberData[0].relationships[2]}</span>
        <span>{memberData[1].relationships[2]}</span>
        <span>{memberData[1].relationships[4]}</span>
        <span>{memberData[1].relationships[3]}</span>
        <span>{memberData[2].relationships[3]}</span>
        <span>{memberData[2].relationships[4]}</span>
        <span>{memberData[3].relationships[4]}</span>
      </StScore>
    </StFiveWrapper>
  );
};

export default Five;

const StFiveWrapper = styled.section`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 5.2rem;
  grid-column-gap: 6.7rem;

  position: relative;
  width: 100%;
  height: fit-content;
  padding-top: 3.5rem;

  & > :first-child {
    grid-column: span 2;
    text-align: center;
  }
  & > :nth-child(2) {
    margin-right: 2.66rem;
    margin-bottom: 2.388rem;
  }
  & > :nth-child(3) {
    margin-left: 2.66rem;
    margin-bottom: 2.388rem;
  }
`;

const StMembers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > p {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;

    margin-top: -1.5rem;
    padding: 0.36rem 1.5rem 0.36rem 0.8rem;
    width: 11.8rem;
    height: 4.7rem;
    box-sizing: border-box;

    border-radius: 5.8rem;
    color: #414141;
    ${({ theme }) => theme.fonts.Head2};

    & div > svg {
      width: 4.5rem;
      height: 4rem;
      margin-top: 0.5rem;
    }
  }
  & > span {
    color: #fff;
    ${({ theme }) => theme.fonts.Body6};
  }
`;

const StScore = styled.div`
  & > svg {
    position: absolute;
    top: 5rem;
    left: 6rem;
  }
  & > span {
    display: flex;
    justify-content: center;

    position: absolute;
    width: 2.4rem;

    color: #727272;
    ${({ theme }) => theme.fonts.Body5};

    &:nth-child(2) {
      top: 7.9rem;
      left: 7.3rem;
    }
    &:nth-child(3) {
      top: 15.4rem;
      left: 13.4rem;
    }
    &:nth-child(4) {
      top: 15.4rem;
      right: 13.1rem;
    }
    &:nth-child(5) {
      top: 7.9rem;
      right: 7rem;
    }
    &:nth-child(6) {
      top: 13.85rem;
      left: 16.75rem;
    }
    &:nth-child(7) {
      top: 19rem;
      left: 14.8rem;
    }
    &:nth-child(8) {
      top: 19rem;
      left: 18.7rem;
    }
    &:nth-child(9) {
      top: 20.5rem;
      left: 6.3rem;
    }
    &:nth-child(10) {
      top: 20.5rem;
      right: 6rem;
    }
    &:nth-child(11) {
      top: 26rem;
      left: 16.75rem;
    }
  }
`;
