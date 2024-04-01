import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from '../screen/home-page';
import Movie from '../components/movies';

export default function RenderRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movies/:id" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
