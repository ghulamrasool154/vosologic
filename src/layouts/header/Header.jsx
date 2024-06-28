import "./Header.css";
import { Voslogicimages } from "../../feature/Voslogicimages";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="container-xxl">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-4 col-md-4 col-sm-4  col-6">
            <div className="header--logo">
              <Link to="/">
                <img src={Voslogicimages.logo} alt="vologic" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-6">
            <div className="header--nav--icon">
              <img src={Voslogicimages.burguricon} alt="icon" />
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-sm-12">
            <div className="header--button">
              <a href="/" target="_blank" rel="noopener noreferrer">
                get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
