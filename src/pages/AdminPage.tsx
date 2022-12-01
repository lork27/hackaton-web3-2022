import { Paper, Tabs } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconMessageCircle, IconPhoto, IconSettings } from "@tabler/icons";
import { useState } from "react";
import { useParams } from "react-router-dom";
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

  if (!user) {
    return (
      <Paper m="xl" withBorder>
        <Tabs variant="outline" defaultValue="login">
          <Tabs.List>
            <Tabs.Tab value="login" icon={<IconPhoto size={14} />}>
              Login
            </Tabs.Tab>
            <Tabs.Tab value="register" icon={<IconMessageCircle size={14} />}>
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
}
