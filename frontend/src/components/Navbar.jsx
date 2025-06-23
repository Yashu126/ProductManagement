import {
  Button,
  Container,
  Flex,
  HStack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { IoIosSunny } from "react-icons/io";
import {LuMoon} from "react-icons/lu"

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"100vw"} px={4} bg={useColorModeValue("gray.100", "gray.900")}>
      <Flex
        h={16}
        alignContent={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"capitalize"}
          textAlign={"center"}
          bgClip={"text"}
          py={2}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
        >
          <Link to={"/"}>Product Store</Link>
        </Text>
        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <CiSquarePlus fontSize={20} />
            </Button>
          </Link>

          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoIosSunny /> :<LuMoon /> }
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
