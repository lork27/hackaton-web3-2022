import { Navbar, ScrollArea, Text, NavLink } from "@mantine/core";
import { useMapController } from "../context/MapContext";

export function CustomNavBar() {
  const { setCurrentLocation, currentLocation, PRdata } = useMapController();
  console.log("current location: ", currentLocation);
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
              onClick={() => setCurrentLocation(location)}
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
