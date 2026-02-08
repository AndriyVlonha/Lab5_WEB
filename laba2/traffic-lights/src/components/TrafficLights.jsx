import { useState, useEffect } from "react";
import Light from "./Light";
import PropTypes from "prop-types";

const TrafficLights = ({ orientation = "vertical" }) => {
  const [activeLight, setActiveLight] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLight((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const containerStyle = {
    display: "flex",
    flexDirection: orientation === "vertical" ? "column" : "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#222",
    padding: "20px",
    borderRadius: "10px",
    margin: "20px",
  };

  return (
    <div style={containerStyle}>
      <Light tlColor="red" isActive={activeLight === 0} />
      <Light tlColor="yellow" isActive={activeLight === 1} />
      <Light tlColor="green" isActive={activeLight === 2} />
    </div>
  );
};

TrafficLights.propTypes = {
  orientation: PropTypes.oneOf(["vertical", "horizontal"]),
};

export default TrafficLights;