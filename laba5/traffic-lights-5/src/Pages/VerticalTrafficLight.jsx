import { useState } from "react";
import TrafficLights from "../components/TrafficLights";
import StatsBar from "../components/StatsBar";
import "./TrafficLightPage.css";

const VerticalTrafficLight = () => {
  const [clicks, setClicks] = useState({
    red: 0,
    yellow: 0,
    green: 0,
  });

  const handleLightClick = (color) => {
    setClicks((prevClicks) => ({
      ...prevClicks,
      [color]: prevClicks[color] + 1,
    }));
  };

  return (
    <div className="traffic-light-page">
      <h1 className="page-title">Вертикальний світлофор</h1>

      <StatsBar
        clicks={clicks}
        orientation="vertical"
        onOrientationChange={() => {}}
      />

      <div className="traffic-light-wrapper">
        <TrafficLights
          orientation="vertical"
          onLightClick={handleLightClick}
        />
      </div>
    </div>
  );
};

export default VerticalTrafficLight;