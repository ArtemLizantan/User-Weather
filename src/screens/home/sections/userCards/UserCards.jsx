import Container from "../../../../components/container/Container";
import UserCard from "../../../../components/userCard/UserCard";
import { useFilters } from "../../../../context/DataContext";
import gsap from "gsap";
import { useEffect, useLayoutEffect } from "react";
import "./userCards.scss";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const UserCards = () => {
  const { usersWithWeather } = useFilters();
  console.log(usersWithWeather);

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
  }, [usersWithWeather]);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [usersWithWeather]);

  return (
    <section className="user-cards">
      <Container>
        <div className="user-cards__body">
          {usersWithWeather.map(({ user, weatherData }) => (
            <UserCard
              id={user.login.uuid}
              key={user.login.uuid}
              firstname={user.name.first}
              lastname={user.name.last}
              gender={user.gender}
              picture={user.picture.large}
              country={user.location.country}
              city={user.location.city}
              state={user.location.state}
              email={user.email}
              currentTemp={weatherData.current.temperature_2m}
              maxTemp={weatherData.daily.temperature_2m_max}
              minTemp={weatherData.daily.temperature_2m_min}
              weatherCode={weatherData.current.weather_code}
              lat={user.location.coordinates.latitude}
              lng={user.location.coordinates.longitude}
              imgURL={user.picture.large}
              homepage
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default UserCards;
