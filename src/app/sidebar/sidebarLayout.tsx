import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {

  // let path=
  // console.log(window.location.pathname);
  // const [pathUrl,setPathUrl] = useState(window.location.pathname)

  // // useEffect(() => {
    
  // // },[pathUrl])


  return (
    <SidebarProvider>
      <AppSidebar />
      <main style={{textAlign:"left"}}>
        {/* <SidebarTrigger /> */}
        {children}
      </main>
    </SidebarProvider>
  )
}
