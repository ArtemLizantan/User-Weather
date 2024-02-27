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
  imgMarker,
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
      <Card id={id} className="user-card" sx={styles.card}>
        <CardContent sx={styles.cardContent1}>
          <CardMedia
            sx={styles.cardMedia}
            component="img"
            image={picture}
            title={firstname}
          />
        </CardContent>
        <CardContent sx={{ minHeight: 175 }}>
          <Typography
            sx={styles.cardContent2}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {firstname + " " + lastname}
          </Typography>
          <Typography
            sx={{ ...styles.cardContent2, marginBottom: 1 }}
            variant="body2"
            color="text.secondary"
          >
            Email: {email}
          </Typography>
          <Typography
            sx={{ ...styles.cardContent2, marginBottom: 1 }}
            variant="body2"
            color="text.secondary"
          >
            Gender: {gender}
          </Typography>
          <Typography
            sx={{ ...styles.cardContent2, marginBottom: 1 }}
            variant="body2"
            color="text.secondary"
          >
            Location: {country + ", " + state + ", " + city}
          </Typography>
        </CardContent>
        <CardActions style={styles.cardActions}>
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
        </CardActions>
      </Card>

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
            imgMarker={imgMarker}
          />
        </Box>
      </Modal>
    </>
  );
};

const styles = {
  card: {
    maxWidth: 370,
    width: "100%",
    background: "#212426",
    borderRadius: "10px",
    overflow: "visible",
    boxShadow: "none",
  },
  cardContent1: {
    background: "#86a8ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
  },
  cardMedia: {
    height: 300,
    maxWidth: 300,
    width: "100%",
    borderRadius: "50%",
    padding: "5px",
  },
  cardContent2: {
    color: "white",
    fontWeight: 700,
    textAlign: "center",
    fontFamily: "Montserrat",
    marginBottom: 2,
  },
  cardActions: {
    background: "#212426",
  },
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
