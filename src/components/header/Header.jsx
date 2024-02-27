import { Link } from "react-router-dom";
import "./header.scss";
import { useFilters } from "../../context/DataContext";

const Header = () => {
  const { countUsersInLocalStorage } = useFilters();

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__body">
          <Link to={"/home"} className="header__logo">
            UserWeather
          </Link>
          <div className="header__local">
            <span>{countUsersInLocalStorage}</span>
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
