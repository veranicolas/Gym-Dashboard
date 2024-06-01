"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from 'next/image'
import { Dumbbell, LayoutDashboard, Menu, User } from "lucide-react"
import { useRouter } from "next/navigation"
import { createClient } from "@/config/client"

export const Navbar = () =>{

    const [open, setOpen] = useState(false)
    const router = useRouter()
    const supabase = createClient()

    const handleLogout = async () =>{
        const {error} = await supabase.auth.signOut()
        if(!error){
            router.push('/login')
            setOpen(false)
        }
    }

    const handleNavigate = (pathname:string) => {
        router.push(pathname)
        setOpen(false)
    }
    
    return(
        <div className="block w-full h-16 shadow-lg mb-8 bg-acento-950/5 sm:hidden flex-col justify-between items-center p-3 min-w-60 box-border">
            <Sheet open={open} onOpenChange={(open)=> setOpen(open)}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="size-8"  />
                    </Button>
                </SheetTrigger>
                <SheetContent side={"left"} className="w-[350px] sm:w-[540px]">
                    <div className="h-full flex flex-col justify-between items-center">
                        <div className="w-full flex flex-col items-center" style={{gap:15}}>
                            <Image 
                                src={'https://avatar.iran.liara.run/public/19'} 
                                alt="avatar" 
                                height={150} 
                                width={150}
                                priority
                                className="mb-10"
                            />
                            <Button className={`w-full justify-start hover:text-texto-950 text-md p-6`} onClick={()=> handleNavigate('/homepage')}>
                                <LayoutDashboard className="mr-6"/>Dashboard
                            </Button>
                            <Button className={`w-full justify-start hover:text-texto-950 text-md p-6`} onClick={()=> handleNavigate('/exercises')}>
                                <Dumbbell className="mr-6"/>Exercises
                            </Button>
                            <Button className={`w-full justify-start hover:text-texto-950 text-md p-6`}>
                                <User className="mr-6"/>Profile
                            </Button>
                        </div>
                        <Button className="w-full bg-acento-200 hover:bg-acento-300 text-md p-6" size={"lg"} onClick={handleLogout}>Logout</Button>
                    </div>
                </SheetContent>
            </Sheet>

        </div>
    )
}
