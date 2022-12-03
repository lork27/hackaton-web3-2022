import { TextInput, Button, Group, Box, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useAuth } from "../context/AuthContext";

export function VerifyDialog() {
  const form = useForm({
    initialValues: {
      walletAddress: "",
    },
  });

  const { userData, verifyUser } = useAuth();

  const handleVerifyAccount = () => {
    console.log("verify account");
    verifyUser(form.values.walletAddress);
    if (!Error) {
      window.location.reload();
    }
  };

  return (
    <Box mx="auto">
      <form onSubmit={form.onSubmit(handleVerifyAccount)}>
        <TextInput
          withAsterisk
          label="walletAddress"
          placeholder="you wallet address"
          {...form.getInputProps("walletAddress")}
        />

        <Group position="right" mt="md">
          <Button type="submit">Submit and verify your account</Button>
        </Group>
      </form>
    </Box>
  );
}
