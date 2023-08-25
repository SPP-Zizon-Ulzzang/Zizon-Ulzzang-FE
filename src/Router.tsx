import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

function Router() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          {/* <Route path="/" element={<HomePage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default Router;
