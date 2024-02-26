const WeatherIcons = ({ weatherCode }) => {
  let iconUrl;

  switch (weatherCode) {
    case 0:
      iconUrl = "https://cdn-icons-png.flaticon.com/128/4814/4814268.png";
      break;
    case 1:
    case 2:
    case 3:
      iconUrl = "https://cdn-icons-png.flaticon.com/128/5370/5370273.png";
      break;
    case 45:
    case 48:
      iconUrl = "https://cdn-icons-png.flaticon.com/128/732/732314.png";
      break;
    case 51:
    case 53:
    case 55:
      iconUrl = "https://cdn-icons-png.flaticon.com/128/2675/2675876.png";
      break;
    case 56:
    case 57:
      iconUrl = "https://cdn-icons-png.flaticon.com/128/13882/13882668.png";
      break;
    case 61:
    case 63:
    case 65:
      iconUrl = "https://cdn-icons-png.flaticon.com/128/2469/2469994.png";
      break;
    case 66:
    case 67:
      iconUrl = "https://cdn-icons-png.flaticon.com/128/13615/13615161.png";
      break;
    case 71:
    case 73:
    case 75:
      iconUrl = "https://cdn-icons-png.flaticon.com/128/642/642000.png";
      break;
    case 77:
      iconUrl = "https://cdn-icons-png.flaticon.com/128/3725/3725155.png";
      break;
    case 80:
    case 81:
    case 82:
      iconUrl = "https://cdn-icons-png.flaticon.com/128/1959/1959321.png";
      break;
    case 85:
    case 86:
      iconUrl = "https://cdn-icons-png.flaticon.com/128/13615/13615161.png";
      break;
    case 95:
      iconUrl = "https://cdn-icons-png.flaticon.com/128/9829/9829328.png";
      break;
    case 96:
    case 99:
      iconUrl = "https://cdn-icons-png.flaticon.com/128/5345/5345812.png";
      break;
    default:
      iconUrl = "https://cdn-icons-png.flaticon.com/128/4814/4814268.png";
  }

  return <img src={iconUrl} alt="Weather Icon" />;
};

export default WeatherIcons;
