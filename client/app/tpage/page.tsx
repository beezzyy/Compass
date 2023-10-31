'use client';
import React from 'react';
import Menu from '../components/Menu';
import { useRouter } from "next/navigation";
import { useAuth } from "../contexts/AuthContext";
import Custom403 from '../pages/403';

export default function MainMenu() {
  const { user } = useAuth()
  const router = useRouter()

  React.useEffect(() => {
    if (!user) 
      router.push("/login")
  }, [user])

  if (!user) {
    return <div><Custom403/></div>
  }
  
return (
  <div className="bg-eggshell min-h-screen flex flex-col">
  <div className={`sm:px-16 px-6 flex justify-center items-center`}>
  <div className="mb-6 mt-1">
        
    <div className={`xl:max-w-[1280px] w-full`}>
    <p className="text-[24px] mt-72 flex justify-center items-center text-darkgrey font-IBM Plex Sans font-bold text-center">
            Hello {user.displayName}, welcome to the Main Menu !
          </p>
        </div>
      <Menu />
    </div>
  </div>
</div>
  )
}