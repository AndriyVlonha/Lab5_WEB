import PropTypes from "prop-types";
import "./Light.css";

const Light = ({ tlColor = "red", isActive = false, onClick }) => {
  const lightClasses = `light ${tlColor} ${isActive ? "active" : "inactive"}`;

  return <div className={lightClasses} onClick={onClick}></div>;
};

Light.propTypes = {
  tlColor: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Light;