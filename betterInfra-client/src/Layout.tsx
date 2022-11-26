import { useState } from "react";
import {
  AppShell,
  Header,
  Footer,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Navbar,
} from "@mantine/core";

function CustomHeader() {
  //#TODO: add cliclable menu to go to login page, logout button, admind profile page
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <Header height={{ base: 50, md: 70 }} p="md">
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>
        <Text>Better Infra</Text>
      </div>
    </Header>
  );
}
function CustomNavbar() {
  //#TODO: add cliclable links to go to the main(map) page, tracker page
  return <Navbar></Navbar>;
}
function CustomFooter() {
  //#TODO: add cliclable menu to go to login page, logout button, mainpage (map), trackpage
  return <Footer height={30}>Build for web 3.0 november 2022 hackathon</Footer>;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const theme = useMantineTheme();
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      aside={undefined}
      footer={<CustomFooter />}
      header={<CustomHeader />}
    >
      {props.children}
    </AppShell>
  );
}
