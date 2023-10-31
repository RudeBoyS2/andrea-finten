import { AspectRatio, Flex } from "@chakra-ui/react";
import React from "react";

const VideoSection: React.FC = () => {
    return (
        <>
            <Flex
                w="100%"
                maxW="1920px"

                bg="#fff"
                gap="4rem"
                justifyContent='center'
                px='1rem'
            >
                <AspectRatio h="auto" maxH='500px' maxW='600px' w="100%" justifyContent='center' >
                    <iframe
                        title="naruto"
                        src="/assets/video.mp4"
                        allowFullScreen
                    />
                </AspectRatio>
                {/* <Flex w="50%" justifyContent="end">
                        <AspectRatio w="350px" h="350px">
                            <iframe
                                title="naruto"
                                src="/assets/video.mp4"
                                allowFullScreen
                            />
                        </AspectRatio>
                    </Flex>
                    <Flex w="50%">
                        <Flex flexDir='column' textAlign='center' fontSize='3xl' fontFamily='primary'>
                            <Text>Aprende las últimas en </Text>
                            <Text>ARMONIZACIÓN OROFACIAL</Text>
                        </Flex> 
                    </Flex> */}
            </Flex>
        </>
    );
};

export default VideoSection;
