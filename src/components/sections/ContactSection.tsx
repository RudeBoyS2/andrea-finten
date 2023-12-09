import {
  Button,
  Flex,
  HStack,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import ChakraNextImage from "../ChakraNextImage";

const ContactSection: React.FC = () => {
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
        <Flex w="50%" justifyContent="end">
          <VStack>
            <Image src="/assets/flor.png" h="200px" fit="contain" alt="logo" />
            <Flex fontFamily="primary" gap="3" fontSize="4xl">
              <Text>Andrea</Text>
              <Text>Finten</Text>
            </Flex>
          </VStack>
        </Flex>
        <Flex w="50%" justifyContent="start">
          <VStack
            w="400px"
            fontFamily="primary"
            textAlign="center"
            bg="#fff"
            p="2rem"
            rounded="10px"
          >
            <Text mb="1rem">
              Para obtener información adicional sobre nuestros cursos,
              contáctanos a través de nuestro correo electrónico o redes
              sociales.
            </Text>
            <Input
              variant="flushed"
              placeholder="Nombre"
              fontFamily="secondary"
            />
            <Input
              variant="flushed"
              placeholder="Correo"
              fontFamily="secondary"
            />
            <Input
              variant="flushed"
              placeholder="Mensaje"
              fontFamily="secondary"
            />
            <HStack spacing={10}>
              <ChakraNextImage
                src="/icons/wpp.png"
                h="100px"
                w="50px"
                fit="contain"
              />
              <ChakraNextImage
                src="/icons/ig.png"
                h="100px"
                w="50px"
                fit="contain"
              />
              <ChakraNextImage
                src="/icons/gmail.png"
                h="100px"
                w="50px"
                fit="contain"
              />
            </HStack>
          </VStack>
        </Flex>
      </Flex>
    </>
  );
};

export default ContactSection;
