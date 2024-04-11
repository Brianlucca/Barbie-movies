import { useNavigate } from 'react-router-dom';
import Logo from '../../../public/assets/image/logo-barbie.png';
import './style.css';

function Header() {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/');
  }

  return (
    <>
      <header>
        <nav>
          <img
            src={Logo}
            alt="Logo Barbie"
            className="logo"
            onClick={() => handleClick()}
          />
        </nav>
      </header>
      <div className="header-line" />
    </>
  );
}

export default Header;
