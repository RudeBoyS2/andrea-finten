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
                pt='6rem'
            >
                <AspectRatio h="auto" maxH='600px' maxW='700px' w="100%" justifyContent='center' >
                    <iframe
                        title="naruto"
                        src="/assets/video.mp4"
                        allowFullScreen
                    />
                </AspectRatio>
            </Flex>
        </>
    );
};

export default VideoSection;
