import React from "react";
import type { Pdf } from "../../types";
import { Flex, Heading, Icon, Link, Button } from "@chakra-ui/react";
import { AiOutlineEye, AiOutlineDownload } from "react-icons/ai";
import ChakraNextImage from "./ChakraNextImage";

type PdfCardProps = {
    pdf: Pdf | undefined;
};

const PdfCard: React.FC<PdfCardProps> = ({pdf}) => {
  const seePdfUrl = pdf?.pdfUrl;
  const downloadPdfUrl = pdf?.pdfUrl.replace("dl=0", "dl=1");

  return (
    <Flex
      key={pdf?._id}
      flexDir="column"
      w="250px"
      minH="370px"
      h="370px"
      align="center"
      bg="white"
      border="3px solid #CD8D8E"
    >
      <ChakraNextImage src="/assets/pdflogo.webp" w="200px" h="50%" />
      <Flex
        flexDir="column"
        align="center"
        justify="space-evenly"
        h="50%"
        w="100%"
        p="4"
        bg="primary"
      >
        <Heading
          as="h3"
          mt="2"
          fontSize={{ base: "xl", xl: "2xl" }}
          textAlign="center"
          w="100%"
          color="white"
        >
          {pdf?.pdfTitle}
        </Heading>
        <Flex gap="2" mt="4">
          <Link href={seePdfUrl} isExternal>
            <Button bg="none" _hover={{bg: ""}} _active={{bg: ""}}>
              <Icon as={AiOutlineEye} h="10" w="10" color="white" _hover={{color: "black"}} transition="all .2s ease" />
            </Button>
          </Link>
          <Link href={downloadPdfUrl} isExternal>
            <Button bg="none" _hover={{bg: ""}} _active={{bg: ""}}>
              <Icon as={AiOutlineDownload} h="10" w="10" color="white" _hover={{color: "black"}} transition="all .2s ease" />
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PdfCard;
