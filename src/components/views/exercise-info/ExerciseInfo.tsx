import { AddLogDialog } from "./AddLogDialog"
import RegistersTable from "./RegistersTable"
import { ExerciseData } from "@/types/exercises"

const ExerciseInfo = ({data}:{data:ExerciseData}) => {

    return (
        <div className="sm:p-5 my-5 flex flex-col gap-2">
            <div className="flex flex-col space-y-1.5 px-6">
                <p className="text-2xl font-semibold">{data.exerciseInfo.name}</p>
                <p className="text-xl font-light">{data.exerciseInfo.description}</p>
            </div>
            <div className="px-6">
            <div className="flex flex-row justify-between items-center py-6">
                    <p className="text-2xl">Latest Logs</p>
                    <AddLogDialog exerciseId={data.exerciseInfo.id} userId={data.userId as string}/>
                </div> 
                {
                    data.registers.length !== 0 ? (
                        <RegistersTable data={data.registers}/>
                    ) : (
                        <div className="py-3">There are no logs yet!</div>
                    )
                }
            </div>
        </div>
    )
}

export default ExerciseInfo