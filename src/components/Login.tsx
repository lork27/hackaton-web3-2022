import {
  Box,
  Button,
  Group,
  PasswordInput,
  Text,
  TextInput,
  useMantineColorScheme,
} from "@mantine/core";
import { useForm } from "@mantine/form";

export function Login() {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const currentColor = dark ? "orange" : "blue";

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  return (
    <Box sx={{ maxWidth: 400 }} m="md" mx={"auto"}>
      <Text color={currentColor} fw={700}>
        Login
      </Text>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          m="md"
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          m="md"
          label="Password"
          placeholder="Password"
          description="Password must include at least one letter, number and special character"
          withAsterisk
          {...form.getInputProps("password")}
        />

        <Group position="center">
          <Button type="submit" color={currentColor}>
            Submit
          </Button>
        </Group>
      </form>
    </Box>
  );
}
