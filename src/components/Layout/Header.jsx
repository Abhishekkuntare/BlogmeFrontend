import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Heading,
  HStack,
  Image,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { RiDashboardFill, RiLogoutBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/user";
import logoo from "../../assets/logo.png";

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

      <Image
        zIndex={"overlay"}
        position={"fixed"}
        top="6"
        left="6"
        onClick={onOpen}
        width={90}
        src={logoo}
        cursor={"pointer"}
        _hover={{ width: 120, transition: "all 0.5s ease-in-out" }}
      />
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay
          backdropFilter={"blur(10px)"}
          backgroundImage={
            "https://cdn.dribbble.com/users/1432628/screenshots/14969519/media/d668a643e79272cc7f296924e905e680.png?resize=1000x750&vertical=center"
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
              <Link to={"/blogs"} onClick={onClose}>
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
                        <Link to={"/admin/blogs"} onClick={onClose}>
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
