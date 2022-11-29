import PageRouter from "./PageRouter";
import { URL } from "../api/api-config";
import { MapController } from "./context/MapContext";

//TODO: remove this once the api is properly connected
console.log(
  `Api running on: ${process.env.NODE_ENV}\nConnecting to api: ${URL}`
);
function App() {
  return (
    <div className="App">
      <MapController>
        <PageRouter />
      </MapController>
    </div>
  );
}

export default App;
