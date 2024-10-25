import './App.css'
import Layout from './app/sidebar/sidebarLayout'


function App({ children }: { children: React.ReactNode }) {
  // function App() {

  return (
    <>
       {/* <Page></Page> */}
       {/* <AppSidebar /> */}
       <Layout>
        {children}
       </Layout>
    </>
  )
}

export default App
