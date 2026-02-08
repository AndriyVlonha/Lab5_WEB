import "./App.css";
import TrafficLights from "./components/TrafficLights";

function App() {
  return (
    <div className="App">
      <h1>Демонстрація світлофорів</h1>
      
      <div style={{ marginTop: "30px" }}>
        <h2>Вертикальний світлофор</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <TrafficLights orientation="vertical" />
        </div>
      </div>

      <div style={{ marginTop: "30px" }}>
        <h2>Горизонтальний світлофор</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <TrafficLights orientation="horizontal" />
        </div>
      </div>
    </div>
  );
}

export default App;