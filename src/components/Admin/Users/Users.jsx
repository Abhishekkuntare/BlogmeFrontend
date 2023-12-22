import {
  Box,
  Button,
  Grid,
  HStack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import Sidebar from "../Sidebar";
import cursor from "../../../assets/cursor.png";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteUser,
  getAllUsers,
  updateUserRole,
} from "../../../redux/actions/admin";
import toast from "react-hot-toast";

const Users = () => {
  const { users, loading, message, error } = useSelector(
    (state) => state.admin
  );
  const dispatch = useDispatch();

  const updateHandler = (userId) => {
    dispatch(updateUserRole(userId));
  };
  const deleteButtonHandler = (userId) => {
    dispatch(deleteUser(userId));
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
    dispatch(getAllUsers());
  }, [dispatch, message, error]);

  return (
    <Grid
      css={{
        cursor: `url(${cursor}),default`,
      }}
      minH={"100vh"}
      templateColumns={["1fr", "5fr 1fr"]}
    >
      <Box p={["0", "16"]} overflowX="auto">
        <Text fontSize={"xx-large"} fontWeight={700}>
          All Users
        </Text>
        <TableContainer w={["100vw", "full"]}>
          <Table variant={"simple"} size="lg">
            <TableCaption>All available users in the database </TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Subscription</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users &&
                users.map((item) => (
                  <Row
                    updateHandler={updateHandler}
                    deleteButtonHandler={deleteButtonHandler}
                    key={item._id}
                    item={item}
                    loading={loading}
                  />
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default Users;

function Row({ item, updateHandler, deleteButtonHandler, loading }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td>
        {item.subscription && item.subscription.status === "active"
          ? "Active"
          : "Not Active"}
      </Td>
      <Td isNumeric>
        <HStack justifyContent={"flex-end"}>
          <Button
            isLoading={loading}
            variant={"outline"}
            color="purple.500"
            onClick={() => updateHandler(item._id)}
          >
            Change Role
          </Button>
          <Button
            isLoading={loading}
            color={"purple.600"}
            onClick={() => deleteButtonHandler(item._id)}
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}
