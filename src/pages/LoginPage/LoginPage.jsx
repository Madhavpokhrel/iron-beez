import React, { useState } from 'react';
import {
  Tabs,
  TabList,
  TabPanel,
  Tab,
  TabPanels,
  Flex,
} from '@chakra-ui/react';

import LoginForm from '../../components/LoginForm/LoginForm';
import AuthForm from '../../components/AuthForm/AuthForm';
import Header from '../../components/Header/Header';

const LoginPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <>
      {/* <MetaTags title="Login" /> */}
      <Header />
      <Flex justifyContent={'center'} mt={'25px'}>
        <main>
          <Tabs
            className="rw-scaffold rw-login-container rw-segment rw-segment-main"
            isFitted
            index={selectedTab}
            variant="line"
            colorScheme={'yellow'}
            backgroundColor={'white'}
            boxShadow={' rgba(0, 0, 0, 0.35) 0px 5px 15px;'}
            width="fit-content"
            onChange={index => setSelectedTab(index)}
            style={{
              outline: 'none',
              border: 'none',
            }}
          >
            <TabList>
              <Tab _focus={{ color: 'none' }} fontWeight={'bold'}>
                Sign in
              </Tab>
              <Tab fontWeight={'bold'} _focus={{ color: 'none' }}>
                New Account
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <LoginForm
                // onContinueWithEmail={() => {
                //   setSelectedTab(1);
                // }}
                />
              </TabPanel>
              <TabPanel>
                <AuthForm
                // backtosignin={() => {
                //   setSelectedTab(0);
                // }}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>

          {/* <Toaster toastOptions={{ className: "rw-toast", duration: 6000 }} /> */}
        </main>
      </Flex>
    </>
  );
};

export default LoginPage;
