import { useState } from 'react'

import { Tabs, TabList, TabPanel, Tab, TabPanels } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'
import { Toaster } from '@redwoodjs/web/toast'

import AuthForm from 'src/components/AuthForm/AuthForm'
import LoginForm from 'src/components/LoginForm/LoginForm'

const LoginPage = () => {
  const [selectedTab, setSelectedTab] = useState(0)
  return (
    <>
      <MetaTags title="Login" />
      <main className="rw-main">
        <Tabs
          className="rw-scaffold rw-login-container rw-segment rw-segment-main"
          isFitted
          index={selectedTab}
          variant="line"
          colorScheme={'yellow'}
          backgroundColor={'white'}
          boxShadow={' rgba(0, 0, 0, 0.35) 0px 5px 15px;'}
          width="fit-content"
          onChange={(index) => setSelectedTab(index)}
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
                onContinueWithEmail={() => {
                  setSelectedTab(1)
                }}
              />
            </TabPanel>
            <TabPanel>
              <AuthForm
                backtosignin={() => {
                  setSelectedTab(0)
                }}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>

        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      </main>
    </>
  )
}

export default LoginPage
