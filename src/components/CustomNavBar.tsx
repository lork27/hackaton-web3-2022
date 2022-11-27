import { useState } from "react";
import { Navbar, ScrollArea, Text, NavLink } from "@mantine/core";

// interface CustomNavBarProps {
//   links: { link: string; label: string }[];
// }

export function CustomNavBar() {
  return (
    <Navbar height={"100%"} p="xs" width={{ base: 300 }}>
      <Navbar.Section mt="xs" ta="center">
        <Text fz="xl" color="blue">
          Puerto Rico's disctrics
        </Text>
      </Navbar.Section>

      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        <NavLink label="San Juan" childrenOffset={28}>
          <NavLink label="San Juan 1" />
          <NavLink label="San Juan 2" />
          <NavLink label="San Juan 3" childrenOffset={28} />
        </NavLink>

        <NavLink label="Bayamón" childrenOffset={28} defaultOpened>
          <NavLink label="Lorem Ipsum" />
          <NavLink label="Lorem Ipsum 2" />
          <NavLink label="Lorem Ipsum 3" />
        </NavLink>
      </Navbar.Section>
    </Navbar>
  );
}
