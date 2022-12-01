import { Paper, Tabs } from "@mantine/core";
import { IconLogin, IconUserPlus } from "@tabler/icons";
import { useState } from "react";
import { Login } from "../components/Login";
import { Register } from "../components/Register";

export default function AdminPage() {
  const [user, setUser] = useState(false);

  if (user) {
    return (
      <>
        <h1>
          User Loged in! this will show their profile where they will be able to
          comfirm their account and change stuff
        </h1>
      </>
    );
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
