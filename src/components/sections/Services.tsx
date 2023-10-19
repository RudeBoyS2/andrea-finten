import { Flex, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { MdOutlinePlayLesson } from "react-icons/md";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { TbBook2 } from "react-icons/tb";
const Services: React.FC = () => {
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
                flexDir={["column", "column", "column", "row", "row"]}
                bg="#fff"
            >
                <Flex
                    py="2rem"
                    pb="4rem"
                    gap="2rem"
                    alignItems="center"
                    fontFamily="primary"
                >
                    <VStack>
                        <Text
                            fontSize="2xl"
                            w="100%"
                            px="3rem"
                            textAlign="center"
                        >
                            Accedé al contenido teórico donde y cuando
                        </Text>
                        <Text
                            fontSize="2xl"
                            w="100%"
                            px="3rem"
                            textAlign="center"
                        >
                            quieras desde el Aula Virtual
                        </Text>
                        <HStack py="2rem" gap="4rem">
                            <VStack>
                                <Icon as={MdOutlinePlayLesson} fontSize="5xl" />
                                <Text>+100</Text>
                                <Text>Subscriptores</Text>
                            </VStack>
                            <VStack>
                                <Icon
                                    as={IoPeopleCircleOutline}
                                    fontSize="5xl"
                                />
                                <Text>+20</Text>
                                <Text>Cursos</Text>
                            </VStack>
                            <VStack>
                                <Icon as={TbBook2} fontSize="5xl" />
                                <Text>+30</Text>
                                <Text>Recursos teóricos</Text>
                            </VStack>
                        </HStack>
                    </VStack>
                </Flex>
            </Flex>
        </>
    );
};

export default Services;
