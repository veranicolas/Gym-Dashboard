"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from 'next/image'
import { Dumbbell, LayoutDashboard, Menu, User } from "lucide-react"
import { useRouter } from "next/navigation"
import { useCurrentPath } from "@/hooks/useCurrentPath"
import { handleLogout } from "@/lib/auth"

export const Navbar = () =>{

    const [currentPath] = useCurrentPath()
    const [open, setOpen] = useState(false)
    const router = useRouter()

    const handleNavigate = (pathname:string) => {
        router.push(pathname)
        setOpen(false)
    }

    return(
        <div className="block w-full h-16 shadow-lg bg-acento-950/5 sm:hidden flex-col justify-between items-center p-3 min-w-60 box-border">
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
                            <Button className={`w-full justify-start ${currentPath === 'homepage' ? 'bg-acento-300 text-texto-950' : 'bg-secundario-900/25 text-texto-50/100'}  hover:text-texto-950 text-md p-6`} onClick={()=> handleNavigate('/homepage')}>
                                <LayoutDashboard className="mr-6"/>Dashboard
                            </Button>
                            <Button className={`w-full justify-start ${currentPath === 'exercises' ? 'bg-acento-300 text-texto-950' : 'bg-secundario-900/25 text-texto-50/100'}  hover:text-texto-950 text-md p-6`} onClick={()=> handleNavigate('/exercises')}>
                                <Dumbbell className="mr-6"/>Exercises
                            </Button>
                            <Button className={`w-full justify-start ${currentPath === 'profile' ? 'bg-acento-300 text-texto-950' : 'bg-secundario-900/25 text-texto-50/100'}  hover:text-texto-950 text-md p-6`} onClick={()=> handleNavigate('/profile')}>
                                <User className="mr-6"/>Profile
                            </Button>
                        </div>
                        <Button className="w-full bg-acento-200 hover:bg-acento-300 text-md p-6" size={"lg"} onClick={async()=>{
                            const response = await handleLogout()
                            if(response){
                                router.push('/login')
                            }
                        }}>Logout</Button>
                    </div>
                </SheetContent>
            </Sheet>

        </div>
    )
}
