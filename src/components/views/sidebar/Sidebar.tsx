"use client"

import { Button } from "@/components/ui/button"
import { createClient } from "@/config/client"
import { User } from "@supabase/supabase-js"
import Image from "next/image"
import { useRouter } from "next/navigation"

type SidebarProps = {
    data:User | null
}

export const Sidebar = ({data}:SidebarProps) =>{

    const router = useRouter()
    const supabase = createClient()

    const handleLogout = async () =>{
        const {error} = await supabase.auth.signOut()
        if(!error){
            router.push('/login')
        }
    }

    return(
        <div className="w-1/5 h-screen bg-slate-200 flex flex-col justify-between items-center p-5 min-w-60">
            <div className="w-full flex flex-col items-center" style={{gap:20}}>
                <Image 
                    src={'https://avatar.iran.liara.run/public/19'} 
                    alt="avatar" 
                    height={150} 
                    width={150}
                    priority
                    className="mb-3"
                />
                <h2 className="text-xl">You!</h2>
                <Button className="w-full" onClick={()=> router.push('/homepage')}>Dashboard</Button>
                <Button className="w-full" onClick={()=> router.push('/exercises')}>Exercises</Button>
            </div>
            <Button className="w-full" size={"lg"} onClick={handleLogout}>Logout</Button>
        </div>
    )
}