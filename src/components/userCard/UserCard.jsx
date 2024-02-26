import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import WeatherIcons from "../weatherIcons/WeatherIcons";
import { useFilters } from "../../context/DataContext";

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
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

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
      });

      localStorage.setItem("savedCards", JSON.stringify(savedCards));
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
          <Box>
            <Typography
              sx={styles.modalTitle}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              Weather in {city}
            </Typography>
            <Typography
              sx={styles.modalDescription}
              id="modal-modal-description"
            >
              Current Temperature: {currentTemp} °C
            </Typography>
            <Typography
              sx={styles.modalDescription}
              id="modal-modal-description"
            >
              Max Temperature: {Math.max(...maxTemp)} °C
            </Typography>
            <Typography
              sx={styles.modalDescription}
              id="modal-modal-description"
            >
              Min Temperature: {Math.min(...minTemp)}°C
            </Typography>
          </Box>
          <Box>
            <WeatherIcons weatherCode={weatherCode} />
          </Box>
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
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    background:
      "linear-gradient(94.78deg, #6880ff 9.27%, #3ca7f4 50.77%, #8c45ff 84.06%)",
    boxShadow: 24,
    padding: 6,
  },
  modalTitle: {
    fontFamily: "Montserrat",
    fontWeight: "600",
    color: "#ffff",
    fontSize: "25px",
    marginBottom: 4,
  },
  modalDescription: {
    fontFamily: "Montserrat",
    fontWeight: "400",
    color: "#ffff",
    fontSize: "20px",
    mb: 1,
  },
};

export default UserCard;
