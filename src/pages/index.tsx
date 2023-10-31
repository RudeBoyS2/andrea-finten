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
import VideoSection from "../components/sections/VideoSection";
import CoursesSection from "../components/sections/CoursesSection";
import ContactSection from "../components/sections/ContactSection";
import NavbarIndex from "../components/NavbarIndex";

const Home: NextPage = () => {
    return (
        <>
            <Flex flexDir="column" alignItems="center" className="container" h='auto'>
                <NavbarIndex />
                <Hero />
                <Services />
                <VideoSection />
                <CoursesSection />
                <ContactSection />
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
