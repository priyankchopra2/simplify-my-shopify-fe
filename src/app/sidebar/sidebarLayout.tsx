import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { useEffect, useState } from "react";
import { NavigationMenuDemo } from "@/app/nav/nav";

export default function Layout({ children }: { children: React.ReactNode }) {

  // let path=
  // console.log(window.location.pathname);
  // const [pathUrl,setPathUrl] = useState(window.location.pathname)

  // // useEffect(() => {
    
  // // },[pathUrl])


  return (
    // <SidebarProvider>
    //   <AppSidebar />
      <main style={{textAlign:"left"}}>
        <NavigationMenuDemo></NavigationMenuDemo>
        {/* <div className="overflow-hidden rounded-lg border bg-background shadow p-10"> */}

        {/* todo: if width is max hide below sidebar if width is small then show it */}
        {/* <SidebarTrigger /> */}
        {children}
        {/* </div> */}
      </main>
      
    // </SidebarProvider>
  )
}
