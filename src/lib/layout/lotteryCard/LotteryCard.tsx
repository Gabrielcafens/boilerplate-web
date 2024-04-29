import React, { useState } from 'react';
import {
  Box,
  Text,
  Button,
  NumberInput,
  NumberInputField,
  Center,
  Flex,
  Stack,
  Spacer,
  ChakraProvider,
  Icon,
  useColorModeValue,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';

const LotteryCard: React.FC = () => {
  const [quantidadeBilhetes, setQuantidadeBilhetes] = useState<number>(1);
  const [bilhetesReservados, setBilhetesReservados] = useState<number>(0);
  const [valorAdicional, setValorAdicional] = useState<number>(0);

  const handleQuantidadeBilhetesChange = (value: string) => {
    const quantidade: number = parseInt(value);
    setQuantidadeBilhetes(quantidade);
  };

  const handleAdicionarBilhete = (quantidade: number): void => {
    setQuantidadeBilhetes(quantidadeBilhetes + quantidade);
  };

  const handleRemoverBilhete = (): void => {
    if (quantidadeBilhetes > 1) {
      setQuantidadeBilhetes(quantidadeBilhetes - 1);
    }
  };

  const handleReservarBilhetes = (): void => {
    console.log(`Usuário deseja comprar ${quantidadeBilhetes} bilhetes`);
    setBilhetesReservados(quantidadeBilhetes);
  };

  const handleWhatsAppClick = () => {
    const whatsappURL = 'https://wa.me/NUMERODEWHATSAPP'; // Substitua pelo número do WhatsApp
    window.open(whatsappURL, '_blank');
  };

  const handleValorAdicionalChange = (value: string) => {
    const valor: number = parseFloat(value);
    setValorAdicional(valor);
  };

  const cardBgColor = useColorModeValue('white', 'gray.300');

  return (
    <ChakraProvider>
      <Center height="120vh">
        <Card maxW="60rem" boxShadow="md" p={5} overflow="hidden">
          <Stack spacing={8} direction="column" alignItems="center">
            {/* Organizador */}
            <Flex ml={1} mb={1} alignItems="center">
              <Text fontSize="md">Organizado por:</Text>
              <Spacer />
              <Text fontSize="md">UserX</Text>
              <Spacer />
              <Button
                ml={2}
                colorScheme="teal"
                onClick={handleWhatsAppClick}
                size="sm"
                aria-label="WhatsApp"
              >
                <Icon as={FaWhatsapp} boxSize={4} />
              </Button>
            </Flex>

            <Card maxW="60rem"  boxShadow="md" bg={cardBgColor}>
              <CardHeader>
                <Center>
                  <Text fontSize="lg" fontWeight="bold">
                    Adicionar valor (R$)
                  </Text>
                </Center>
              </CardHeader>
              <CardBody>
                <Center>
                  <NumberInput
                    value={valorAdicional}
                    onChange={(valueString) =>
                      handleValorAdicionalChange(valueString)
                    }
                    step={0.01}
                    size="lg"
                    width="100px"
                    precision={2}
                  >
                    <NumberInputField />
                  </NumberInput>
                </Center>
              </CardBody>
            </Card>
            <Card maxW="60rem"  boxShadow="md" bg={cardBgColor}>
              <CardHeader>
                <Center>
                  <Text fontSize="lg" fontWeight="bold">
                    Selecionar quantidade de bilhetes
                  </Text>
                </Center>
              </CardHeader>
              <CardBody>
                <Center>
                  <Button
                    size="sm"
                    colorScheme="teal"
                    onClick={() => handleAdicionarBilhete(5)}
                  >
                    +5
                  </Button>
                  <Button
                    size="sm"
                    colorScheme="teal"
                    onClick={() => handleAdicionarBilhete(10)}
                    ml={2}
                  >
                    +10
                  </Button>
                </Center>
                <Center mt={2}>
                  <Button
                    size="sm"
                    colorScheme="teal"
                    onClick={handleRemoverBilhete}
                  >
                    -
                  </Button>
                  <NumberInput
                    value={quantidadeBilhetes}
                    onChange={handleQuantidadeBilhetesChange}
                    min={1}
                    size="lg"
                    width="100px"
                  >
                    <NumberInputField />
                  </NumberInput>
                  <Button
                    size="sm"
                    colorScheme="teal"
                    onClick={() => handleAdicionarBilhete(1)}
                    ml={2}
                  >
                    +
                  </Button>
                </Center>
                <Center mt={4}>
                  <Text fontSize="lg" fontWeight="bold">
                    Bilhetes reservados: {bilhetesReservados}
                  </Text>
                  <Text ml={4} fontSize="md" fontWeight="bold">
                    Valor final: R$ {valorAdicional.toFixed(2)}
                  </Text>
                </Center>
                <Center mt={4}>
                  <Button
                    colorScheme="teal"
                    size="lg"
                    onClick={handleReservarBilhetes}
                  >
                    RESERVAR BILHETES
                  </Button>
                </Center>
              </CardBody>
            </Card>

            <Flex mt={8} alignItems="center" justifyContent="center">
              <Card maxW="calc(50% - 10px)"  boxShadow="md" bg={cardBgColor} p={5}>
                <Text>MEIO DE PAGAMENTO</Text>
                <Text>PIX</Text>
              </Card>
              <Spacer width="20px" />
              <Card maxW="calc(50% - 10px)"  boxShadow="md" bg={cardBgColor} p={5}>
                <Text>SORTEIO</Text>
                <Text>LOTERIA FEDERAL</Text>
              </Card>
            </Flex>
          </Stack>
        </Card>
      </Center>
    </ChakraProvider>
  );
};

export default LotteryCard;
