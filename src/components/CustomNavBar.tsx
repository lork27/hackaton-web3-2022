import { Navbar, ScrollArea, Text, NavLink } from "@mantine/core";
// import { useState } from "react";
import { useMapController } from "../context/MapContext";
import { Distric } from "../types/districts";

export function CustomNavBar() {
  const { setCurrentLocation, PRdata } = useMapController();
  // const [opened, setOpened] = useState(false);

  const handleNavLinkClick = (location: Distric) => {
    //#TODO: open clicked navlink and close the other ones
    setCurrentLocation(location);
  };
  return (
    <Navbar height={"100%"} p="xs" width={{ base: 300 }}>
      <Navbar.Section mt="xs" ta="center">
        <Text fz="xl" color="blue">
          Puerto Rico's disctrics
        </Text>
      </Navbar.Section>

      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        {PRdata.map((location, i) => {
          return (
            <NavLink
              key={i}
              label={location.name}
              childrenOffset={28}
              defaultOpened={false}
              onClick={() => {
                handleNavLinkClick(location);
              }}
            >
              {location.municipalities.map((municipality, i) => {
                return (
                  <NavLink
                    key={i}
                    label={municipality.name}
                    onClick={() => setCurrentLocation(municipality)}
                  />
                );
              })}
            </NavLink>
          );
        })}
      </Navbar.Section>
    </Navbar>
  );
}
