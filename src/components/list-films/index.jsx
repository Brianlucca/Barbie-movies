import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './style.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 10.5,
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

function ListFilms() {
  return (
    <>
      <main>
        <section>
          <Carousel responsive={responsive} containerClass="carousel-container">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/musicas-34b84.appspot.com/o/Barbie%20A%20Estrela%20do%20Rock%20(1987).png?alt=media&token=68b97894-e065-4c5b-a46e-63c6a76cc49f"
              alt="barbie"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/musicas-34b84.appspot.com/o/Barbie%20A%20Estrela%20do%20Rock%20(1987).png?alt=media&token=68b97894-e065-4c5b-a46e-63c6a76cc49f"
              alt="barbie"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/musicas-34b84.appspot.com/o/Barbie%20A%20Estrela%20do%20Rock%20(1987).png?alt=media&token=68b97894-e065-4c5b-a46e-63c6a76cc49f"
              alt="barbie"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/musicas-34b84.appspot.com/o/Barbie%20A%20Estrela%20do%20Rock%20(1987).png?alt=media&token=68b97894-e065-4c5b-a46e-63c6a76cc49f"
              alt="barbie"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/musicas-34b84.appspot.com/o/Barbie%20A%20Estrela%20do%20Rock%20(1987).png?alt=media&token=68b97894-e065-4c5b-a46e-63c6a76cc49f"
              alt="barbie"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/musicas-34b84.appspot.com/o/Barbie%20A%20Estrela%20do%20Rock%20(1987).png?alt=media&token=68b97894-e065-4c5b-a46e-63c6a76cc49f"
              alt="barbie"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/musicas-34b84.appspot.com/o/Barbie%20A%20Estrela%20do%20Rock%20(1987).png?alt=media&token=68b97894-e065-4c5b-a46e-63c6a76cc49f"
              alt="barbie"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/musicas-34b84.appspot.com/o/Barbie%20A%20Estrela%20do%20Rock%20(1987).png?alt=media&token=68b97894-e065-4c5b-a46e-63c6a76cc49f"
              alt="barbie"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/musicas-34b84.appspot.com/o/Barbie%20A%20Estrela%20do%20Rock%20(1987).png?alt=media&token=68b97894-e065-4c5b-a46e-63c6a76cc49f"
              alt="barbie"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/musicas-34b84.appspot.com/o/Barbie%20A%20Estrela%20do%20Rock%20(1987).png?alt=media&token=68b97894-e065-4c5b-a46e-63c6a76cc49f"
              alt="barbie"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/musicas-34b84.appspot.com/o/Barbie%20A%20Estrela%20do%20Rock%20(1987).png?alt=media&token=68b97894-e065-4c5b-a46e-63c6a76cc49f"
              alt="barbie"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/musicas-34b84.appspot.com/o/Barbie%20A%20Estrela%20do%20Rock%20(1987).png?alt=media&token=68b97894-e065-4c5b-a46e-63c6a76cc49f"
              alt="barbie"
            />
          </Carousel>
        </section>
      </main>
    </>
  );
}
export default ListFilms;
