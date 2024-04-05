import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import { images } from '../../data';
import './style.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 11,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 10,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 6,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

function MovieList() {
  return (
    <>
      <main className="container-main">
        <section>
          <div className="container-title">
            <p>Barbie Movies</p>
          </div>
        </section>
        <section>
          <Carousel responsive={responsive} containerClass="carousel-container">
            {images.map((image) => (
              <Link to={`/movies/${image.id}`} key={image.id}>
                <img src={image.imgUrl} alt={image.title} title={image.title} />
              </Link>
            ))}
          </Carousel>
        </section>
      </main>
    </>
  );
}
export default MovieList;
