import "./Footer.css";
import { Voslogicimages } from "../../feature/Voslogicimages";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="footer--top--left">
              <div className="footer--logo">
                <img
                  src={Voslogicimages.footerglogo}
                  alt="voslogic"
                  className="img-fluid"
                />
              </div>
              <div className="footer--social--links">
                <span className="foot--iconss">
                  <i className="fa-brands fa-facebook-f"></i>
                </span>
                <span className="foot--iconss">
                  <i className="fa-brands fa-instagram"></i>
                </span>
                <span className="foot--iconss">
                  <i className="fa-brands fa-twitter"></i>
                </span>
                <span className="foot--iconss">
                  <i className="fa-brands fa-whatsapp"></i>
                </span>
              </div>
              <div className="footer--button">
                <a href="/" target="_blank" rel="noopener noreferrer">
                  get started
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6  col-md-6 col-sm-6 col-12">
            <div className="footer--top--right">
              <div className="footer--linkss">
                <ul>
                  <li>
                    <Link to="/">About us</Link>
                  </li>
                  <li>
                    <Link to="Compareus">compare us</Link>
                  </li>

                  <li>
                    <Link to="Whatwedo">what we do</Link>
                  </li>
                  <li>
                    <Link to="/">support@voslogic.com</Link>
                  </li>
                  <li>
                    <Link to="/">312 w. 2nd st</Link>
                  </li>
                  <li>
                    <Link to="/">casper Wu 82601</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row footer--bottom--section">
          <div className="col">
            <div className="footer--btm--section--linkss">
              <ul>
                <li>
                  <a href="/conv" target="_blank" rel="noopener noreferrer">
                    CONVERSATIONAL{" "}
                  </a>
                </li>
                <li>
                  <a href="const" target="_blank" rel="noopener noreferrer">
                    CONSISTENT
                  </a>
                </li>
                <li>
                  <a href="const" target="_blank" rel="noopener noreferrer">
                    COMPLIANT
                  </a>
                </li>
                <li>
                  <a href="const" target="_blank" rel="noopener noreferrer">
                    COST-EFFECTIVE
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
