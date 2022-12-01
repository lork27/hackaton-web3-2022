import {
  Box,
  Button,
  Group,
  PasswordInput,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";

export function Login() {
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
    <Box sx={{ maxWidth: 400 }} mx="auto">
      <>
        <Text>Login</Text>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps("email")}
          />
          <PasswordInput
            label="Password"
            placeholder="Password"
            description="Password must include at least one letter, number and special character"
            withAsterisk
            {...form.getInputProps("password")}
          />

          <Group position="right" m="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </>
    </Box>
  );
}
