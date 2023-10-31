import { Flex, HStack, Icon, Text } from "@chakra-ui/react";

import ChakraNextImage from "./ChakraNextImage";
import { useTheme } from "@emotion/react";
import NavbarLinkScroll from "./NavbarLinkScroll";
import { FaBars } from "react-icons/fa";

const NavbarIndex: React.FC = () => {
    const theme: any = useTheme();
    return (
        <>
            {/* Desktop navbar */}
            <Flex w="100%" justifyContent="center">
                <Flex
                    alignContent="center"
                    w="100%"
                    bg="#fff"
                    px="2rem"
                    boxShadow="0px 0px 10px 5px #cac9c9"
                    justifySelf="center"
                    position="absolute"
                    zIndex="100"
                    top="0"
                >
                    <ChakraNextImage
                        src="/assets/flor.png"
                        w="70px"
                        h="70px"
                        fit="contain"
                    />
                    <Text
                        textAlign="center"
                        alignSelf="center"
                        fontSize="2xl"
                        fontFamily="secondary"
                    >
                        Andrea Finten
                    </Text>

                    <HStack
                        ml="auto"
                        spacing={5}
                        fontFamily="secondary"
                        fontSize="md"
                        display={["none", "none", "flex", "flex", "flex"]}
                    >
                        <NavbarLinkScroll text="Inicio" path="index" />
                        <NavbarLinkScroll text="Servicios" path="services" />
                        <NavbarLinkScroll text="Cursos" path="courses" />
                        <NavbarLinkScroll text="Contacto" path="contact" />
                    </HStack>
                    <Flex
                        display={["none", "none", "flex", "flex", "flex"]}
                        justifyContent="center"
                        alignSelf="center"
                        ml="3rem"
                        px="2rem"
                        py=".5rem"
                        h="40px"
                        rounded="50px"
                        bg="#944141"
                        boxShadow="0px 0px 5px 3px #dedede"
                    >
                        <Text color="#fff">Iniciar sesión</Text>
                    </Flex>
                    <Icon
                        as={FaBars}
                        fontSize="2xl"
                        ml="auto"
                        alignSelf="center"
                        display={["flex", "flex", "none", "none", "none"]}
                    />
                </Flex>
            </Flex>
        </>
    );
};

export default NavbarIndex;
