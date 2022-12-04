// #TODO: move modal contents dialog to its own component

import {
  Button,
  Card,
  createStyles,
  Group,
  Switch,
  Text,
  useMantineColorScheme,
  LoadingOverlay,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useAuth } from "../context/AuthContext";
import { isEmpty } from "lodash";
import { useState } from "react";
import { useMapController } from "../context/MapContext";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  item: {
    "& + &": {
      paddingTop: theme.spacing.sm,
      marginTop: theme.spacing.sm,
      borderTop: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },
  },

  switch: {
    "& *": {
      cursor: "pointer",
    },
  },

  title: {
    lineHeight: 1,
  },
}));

export function ReportStatusFormDialog(props: any) {
  const { userData } = useAuth();
  const { colorScheme } = useMantineColorScheme();
  const { classes } = useStyles();
  const { navPos } = useMapController();

  const [loading, setLoading] = useState(false);
  const dark = colorScheme === "dark";
  const currentColor = dark ? "orange" : "blue";

  console.log(navPos);

  const handleReportSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (!isEmpty(userData?.verified)) {
        showNotification({
          title: "Thanks for the report!",
          color: "green",
          message: "Report has been verified!",
          autoClose: 5000,
        });
      } else {
        showNotification({
          title: "Thanks for the report!",
          color: "green",
          message:
            "Report has been submited for review by the administrator team",
          autoClose: 5000,
        });
      }
      props.onClose();
    }, 3000);
  };
  return (
    <Card withBorder radius="md" p="xl" className={classes.card}>
      <LoadingOverlay visible={loading} />
      <Text size="lg" className={classes.title} weight={500}></Text>
      What's the situation?
      <Text size="xs" color="dimmed" mt={3} mb="xl">
        Select 1 or more that apply, the report will be sent using your current
        location
      </Text>
      <Group position="apart" className={classes.item} noWrap spacing="xl">
        <div>
          <Text>Power</Text>
          <Text size="xs" color="dimmed">
            There's a power outage issue
          </Text>
        </div>
        <Switch
          onLabel="ON"
          offLabel="OFF"
          className={classes.switch}
          size="lg"
          color={currentColor}
        />
      </Group>
      <Group position="apart" className={classes.item} noWrap spacing="xl">
        <div>
          <Text>Water</Text>
          <Text size="xs" color="dimmed">
            There's an issue related to running water
          </Text>
        </div>
        <Switch
          onLabel="ON"
          offLabel="OFF"
          className={classes.switch}
          size="lg"
          color={currentColor}
        />
      </Group>
      <Group position="apart" className={classes.item} noWrap spacing="xl">
        <div>
          <Text>Road</Text>
          <Text size="xs" color="dimmed">
            A road is blocked or damaged
          </Text>
        </div>
        <Switch
          onLabel="ON"
          offLabel="OFF"
          className={classes.switch}
          size="lg"
          color={currentColor}
        />
      </Group>
      <Group position="right" mt={"xl"}>
        <Button onClick={handleReportSubmit} color={currentColor}>
          Submit report
        </Button>
      </Group>
    </Card>
  );
}
