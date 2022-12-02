import { Footer, Text, Anchor, useMantineColorScheme } from "@mantine/core";

export function CustomFooter() {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <Footer height={50}>
      <Text m={10} ta="center" c="dimmed">
        Build for the{" "}
        <Anchor href="www.google.com" color={dark ? "orange" : "blue"}>
          november 2022 hackathon
        </Anchor>
      </Text>
    </Footer>
  );
}
