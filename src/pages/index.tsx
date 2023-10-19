import {
    Box,
    Button,
    Container,
    Flex,
    HStack,
    Icon,
    Image,
    Text,
    VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { getSession } from "next-auth/react";
import Hero from "../components/sections/Hero";
import "../styles/Home.module.css";
import Services from "../components/sections/Services";

const Home: NextPage = () => {
    return (
        <>
            <Flex flexDir="column" alignItems="center" className="container">
                <Hero />
                <Services />
            </Flex>
            {/* Section Hero */}
            {/* <Flex
                justifyContent="center"
                maxW={["100%", "100%", "100%", "100%", "100%", "1600px"]}
                mx="auto"
                position="relative"
                flexDir="column"
            >
                <Hero />
            </Flex>

            <Flex
                justifyContent="center"
                maxW={["100%", "100%", "100%", "100%", "100%", "1600px"]}
                mx="auto"
                position="relative"
                flexDir="column"
                bg="#fff"
                py="4rem"
            > */}
            {/* <NavbarIndex /> */}
            {/* <Flex gap="4rem" justifyContent="center">
                    <ChakraNextImage
                        src="/assets/services.png"
                        h="470px"
                        w="450px"
                        fit="cover"
                    />
                    <VStack>
                        <Flex
                            flexDir="column"
                            px="2rem"
                            fontFamily="secondary"
                            textAlign="center"
                        >
                            <Text fontSize="4xl">
                                Aprende las últimas técnicas en
                            </Text>
                            <Text fontSize="5xl">ARMONIZACIÓN OROFACIAL</Text>
                        </Flex>
                        <Text>Aplicá los conocimientos teóricos aprendidos en nuestras tutorias personalizadas.</Text>
                    </VStack>
                </Flex> */}
            {/* </Flex> */}
            {/* <Flex
                justifyContent="center"
                w="100%"
                maxW={{ base: "100%", md: "80%", lg: "60%" }}
                mx="auto"
                px={4}
                position="relative"
            >
                <ChakraNextImage
                    src="/assets/bg.png"
                    w="100vw"
                    h="100%"
                    maxW="1366px"
                    position="relative"
                    fit="cover"
                />

                <NavbarIndex />
            </Flex>
            <Flex w="100vw" h="100vh" bg="red"></Flex>
 */}
            {/* <Flex justifyContent="center" position="relative">
                <Flex>awdwad</Flex>
                <Flex>
                    <VStack>
                        <Text>
                            INÍCIATE EN EL MUNDO DE LA ARMONIZACIÓN OROFACIAL
                        </Text>
                    </VStack>
                </Flex>
            </Flex> */}
            {/* </Flex> */}

            {/*  <NavbarIndex />
        <IndexPage />
        <AboutPage />
        <CoursesPage />
        <ContactUsPage /> */}
            {/* <Flex
          w="100%"
          p="1rem"
          bg="#dedede"
          alignItems="center"
          px="20%"
          gap="1rem"
          justifyContent="space-between"
          flexDir={["column", "column", "row", "row", "row"]}
        >
          <Flex
            gap="1rem"
            flexDir={{ base: "column", md: "row" }}
            align="center"
          >
            <ChakraNextImage
              src="/assets/logo.webp"
              h="90px"
              w="150px"
              fit="cover"
              alt="logo"
            />
            <Flex
              flexDir="column"
              justifyContent="center"
              align={{ base: "center", md: "start" }}
            >
              <Text
                fontFamily="secondary"
                fontSize={["xl", "xl", "xl", "3xl", "3xl"]}
              >
                ANDREA FINTEN
              </Text>
              <Text
                fontFamily="primary"
                fontSize={["md", "md", "md", "md", "md"]}
                textAlign="center"
              >
                © 2023 Andrea Finten. Todos los derechos rervados
              </Text>
            </Flex>
          </Flex>

          <Flex gap="1rem">
            <Link
              href=""
              target="_blank"
            >
              <Icon
                as={AiOutlineInstagram}
                fontSize={["xl", "xl", "2xl", "2xl", "4xl"]}
              />
            </Link>

            <Icon
              as={HiOutlineMail}
              fontSize={["xl", "xl", "2xl", "2xl", "4xl"]}
            />

            <Icon
              as={AiOutlinePhone}
              fontSize={["xl", "xl", "2xl", "2xl", "4xl"]}
            />
          </Flex>
        </Flex> */}
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
