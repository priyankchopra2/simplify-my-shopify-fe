import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"
import Page from './app/dashboard/page'
import { AppSidebar } from './components/app-sidebar'
import Layout from './app/sidebar/sidebarLayout'


function App() {

  return (
    <>
       {/* <Page></Page> */}
       {/* <AppSidebar /> */}
       <Layout></Layout>
    </>
  )
}

export default App
