import { Dashboard } from "@/components/views/dashboard/Dashboard";
import { createClient } from "@/config/server";
import { Exercise } from "@/types";

const ExercisePage = async ({ params }: {params: { slug: string}}) =>{

    return(
        <div>hola si: {params.slug}</div>
    )
}

export default ExercisePage