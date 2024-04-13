import Transition6 from '../../../public/assets/image/transition6.jpeg';
import Transition1 from '../../../public/assets/image/transition1.jpg';
import Transition2 from '../../../public/assets/image/transition2.jpg';
import Transition3 from '../../../public/assets/image/transition3.jpg';
import './style.css';

function TransitioImages() {
  return (
    <>
      <div className="image-slider">
        <img src={Transition6} alt="Barbie Movie" />
        <img src={Transition1} alt="Barbie Movie" />
        <img src={Transition2} alt="Barbie Movie" />
        <img src={Transition3} alt="Barbie Movie" />
      </div>
    </>
  );
}
export default TransitioImages;
