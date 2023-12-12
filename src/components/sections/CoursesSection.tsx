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
                id='courses'
            >
                <Text textAlign="center" fontFamily="primary" fontSize="2xl">
                    Cursos Disponibles
                </Text>
                <Flex gap="4rem" py="2rem" justifyContent="center" alignItems='center' flexDir={['column', 'column', 'row', 'row', 'row']}>
                    <CourseCard
                        src="/assets/inicial.jpg"
                        alt="Ácido Hialurónico Inicial"
                        title="Ácido Hialurónico Inicial"
                        hours={2}
                        description="Conocimientos básicos"
                    />
                    <CourseCard
                        src="/assets/toxina.jpg"
                        alt="Tóxina Botulínica"
                        title="Tóxina Botulínica"
                        hours={2}
                        description="Todo sobre la toxina botulínica"
                    />
                    <CourseCard
                        src="/assets/avanzado.jpg"
                        alt="Ácido Hialurónico Avanzado"
                        title="Ácido Hialurónico Avanzado"
                        hours={2}
                        description="Conocimientos avanzados"
                    />
                </Flex>
            </Flex>
        </>
    );
};

export default CoursesSection;
