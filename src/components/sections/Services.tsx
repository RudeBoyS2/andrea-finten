import { Flex, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { MdOutlinePlayLesson } from "react-icons/md";
import { IoPeopleCircleOutline } from "react-icons/io5";
import ClientsIcon from "../ClientsIcon";
import { FaGraduationCap } from "react-icons/fa";
const Services: React.FC = () => {
    return (
        <>
            <Flex
                justifyContent={[
                    "center",
                    "center",
                    "center",
                    "center",
                    "center",
                ]}
                flexDir={["column", "column", "column", "row", "row"]}
                id="services"
                bg="#fff"
                w="100%"
                maxW="1920px"
                gap="4rem"
            >
                <Flex
                    py="4rem"
                    pb="4rem"
                    gap="2rem"
                    alignItems="center"
                    fontFamily="primary"
                    justifyContent="center"
                >
                    <VStack>
                        <Text
                            fontSize={["xl", "xl", "xl", "2xl", "2xl"]}
                            w="100%"
                            px="3rem"
                            textAlign="center"
                        >
                            Accedé al contenido teórico donde y cuando
                        </Text>
                        <Text
                            fontSize={["xl", "xl", "xl", "2xl", "2xl"]}
                            w="100%"
                            px="3rem"
                            textAlign="center"
                        >
                            quieras desde el Aula Virtual
                        </Text>
                    </VStack>
                </Flex>
            </Flex>
            <Flex
                maxW="1920px"
                w="100%"
                justifyContent={[
                    "center",
                    "center",
                    "center",
                    "center",
                    "center",
                ]}
                flexDir={["column", "column", "column", "row", "row"]}
                bg="secondary"
                id="services"
            >
                <Flex
                    py="2rem"
                    justifyContent="space-around"
                    gap={["2rem","3rem","4rem","5rem","6rem"]}
                    fontFamily="primary"
                >
                    <ClientsIcon
                        icon={IoPeopleCircleOutline}
                        text="Alumnos"
                        number="+100"
                    />
                    <ClientsIcon
                        icon={MdOutlinePlayLesson}
                        text="Recursos Teóricos"
                        number="+10"
                    />
                    <ClientsIcon
                        icon={FaGraduationCap}
                        text="Cursos"
                        number="+5"
                    />
                </Flex>
            </Flex>
        </>
    );
};

export default Services;
