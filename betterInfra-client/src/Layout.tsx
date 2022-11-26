import { AppShell, useMantineTheme } from "@mantine/core";
import { CustomHeader } from "./components/CustomHeader";
import { CustomFooter } from "./components/CustomFooter";

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
      // navbar={<CustomNavbar />}
      footer={<CustomFooter />}
      header={<CustomHeader links={links} />}
    >
      {props.children}
    </AppShell>
  );
}

const links = [
  { link: "/iop-map", label: "Infra Map" },
  { link: "/aid-tracker", label: "Aid Status" },
];
