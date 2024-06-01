"use client"
import { Exercise } from "@/types"
import { ExerciseCard } from "./ExerciseCard"
import { AddNewDialog } from "./AddNewDialog"
import { observer } from "mobx-react-lite"
import { userStore } from '@/store/stores/userStore'
import { exercisesStore } from "@/store/stores/exercisesStore"
import { useEffect, useState } from "react"
import dayjs from "dayjs"

type DashboardProps = {
    data:Exercise[]
}

export const Dashboard = observer(({data}:DashboardProps) => {

    const [date, setDate] = useState<string>()

    useEffect(()=>{
        exercisesStore.setExercises(data)

        const timePassing = setInterval(()=>{
            setDate(dayjs().toString())
        },1000)

        return () => clearInterval(timePassing)
    },[data])

    data.splice(2)

    return(
        <div className="px-5 sm:p-5 grid grid-cols-1 lg:grid-cols-2 flex-wrap gap-3 ">
            <div className="flex flex-col space-y-1.5 p-6 bg-fondo-950/45 rounded-md">
                <p className="text-2xl font-semibold">Exercises Dashboard</p>
                <p className="text-xl font-light">Welcome back, {userStore.name}!</p>
            </div>
            <div suppressHydrationWarning className="bg-fondo-950/45 p-6 rounded-md">
                <p className="text-2xl">Today is {date}</p>
            </div>
            <div className="bg-fondo-950/45 rounded-md pb-10">
                <div className="flex flex-row justify-between items-center p-6">
                    <p className="text-2xl">Frecuent Exercises</p>
                    <AddNewDialog />
                </div> 
                <div className="grid grid-cols-1 2xl:grid-cols-2 gap-5 px-6">
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
