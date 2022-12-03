import {
  Grid,
  Avatar,
  Text,
  Card,
  useMantineColorScheme,
  Progress,
  ActionIcon,
  Modal,
} from "@mantine/core";
import { Icon2fa, IconCheck } from "@tabler/icons";
import { isEmpty } from "lodash";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { VerifyDialog } from "../components/VerifyDialog";

export function UserProfile() {
  const { userData } = useAuth();
  const userName = `${userData.firstName} ${userData.lastName}`;
  const { colorScheme } = useMantineColorScheme();
  const [opened, setOpened] = useState(false);
  const dark = colorScheme === "dark";
  const currentColor = dark ? "orange" : "blue";

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Verify account"
      >
        <VerifyDialog />
      </Modal>
      <Card shadow={"md"}>
        <Grid>
          <Grid.Col span={5}>
            <Avatar
              src="https://images.squarespace-cdn.com/content/v1/50a4739ae4b000dda4d98149/1614908536500-RX36GAW4GAGAL2RC3H3E/2.jpg"
              alt="it's me"
              size={230}
              radius={1000}
              m={"auto"}
            />
          </Grid.Col>
          <Grid.Col span={7}>
            <Text color={currentColor} fz="xl" my={"xs"}>
              User Profile
            </Text>
            <Text my={"xs"}>Name: {userName}</Text>
            <Text my={"xs"}>
              User since: {userData?.createdAt?.split("T")[0]}
            </Text>
            <Text my={"xs"}>Number of reports(verified/pending): 14/20</Text>
            <Text my={"xs"}>Number of bad reports: 0/20</Text>
            <Grid m={1}>
              {isEmpty(userData?.verified) ? (
                <>
                  <Text my={"xs"}>Not verified</Text>
                  <ActionIcon
                    variant="filled"
                    title="Click to verify account"
                    color={currentColor}
                    size={20}
                    m={"xs"}
                    onClick={() => setOpened(true)}
                  >
                    <Icon2fa />
                  </ActionIcon>
                </>
              ) : (
                <>
                  <Text my={"xs"}>
                    Verified since:{" "}
                    {userData.verified.verifiedDate.split("T")[0]}
                  </Text>
                  <ActionIcon
                    variant="filled"
                    title="Already verified"
                    color={"green"}
                    size={20}
                    m={"xs"}
                  >
                    <IconCheck />
                  </ActionIcon>
                </>
              )}
            </Grid>

            <Text mt={"xl"}>Prestige level: 8000/10000 (bronze)</Text>
            <Progress
              radius="md"
              size="xl"
              animate
              color={currentColor}
              value={80}
            />
          </Grid.Col>
        </Grid>
      </Card>
    </>
  );
}
