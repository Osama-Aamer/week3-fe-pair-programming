import PageLinks from './PageLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" itemClass="footer-link" />
      <ul className="footer-icons">
        <li>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
            className="footer-icon"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.x.com"
            target="_blank"
            rel="noreferrer"
            className="footer-icon"
          >
            <i className="fab fa-x-twitter"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.squarespace.com/"
            target="_blank"
            rel="noreferrer"
            className="footer-icon"
          >
            <i className="fab fa-squarespace"></i>
          </a>
        </li>
      </ul>
      <p className="copyright">
        copyright © travel tours company <span>{currentYear}</span>. all rights reserved
      </p>
    </footer>
  );
};

export default Footer;