import { Link } from "react-router-dom";
import Container from "../container/Container";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__body">
          <Link to={"/home"} className="header__logo">
            UserWeather
          </Link>
          <div className="header__local">
            <span>0</span>
            <Link className="header__link" to={"/home/local"}>
              LocalStorage
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
