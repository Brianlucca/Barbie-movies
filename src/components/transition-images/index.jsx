import Transition10 from '../../../public/assets/image/transition10.jpg';
import Transition5 from '../../../public/assets/image/transition5.jpg';
import Transition6 from '../../../public/assets/image/transition6.jpeg';
import Transition7 from '../../../public/assets/image/transition7.jpeg';
import './style.css';

function TransitioImages() {
  return (
    <>
      <div className="image-slider">
        <img src={Transition5} alt="Barbie Movie" />
        <img src={Transition6} alt="Barbie Movie" />
        <img src={Transition7} alt="Barbie Movie" />
        <img src={Transition10} alt="Barbie Movie" />
      </div>
    </>
  );
}
export default TransitioImages;
