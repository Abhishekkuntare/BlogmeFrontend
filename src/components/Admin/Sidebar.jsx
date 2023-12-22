import { Button, VStack } from "@chakra-ui/react";
import React from "react";
import { RiAddCircleFill, RiEyeFill, RiUser3Fill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  return (
    <VStack
      spacing={8}
      padding={16}
      boxShadow={"-2px 0 10px rgba(107,70,193,0.5)"}
    >
      <Link to={`/admin/courses`}>
        <Button
          fontSize={"larger"}
          variant="ghost"
          colorScheme={
            location.pathname === "/admin/courses" ? "purple" : "black"
          }
        >
          <RiEyeFill style={{ marign: "4px" }} />
          Courses
        </Button>
      </Link>
      <Link to={`/admin/users`}>
        <Button
          fontSize={"larger"}
          variant="ghost"
          colorScheme={
            location.pathname === "/admin/users" ? "purple" : "black"
          }
        >
          <RiUser3Fill style={{ marign: "4px" }} />
          Users
        </Button>
      </Link>
      <Link to={`/admin/createcourse`}>
        <Button
          fontSize={"larger"}
          variant="ghost"
          colorScheme={
            location.pathname === "/admin/createcourse" ? "purple" : "black"
          }
        >
          <RiAddCircleFill style={{ marign: "4px" }} />
          Create Course
        </Button>
      </Link>
    </VStack>
  );
};

export default Sidebar;

function LinkButton({ url, Icon, text }) {
  return (
    <Link to={`/admin/${url}`}>
      <Button fontSize={"larger"} variant="ghost">
        <Icon style={{ marign: "4px" }} />
        {text}
      </Button>
    </Link>
  );
}
