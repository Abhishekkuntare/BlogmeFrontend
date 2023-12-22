import {
  Input,
  Container,
  Grid,
  VStack,
  Select,
  Image,
  Button,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Sidebar from "../Sidebar";
import cursor from "../../../assets/cursor.png";
import { fileUploadCss } from "../../Auth/Register";
import { createCourse } from "../../../redux/actions/admin";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import toast from "react-hot-toast";

const CreateCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState("");

  const dispatch = useDispatch();
  const { loading, message, error } = useSelector((state) => state.admin);

  const categories = [
    "Technology",
    "Social ",
    "Sports",
    "News",
    "Coding",
    "Other",
  ];

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("title", title);
    myForm.append("description", description);
    myForm.append("category", category);
    myForm.append("createdBy", createdBy);
    myForm.append("file", image);

    dispatch(createCourse(myForm));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);

  return (
    <Grid
      css={{ cursor: `url(${cursor}),default` }}
      minH={"100vh"}
      templateColumns={["1fr", "5fr 1fr"]}
    >
      <Container py={16}>
        <form onSubmit={submitHandler}>
          <Text fontSize={"xx-large"} fontWeight={700}>
            Create blogs
          </Text>

          <VStack m={"auto"} spacing={8}>
            <Input
              value={title}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              type={"text"}
              focusBorderColor="purple.300"
            />
            <Input
              value={description}
              placeholder="Description"
              type={"text"}
              onChange={(e) => setDescription(e.target.value)}
              focusBorderColor="purple.300"
            />
            <Input
              value={createdBy}
              placeholder="Creator Name"
              onChange={(e) => setCreatedBy(e.target.value)}
              type={"text"}
              focusBorderColor="purple.300"
            />
            <Select
              focusBorderColor="purple.300"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Category</option>
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
            <Input
              accept="image/*"
              required
              id="chooseAvatar"
              type={"file"}
              focusBorderColor="purple.300"
              css={{
                "&::file-selector-button": {
                  ...fileUploadCss,
                  color: "purple",
                },
              }}
              onChange={changeImageHandler}
            />
            {imagePrev && (
              <Image src={imagePrev} boxSize={64} objectFit={"contain"} />
            )}
            <Button
              isLoading={loading}
              w={"full"}
              colorScheme={"purple"}
              type="submit"
            >
              Create
            </Button>
          </VStack>
        </form>
      </Container>
      <Sidebar />
    </Grid>
  );
};

export default CreateCourse;
