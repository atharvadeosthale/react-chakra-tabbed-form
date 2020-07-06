import React, { Fragment } from "react";
import {
  Flex,
  Box,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Input,
  Button,
  useColorMode,
  Icon,
} from "@chakra-ui/core";

const Homepage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Fragment>
      <Flex height="100vh" align="center" justify="center">
        <Button
          position="absolute"
          top="5"
          left="5"
          rounded="50%"
          onClick={() => toggleColorMode()}
        >
          <Icon name={colorMode === "light" ? "moon" : "sun"} />
        </Button>
        <Box
          p="20px"
          backgroundColor={colorMode === "light" ? "#C8C8C8" : "#313641"}
          rounded="20px"
        >
          <Flex align="center" justify="center" direction="column">
            <Text fontSize="20px">Authentication Form</Text>
            <Tabs mt="15px">
              <TabList>
                <Tab w="50%">Login</Tab>
                <Tab w="50%">Register</Tab>
              </TabList>
              <TabPanels mt="15px">
                <TabPanel>
                  <Flex align="center" justify="center" direction="column">
                    <Input placeholder="Username" size="lg" />
                    <Input
                      placeholder="Password"
                      size="lg"
                      type="password"
                      mt="20px"
                    />
                    <Button size="lg" mt="20px" w="100%">
                      Login
                    </Button>
                  </Flex>
                </TabPanel>
                <TabPanel>
                  <Flex align="center" justify="center" direction="column">
                    <Input placeholder="Username" size="lg" />
                    <Input
                      placeholder="Password"
                      size="lg"
                      type="password"
                      mt="20px"
                    />
                    <Input placeholder="E-Mail Address" size="lg" mt="20px" />
                    <Input placeholder="Full Name" size="lg" mt="20px" />
                    <Button size="lg" mt="20px" w="100%">
                      Register
                    </Button>
                  </Flex>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
        </Box>
      </Flex>
    </Fragment>
  );
};

export default Homepage;
