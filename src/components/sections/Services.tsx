import { Flex, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { MdOutlinePlayLesson } from "react-icons/md";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { TbBook2 } from "react-icons/tb";
import ClientsIcon from "../ClientsIcon";
const Services: React.FC = () => {
    return (
        <>
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
                bg="#fff"
                id='services'
            >
                <Flex
                    py="2rem"
                    pb="4rem"
                    gap="2rem"
                    alignItems="center"
                    fontFamily="primary"
                    justifyContent='center'
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
                        <Flex
                            py="2rem"
                            gap='2rem'
                        >
                            <ClientsIcon icon={MdOutlinePlayLesson} text='Subscriptores' number='+100'/>
                            <ClientsIcon icon={IoPeopleCircleOutline} text='Cursos' number='+20'/>
                            <ClientsIcon icon={TbBook2} text='Recursos teóricos' number='+30'/>
                        </Flex>
                    </VStack>
                </Flex>
            </Flex>
        </>
    );
};

export default Services;
