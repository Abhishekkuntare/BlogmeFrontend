import { Box, chakra, Text, Icon, Button, Stack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const HomeCom2 = () => {
  return (
    <div>
      <Box px={8} py={18} mx="auto">
        <Box
          w={{
            base: "full",
            md: 11 / 12,
            xl: 9 / 12,
          }}
          mx="auto"
          textAlign={{
            base: "center",
            md: "center",
          }}
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
            The Paris Review: The Daily
            <Text
              display={{
                base: "block",
                lg: "inline",
              }}
              w="full"
              bgClip="text"
              bgGradient="linear(to-r, green.400,purple.500)"
              fontWeight="extrabold"
            >
              customer feedback
            </Text>{" "}
            Brain Pickings
          </chakra.h1>
          <chakra.p
            px={{
              base: 0,
              lg: 24,
            }}
            mb={6}
            fontSize={{
              base: "lg",
              md: "xl",
            }}
            color="gray.600"
            _dark={{
              color: "gray.300",
            }}
          >
            Delve into the world of The Paris Review's Daily section, where
            literature meets daily life. Enjoy literary tidbits, poetry, and
            essays that provide a daily dose of intellectual nourishment for
            readers who appreciate the finer aspects of writing.
          </chakra.p>
          <Stack
            direction={{
              base: "column",
              sm: "row",
            }}
            mb={{
              base: 4,
              md: 8,
            }}
            spacing={2}
            justifyContent={{
              sm: "left",
              md: "center",
            }}
          >
            <Button
              bgGradient="linear(to-r, blue.400,green.200)"
              _hover={{
                bgGradient: "linear(to-r, green.100,blue.200)",
              }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
              width={300}
            >
              <Link to={"/login"}> Book a Demo</Link>
              <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                  clipRule="evenodd"
                />
              </Icon>
            </Button>
          </Stack>
        </Box>
        <Box
          w={{
            base: "full",
            md: 10 / 12,
          }}
          mx="auto"
          mt={20}
          textAlign="center"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <video
            className="home_video"
            style={{ borderRadius: "4%" }}
            width={"70%"}
            muted={true}
            loop={true}
            controls={false}
            autoPlay={true}
            src="https://cdn.dribbble.com/users/688456/videos/15253/comp_1_4.mp4.mp4"
          />
        </Box>
      </Box>
    </div>
  );
};

export default HomeCom2;
