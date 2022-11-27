import { Footer, Text, Anchor } from "@mantine/core";

export function CustomFooter() {
  return (
    <Footer height={50}>
      <Text m={10} ta="center" c="dimmed">
        Build for the{" "}
        <Anchor href="www.google.com">november 2022 hackathon</Anchor>
      </Text>
    </Footer>
  );
}
