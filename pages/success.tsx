import {
  Container,
  Card,
  Heading,
  Image,
} from "@chakra-ui/react";

export default function Home() {

  return (
    <>
      <Container maxW={"7xl"}>
        <Card align="center" py={20} mt={200}>
        <Image
            src={'/thunder.svg'}
            alt="thunder"
            h="32"
          />
          <Heading size="md" pt={5}>Payment Successful 🎉</Heading>
        </Card>
      </Container>
    </>
  );
}
