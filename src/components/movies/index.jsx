import { useParams } from 'react-router-dom';
import { images } from '../../data';
import Header from '../header';

export default function Movie() {
  const { id } = useParams();

  const movie = images.find((image) => image.id === parseInt(id));

  return (
    <>
      <div>
        <Header />
        <h1>{movie.title}</h1>
        <iframe src={movie.film} width="640" height="480" allow="autoplay" />
      </div>
    </>
  );
}
