import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Stack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Layout } from '~/lib/layout';
import axios from 'axios';
import { Header } from '~/lib/layout/header';
import LotteryCard from '~/lib/layout/lotteryCard/LotteryCard';

export const Home = () => {
  return (
    <Layout>
      <Header />
      <Flex direction="column" align="center" justify="center">
        <LotteryCard />
      </Flex>
    </Layout>
  );
};
