import { styled } from 'styled-components';

import { IcHeaderLogo } from '../../assets/icons';
import { StHeaderWrapper } from '../../components/Common/Header/Header';

interface BaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <>
      <StHeader>
        <h1 className="sr-only">MBTIgram</h1>
        <IcHeaderLogo />
      </StHeader>
      <StMain>{children}</StMain>
    </>
  );
};

export default BaseLayout;

const StHeader = styled(StHeaderWrapper)`
  display: flex;
  justify-content: center;

  padding-top: 2.7rem;
  width: 100%;
  max-width: 43rem;
`;

const StMain = styled.main`
  width: 100%;
  max-width: 43rem;
`;
