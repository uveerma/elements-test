import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [loadkar, setLoadkar] = useState(false);
  const router = useRouter();

  const sessionHandler = async () => {
    setLoadkar(true);
    const { data } = await axios.post("/api/session/");
    const url = data.redirect_url.replace("checkout", "pos");
    setLoadkar(false);
    router.push(url);
  };

  return (
    <>
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <Image
              rounded={"md"}
              alt={"product image"}
              src={
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png"
              }
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ base: "100%", sm: "400px", lg: "500px" }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              >
                Nike Air Force - $0.1
              </Heading>
            </Box>

            <Stack
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text color={"gray.800"} fontSize={"2xl"} fontWeight={"300"}>
                  The radiance lives on in the Nike Air Force 1 &apos;07, the
                  basketball original that puts a fresh spin on what you know
                  best!{" "}
                </Text>
              </VStack>
            </Stack>
            <Stack direction="row" spacing={4}>
              <Button
                cursor={"pointer"}
                colorScheme="purple"
                mr={3}
                width="200px"
                as="b"
                borderRadius={8}
                isLoading={loadkar}
                onClick={sessionHandler}
              >
                Pay with Solana
              </Button>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  );
}
