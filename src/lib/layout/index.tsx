import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import { Footer } from './footer';
import { Header } from './header';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" transition="0.5s ease-out">
      <Box>
        {/* <Header /> */}
        <Box as="main" flex={1} w="100%">
          {children}
        </Box>
        {/* <Footer /> */}
      </Box>
    </Box>
  );
};
