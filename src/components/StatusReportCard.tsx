import { useMapController } from "../context/MapContext";
import {
  RingProgress,
  Text,
  Paper,
  Center,
  createStyles,
  Stack,
} from "@mantine/core";
import { IconArrowUpRight } from "@tabler/icons";
import { isEmpty, sumBy } from "lodash";
import { useEffect, useState } from "react";
import { Status } from "../types/districts";
const useStyles = createStyles(() => ({
  floatCard: {
    zIndex: 10,
    position: "absolute",
    right: 6,
    top: 6,
    width: 100,
  },
}));

//#TODO: draw the rings and stat based on info within the municipality or district
export function StatusReportCard() {
  const { currentLocation } = useMapController();
  const { classes } = useStyles();
  const [status, setStatus] = useState<Status>({
    iop: 70,
    power: 70,
    roads: 55,
    supplies: 70,
    water: 80,
  });

  useEffect(() => {
    if (
      !isEmpty(currentLocation) &&
      "municipalities" in currentLocation &&
      currentLocation.name !== "Puerto Rico"
    ) {
      const munCount = currentLocation.municipalities.length;
      const iop =
        sumBy(currentLocation.municipalities.map((mun) => mun.status.iop / 4)) /
        munCount;
      const power =
        sumBy(currentLocation.municipalities.map((mun) => mun.status.power)) /
        munCount;
      const roads =
        sumBy(currentLocation.municipalities.map((mun) => mun.status.roads)) /
        munCount;
      const supplies =
        sumBy(
          currentLocation.municipalities.map((mun) => mun.status.supplies)
        ) / munCount;
      const water =
        sumBy(currentLocation.municipalities.map((mun) => mun.status.water)) /
        munCount;

      setStatus({
        iop,
        power,
        roads,
        supplies,
        water,
      });
    } else if (currentLocation) {
      const { iop, power, roads, supplies, water } = currentLocation?.status!;
      setStatus({
        iop: iop / 4,
        power,
        roads,
        supplies,
        water,
      });
    }
  }, [currentLocation?.name]);

  return (
    <Paper withBorder radius="md" p="xs" className={classes.floatCard}>
      <Stack>
        <Text>
          {currentLocation
            ? `${currentLocation.name}'s status`
            : "Puerto Rico's status"}
        </Text>
        {Object.entries(status).map((stat, i) => {
          const color =
            stat[1] > 60 ? "green" : stat[1] > 40 ? "yellow" : "red";
          return (
            <div key={i}>
              <RingProgress
                size={80}
                roundCaps
                thickness={5}
                sections={[{ value: stat[1], color }]}
                label={
                  <Center>
                    <IconArrowUpRight size={22} stroke={1.5} />
                  </Center>
                }
              />

              <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
                {stat[0]}
              </Text>
              <Text weight={700} size="xl">
                {stat[1].toFixed(1)} %
              </Text>
            </div>
          );
        })}
      </Stack>
    </Paper>
  );
}
