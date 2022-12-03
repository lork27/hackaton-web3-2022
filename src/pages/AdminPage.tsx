import { Paper, Tabs } from "@mantine/core";
import { IconLogin, IconUserPlus } from "@tabler/icons";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { UserProfile } from "../components/UserProfile";
import { useAuth } from "../context/AuthContext";

export default function AdminPage() {
  const { userData } = useAuth();

  if (userData) {
    return <UserProfile />;
  }

  return (
    <Paper m="xl" withBorder mih={700}>
      <Tabs variant="outline" defaultValue="login" w="400">
        <Tabs.List>
          <Tabs.Tab value="login" icon={<IconLogin size={14} />}>
            Login
          </Tabs.Tab>
          <Tabs.Tab value="register" icon={<IconUserPlus size={14} />}>
            Register
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="login" pt="xs">
          <Login />
        </Tabs.Panel>

        <Tabs.Panel value="register" pt="xs">
          <Register />
        </Tabs.Panel>
      </Tabs>
    </Paper>
  );
}
