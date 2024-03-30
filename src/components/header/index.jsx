import { useNavigate } from 'react-router-dom';
import './style.css';

function Header() {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/home');
  }

  return (
    <>
      <header>
        <nav>
          <ul>
            <li onClick={handleClick}>Home</li>
            <li>Sobre</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
