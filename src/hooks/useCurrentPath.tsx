import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const useCurrentPath = () =>{

    const [currentPath, setCurrentPath] = useState<string>('homepage')
    const pathname = usePathname()

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

    return [currentPath]
}