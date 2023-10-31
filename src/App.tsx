import { Box, Container, Stack, Text } from "@chakra-ui/react";

export default function App() {
  return (
    <Container py={{ base: "16", md: "24" }}>
      <Stack spacing="10" shouldWrapChildren>
        <Box pt="8" pb="16">
          <Stack spacing={{ base: "8", md: "10" }} align="center">
            <Text>Hello World</Text>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
