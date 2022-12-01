import { AspectRatio, Stack, Text, TextInput, Slider } from "@mantine/core";
// import { Marker, Popup, MapContainer, TileLayer, useMap } from "react-leaflet";
import { PR } from "../types/districts";
import { useViewportSize } from "@mantine/hooks";
import { useMapController } from "../context/MapContext";

import { useState } from "react";
import { Modal, Button, Group } from "@mantine/core";
import { createStyles } from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { StatusReportCard } from "../components/StatusReportCard";
import { ReportStatusFormDialog } from "../components/ReportStatusFormDialog";

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
  const { width, height } = useViewportSize();
  const { currentLocation } = useMapController();
  const { x, y, zoom } = currentLocation?.coordinates ?? PR.coordinates;
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();

  const form = useForm({
    initialValues: {
      lorem: "",
      ipsum: "",
    },
  });

  const handleReportClick = () => {
    if (currentLocation && currentLocation.name !== "Puerto Rico") {
      setOpened(true);
    } else {
      showNotification({
        title: "Alert",
        message: "Select a district or municipality first",
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
          <ReportStatusFormDialog />
        </Modal>
        <Group>
          <Button
            className={classes.floatButton}
            onClick={handleReportClick}
            size="lg"
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
