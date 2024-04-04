import { Github, Linkedin } from 'lucide-react';
import './style.css';

function Footer() {
  return (
    <>
      <footer>
        <div className="container-footer">
          <span title="Criador">
            2024 - <a href="">Brian Lucca</a>
          </span>
          <div className="icon-social">
            <a href="">
              <Github />
            </a>
            <a href="">
              <Linkedin />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
