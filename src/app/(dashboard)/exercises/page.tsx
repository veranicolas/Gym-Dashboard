import { Exercise } from "@/types";
import { createClient } from "@/config/server";
import Exercises from "@/components/views/exercises/Exercises";

const ExercisesPage = async () => {

    const supabase = createClient()

    const { data: exercises , error } = await supabase
        .from('exercises')
        .select('*')


    return (
        <Exercises data={error ? [] : exercises as Exercise[]}/>
    )
}

export default ExercisesPage