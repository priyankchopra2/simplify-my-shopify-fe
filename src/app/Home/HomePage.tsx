import { useEffect, useState } from "react";

function HomePage() {

  const [pathUrl,setPathUrl] = useState(window.location.pathname)


  return (
    <>
    Home Page here
    </>
  )
}

export default HomePage