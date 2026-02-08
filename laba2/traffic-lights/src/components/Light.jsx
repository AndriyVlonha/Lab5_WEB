import PropTypes from "prop-types";

const Light = ({ tlColor = "red", isActive = false }) => {
  const getDimmedColor = (color) => {
    const dimmedColors = {
      red: "#4a0000",      // Maroon (black-red)
      yellow: "#4a4a00",   // black-yellow-grey
      green: "#004a00",    // black-green
    };
    return dimmedColors[color] || "#333";
  };

  const getColor = () => {
    if (!isActive) {
      return getDimmedColor(tlColor);
    }
    return tlColor;
  };

  return (
    <div
      style={{
        backgroundColor: getColor(),
        width: 50,
        height: 50,
        borderRadius: "50%",
        margin: 10,
        border: "2px solid #555",
        boxShadow: isActive ? `0 0 20px ${tlColor}, 0 0 40px ${tlColor}` : "inset 0 2px 5px rgba(0,0,0,0.5)",
        transition: "all 0.3s ease",
      }}
    ></div>
  );
};

Light.propTypes = {
  tlColor: PropTypes.string,
  isActive: PropTypes.bool,
};

export default Light;