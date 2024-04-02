import { useNavigate } from 'react-router-dom';
import Logo from '../../../public/assets/image/logo-barbie.png';
import './style.css';

function Header() {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/home');
  }

  return (
    <>
      <header>
        <div>
          <img src={Logo} alt="Logo Barbie" className="logo" />
        </div>
        <nav>
          <ul>
            <li onClick={handleClick} className="header-list">
              Home
            </li>
            <li className="header-list">Sobre</li>
          </ul>
        </nav>
      </header>
      <div className="header-line" />
    </>
  );
}

export default Header;
