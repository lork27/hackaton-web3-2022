// #TODO: move modal contents dialog to its own component

import {
  Button,
  Chip,
  Group,
  Slider,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";

export function ReportStatusFormDialog() {
  // #NOTE: either pass currentLocation as prop or grab it from the map context
  const form = useForm({
    initialValues: {
      lorem: "",
      ipsum: "",
    },
  });
  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TextInput
        withAsterisk
        label="lorem"
        placeholder="Lorem Ipsum"
        {...form.getInputProps("lorem")}
      />
      <TextInput
        label="ipsum"
        placeholder="ipsum"
        {...form.getInputProps("ipsum")}
      />
      <Stack m={20}>
        <Text c="dimmed">Power</Text>
        <Slider
          marks={[
            { value: 20, label: "20%" },
            { value: 50, label: "50%" },
            { value: 80, label: "80%" },
          ]}
        />
      </Stack>
      <Stack mt="md">
        <Chip defaultChecked>Power</Chip>
        <Chip defaultChecked>Running Water</Chip>
        <Chip defaultChecked>something</Chip>
      </Stack>
      <Group position="right" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
