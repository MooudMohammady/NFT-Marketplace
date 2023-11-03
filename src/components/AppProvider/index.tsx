'use client'
import Aos from "aos";
import { useEffect } from "react";

const AppProvider = ({ children }: { children: React.ReactNode | JSX.Element }) => {
  useEffect(()=>{
    Aos.init({
      duration:1000,
    })
  },[])
  return <>
    { children }
  </>;
};

export default AppProvider;
