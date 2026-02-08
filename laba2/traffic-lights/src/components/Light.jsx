import PropTypes from "prop-types";

const Light = ({ tlColor = "red" }) => {
  return (
    <div
      style={{
        backgroundColor: tlColor,
        width: 50,
        height: 50,
        borderRadius: "50%",
        margin: 10,
        border: "2px solid #333",
      }}
    ></div>
  );
};

Light.propTypes = {
  tlColor: PropTypes.string,
};

export default Light;