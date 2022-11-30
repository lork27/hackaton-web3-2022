import PageRouter from "./PageRouter";
import { URL } from "../api/api-config";
import { MapController } from "./context/MapContext";
import { NotificationsProvider } from "@mantine/notifications";

//TODO: remove this once the api is properly connected
console.log(
  `Api running on: ${process.env.NODE_ENV}\nConnecting to api: ${URL}`
);
function App() {
  return (
    <div className="App">
      <NotificationsProvider position="top-center" limit={3} autoClose={1000}>
        <MapController>
          <PageRouter />
        </MapController>
      </NotificationsProvider>
    </div>
  );
}

export default App;
