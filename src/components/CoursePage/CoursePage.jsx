import { Grid, Box, Heading, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import Loader from "../Layout/Loader";
import { useSelector } from "react-redux";

const CoursePage = () => {
  const [lectureNumber, setLectureNumber] = useState(0);

  const { lectures, loading } = useSelector((state) => state.course);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Grid minH={"90vh"} templateColumns={["1fr", "3fr 1fr"]}>
        <>
          <Box>
            <video
              width={"100%"}
              controls
              src={lectures[lectureNumber].video.url}
              controlsList="nodownload  noremoteplayback"
              disablePictureInPicture
              disableRemotePlayback
            ></video>
            <Heading
              m="4"
              children={`#${lectureNumber + 1} ${
                lectures[lectureNumber].title
              }`}
            />
            <Heading children="Description" m="4" />
            <Text children={`${lectures[lectureNumber].description}`} m={"4"} />
          </Box>
          <VStack>
            {lectures.map((element, index) => (
              <button
                onClick={() => setLectureNumber(index)}
                key={element._id}
                style={{
                  width: "100%",
                  padding: "1rem",
                  textAlign: "center",
                  margin: 0,
                  borderBottom: "1px solid rgba(0,0,0,0.2",
                }}
              >
                <Text noOfLines={1}>
                  #{index + 1} {element.title}
                </Text>
              </button>
            ))}
          </VStack>
        </>
        ) : (
        <Heading children="No Lectures" />
      </Grid>
    </>
  );
};

export default CoursePage;
