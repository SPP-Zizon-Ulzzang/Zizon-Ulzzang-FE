import 'nprogress/nprogress.css';

import NProgress from 'nprogress';
import { useEffect } from 'react';
import { styled } from 'styled-components';

const ProgressBar = () => {
  useEffect(() => {
    NProgress.configure({ parent: '.myProgressBar' });
  }, []);

  return <StProgressBar className="myProgressBar" />;
};

export default ProgressBar;

const StProgressBar = styled.div`
  overflow: hidden;

  width: 18.9605rem;
  height: 0.6675rem;
  margin-top: -1.5rem;

  border-radius: 7.2rem;
  background-color: ${({ theme }) => theme.colors.Gray2};

  #nprogress .bar {
    width: 18.9605rem;
    height: 0.6675rem;

    background-color: ${({ theme }) => theme.colors.Gray5};
    border-radius: 7.2rem;
  }

  #nprogress .peg {
    display: none;
  }
`;
