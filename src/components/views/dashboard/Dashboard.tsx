"use client"

import { Button } from "@/components/ui/button"
import { createClient } from "@/config/client"
import { useRouter } from "next/navigation"

export const Dashboard = () => {

    const router = useRouter()
    const supabase = createClient()

    const handleLogout = async () =>{
        const {error} = await supabase.auth.signOut()
        if(!error){
            router.push('/login')
        }
    }

    return(
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <Button onClick={handleLogout}>Logout</Button>
        </div>
    )
}