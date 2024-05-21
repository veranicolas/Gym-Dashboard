import { Dashboard } from "@/components/views/dashboard/Dashboard";
import { createClient } from "@/config/server";
import { Exercise } from "@/types";

const DashboardPage = async () =>{

    const supabase = createClient()

    const { data: exercises , error } = await supabase
        .from('exercises')
        .select('*')

    return(
        <Dashboard data={error ? [] : exercises as Exercise[]}/>
    )
}

export default DashboardPage