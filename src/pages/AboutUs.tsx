import { Anchor, Group, Stack, Text } from "@mantine/core";

export default function AboutUs() {
  return (
    <Stack>
      <Group mx={"auto"} style={{ maxWidth: 500 }}>
        <Text size={"xl"} mx={"auto"}>
          Better Infra demo video
        </Text>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/A_J2Rtqkuig"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>

        <Text size={"xl"} mx={"auto"}>
          Better Infra demo video 2
        </Text>
        <Text size={"md"} mx={"auto"} color={"dimmed"}>
          Demo showing the time machine feature enabled by saving a dailly
          snapshop of the data to IPFS
        </Text>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/bw5kKiSNNio"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <Stack>
          <Text size={"xl"}>Links:</Text>
          <Anchor href="https://github.com/lork27/hackaton-web3-2022">
            - Github's repository for the client
          </Anchor>

          <Anchor href="https://docs.google.com/presentation/d/1z5v7N_EWuSNC4EIQU5MocB_6nGvRRDFQ/edit?usp=sharing&ouid=100073410864932767021&rtpof=true&sd=true">
            - Google slides explaining the idea
          </Anchor>
        </Stack>
      </Group>
    </Stack>
  );
}
