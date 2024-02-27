import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import WeatherIcons from "../../weatherIcons/WeatherIcons";
import GoogleMap from "../../GoogleMap/GoogleMap";
import gsap from "gsap";
import { useLayoutEffect } from "react";

const WeatherModal = ({
  city,
  currentTemp,
  maxTemp,
  minTemp,
  weatherCode,
  lat,
  lng,
  imgMarker,
}) => {
  useLayoutEffect(() => {
    const tl = gsap.timeline();

    gsap.set(".modal-animate", { opacity: 0 });

    tl.to(".modal-animate", {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "power2.out",
      delay: 0.3,
    });
  }, []);
  return (
    <div className="modal-animate" style={{ width: "100%" }}>
      <Box sx={styles.modalWrapperMap}>
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
        <GoogleMap lat={lat} lng={lng} imgMarker={imgMarker} />
      </Box>
    </div>
  );
};

const styles = {
  modalTitle: {
    fontFamily: "Montserrat",
    fontWeight: "600",
    color: "#ffff",
    fontSize: {
      xs: "20px",
      sm: "25px",
      xl: "25px",
    },
    marginBottom: 4,
    textAlign: {
      xs: "center",
      sm: "flex-start",
      xl: "flex-start",
    },
  },
  modalDescription: {
    fontFamily: "Montserrat",
    fontWeight: "400",
    color: "#ffff",
    fontSize: {
      xs: "16px",
      sm: "20px",
      xl: "20px",
    },
    mb: 1,
  },

  modalWrapper: {
    display: "flex",
    alignItems: {
      xs: "center",
      sm: "flex-start",
      xl: "flex-start",
    },
    width: "100%",
    justifyContent: "space-between",
    gap: {
      xs: "10px",
      sm: "0",
      xl: "0",
    },
    flexDirection: {
      xs: "column",
      sm: "row",
      xl: "row",
    },
  },
  modalWrapperMap: {
    width: "100%",
    display: "flex",
    gap: "50px",
    flexDirection: "column",
  },
};

export default WeatherModal;
