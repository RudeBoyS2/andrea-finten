import { Button, Flex } from '@chakra-ui/react';
import React from 'react'

interface TabSwitcherProps {
    tab: string;
    setTab: React.Dispatch<React.SetStateAction<"assignedCourses" | "addCourses">>;
}

const TabSwitcher: React.FC<TabSwitcherProps> = ({
    tab,
    setTab
}) => {
  return (
    <Flex h={{base: "45px", md: "50px"}} w="100%" pl="5" gap="2" my="4">
              <Button
                h={{base: "45px", md: "50px"}}
                fontSize={{base: "sm", md: "lg"}}
                fontFamily="secondary"
                color="white"
                bg={tab === "assignedCourses" ? "primary" : "secondary"}
                _hover={{ bg: "" }}
                _active={{ bg: "" }}
                borderRadius="2xl"
                onClick={() => {
                  if (tab !== "assignedCourses") setTab("assignedCourses");
                }}
              >
                Cursos Asignados
              </Button>
              <Button
                h={{base: "45px", md: "50px"}}
                fontSize={{base: "sm", md: "lg"}}
                fontFamily="secondary"
                color="white"
                bg={tab === "addCourses" ? "primary" : "secondary"}
                _hover={{ bg: "" }}
                _active={{ bg: "" }}
                borderRadius="2xl"
                onClick={() => {
                  if (tab !== "addCourses") setTab("addCourses");
                }}
              >
                Agregar Cursos
              </Button>
            </Flex>
  )
}

export default TabSwitcher