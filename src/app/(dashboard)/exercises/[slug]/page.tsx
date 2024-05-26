import ExerciseInfo from "@/components/views/exercise-info/ExerciseInfo";
import { createClient } from "@/config/server";
import { ExerciseData, Register } from "@/types/exercises";

const ExercisePage = async ({ params }: {params: { slug: string}}) =>{

    const supabase = createClient()

    const { data:user } = await supabase.auth.getUser()

    const { data } = await supabase
        .from('exercises')
        .select('*')
        .eq('id', params.slug)

    if(data !== null && user !== null){

        const { data:registers } = await supabase
            .from('exercise_log')
            .select('*')
            .eq('exercise_id', params.slug)

        const exerciseData:ExerciseData = {
            exerciseInfo:data[0],
            registers: registers as Register[],
            userId:user.user?.id
        }

        return(
            <div>
                <ExerciseInfo data={exerciseData} />
            </div>
        )
    } else {
        return(
            <div>
                There has been an error!!!!
            </div>
        )
    }
}

export default ExercisePage