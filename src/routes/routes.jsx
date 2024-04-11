import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movie from '../components/movies';
import Home from '../screen/home-page';

export default function RenderRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}
