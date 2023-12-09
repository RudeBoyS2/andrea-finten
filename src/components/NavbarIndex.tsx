import {
    Button,
    Drawer,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerOverlay,
    Flex,
    HStack,
    Icon,
    Text,
    useDisclosure,
} from "@chakra-ui/react";

import ChakraNextImage from "./ChakraNextImage";
import { useTheme } from "@emotion/react";
import NavbarLinkScroll from "./NavbarLinkScroll";
import { FaBars } from "react-icons/fa";
import { useRef } from "react";

const NavbarIndex: React.FC = () => {
    const theme: any = useTheme();
    const btnRef = useRef();
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    const handler = () => {
        onClose()
    }
    return (
        <>
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <Flex flexDir="column" w='100%' h='100vh' justifyContent='center'  fontSize='2xl' px='2rem' gap='5rem'>
                        <NavbarLinkScroll text="Inicio" path="index" callback={() => handler()}/>
                        <NavbarLinkScroll text="Servicios" path="services" callback={() => handler()}/>
                        <NavbarLinkScroll text="Cursos" path="courses" callback={() => handler()}/>
                        <NavbarLinkScroll text="Contacto" path="contact" callback={() => handler()}/>
                    </Flex>
                </DrawerContent>
            </Drawer>
            {/* Desktop navbar */}
            <Flex w="100%" justifyContent="center" >
                <Flex
                    alignContent="center"
                    w="100%"
                    bg="#fff"
                    px="2rem"
                    boxShadow="0px 0px 10px 5px #cac9c9"
                    justifySelf="center"
                    position="fixed"
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
                    ml='2rem'
                        textAlign="center"
                        alignSelf="center"
                        fontSize="2xl"
                        fontFamily="primary"
                    >
                        Andrea Finten
                    </Text>

                    <HStack
                        ml="auto"
                        spacing={10}
                        fontFamily="secondary"
                        fontSize="md"
                        display={["none", "none", "flex", "flex", "flex"]}
                    >
                        <NavbarLinkScroll text="Inicio" path="index"  />
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
                        cursor='pointer'
                        transition='all .2s ease'
                        _hover={{
                            transform: 'scale(1.02)'
                        }}
                        bg="secondary"
                        boxShadow="0px 0px 5px 3px #dedede"
                    >
                        <Text color="#fff">Iniciar sesión</Text>
                    </Flex>
                    <Icon
                        as={FaBars}
                        fontSize="2xl"
                        ml="auto"
                        alignSelf="center"
                        onClick={onOpen}
                       // ref={btnRef}
                        display={["flex", "flex", "none", "none", "none"]}
                    />
                </Flex>
            </Flex>
        </>
    );
};

export default NavbarIndex;
