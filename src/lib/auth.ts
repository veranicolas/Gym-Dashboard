import { createClient } from "@/config/client"

export const handleLogout = async () =>{

    const supabase = createClient()
    const {error} = await supabase.auth.signOut()
    
    return error ? false : true  // false = coulnd't logout, true = logged out
}