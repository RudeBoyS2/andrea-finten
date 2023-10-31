import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import CourseCard from "../CourseCard";

const CoursesSection: React.FC = () => {
    return (
        <>
            <Flex
                w="100%"
                maxW="1920px"
                flexDir="column"
                bg="#fff"
                pt="5rem"
            >
                <Text textAlign="center" fontFamily="primary" fontSize="2xl">
                    Cursos Disponibles
                </Text>
                <Flex gap="4rem" py="2rem" justifyContent="center" alignItems='center' flexDir={['column', 'column', 'row', 'row', 'row']}>
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
        </>
    );
};

export default CoursesSection;
