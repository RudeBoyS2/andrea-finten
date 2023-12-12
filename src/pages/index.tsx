import {
    AspectRatio,
    Flex,
    Box,
    Text,
    VStack,
    Image,
    Input,
    HStack,
    Icon,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { getSession } from "next-auth/react";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import VideoSection from "../components/sections/VideoSection";
import CoursesSection from "../components/sections/CoursesSection";
import ContactSection from "../components/sections/ContactSection";
import NavbarIndex from "../components/NavbarIndex";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const Home: NextPage = () => {
    return (
        <>
            <Flex
                flexDir="column"
                alignItems="center"
                className="container"
                h="auto"
            >
                <NavbarIndex />
                <Hero />
                <Services />
                <VideoSection />
                <CoursesSection />
                <ContactSection />
                <Flex
                    w="100%"
                    maxW="1920px"
                    py="1.5em"
                    flexDir={["column", "column", "row", "row", "row"]}
                    gap="10rem"
                    alignItems="center"
                    id="foter"
                    bg="#fff"
                    justifyContent="center"
                >
                    <Flex flexDir="column">
                        <Image src="/assets/flor.png" w="100px" alt="logo" />
                        <Flex justify="space-around" align="center" mt="1rem">
                            <Icon
                                as={FaFacebook}
                                fontSize="4xl"
                                fill="#DA7B8E"
                            />
                            <Icon
                                as={AiFillInstagram}
                                fontSize="42px"
                                fill="#DA7B8E"
                            />
                        </Flex>
                    </Flex>
                    <Flex flexDir="column" gap='.5rem' mb='auto'>
                        <Text
                            fontSize="4xl"
                            textAlign="center"
                            fontFamily="primary"
                            color="#DA7B8E"
                        >
                            Links
                        </Text>
                        <Text
                            fontFamily="primary"
                            color="#939090"
                            fontSize="md"
                        >
                            Home
                        </Text>
                        <Text
                            fontFamily="primary"
                            color="#939090"
                            fontSize="md"
                        >
                            Ayuda
                        </Text>
                        <Text
                            fontFamily="primary"
                            color="#939090"
                            fontSize="md"
                        >
                            WhatsApp
                        </Text>
                    </Flex>

                    <Flex flexDir="column" mb='auto'>
                        <Text
                            fontSize="4xl"
                            textAlign="center"
                            fontFamily="primary"
                            color="#DA7B8E"
                        >
                            Contacto
                        </Text>
                        <Text
                            fontFamily="primary"
                            color="#939090"
                            fontSize="md"
                        >
                            Dirección
                        </Text>
                        <Text
                            fontFamily="primary"
                            color="#939090"
                            fontSize="md"
                            mt=".5rem"
                        >
                            +00 0000 000 0
                        </Text>
                    </Flex>
                </Flex>
            </Flex>

            {/*  */}
        </>
    );
};

export async function getServerSideProps() {
    const session = await getSession();

    return {
        props: {
            session,
        },
    };
}

export default Home;
