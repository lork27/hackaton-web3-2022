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
import { useAuth } from "../context/AuthContext";

export function Login() {
  const { colorScheme } = useMantineColorScheme();
  const { logIn } = useAuth();
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

  const handleFormSubmit = () => {
    form.validate();
    logIn(form.values);
  };
  return (
    <Box sx={{ maxWidth: 400 }} m="md" mx={"auto"}>
      <Text color={currentColor} fw={700}>
        Login
      </Text>
      <form onSubmit={form.onSubmit(handleFormSubmit)}>
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
