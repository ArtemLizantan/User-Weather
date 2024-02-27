import CloseIcon from "@mui/icons-material/Close";
import "./closeBtn.scss";
const CloseBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className="close-button">
      <CloseIcon sx={{ color: "#fff" }} />
    </button>
  );
};

export default CloseBtn;
