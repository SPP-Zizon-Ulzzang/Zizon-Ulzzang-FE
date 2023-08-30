import 'nprogress/nprogress.css';

import NProgress from 'nprogress';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

const ProgressBar = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    NProgress.configure({ showSpinner: false });
    NProgress.configure({ parent: '.myProgressBar' });
    // NProgress.start();

    return () => {
      // NProgress.done();
    };
  }, []);

  return (
    <StProgressBar className="myProgressBar">
      <StPercent style={{ width: `${width}%` }} />
    </StProgressBar>
  );
};

export default ProgressBar;

const StProgressBar = styled.div`
  overflow: hidden;

  width: 18.9605rem;
  height: 0.6675rem;
  margin-top: -1.5rem;

  border-radius: 7.2rem;
  background-color: #f6f6f6;

  #nprogress .spinner {
    top: 50%;
    right: 50%;
  }
`;

const StPercent = styled(StProgressBar)`
  margin-top: 0rem;

  background-color: #373737;

  transition: width 0.2s ease-in-out;
`;
