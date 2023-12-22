import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Heading,
  HStack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/user";

const Header = ({ isAuthenticated, user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();

  const logoutHandler = () => {
    onClose();
    dispatch(logout());
  };
  return (
    <>
      <ColorModeSwitcher />
      <Button
        zIndex={"overlay"}
        onClick={onOpen}
        colorScheme={"purple"}
        width={100}
        height={12}
        position={"fixed"}
        top="6"
        left="6"
      >
        <Text>BM</Text>
      </Button>
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay
          backdropFilter={"blur(10px)"}
          backgroundImage={
            "https://cdn.dribbble.com/userupload/7657007/file/original-115826eb84acbe14140752e017eba16e.jpg?resize=1200x851"
          }
        />
        <DrawerContent backgroundColor={"transparent"}>
          <HStack ml={"5"} mt={"65"}>
            <Heading
              fontWeight={"bold"}
              textTransform={"uppercase"}
              color={"#FAT066"}
              textAlign={"center"}
              children="Blog "
              size={["md", "lg", "lg"]}
              fontFamily={"Nothing You Could Do"}
            />
            <Heading
              fontWeight={"bold"}
              textTransform={"uppercase"}
              fontFamily={"Waiting for the Sunrise"}
              color={"#3CBEA9"}
              textAlign={"center"}
              children="me"
              size={["md", "lg", "lg"]}
            />
          </HStack>
          <DrawerBody>
            <VStack spacing={"4"} alignItems="flex-start">
              <Link to={"/"} onClick={onClose}>
                <Button variant={"ghost"} backgroundColor={"purple.500"}>
                  Home
                </Button>
              </Link>
              <Link to={"/courses"} onClick={onClose}>
                <Button backgroundColor={"purple.500"} variant={"ghost"}>
                  Browse All Blogs
                </Button>
              </Link>

              <HStack
                justifyContent={"space-evenly"}
                position="absolute"
                bottom={"2rem"}
                width="80%"
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link to={"/profile"} onClick={onClose}>
                          <Button
                            backgroundColor={"green.300"}
                            variant={"ghost"}
                          >
                            Profile
                          </Button>
                        </Link>
                        <Button
                          backgroundColor={"red.300"}
                          variant={"ghost"}
                          onClick={logoutHandler}
                        >
                          <RiLogoutBoxLine />
                          Logout
                        </Button>
                      </HStack>
                      {user && user.role === "admin" && (
                        <Link to={"/admin/users"} onClick={onClose}>
                          <Button
                            colorScheme={"purple.500"}
                            backgroundColor={"purple"}
                            variant="ghost"
                          >
                            <RiDashboardFill style={{ margin: "4px" }} />
                            Dashboard
                          </Button>
                        </Link>
                      )}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link to={"/login"} onClick={onClose}>
                      <Button colorScheme={"green"}> Login </Button>
                    </Link>
                    <p>OR</p>
                    <Link to={"/register"} onClick={onClose}>
                      <Button colorScheme={"green"}> Sign Up </Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
