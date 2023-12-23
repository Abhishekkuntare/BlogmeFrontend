import { Flex, Box, Link, Image, chakra } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogsDeatails = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch(
        `https://blogme-q0gd.onrender.com/api/v1/blog/${id}`
      );
      const res_data = await res.json();
      const { title, category, createdBy, createdAt, description, poster } =
        res_data.blog;
      setTitle(title);
      setDesc(description);
      setCreatedBy(createdBy);
      setCreatedAt(createdAt);
      setImgUrl(poster.url);
      setCategory(category);
    };
    fetchBlogs();
  }, [title, category, createdAt, createdBy, desc, imgUrl]);

  const date = new Date(createdAt);
  const formattedDate = date.toDateString();
  return (
    <>
      <Flex
        bg="#edf3f8"
        p={10}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          maxW={"2xl"}
          mx="auto"
          rounded="lg"
          shadow="md"
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
        >
          <Image
            roundedTop="lg"
            w="full"
            h={64}
            fit="cover"
            src={imgUrl}
            alt="Article"
          />

          <Box p={6}>
            <Box>
              <chakra.span
                fontSize="xs"
                textTransform="uppercase"
                color="brand.600"
                _dark={{
                  color: "brand.400",
                }}
              >
                {category}
              </chakra.span>
              <Link
                display="block"
                color="gray.800"
                _dark={{
                  color: "white",
                }}
                fontWeight="bold"
                fontSize="2xl"
                mt={2}
                _hover={{
                  color: "gray.600",
                  textDecor: "underline",
                }}
              >
                {title}
              </Link>
              <chakra.p
                mt={2}
                fontSize="sm"
                color="gray.600"
                _dark={{
                  color: "gray.400",
                }}
              >
                {desc}
              </chakra.p>
            </Box>

            <Box mt={4}>
              <Flex alignItems="center">
                <Flex alignItems="center">
                  <Image
                    h={10}
                    fit="cover"
                    rounded="full"
                    src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                    alt="Avatar"
                  />
                  <Link
                    mx={2}
                    fontWeight="bold"
                    color="gray.700"
                    _dark={{
                      color: "gray.200",
                    }}
                  >
                    {createdBy}
                  </Link>
                </Flex>
                <chakra.span
                  mx={1}
                  fontSize="sm"
                  color="gray.600"
                  _dark={{
                    color: "gray.300",
                  }}
                >
                  {formattedDate}
                </chakra.span>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default BlogsDeatails;
