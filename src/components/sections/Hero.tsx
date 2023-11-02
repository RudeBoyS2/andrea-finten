import {
    Box,
    Button,
    Divider,
    Flex,
    HStack,
    Image,
    Text,
} from "@chakra-ui/react";
import React from "react";
import ChakraNextImage from "../ChakraNextImage";

const Hero: React.FC = () => {
    return (
        <>
            <Flex
                maxW="1920px"
                h="auto"
                justifyContent={[
                    "center",
                    "center",
                    "center",
                    "center",
                    "center",
                ]}
                mt="6rem"
                position="relative"
                flexDir={["column", "column", "column", "row", "row"]}
                gap="5rem"
                justifyItems="center"
                py='3rem'
            >
                <Flex
                    flexDir="column"
                    justifyContent="center"
                    maxW="500px"
                    alignContent="center"
                    px={["3rem", "3rem", "0rem", "0rem", "0rem"]}
                    justifyItems="center"
                >
                    <Text fontFamily="primary" fontSize="sm" color="#944141">
                        ARMONIZACION OROFACIAL
                    </Text>
                    <Text fontSize="3xl" fontFamily="primary">
                        INICIATE EN EL MUNDO DE LA
                    </Text>
                    <Text fontSize="3xl" fontFamily="primary">
                        ARMONIZACIÓN OROFACIAL
                    </Text>
                    <Text fontFamily="secondary" mt="1rem">
                        Quiero ofrecerte conocimientos teóricos actualizados,
                        acompañados de práctica clínica para que puedas
                        desarrollar y aplicar en tu consultorio los mejores
                        tratamientos de Armonización Orofacial
                    </Text>
                    <Flex mt="2rem" justifyContent="start" gap="2rem" flexDir='row-reverse'>
                        <Button bg="#dedede" color="#202020" _hover={{ transform: 'scale(1.1)' }} _active={{}}>
                            Consultar
                        </Button>
                        <Button bg='secondary' color='#fff' _hover={{ transform: 'scale(1.1)' }} _active={{}}>Ver cursos</Button>
                    </Flex>
                </Flex>
                <Flex justifyContent='center'>
                    <Image
                        src="/assets/andrea.png"
                        w={["300px", "300px", "400px", "400px", "400px"]}
                        fit="contain"
                    />
                </Flex>
            </Flex>
        </>
    );
};

export default Hero;
