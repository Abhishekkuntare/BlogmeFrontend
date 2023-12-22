import { Container, chakra, Stack, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function HomeCom0() {
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
          Best Reading
          <Text
            display={{
              base: "block",
              lg: "inline",
            }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-l, red.400,orange.200)"
            fontWeight="extrabold"
          >
            {""} Blogs and
          </Text>{" "}
          Websites
        </chakra.h1>
        <Text color={"gray.500"} maxW={"3xl"}>
          Goodreads is a premier platform for book lovers, offering personalized
          book recommendations, reviews, and an extensive community of readers.
          Dive into a world of literature, track your reading progress, and
          connect with fellow bibliophiles.
        </Text>
        <video
          className="home_video"
          style={{ borderRadius: "4%" }}
          width={"80%"}
          muted={true}
          loop={true}
          controls={false}
          autoPlay={true}
          src="https://cdn.dribbble.com/users/688456/screenshots/6987081/media/02fa39c89719db95d7650a37f9b3665f.mp4"
        />
        <Stack spacing={6} direction={"row"}>
          <Link to="/courses">
            <Button
              width={[300, 400]}
              bgGradient="linear(to-l, red.400,purple.200)"
              size={"lg"}
              _hover={{
                bgGradient: "linear(to-r, red.200,purple.200)",
              }}
            >
              Explore Now
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
}
