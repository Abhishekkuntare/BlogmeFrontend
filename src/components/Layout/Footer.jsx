import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Input,
  IconButton,
  useColorModeValue,
  Heading,
  HStack,
} from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiFillLinkedin } from "react-icons/ai";

const Logo = () => {
  return (
    <HStack>
      <Heading
        fontWeight={"bold"}
        textTransform={"uppercase"}
        color={"#F44066"}
        textAlign={"center"}
        children="Blog "
        size={["lg", "1xl", "2xl"]}
        fontFamily={"Nothing You Could Do"}
      />
      <Heading
        fontWeight={"bold"}
        textTransform={"uppercase"}
        fontFamily={"Waiting for the Sunrise"}
        color={"#399EA9"}
        textAlign={"center"}
        children="me"
        size={["lg", "1xl", "2xl"]}
      />
    </HStack>
  );
};

const ListHeader = () => {
  return <Text fontWeight={"500"} fontSize={"lg"} mb={2}></Text>;
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue("gray.700", "white")} />
            </Box>
            <Text fontSize={"sm"}>© 2023 blogme . All rights reserved</Text>
            <Stack direction={"row"} spacing={6}>
              <a
                label={"Linkdin"}
                href="https://www.linkedin.com/in/abhishek-kuntare-65662421b/"
              >
                <AiFillLinkedin />
              </a>
              <a
                label={"Instagram"}
                href="https://www.instagram.com/abhishekkuntare"
              >
                <FaInstagram />
              </a>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link to={"/#"}>About us</Link>
            <Link to={"/courses"}>course</Link>
            <Link to={"/#"}>Contact us</Link>
            <Link to={"/#"}>Request Course</Link>
            <Link to={"/"}>Home</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Link to={"#"}>Help Center</Link>
            <Link to={"#"}>Terms of Service</Link>
            <Link to={"#"}>Legal</Link>
            <Link to={"#"}>Privacy Policy</Link>
            <Link to={"#"}>Satus</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Stay up to date</ListHeader>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
