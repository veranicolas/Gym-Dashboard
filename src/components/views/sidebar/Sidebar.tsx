"use client"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { createClient } from "@/config/client"
import { usePathname, useRouter } from "next/navigation"
import Image from "next/image"

export const Sidebar = () =>{

    const router = useRouter()
    const pathname = usePathname()
    const supabase = createClient()
    const [currentPath, setCurrentPath] = useState<string>('homepage')

    const handleLogout = async () =>{
        const {error} = await supabase.auth.signOut()
        if(!error){
            router.push('/login')
        }
    }

    useEffect(() => {
        if(pathname.includes('homepage')){
            setCurrentPath('homepage')
        }
        if(pathname.includes('exercises')){
            setCurrentPath('exercises')
        }
        if(pathname.includes('profile')){
            setCurrentPath('profile')
        }
    }, [pathname]);

    return(
        <div className="hidden w-1/5 h-screen bg-primario-950 sm:flex flex-col justify-between items-center p-5 min-w-60">
            <div className="w-full flex flex-col items-center" style={{gap:5}}>
                <Image 
                    src={'https://avatar.iran.liara.run/public/19'} 
                    alt="avatar" 
                    height={150} 
                    width={150}
                    priority
                    className="mb-3"
                />
                <Button className={`w-full justify-start hover:text-texto-950 ${currentPath === 'homepage' ? 'bg-primario-300 text-texto-950' : 'bg-texto-950 text-texto-50'}`} onClick={()=> router.push('/homepage')}>Dashboard</Button>
                <Button className={`w-full justify-start hover:text-texto-950 ${currentPath === 'exercises' ? 'bg-primario-300 text-texto-950' : 'bg-texto-950 text-texto-50'}`} onClick={()=> router.push('/exercises')}>Exercises</Button>
                <Button className={`w-full justify-start hover:text-texto-950 ${currentPath === 'profile' ? 'bg-primario-300 text-texto-950' : 'bg-texto-950 text-texto-50'}`}>Profile</Button>
            </div>
            <Button className="w-full bg-acento-200 hover:bg-acento-300" size={"lg"} onClick={handleLogout}>Logout</Button>
        </div>
    )
}