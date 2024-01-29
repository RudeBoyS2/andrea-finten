import {
    Button,
    Flex,
    HStack,
    Image,
    Input,
    Link,
    Text,
    VStack,
} from "@chakra-ui/react";
import React from "react";
import ChakraNextImage from "../ChakraNextImage";

const ContactSection: React.FC = () => {
    //5493625243921
    return (
        <>
            <Flex
                w="100%"
                maxW="1920px"
                bg="#F2F1EC"
                py="5rem"
                flexDir={["column", "column", "row", "row", "row"]}
                gap="6rem"
                alignItems="center"
                id="contact"
            >
                <Flex
                    w="50%"
                    justifyContent={["end", "end", "end", "end", "end"]}
                >
                    <Flex flexDir="column" w="100%">
                        <Image
                            src="/assets/flor.png"
                            h="200px"
                            fit="contain"
                            alt="logo"
                        />
                        <Text
                            fontFamily="primary"
                            gap="3"
                            fontSize="4xl"
                            textAlign="center"
                        >
                            Andrea Finten
                        </Text>
                    </Flex>
                </Flex>
                <Flex
                    w="50%"
                    justifyContent={[
                        "center",
                        "center",
                        "start",
                        "start",
                        "start",
                    ]}
                >
                    <VStack
                        w="400px"
                        fontFamily="primary"
                        textAlign="center"
                        bg="#fff"
                        p="2rem"
                        rounded="10px"
                    >
                        <Text mb="1rem" w="90%">
                            Para obtener información adicional sobre nuestros
                            cursos, contáctanos a través de nuestro correo
                            electrónico o redes sociales.
                        </Text>
                        <HStack spacing={10}>
                            <Link href="https://wa.link/184mf9" isExternal>
                                <ChakraNextImage
                                    src="/icons/wpp.png"
                                    h="100px"
                                    w="50px"
                                    fit="contain"
                                />
                            </Link>
                            <Link
                                href="https://www.instagram.com/andrea_finten_odontologa/"
                                isExternal
                            >
                                <ChakraNextImage
                                    src="/icons/ig.png"
                                    h="100px"
                                    w="50px"
                                    fit="contain"
                                />
                            </Link>

                            <Link
                                href="mailto:andreafintencapacitaciones@gmail.com"
                                isExternal
                            >
                                <ChakraNextImage
                                    src="/icons/gmail.png"
                                    h="100px"
                                    w="50px"
                                    fit="contain"
                                />
                            </Link>
                        </HStack>
                    </VStack>
                </Flex>
            </Flex>
        </>
    );
};

export default ContactSection;
