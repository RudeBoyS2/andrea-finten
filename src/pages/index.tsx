import {
    AspectRatio,
    Flex,
    Box,
    Text,
    VStack,
    Image,
    Input,
    HStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { getSession } from "next-auth/react";
import Hero from "../components/sections/Hero";
import "../styles/Home.module.css";
import Services from "../components/sections/Services";
import CourseCard from "../components/CourseCard";
import ChakraNextImage from "../components/ChakraNextImage";

const Home: NextPage = () => {
    return (
        <>
            <Flex flexDir="column" alignItems="center" className="container">
                <Hero />
                <Services />
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
                    flexDir={["column", "column", "column", "row", "row"]}
                    bg="#fff"
                    gap="4rem"
                >
                    <AspectRatio h="500px" w="600px">
                        <iframe
                            title="naruto"
                            src="/assets/video.mp4"
                            allowFullScreen
                        />
                    </AspectRatio>
                    {/* <Flex w="50%" justifyContent="end">
                        <AspectRatio w="350px" h="350px">
                            <iframe
                                title="naruto"
                                src="/assets/video.mp4"
                                allowFullScreen
                            />
                        </AspectRatio>
                    </Flex>
                    <Flex w="50%">
                        <Flex flexDir='column' textAlign='center' fontSize='3xl' fontFamily='primary'>
                            <Text>Aprende las últimas en </Text>
                            <Text>ARMONIZACIÓN OROFACIAL</Text>
                        </Flex> 
                    </Flex> */}
                </Flex>
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
                    flexDir={["column", "column", "column", "column", "column"]}
                    bg="#fff"
                    pt="5rem"
                >
                    <Text
                        textAlign="center"
                        fontFamily="primary"
                        fontSize="2xl"
                    >
                        Cursos Disponibles
                    </Text>
                    <Flex gap="4rem" py="2rem" justifyContent="center">
                        <CourseCard
                            src="/assets/inicial.jpg"
                            alt="inicial"
                            title="Acido Hialuronico Inicial"
                            hours={2}
                            description="Acido"
                        />
                        <CourseCard
                            src="/assets/avanzado.jpg"
                            alt="inicial"
                            title="Acido Hialuronico Inicial"
                            hours={2}
                            description="Acido"
                        />
                        <CourseCard
                            src="/assets/toxina.jpg"
                            alt="inicial"
                            title="Acido Hialuronico Inicial"
                            hours={2}
                            description="Acido"
                        />
                    </Flex>
                </Flex>
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
                    bg="#fff"
                    py="5rem"
                >
                    <Flex w="50%" justifyContent="end">
                        <VStack>
                            <Image
                                src="/assets/flor.png"
                                h="200px"
                                fit="cover"
                            />
                            <Flex flexDir="column" fontFamily='primary' fontSize='4xl'>
                                <Text>Andrea</Text>
                                <Text>Finten</Text>
                            </Flex>
                        </VStack>
                    </Flex>
                    <Flex w="50%">
                        <VStack
                            w="400px"
                            fontFamily="primary"
                            textAlign="center"
                            px="3rem"
                        >
                            <Text mb="1rem">
                                Para saber más información acerca de los cursos,
                                consultanos por nuestro email o redes sociales!
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
            </Flex>

            {/*  */}
        </>
    );
};

export async function getServerSideProps() {
    const session = await getSession();

    /* return {
    redirect: {
      destination: "/login",
      permanent: false,
    },
  }; */

    return {
        props: {
            session,
        },
    };
}

export default Home;
