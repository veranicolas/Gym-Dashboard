"use client"
import { Button } from "@/components/ui/button"
import { createClient } from "@/config/client"
import { useRouter } from "next/navigation"
import { Dumbbell, LayoutDashboard, User } from "lucide-react"
import Image from "next/image"

export const Sidebar = () =>{

    const router = useRouter()
    const supabase = createClient()
    

    const handleLogout = async () =>{
        const {error} = await supabase.auth.signOut()
        if(!error){
            router.push('/login')
        }
    }

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
                <Button className={`w-full justify-start bg-secundario-900/25 text-texto-50/100 hover:text-texto-950`} onClick={()=> router.push('/homepage')}>
                    <LayoutDashboard className="mr-6"/>Dashboard
                </Button>
                <Button className={`w-full justify-start bg-secundario-900/25 text-texto-50/100 hover:text-texto-950`} onClick={()=> router.push('/exercises')}>
                    <Dumbbell className="mr-6"/>Exercises
                </Button>
                <Button className={`w-full justify-start bg-secundario-900/25 text-texto-50/100 hover:text-texto-950`}>
                    <User className="mr-6"/>Profile
                </Button>
            </div>
            <Button className="w-full bg-acento-200 hover:bg-acento-300" size={"lg"} onClick={handleLogout}>Logout</Button>
        </div>
    )
}