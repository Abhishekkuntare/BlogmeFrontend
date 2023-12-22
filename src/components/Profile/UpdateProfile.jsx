import { Button, Container, Input, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "../../redux/actions/profile";
import { loadUser } from "../../redux/actions/user";

const UpdateProfile = ({ user }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loading, message, error } = useSelector((state) => state.profile);

  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(updateProfile(name, email));
    dispatch(loadUser());
    navigate("/profile");
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
  }, [dispatch, message, error]);

  return (
    <Container py={"16"} minH="90vh">
      <form onSubmit={submitHandler}>
        <Text fontSize={"xx-large"} fontWeight={700} mb={15}>
          Update Profile
        </Text>
        <VStack spacing={8}>
          <Input
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Name"
            type={"text"}
            focusBorderColor="purple.500"
          />
          <Input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            placeholder="abc@gmail.com"
            type={"email"}
            focusBorderColor="purple.500"
          />

          <Button
            isLoading={loading}
            w={"full"}
            colorScheme="purple"
            type="submit"
          >
            Update
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default UpdateProfile;
