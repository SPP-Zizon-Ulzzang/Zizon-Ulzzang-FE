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
  background-color: #f6f6f6;

  #nprogress .bar {
    width: 100%;
    height: 0.6675rem;
    margin-left: 0.5rem;

    background-color: #373737;
    border-radius: 7.2rem;
  }

  #nprogress .peg {
    display: none;
  }
`;
