import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import WeatherIcons from "../../weatherIcons/WeatherIcons";

const WeatherModal = ({ city, currentTemp, maxTemp, minTemp, weatherCode }) => {
  return (
    <Box sx={styles.modalWrapper}>
      <Box>
        <Typography
          sx={styles.modalTitle}
          id="modal-modal-title"
          variant="h6"
          component="h2"
        >
          Weather in {city}
        </Typography>
        <Typography sx={styles.modalDescription} id="modal-modal-description">
          Current Temperature: {currentTemp} °C
        </Typography>
        <Typography sx={styles.modalDescription} id="modal-modal-description">
          Max Temperature: {Math.max(...maxTemp)} °C
        </Typography>
        <Typography sx={styles.modalDescription} id="modal-modal-description">
          Min Temperature: {Math.min(...minTemp)}°C
        </Typography>
      </Box>
      <Box>
        <WeatherIcons weatherCode={weatherCode} />
      </Box>
    </Box>
  );
};

const styles = {
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
  modalWrapper: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
};

export default WeatherModal;
