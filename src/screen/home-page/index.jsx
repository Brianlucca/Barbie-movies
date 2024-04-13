import Footer from '../../components/footer';
import Header from '../../components/header';
import MovieList from '../../components/movie-list';
import TransitioImages from '../../components/transition-images';
import './style.css';

function Home() {
  return (
    <>
      <Header />
      <TransitioImages />
      <MovieList />
      <Footer />
    </>
  );
}

export default Home;
