import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import { images } from '../../data';
import './style.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 9,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function MovieList() {
  return (
    <>
      <main>
        <section>
          <Carousel responsive={responsive} containerClass="carousel-container">
            {images.map((image) => (
              <Link to={`/movies/${image.id}`} key={image.id}>
                <img src={image.imgUrl} alt="barbie" />
              </Link>
            ))}
          </Carousel>
        </section>
      </main>
    </>
  );
}
export default MovieList;
