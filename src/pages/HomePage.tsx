import { AspectRatio, useMantineColorScheme } from "@mantine/core";
// import { Marker, Popup, MapContainer, TileLayer, useMap } from "react-leaflet";
import { PR } from "../types/districts";
import { useViewportSize } from "@mantine/hooks";
import { useMapController } from "../context/MapContext";

import { useState } from "react";
import { Modal, Button, Group } from "@mantine/core";
import { createStyles } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { StatusReportCard } from "../components/StatusReportCard";
import { ReportStatusFormDialog } from "../components/ReportStatusFormDialog";
import { useAuth } from "../context/AuthContext";

const useStyles = createStyles(() => ({
  floatButton: {
    zIndex: 10,
    position: "absolute",
    left: 0,
    top: 0,
  },

  floatCard: {
    zIndex: 10,
    position: "absolute",
    left: 100,
    top: 0,
  },
}));

export default function HomePage() {
  const { userData } = useAuth();
  const { width, height } = useViewportSize();
  const { currentLocation } = useMapController();
  const { x, y, zoom } = currentLocation?.coordinates ?? PR.coordinates;
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const handleReportClick = () => {
    if (
      currentLocation?.name !== "Puerto Rico" &&
      !("municipalities" in currentLocation!) &&
      userData
    ) {
      setOpened(true);
    } else {
      showNotification({
        title: "Alert",
        message: !userData
          ? "You must be logged in to do a report"
          : "Select a municipality first",

        autoClose: 5000,
      });
    }
  };

  const locationName =
    currentLocation?.name === "Puerto Rico" ? " " : currentLocation?.name;

  return (
    <AspectRatio ratio={width / height}>
      <>
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title={`Submit report for ${locationName}`}
        >
          <ReportStatusFormDialog onClose={setOpened} />
        </Modal>
        <Group>
          <Button
            className={classes.floatButton}
            onClick={handleReportClick}
            size="lg"
            color={dark ? "orange.9" : "blue.5"}
          >
            Report current situation {locationName}
          </Button>
        </Group>
        <Group>
          <StatusReportCard />
        </Group>
      </>
      <iframe
        src={`https://api.maptiler.com/maps/8d1659b0-75bc-4a7e-bf3f-cf5fccd4e0ef/?key=qaioH87PxUIdnaDl3ycV#${zoom}/${x}/${y}`}
      ></iframe>
    </AspectRatio>
  );
}
