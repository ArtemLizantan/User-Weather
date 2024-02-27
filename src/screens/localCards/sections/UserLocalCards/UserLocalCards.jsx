import { Link } from "react-router-dom";
import UserCard from "../../../../components/userCard/UserCard";
import "./userLocalCards.scss";
import Container from "../../../../components/container/Container";

const UserLocalCards = () => {
  const savedCards = JSON.parse(localStorage.getItem("savedCards")) || [];

  if (savedCards.length <= 0) {
    return (
      <div className="nothing">
        <div className="nothing__body">
          <div className="nothing__title">There's nothing here</div>
          <Link to={"/home"}>Go to homepage</Link>
        </div>
      </div>
    );
  } else {
    return (
      <section className="user-cards">
        <Container>
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
