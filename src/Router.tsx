import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import {
  ChemistryResultPage,
  ChemistryTestPage,
  ErrorPage,
  HomePage,
  PersonalResultPage,
  PersonalTestPage,
  TestPage,
  UniqueVisitor,
} from './pages';

function Router() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mbti" element={<PersonalTestPage />} />
          <Route path="/result/:id" element={<PersonalResultPage />} />
          <Route path="/chemistry" element={<ChemistryTestPage />} />
          <Route path="/result/chemistry" element={<ChemistryResultPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/uniquevisitor" element={<UniqueVisitor />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default Router;
