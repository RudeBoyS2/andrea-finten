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
    Link,
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
import NavbarLinkScroll from "../components/NavbarLinkScroll";
import { CiMail } from "react-icons/ci";
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io";
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
                    gap={["3rem", "4rem", "5rem", "10rem", "10rem"]}
                    alignItems="center"
                    id="foter"
                    bg="#fff"
                    justifyContent="center"
                >
                    <Flex flexDir="column">
                        <Image src="/assets/flor.png" w="100px" alt="logo" />
                        <Flex justify="space-around" align="center" mt="1rem" gap='1rem'>
                            <Link
                                href="https://www.instagram.com/andrea_finten_odontologa/"
                                isExternal
                            >
                                <Icon
                                    as={AiFillInstagram}
                                    fontSize="5xl"
                                    fill="#DA7B8E"
                                />
                            </Link>
                            <Link
                                href="https://wa.link/184mf9"
                                isExternal
                            >
                                <Icon
                                    as={IoLogoWhatsapp}
                                    fontSize="5xl"
                                    fill="#DA7B8E"
                                />
                            </Link>
                        </Flex>
                    </Flex>
                    <Flex flexDir="column" gap=".5rem" mb="auto">
                        <Text
                            fontSize="4xl"
                            textAlign="center"
                            fontFamily="primary"
                            color="#DA7B8E"
                        >
                            Links
                        </Text>
                        <NavbarLinkScroll
                            text="Inicio"
                            path="index"
                            fontFamily="primary"
                            color="#717171"
                        />
                        <NavbarLinkScroll
                            text="Servicios"
                            path="services"
                            fontFamily="primary"
                            color="#717171"
                        />
                        <NavbarLinkScroll
                            text="Cursos"
                            path="courses"
                            fontFamily="primary"
                            color="#717171"
                        />
                    </Flex>

                    <Flex
                        flexDir="column"
                        mb="auto"
                        fontFamily="primary"
                        gap=".6rem"
                    >
                        <Text
                            fontSize="4xl"
                            textAlign="center"
                            fontFamily="primary"
                            color="#DA7B8E"
                        >
                            Contacto
                        </Text>

                        <HStack>
                            <Icon
                                as={IoMdMail}
                                fontSize="3xl"
                                fill="secondary"
                            />
                            <Text textAlign="center" color="#717171">
                                andreafintencapacitaciones@gmail.com
                            </Text>
                        </HStack>
                        <HStack>
                            <Icon
                                as={IoLogoWhatsapp}
                                fontSize="3xl"
                                fill="secondary"
                            />
                            <Text textAlign="center" color="#717171">
                                +54 9 3624-723110
                            </Text>
                        </HStack>
                        <HStack>
                            <Icon
                                as={AiFillInstagram}
                                fontSize="3xl"
                                fill="secondary"
                            />
                            <Text textAlign="center" color="#717171">
                                @andrea_finten_odontologa
                            </Text>
                        </HStack>
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
