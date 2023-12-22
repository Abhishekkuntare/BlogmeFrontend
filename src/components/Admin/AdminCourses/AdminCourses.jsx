import {
  Box,
  Button,
  Grid,
  HStack,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Sidebar from "../Sidebar";
import cursor from "../../../assets/cursor.png";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useState } from "react";
import { deleteCourse } from "../../../redux/actions/admin";

const AdminCourses = () => {
  const { loading, error, message } = useSelector((state) => state.admin);
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

  const dispatch = useDispatch();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const courseDetailsHandler = (courseId, title) => {
    onOpen();
  };

  const deleteButtonHandler = (courseId) => {
    dispatch(deleteCourse(courseId));
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
    <Grid
      css={{
        cursor: `url(${cursor}),default`,
      }}
      minH={"100vh"}
      templateColumns={["1fr", "5fr 1fr"]}
    >
      <Box p={["0", "16"]} overflowX="auto">
        <Text fontSize={"xx-large"} fontWeight={700}>
          All Blogs
        </Text>
        <TableContainer w={["100vw", "full"]}>
          <Table variant={"simple"} size="lg">
            <TableCaption>All available courses in the database </TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster </Th>
                <Th>Tittle</Th>
                <Th>Category</Th>
                <Th>Created By</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data &&
                data.map((item) => (
                  <Row
                    courseDetailsHandler={courseDetailsHandler}
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

export default AdminCourses;

function Row({ item, courseDetailsHandler, deleteButtonHandler, loading }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>#{item.title}</Td>
      <Td>
        <Image src={item.poster.url} />
      </Td>
      <Td textTransform={"uppercase"}>{item.category}</Td>
      <Td>{item.createdBy}</Td>

      <Td isNumeric>
        <HStack justifyContent={"flex-end"}>
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
