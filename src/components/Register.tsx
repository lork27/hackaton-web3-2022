import {
  Box,
  Button,
  Group,
  PasswordInput,
  Text,
  TextInput,
  Select,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";

import { PRdata } from "../types/districts";

//#TODO: change this mapception to lodash to correctly create the data array for select
// should look lile [{value: municipality.name, label: municipality.name}]

// const municipalities = PRdata.map((district) =>
//   district.municipalities.map((municipality) => municipality.name)
// ).flat(1);
// console.log({ municipalities });

const municipalities = [
  { value: "San Juan", label: "San Juan" },
  { value: "Guaynabo", label: "Guaynabo" },
  { value: "Bayamón", label: "Bayamón" },
];

export function Register() {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      name: "",
      lastName: "",
      passwordConfirm: "",
      location: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  const [value, setValue] = useState<string | null>(null);

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <>
        <Text>Register</Text>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps("email")}
          />

          <TextInput
            withAsterisk
            label="First Name"
            placeholder="First Name"
            {...form.getInputProps("name")}
          />

          <TextInput
            withAsterisk
            label="Last Name"
            placeholder="Last Name"
            {...form.getInputProps("lastName")}
          />

          <Select
            label="Select your municipality of residence"
            searchable
            placeholder="Pick one"
            value={value}
            onChange={setValue}
            data={municipalities}
          />
          <PasswordInput
            label="Password"
            placeholder="Password"
            description="Password must include at least one letter, number and special character"
            withAsterisk
            {...form.getInputProps("password")}
          />

          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm Password"
            description="Passwords must match"
            withAsterisk
            {...form.getInputProps("passwordConfirm")}
          />

          <Group position="right" m="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </>
    </Box>
  );
}
