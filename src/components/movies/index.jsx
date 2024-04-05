import { useParams } from 'react-router-dom';
import { images } from '../../data';
import Header from '../header';
import './style.css';

export default function Movie() {
  const { id } = useParams();

  const movie = images.find((image) => image.id === parseInt(id));

  return (
    <>
      <div>
        <Header />
        <div className="container-movie">
          <div className="title-movie">
            <h1>{movie.title}</h1>
          </div>
          <div className="iframe-movie">
            <iframe src={movie.film} allow="autoplay" allowFullScreen />
          </div>
        </div>
      </div>
    </>
  );
}
