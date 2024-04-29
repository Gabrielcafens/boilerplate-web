import React from 'react';
import { Flex, Text, Box, Image } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="400px"
      bgGradient="linear(to-r, #50C878, #008000)"
    >
      <Box
        p={8}
        maxW="900px"
        borderRadius="xl"
        bg="gray.300"
        boxShadow="xl"
        textAlign="center"
        marginTop="300px"
      >
        <Text fontSize="3xl" fontWeight="bold" color="gray.800">
          Promoção de Loteria!
        </Text>
        <Text fontSize="xl" color="gray.600" mt={4}>
          Ganhe prêmios incríveis esta semana.
        </Text>
        <Box mt={22} textAlign="center"> 
          <Image
            src="https://github.com/Gabrielcafens.png"
            alt="Banner de Loteria"
            width="600px"
            height="300px"
            borderRadius="xl"
            boxShadow="md"
          />
        </Box>
      </Box>
    </Flex>
  );
};
