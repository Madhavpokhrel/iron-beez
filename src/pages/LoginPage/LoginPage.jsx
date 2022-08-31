import React, { useState, useEffect } from 'react';
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
import { setTab } from '../../store/features/Tab/TabSlice';
import { useSelector, useDispatch } from 'react-redux';
const LoginPage = () => {
  const currentTab = useSelector(state => state.tab.index);

  const [selectedTab, setSelectedTab] = useState(currentTab);
  console.log('selectedTab', selectedTab);
  const dispatch = useDispatch();
  const toggleTab = () => {
    dispatch(setTab());
    setSelectedTab(currentTab);
  };

  useEffect(() => {
    setSelectedTab(currentTab);
  }, [currentTab]);

  return (
    <>
      {/* <MetaTags title="Login" /> */}
      <Header />
      <Flex justifyContent={'center'} mt={'25px'}>
        <main style={{padding:'5px'}}>
          <Tabs
            className="rw-scaffold rw-login-container rw-segment rw-segment-main"
            isFitted
            index={selectedTab}
            variant="line"
            colorScheme={'yellow'}
            backgroundColor={'white'}
            boxShadow={' rgba(0, 0, 0, 0.35) 0px 5px 15px;'}
            onChange={toggleTab}
            style={{
              outline: 'none',
              border: 'none',
            }}
          >
            <TabList >
              <Tab padding={'4'} _focus={{ color: 'none' }} fontWeight={'bold'}>
                Sign in
              </Tab>
              <Tab padding={'4'} fontWeight={'bold'} _focus={{ color: 'none' }}>
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
