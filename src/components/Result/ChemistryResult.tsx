import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

import { getChemistry } from '../../libs/apis/mbti';
import { ChemistryInfo, MemberData } from '../../types/mbti';
import { Error } from '../Common/Error';
import { Loading } from '../Loading';

const ChemistryResult = () => {
  const { state } = useLocation();
  const inputIdList = state.inputIdList;
  const [chemistry, setChemistry] = useState<ChemistryInfo>();
  const [memberData, setMemberData] = useState<MemberData[]>();

  const [loading, setLoading] = useState(true);
  const [errorStatus, setErrorStatus] = useState<number>();

  const getChemistryData = async (idList: string[]) => {
    const resData = await getChemistry(idList);

    if (resData?.status === 200) {
      setChemistry(resData);
      setMemberData(resData.data.member_data);
    } else {
      setErrorStatus(resData);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (state) {
      getChemistryData(inputIdList);
    }
  }, [state]);

  if (loading) return <Loading isChemistry />;
  if (errorStatus) {
    return <Error code={errorStatus} />;
  }

  return (
    <StChemistryResult>
      {memberData && (
        <>
          <h3>MBTI 궁합</h3>
          <ol>
            {memberData.map((member, index) => (
              <>
                <li key={index}>
                  {index + 1}. {member.instaId} : {member.mbti}
                </li>
                <p>
                  [
                  {member.relationships.map((relationship, rIndex) => (
                    <span key={rIndex}>
                      {relationship}
                      {rIndex !== member.relationships.length - 1 && ', '}
                    </span>
                  ))}
                  ]
                </p>
              </>
            ))}
          </ol>
        </>
      )}
    </StChemistryResult>
  );
};

export default ChemistryResult;

const StChemistryResult = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  & > h3 {
    margin-bottom: 2rem;

    /* ${({ theme }) => theme.fonts.Input_Main}; */
  }
  & > ol {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > li {
      /* ${({ theme }) => theme.fonts.Main}; */
    }

    & > p {
      margin-bottom: 1rem;

      /* ${({ theme }) => theme.fonts.Description}; */
    }
  }
`;
