'use client'
import { exercisesStore } from "@/store/stores/exercisesStore";
import { observer } from "mobx-react-lite";
import { Exercise } from "@/types";
import { useEffect } from "react";
import ExerciseTable from "@/components/views/exercises/ExerciseTable";

const Exercises = observer(({data}:{data:Exercise[]}) => {

    useEffect(()=>{
        exercisesStore.setExercises(data)
    },[data])

    return (
        <div className="p-5">
            <div className="flex flex-col space-y-1.5 px-6 gap-2">
                <p className="text-2xl font-semibold">Exercises Table</p>
                <p className="text-xl font-light">Search them here!</p>
            </div>
            {
                !exercisesStore.exercises ? <p>Loading...</p> : (
                    <div className="px-6 mt-3">
                        <ExerciseTable data={data}/>
                    </div>
                )
            }
        </div>
    )
})

export default Exercises