import { Icon, Text, VStack } from "@chakra-ui/react";
import React from "react";

type Props = {
    icon: any;
    text: string;
    number: string;
};

const ClientsIcon: React.FC<Props> = ({ icon, text, number }) => {
    return (
        <>
            <VStack>
                <Icon
                    as={icon}
                    fontSize={["3xl", "3xl", "3xl", "5xl", "5xl"]}
                />
                <Text>{number}</Text>
                <Text fontSize={["sm", "sm", "md", "md" ,"md"]} >{text}</Text>
            </VStack>
        </>
    );
};

export default ClientsIcon;
