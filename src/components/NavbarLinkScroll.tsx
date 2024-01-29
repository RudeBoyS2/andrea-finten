import { Box, Text, useTheme } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { Link } from "react-scroll";
import styles from "../styles/ActiveClass.module.css";
type Props = {
  path: string;
  text: string;
  callback?: () => void;
  fontFamily?: string;
  color: string
};

const NavbarLinkScroll: React.FC<Props> = ({ path, text, callback, fontFamily, color }) => {
  const router = useRouter();
  const theme = useTheme();
  return (
    <>
      <Box
        as={Link}
        to={path}
        spy={true}
        smooth={true}
        duration={500}
        cursor='pointer'
        onClick={callback}
        // @ts-ignore
        activeStyle={{
          color: theme.colors.primary,
          fontWeight: 'bold',
          transition: 'all 0.2s ease'
        }}
      >
        <Text _hover={{ color: '#944141' }} fontFamily={fontFamily} color={color}>{text}</Text>
      </Box>
    </>
  );
};

export default NavbarLinkScroll;
