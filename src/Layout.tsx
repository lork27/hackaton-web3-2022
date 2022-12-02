import { AppShell, useMantineTheme } from "@mantine/core";
import { CustomHeader } from "./components/CustomHeader";
import { CustomFooter } from "./components/CustomFooter";
import { CustomNavBar } from "./components/CustomNavBar";
import { useParams } from "react-router-dom";

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const theme = useMantineTheme();
  const navbar = window.location.href.includes("iop-map");
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
      footer={<CustomFooter />}
      header={<CustomHeader links={links} />}
      navbar={navbar ? <CustomNavBar /> : undefined}
    >
      {props.children}
    </AppShell>
  );
}

const links = [
  { link: "/iop-map", label: "Infra Map" },
  { link: "/aid-track", label: "Aid Status" },
  { link: "/about-us", label: "About us" },
];
