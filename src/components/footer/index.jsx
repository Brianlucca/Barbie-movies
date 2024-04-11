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
            <a
              href="https://github.com/Brianlucca?fbclid=PAAaYt1KhOqU8yAwMwYjC63-m4IDFitYTIRMeWXyiWin5E3BHaZODBKtA_ADc"
              target="_blank"
              rel="noreferrer"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/brian-lucca-cardozo/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
