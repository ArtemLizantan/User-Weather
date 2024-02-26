import Container from "../../../../components/container/Container";
import UserCard from "../../../../components/userCard/UserCard";
import { useFilters } from "../../../../context/DataContext";

import "./userCards.scss";

const UserCards = () => {
  const { usersWithWeather } = useFilters();
  console.log(usersWithWeather);

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
              homepage
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default UserCards;
