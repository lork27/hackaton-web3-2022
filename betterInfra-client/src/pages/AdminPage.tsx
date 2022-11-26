import {
  TextInput,
  Button,
  Group,
  Box,
  PasswordInput,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { LogIn } from "../components/LogIn";

export default function AdminPage() {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const [isAuth, setIsAuth] = useState(undefined);

  if (isAuth) {
    return (
      <>
        <h1>Admin profile page</h1>
      </>
    );
  }

  return <LogIn />;
}
