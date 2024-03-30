import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../screen/home-page';

export default function RenderRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
