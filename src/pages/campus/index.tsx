import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import Container from "../../components/Container";
import type { NextPage } from "next";
import { useState } from "react";
import { getSession, useSession } from "next-auth/react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { useRouter } from "next/router";
import ChakraNextImage from "../../components/ChakraNextImage";

const Home: NextPage = () => {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const { data: session, status }: any = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login");
    },
  });
  return (
    <>
      <Navbar />
      <Flex w="100%" h="88%" bg="#f1f2f3">
        <Sidebar open={open} setOpen={setOpen} />
        {/* <IndexLayout /> */}
        <Container open={open} setOpen={setOpen}>
          <Flex flexDirection="column" align="center" h="100%">
            <Flex
              bgColor="secondary"
              w="100%"
              h="18%"
              minH="18%"
              align="center"
              justify="center"
              zIndex="0"
              boxShadow="lg"
            ></Flex>
            <Flex
              mt="-4.5rem"
              w="90%"
              h="17%"
              minH="17%"
              bgColor="white"
              zIndex="2"
              borderRadius="md"
              align="center"
              justify="center"
              boxShadow="lg"
            >
              <Heading
                as="h2"
                size={["lg", "xl"]}
                fontWeight="extrabold"
                color="#000"
              >
                Bienvenido/a {session?.user?.name}!
              </Heading>
            </Flex>
            <Flex my={{base: "10", md: "20"}} gap="8" h="65%" w="100%" align="center" justify="space-evenly" flexDir={{base: "column", md: "row"}}>
              
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  console.log(session);
  if (session !== null) {
    return {
      props: {
        session,
      },
    };
  } else {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
}

export default Home;
