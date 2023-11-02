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
import Services from "../components/sections/Services";
import VideoSection from "../components/sections/VideoSection";
import CoursesSection from "../components/sections/CoursesSection";
import ContactSection from "../components/sections/ContactSection";
import NavbarIndex from "../components/NavbarIndex";

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
                    gap="3rem"
                    alignItems="center"
                    id="foter"
                    bg="primary"
                    justifyContent="center"
                >
                    <Flex flexDir="column">
                        <Text
                            fontSize="4xl"
                            textAlign="center"
                            fontFamily="primary"
                        >
                            ANDREA FINTEN
                        </Text>
                        <Text fontFamily="secondary">
                            © 2023 Andrea Finten. Todos los derechos rervados
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
