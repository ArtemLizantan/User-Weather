import { Link } from "react-router-dom";
import UserCard from "../../../../components/userCard/UserCard";
import "./userLocalCards.scss";
import Container from "../../../../components/container/Container";
import gsap from "gsap";
import { useLayoutEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
const UserLocalCards = () => {
  const savedCards = JSON.parse(localStorage.getItem("savedCards")) || [];

  useLayoutEffect(() => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      gsap.utils.toArray(".user-cards__body > *").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: element,
              start: "top 70%",
            },
          }
        );
      });
    } else {
      const tl = gsap.timeline();

      gsap.set(".user-cards__body > *", { opacity: 0 });

      tl.to(".user-cards__body > *", {
        duration: 0.5,
        opacity: 1,
        stagger: 0.2,
        ease: "power2.out",
      });
    }
  }, [savedCards]);

  if (savedCards.length <= 0) {
    return (
      <div className="nothing">
        <div className="nothing__body">
          <div className="nothing__title">There's nothing here</div>
          <Link className="local-link" to={"/"}>
            <ArrowBackIosIcon />
            Go to homepage
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <section className="user-cards">
        <Container>
          <Link className="local-link" to={"/"}>
            <ArrowBackIosIcon />
            Go to homepage
          </Link>
          <div className="user-cards__body">
            {savedCards
              .reverse()
              .map(
                ({
                  city,
                  country,
                  gender,
                  firstname,
                  lastname,
                  state,
                  email,
                  minTemp,
                  picture,
                  maxTemp,
                  currentTemp,
                  weatherCode,
                  id,
                  lat,
                  lng,
                }) => (
                  <UserCard
                    id={id}
                    key={id}
                    firstname={firstname}
                    lastname={lastname}
                    gender={gender}
                    picture={picture}
                    country={country}
                    city={city}
                    state={state}
                    email={email}
                    currentTemp={currentTemp}
                    maxTemp={maxTemp}
                    minTemp={minTemp}
                    weatherCode={weatherCode}
                    lat={lat}
                    lng={lng}
                    imgMarker={picture}
                  />
                )
              )}
          </div>
        </Container>
      </section>
    );
  }
};

export default UserLocalCards;
