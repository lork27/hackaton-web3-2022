import PageRouter from "./PageRouter";
import { URL } from "../api/api-config";
import { MapController } from "./context/MapContext";
import { NotificationsProvider } from "@mantine/notifications";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { useState } from "react";

//TODO: remove this once the api is properly connected
console.log(
  `Api running on: ${process.env.NODE_ENV}\nConnecting to api: ${URL}`
);
function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <div className="App">
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          <NotificationsProvider
            position="top-center"
            limit={3}
            autoClose={1000}
          >
            <MapController>
              <PageRouter />
            </MapController>
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  );
}

export default App;
