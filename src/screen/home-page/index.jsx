import Header from '../../components/header';
import TransitioImages from '../../components/transition-images';
import MovieList from '../../components/movie-list';
import './style.css';

function Home() {
  return (
    <>
      <Header />
      <TransitioImages />
      <MovieList />
    </>
  );
}

export default Home;
