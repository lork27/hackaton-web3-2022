import {
  Box,
  Button,
  Group,
  PasswordInput,
  Text,
  TextInput,
  Select,
  useMantineColorScheme,
  LoadingOverlay,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const municipalities = [
  { value: "San Juan", label: "San Juan" },
  { value: "Guaynabo", label: "Guaynabo" },
  { value: "Bayamón", label: "Bayamón" },
];

export function Register() {
  const { registerUser, userData } = useAuth();
  const form: any = useForm({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      municipality: "",
      passwordConfirm: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value === form.values.passwordConfirm ? null : "Passwords must match",
    },
  });

  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const currentColor = dark ? "orange" : "blue";

  const handleFormSubmit = () => {
    form.validate();
    setLoading(true);
    registerUser(form.values);
    if (userData) {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 400 }} m="md" mx="auto">
      <>
        <LoadingOverlay visible={loading} />
        <Text color={currentColor} fw={700}>
          Register
        </Text>
        <form onSubmit={form.onSubmit(handleFormSubmit)}>
          <TextInput
            m="md"
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps("email")}
          />

          <TextInput
            m="md"
            withAsterisk
            label="First Name"
            placeholder="First Name"
            {...form.getInputProps("firstName")}
          />

          <TextInput
            m="md"
            withAsterisk
            label="Last Name"
            placeholder="Last Name"
            {...form.getInputProps("lastName")}
          />
          <Select
            m="md"
            label="Select your municipality of residence"
            searchable
            placeholder="Pick one"
            value={value}
            onChange={setValue}
            data={municipalities}
            {...form.getInputProps("municipality")}
          />
          <PasswordInput
            m="md"
            label="Password"
            placeholder="Password"
            description="Password must include at least one letter, number and special character"
            withAsterisk
            {...form.getInputProps("password")}
          />

          <PasswordInput
            m="md"
            label="Confirm Password"
            placeholder="Confirm Password"
            description="Passwords must match"
            withAsterisk
            {...form.getInputProps("passwordConfirm")}
          />

          <Group position="center" m="xl">
            <Button type="submit" color={currentColor}>
              Submit
            </Button>
          </Group>
        </form>
      </>
    </Box>
  );
}
