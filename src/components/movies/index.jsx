import { useParams } from 'react-router-dom';
import { images } from '../../data';

export default function Movie() {
  const { id } = useParams();

  const movie = images.find((image) => image.id === parseInt(id));
  console.log(movie);

  return <h1>{movie.title}</h1>;
}
