import { Menu, Button, useMantineColorScheme } from "@mantine/core";
import { IconTrash, IconArrowsLeftRight, IconSettings } from "@tabler/icons";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function HeaderMenu() {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button color={dark ? "orange.9" : "blue"}>Profile</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Better Infra</Menu.Label>

        <Menu.Item
          color={dark ? "orange.2" : "blue.7"}
          icon={<IconSettings size={14} />}
          onClick={() => navigate("/admin")}
        >
          My profile
        </Menu.Item>
        <Menu.Item
          color={dark ? "orange.2" : "blue.7"}
          icon={<IconArrowsLeftRight size={14} />}
          onClick={() => {
            logOut();
            window.location.reload();
          }}
        >
          Log out
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item color="red" icon={<IconTrash size={14} />}>
          Delete my account
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
