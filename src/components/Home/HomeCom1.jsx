import { chakra, Container, Stack, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function HomeCom1() {
  return (
    <Container maxW={"5xl"} mt={10}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <chakra.h1
          mb={6}
          fontSize={{
            base: "4xl",
            md: "6xl",
          }}
          fontWeight="bold"
          letterSpacing={{
            base: "normal",
            md: "tight",
          }}
          color="gray.900"
          _dark={{
            color: "gray.100",
          }}
        >
          The New Yorker:
          <Text
            display={{
              base: "block",
              lg: "inline",
            }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-l, yellow.400,red.200)"
            fontWeight="extrabold"
          >
            Books & Fiction
          </Text>{" "}
          Literary Hub
        </chakra.h1>
        <Text color={"gray.500"} maxW={"3xl"}>
          Literary Hub is a treasure trove for book enthusiasts. Offering a rich
          blend of book news, author interviews, and thought-provoking essays,
          it's a one-stop hub for staying connected to the ever-evolving world
          of literature
        </Text>
        <video
          className="home_video"
          style={{ borderRadius: "4%" }}
          width={"80%"}
          muted={true}
          loop={true}
          controls={false}
          autoPlay={true}
          src="https://cdn.dribbble.com/users/688456/screenshots/7736469/media/cf17be1417873009e86333fec2394a99.mp4"
        />
        <Stack spacing={6} direction={"row"}>
          <Button
            rounded={"full"}
            px={6}
            bgGradient="linear(to-r, yellow.400,red.200)"
            _hover={{
              bgGradient: "linear(to-r, purple.200,yellow.200)",
            }}
          >
            <Link to={"/login"}>Get Started</Link>
          </Button>
          <Button rounded={"full"} px={6}>
            <Link to={"/blogs"}>Learn more</Link>
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
