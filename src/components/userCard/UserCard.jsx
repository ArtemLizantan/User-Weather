import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useFilters } from "../../context/DataContext";
import CloseBtn from "../../UI/closeBtn/CloseBtn";
import "./userCard.scss";
import WeatherModal from "./weatherModel/WeatherModel";
const UserCard = ({
  id,
  firstname,
  lastname,
  gender,
  picture,
  country,
  city,
  state,
  email,
  idButton,
  currentTemp,
  maxTemp,
  minTemp,
  weatherCode,
  homepage,
  lat,
  lng,
  imgURL
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { countUsersInLocalStorage, setCountUsersInLocalStorage } =
    useFilters();

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    const storedData = localStorage.getItem("savedCards");
    const initialCount = storedData ? JSON.parse(storedData).length : 0;
    setCountUsersInLocalStorage(initialCount);
  }, [countUsersInLocalStorage]);

  const handleSaveToLocalStorage = () => {
    const savedCards = JSON.parse(localStorage.getItem("savedCards")) || [];

    const isAlreadySaved = savedCards.some((card) => card.id === id);

    if (!isAlreadySaved) {
      savedCards.push({
        id,
        firstname,
        lastname,
        gender,
        picture,
        country,
        city,
        state,
        email,
        idButton,
        currentTemp,
        maxTemp,
        minTemp,
        weatherCode,
        lat,
        lng,
        imgURL
      });

      localStorage.setItem("savedCards", JSON.stringify(savedCards));
      const storedData = localStorage.getItem("savedCards");
      const initialCount = storedData ? JSON.parse(storedData).length : 0;
      setCountUsersInLocalStorage(initialCount);
    } else {
      alert("The card has already been saved!");
    }
  };

  return (
    <>
      <div id={id} className="user-card">
        <div className="user-card__body">
          <div className="user-card__image">
            <img src={picture} alt="user-img" className="user-card__img" />
          </div>
        </div>
        <div className="user-card__wrapper-content">
          <div className="user-card__content">
            <h2 className="user-card__name">{firstname + " " + lastname}</h2>
            <h3 className="user-card__text">Email: {email}</h3>
            <h3 className="user-card__text">Gender: {gender}</h3>
            <h3 className="user-card__text">
              Location: {country + ", " + state + ", " + city}
            </h3>
          </div>
          <div className="user-card__buttons">
            {homepage && (
              <Button
                onClick={handleSaveToLocalStorage}
                sx={styles.button}
                size="small"
              >
                Save
              </Button>
            )}
            <Button
              sx={styles.button}
              size="small"
              id={idButton}
              onClick={handleOpenPopup}
            >
              Weather
            </Button>
          </div>
        </div>
      </div>

      <Modal
        open={isPopupOpen}
        onClose={handleClosePopup}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={styles.modalBox}
      >
        <Box sx={styles.modalContent}>
          <CloseBtn onClick={handleClosePopup} />
          <WeatherModal
            city={city}
            currentTemp={currentTemp}
            maxTemp={maxTemp}
            minTemp={minTemp}
            weatherCode={weatherCode}
            lat={lat}
            lng={lng}
            imgURL={imgURL}
          />
        </Box>
      </Modal>
    </>
  );
};

const styles = {
  button: {
    background: "black",
    fontWeight: 700,
    fontFamily: "Montserrat",
    color: "white",
    padding: "10px 20px",
  },
  modalBox: {
    borderRadius: "50px",
  },
  modalContent: {
    position: "absolute",
    top: "50%",
    left: "50%",
    borderRadius: "20px",
    transform: "translate(-50%, -50%)",
    maxWidth: 700,
    flexDirection: "row",
    overflow: "auto",
    maxHeight: {
      xs: "400px",
      md: "800px",
      xl: "800px",
    },
    width: {
      xs: "70%",
      md: "80%",
      xl: "100%",
    },
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    background:
      "linear-gradient(94.78deg, #6880ff 9.27%, #3ca7f4 50.77%, #8c45ff 84.06%)",
    boxShadow: 24,
    padding: 6,
  },
};

export default UserCard;
