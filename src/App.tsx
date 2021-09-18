import * as React from "react";
import { ChakraProvider, Box, VStack, Grid, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./components/ColorModeSwitcher";

import { Heading } from "@chakra-ui/layout";
import { SearchBar } from "./components/SearchBar";
import { Provider as JotaiProvider } from "jotai";
import { MediaBox } from "./components/MediaBox";

export const App = () => (
  <ChakraProvider theme={theme}>
    <JotaiProvider>
      <Heading className="title" textAlign="center" paddingTop="5%">
        Carinhotron2000
      </Heading>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <SearchBar />
            <MediaBox />
          </VStack>
        </Grid>
      </Box>
    </JotaiProvider>
  </ChakraProvider>
);
