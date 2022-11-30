import { useMapController } from "../context/MapContext";
import {
  RingProgress,
  Text,
  SimpleGrid,
  Paper,
  Center,
  Group,
  createStyles,
  Stack,
} from "@mantine/core";
import { IconArrowUpRight, IconArrowDownRight } from "@tabler/icons";
const useStyles = createStyles(() => ({
  floatCard: {
    zIndex: 10,
    position: "absolute",
    right: 6,
    top: 6,
    width: 100,
  },
}));

export function StatusReportCard() {
  const { currentLocation } = useMapController();
  const { classes } = useStyles();
  return (
    <Paper withBorder radius="md" p="xs" className={classes.floatCard}>
      <Stack>
        <Text>
          {currentLocation
            ? `${currentLocation.name}'s status`
            : "Puerto Rico's status"}
        </Text>
        <>
          <RingProgress
            size={80}
            roundCaps
            thickness={5}
            sections={[{ value: 90, color: "green" }]}
            label={
              <Center>
                <IconArrowUpRight size={22} stroke={1.5} />
              </Center>
            }
          />

          <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
            {"IOP"}
          </Text>
          <Text weight={700} size="xl">
            {"90%"}
          </Text>
        </>

        <>
          <RingProgress
            size={80}
            roundCaps
            thickness={5}
            sections={[{ value: 60, color: "yellow" }]}
            label={
              <Center>
                <IconArrowUpRight size={22} stroke={1.5} />
              </Center>
            }
          />

          <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
            {"Power Grid"}
          </Text>
          <Text weight={700} size="xl">
            {"60%"}
          </Text>
        </>

        <>
          <RingProgress
            size={80}
            roundCaps
            thickness={5}
            sections={[{ value: 10, color: "red" }]}
            label={
              <Center>
                <IconArrowDownRight size={22} stroke={1.5} />
              </Center>
            }
          />

          <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
            {"Running Water"}
          </Text>
          <Text weight={700} size="xl">
            {"10%"}
          </Text>
        </>
      </Stack>
    </Paper>
  );
}
