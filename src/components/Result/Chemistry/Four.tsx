import { forwardRef, useImperativeHandle, useRef } from 'react';
import { styled } from 'styled-components';

import { IcFourLine } from '../../../assets/icons';
import { MemberData } from '../../../types/mbti';
import { mapMBTIToColor } from '../../../utils/mapMBTIToColor';
import { mapMBTIToImage } from '../../../utils/mapMBTIToImage';

interface FourProps {
  memberData: MemberData[];
}

const Four = forwardRef(({ memberData }: FourProps, ref) => {
  console.log(memberData);

  const childRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => childRef.current?.focus(),
    getValue: () => childRef.current?.value,
  }));

  return (
    <StFourWrapper>
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
        <IcFourLine />
        <span>{memberData[0].relationships[1]}</span>
        <span>{memberData[0].relationships[2]}</span>
        <span>{memberData[0].relationships[3]}</span>
        <span>{memberData[1].relationships[2]}</span>
        <span>{memberData[1].relationships[3]}</span>
        <span>{memberData[2].relationships[3]}</span>
      </StScore>
    </StFourWrapper>
  );
});

export default Four;

const StFourWrapper = styled.section`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 8.196rem;
  grid-column-gap: 9.45rem;

  position: relative;
  width: 100%;
  height: fit-content;
  padding-top: 1.85rem;
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
    width: 7rem;
    height: 5.6rem;
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
    top: 8rem;
    left: 5.1rem;
  }
  & > span {
    display: flex;
    justify-content: center;

    position: absolute;
    width: 2.4rem;

    color: #727272;
    ${({ theme }) => theme.fonts.Body5};

    &:nth-child(2) {
      top: 8.15rem;
      left: 15.7rem;
    }
    &:nth-child(3) {
      top: 13.68rem;
      left: 12.9rem;
    }
    &:nth-child(4) {
      top: 16.05rem;
      left: 5.32rem;
    }
    &:nth-child(5) {
      top: 13.68rem;
      left: 18.5rem;
    }
    &:nth-child(6) {
      top: 16.05rem;
      left: 26.25rem;
    }
    &:nth-child(7) {
      top: 26.55rem;
      left: 15.7rem;
    }
  }
`;
