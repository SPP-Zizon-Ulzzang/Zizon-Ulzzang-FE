import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { ChemistryTestPage, HomePage, PersonalTestPage } from './pages';

function Router() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/predict" element={<PersonalTestPage />} />
          <Route path="/chemistry" element={<ChemistryTestPage />} />
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default Router;
