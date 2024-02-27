import { Link } from "react-router-dom";
import "./header.scss";
import { useFilters } from "../../context/DataContext";
import gsap from "gsap";
import { useLayoutEffect } from "react";
const Header = () => {
  const { countUsersInLocalStorage } = useFilters();

  useLayoutEffect(() => {
    const tl = gsap.timeline();

    gsap.set(".header__body", { y: "-100%", opacity: 0 });

    tl.to(".header__body", {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "power2.out",
      delay: 1,
    });
  }, []);

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
