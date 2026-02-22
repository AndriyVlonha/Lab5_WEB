import { useState, useEffect } from "react";
import "./App.css";
import TrafficLights from "./components/TrafficLights";
import StatsBar from "./components/StatsBar";
import trafficLightsDataJSON from "./data/trafficLightsData.json";

function App() {
  const [orientation, setOrientation] = useState("vertical");
  const [trafficLightsData, setTrafficLightsData] = useState([]);

  useEffect(() => {
    setTrafficLightsData(trafficLightsDataJSON);
  }, []);

  const handleLightClick = (color) => {
    setTrafficLightsData((prevData) =>
      prevData.map((light) =>
        light.colorName === color
          ? { ...light, clickcount: light.clickcount + 1 }
          : light
      )
    );
  };

  const handleOrientationChange = (newOrientation) => {
    setOrientation(newOrientation);
  };

  // Конвертуємо дані для StatsBar
  const clicks = trafficLightsData.reduce((acc, light) => {
    acc[light.colorName] = light.clickcount;
    return acc;
  }, { red: 0, yellow: 0, green: 0 });

  return (
    <div className="App">
      <h1 className="app-title">Інтерактивний світлофор</h1>

      <StatsBar
        clicks={clicks}
        orientation={orientation}
        onOrientationChange={handleOrientationChange}
      />

      <div className="traffic-light-section">
        <TrafficLights
          orientation={orientation}
          onLightClick={handleLightClick}
        />
      </div>

      <div className="data-display">
        <h3>Дані з бази (JSON)</h3>
        <div className="data-grid">
          {trafficLightsData.map((light) => (
            <div key={light.id} className="data-item">
              <div
                className="color-preview"
                style={{ backgroundColor: light.color }}
              ></div>
              <p><strong>{light.description}</strong></p>
              <p>Кліки: {light.clickcount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;