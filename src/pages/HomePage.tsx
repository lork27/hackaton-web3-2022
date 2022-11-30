import {
  AspectRatio,
  Stack,
  Text,
  TextInput,
  Slider,
  Notification,
} from "@mantine/core";
// import { Marker, Popup, MapContainer, TileLayer, useMap } from "react-leaflet";
import { PR } from "../types/districts";
import { useViewportSize } from "@mantine/hooks";
import { useMapController } from "../context/MapContext";

import { useState } from "react";
import { Modal, Button, Group, Chip } from "@mantine/core";
import { createStyles } from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";

const useStyles = createStyles(() => ({
  floatButton: {
    zIndex: 10,
    position: "absolute",
    left: 0,
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
    if (currentLocation) {
      setOpened(true);
    } else {
      showNotification({
        title: "Default notification",
        message: "Select a district or municipality first",
      });
    }
  };

  return (
    <AspectRatio ratio={width / height}>
      <>
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title={`Submit report for ${currentLocation?.name}`}
        >
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <TextInput
              withAsterisk
              label="lorem"
              placeholder="Lorem Ipsum"
              {...form.getInputProps("lorem")}
            />
            <TextInput
              label="ipsum"
              placeholder="ipsum"
              {...form.getInputProps("ipsum")}
            />
            <Stack m={20}>
              <Text c="dimmed">Power</Text>
              <Slider
                marks={[
                  { value: 20, label: "20%" },
                  { value: 50, label: "50%" },
                  { value: 80, label: "80%" },
                ]}
              />
            </Stack>
            <Stack mt="md">
              <Chip defaultChecked>Power</Chip>
              <Chip defaultChecked>Running Water</Chip>
              <Chip defaultChecked>something</Chip>
            </Stack>
            <Group position="right" mt="md">
              <Button type="submit">Submit</Button>
            </Group>
          </form>
        </Modal>
        <Group>
          <Button
            className={classes.floatButton}
            onClick={handleReportClick}
            size="lg"
          >
            Report current situation{" "}
            {currentLocation ? `in ${currentLocation.name}` : ""}
          </Button>
        </Group>
      </>
      <iframe
        src={`https://api.maptiler.com/maps/8d1659b0-75bc-4a7e-bf3f-cf5fccd4e0ef/?key=qaioH87PxUIdnaDl3ycV#${zoom}/${x}/${y}`}
      ></iframe>
    </AspectRatio>
  );
}
