import { Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import ChakraNextImage from "../ChakraNextImage";

const Hero: React.FC = () => {
    return (
        <>
            <Flex
                w="100vw"
                maxW="1920px"
                justifyContent={[
                    "center",
                    "center",
                    "center",
                    "center",
                    "center",
                ]}
                position="relative"
                flexDir={["column", "column", "column", "row", "row"]}
                bg="#dedede"
                _after={{
                    content: "''",
                    w: "100%",
                    h: "100px",
                    top: "85%",
                    position: "absolute",
                    bgImage: "/assets/wave.png",
                    bgRepeat: "no-repeat",
                    bgSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <Flex flexDir="column" justifyContent="center" maxW="500px">
                    <Text fontSize="3xl" textAlign="center">
                        INICIATE EN EL MUNDO DE LA
                    </Text>
                    <Text fontSize="3xl" textAlign="center">
                        ARMONIZACIÓN OROFACIAL
                    </Text>
                    <Text fontFamily="secondary" mt="3rem">
                        Quiero ofrecerte conocimientos teóricos actualizados,
                        acompañados de práctica clínica para que puedas
                        desarrollar y aplicar en tu consultorio los mejores
                        tratamientos de Armonización Orofacial
                    </Text>
                    <HStack mt="2rem" justifyContent="center" gap="2rem">
                        <Button colorScheme="red">Consultar</Button>
                        <Button>Ver Más</Button>
                    </HStack>
                </Flex>
                <Image src="/assets/andrea.png" w="400px" fit="contain" />
            </Flex>
        </>
    );
};

export default Hero;
