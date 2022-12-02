import PageRouter from "./PageRouter";
import { MapController } from "./context/MapContext";
import { NotificationsProvider } from "@mantine/notifications";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { useState } from "react";
import { AuthController } from "./context/AuthContext";

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
            <AuthController>
              <MapController>
                <PageRouter />
              </MapController>
            </AuthController>
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  );
}

export default App;
