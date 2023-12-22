import {
  Badge,
  Container,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { chakra } from "@chakra-ui/react";

const Course = ({ title, imageSrc, creator, description }) => {
  return (
    <VStack className="course" alignItems={["center", "flex-start"]}>
      <Image src={imageSrc} boxSize="60" objectFit={"contain"} />
      <Heading
        size={"sm"}
        textAlign={["center", "left"]}
        maxW="200px"
        fontFamily={"sans-serif"}
        noOfLines={3}
        children={title}
      />
      <Text noOfLines={2} children={description} />
      <HStack>
        <Text
          fontWeight={"bold"}
          textTransform="uppercase"
          children={"Creator: "}
        />
        <Text
          fontFamily={"body"}
          textTransform="uppercase"
          children={creator}
        />
      </HStack>
    </VStack>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState(" ");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("https://blogme-q0gd.onrender.com/api/v1/blogs");
      const res_data = await res.json();
      setData(res_data.blogs);
      console.log(data);
    };
    fetchBlogs();
  }, []);

  return (
    <>
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
            Read the upcoming new blogs
            <Text
              display={{
                base: "block",
                lg: "inline",
              }}
              w="full"
              bgClip="text"
              bgGradient="linear(to-l, blue.400,orange.200)"
              fontWeight="extrabold"
            >
              with all new
            </Text>{" "}
            and intersting topics
          </chakra.h1>
          <Text color={"gray.500"} maxW={"3xl"}>
            <Badge variant={"outline"}>READ</Badge> professional rain Pickings,
            curated by Maria Popova,
            <Badge variant={"outline"}>CREATE</Badge> is a literary treasure
            trove that transcends traditional genres.
            <Badge variant={"outline"}>ThING</Badge>It weaves together
            literature, science, philosophy, and art, offering readers a
            profound and intellectual journey.
          </Text>
          <video
            className="home_video"
            style={{ borderRadius: "4%" }}
            muted={true}
            loop={true}
            controls={false}
            autoPlay={true}
            src="https://cdn.dribbble.com/users/51395/screenshots/16683734/media/baa9750a7828f0276d6fed69307d291f.mp4"
          />
        </Stack>
      </Container>
      <Container minH={"95vh"} maxW="container.lg" paddingY={"8"}>
        <Text
          fontSize={"xxx-large"}
          fontWeight={700}
          mb={20}
          textAlign={"center"}
        >
          All Blogs
        </Text>

        <Stack
          direction={["column", "row"]}
          flexWrap="wrap"
          justifyContent={["flex-start", "space-evenly"]}
          alignItems={["center", "flex-start"]}
        >
          {data.length > 0 ? (
            data.map((item) => (
              <Course
                key={item._id}
                title={item.title}
                description={item.description}
                imageSrc={item.poster.url}
                id={item._id}
                creator={item.createdBy}
              />
            ))
          ) : (
            <Heading mt={4} children="Blogs Not Found !" />
          )}
        </Stack>
      </Container>
    </>
  );
};

export default Courses;
