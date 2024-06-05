"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Dumbbell, LayoutDashboard, User } from "lucide-react"
import Image from "next/image"
import { useCurrentPath } from "@/hooks/useCurrentPath"
import { handleLogout } from "@/lib/auth"

export const Sidebar = () =>{

    const [currentPath] = useCurrentPath()
    const router = useRouter()

    return(
        <div className="hidden w-1/5 h-screen bg-fondo-900/10 sm:flex flex-col justify-between items-center p-5 min-w-60">
            <div className="w-full flex flex-col items-center" style={{gap:15}}>
                <Image 
                    src={'https://avatar.iran.liara.run/public/19'} 
                    alt="avatar" 
                    height={150} 
                    width={150}
                    priority
                    className="mb-3"
                />
                <Button className={`w-full justify-start ${currentPath === 'homepage' ? 'bg-acento-300 text-texto-950' : 'bg-secundario-900/25 text-texto-50/100'}  hover:text-texto-950`} onClick={()=> router.push('/homepage')}>
                    <LayoutDashboard className="mr-6"/>Dashboard
                </Button>
                <Button className={`w-full justify-start ${currentPath === 'exercises' ? 'bg-acento-300 text-texto-950' : 'bg-secundario-900/25 text-texto-50/100'} hover:text-texto-950`} onClick={()=> router.push('/exercises')}>
                    <Dumbbell className="mr-6"/>Exercises
                </Button>
                <Button className={`w-full justify-start ${currentPath === 'profile' ? 'bg-acento-300 text-texto-950' : 'bg-secundario-900/25 text-texto-50/100'} hover:text-texto-950`} onClick={()=> router.push('/profile')}>
                    <User className="mr-6"/>Profile
                </Button>
            </div>
            <Button className="w-full bg-acento-200 hover:bg-acento-300" size={"lg"} onClick={async()=>{
                const response = await handleLogout()
                if(response){
                    router.push('/login')
                }
            }}>Logout</Button>
        </div>
    )
}