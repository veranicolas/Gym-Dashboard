"use client"
import { Exercise } from "@/types"
import { ExerciseCard } from "./ExerciseCard"
import { AddNewDialog } from "./AddNewDialog"
import { observer } from "mobx-react-lite"
import { userStore } from '@/store/stores/userStore'
import { exercisesStore } from "@/store/stores/exercisesStore"
import { useEffect } from "react"

type DashboardProps = {
    data:Exercise[]
}

export const Dashboard = observer(({data}:DashboardProps) => {

    useEffect(()=>{
        exercisesStore.setExercises(data)
    },[data])

    return(
        <div className="p-5 flex flex-col gap-3">
            <div className="flex flex-col space-y-1.5 px-6">
                <p className="text-2xl font-semibold">Exercises Dashboard</p>
                <p className="text-xl font-light">Welcome back, {userStore.name}!</p>
            </div>       
            <div>
                <div className="flex flex-row justify-between items-center p-6">
                    <p className="text-2xl">Frecuent Exercises</p>
                    <AddNewDialog />
                </div> 
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 px-6">
                    {
                        data.map((item)=>{
                            return <ExerciseCard key={item.id} data={item}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
})

