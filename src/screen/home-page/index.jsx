import Header from '../../components/header';
import TransitioImages from '../../components/transition-images';
import MovieList from '../../components/movie-list';
import Footer from '../../components/footer';
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
