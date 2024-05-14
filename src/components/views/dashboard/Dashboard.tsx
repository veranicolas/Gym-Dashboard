"use client"
import dayjs from "dayjs"
import { Exerice } from "@/types"
import { ExerciseCard } from "./ExerciseCard"
import { AddNewDialog } from "./AddNewDialog"

const exercises:Exerice[] = [
    {
        id:'dc97fecd-63fb-4f08-808e-30f5c71c45f1',
        created_at:dayjs(),
        name:'Prensa',
        description:'Maquina de prensa',
        area:'inferior'
    },
    {
        id:'dc97fecd-63fb-4f08-808e-30f5c71c45f2',
        created_at:dayjs(),
        name:'Prensa',
        description:'Maquina de prensa',
        area:'inferior'
    },
    {
        id:'dc97fecd-63fb-4f08-808e-30f5c71c45f3',
        created_at:dayjs(),
        name:'Prensa',
        description:'Maquina de prensa',
        area:'inferior'
    },
    {
        id:'dc97fecd-63fb-4f08-808e-30f5c71c45f4',
        created_at:dayjs(),
        name:'Prensa',
        description:'Maquina de prensa',
        area:'inferior'
    },
    {
        id:'dc97fecd-63fb-4f08-808e-30f5c71c45f5',
        created_at:dayjs(),
        name:'Prensa',
        description:'Maquina de prensa',
        area:'inferior'
    },
    {
        id:'dc97fecd-63fb-4f08-808e-30f5c71c45f6',
        created_at:dayjs(),
        name:'Prensa',
        description:'Maquina de prensa',
        area:'inferior'
    },
    {
        id:'dc97fecd-63fb-4f08-808e-30f5c71c45f7',
        created_at:dayjs(),
        name:'Prensa',
        description:'Maquina de prensa',
        area:'inferior'
    },
    {
        id:'dc97fecd-63fb-4f08-808e-30f5c71c45f8',
        created_at:dayjs(),
        name:'Prensa',
        description:'Maquina de prensa',
        area:'inferior'
    }
]

export const Dashboard = () => {

    return(
        <div className="p-5 flex flex-col gap-3">
            <div className="flex flex-col space-y-1.5 px-6">
                <p className="text-2xl font-semibold">Exercises Dashboard</p>
                <p className="text-xl font-light">Welcome back!</p>
            </div>       
            <div>
                <div className="flex flex-row justify-between items-center p-6">
                    <p className="text-2xl">Frecuent Exercises</p>
                    <AddNewDialog />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 px-6">
                    {
                        exercises.map((item)=>{
                            return <ExerciseCard key={item.id} data={item}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

