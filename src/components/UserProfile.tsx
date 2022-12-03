import {
  Box,
  Grid,
  Avatar,
  Stack,
  Text,
  Card,
  useMantineColorScheme,
  Progress,
  SimpleGrid,
  ActionIcon,
} from "@mantine/core";
import { Icon2fa } from "@tabler/icons";
import { isEmpty } from "lodash";
import { useAuth } from "../context/AuthContext";

export function UserProfile() {
  const { userData } = useAuth();
  const userName = `${userData.firstName} ${userData.lastName}`;
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const currentColor = dark ? "orange" : "blue";
  return (
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
          <Text my={"xs"}>User since: {userData?.createdAt.split("T")[0]}</Text>

          <Grid m={1}>
            <Text my={"xs"}>
              {isEmpty(userData?.verified) ? "Not verified" : "Verified"}
            </Text>
            <ActionIcon
              variant="filled"
              title="hola"
              color={currentColor}
              size={20}
              m={"xs"}
            >
              <Icon2fa />
            </ActionIcon>
          </Grid>
          <Text my={"xs"}>Number of reports(verified/pending): 14/20</Text>

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
  );
}
