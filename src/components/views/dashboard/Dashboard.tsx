"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import dayjs, { Dayjs } from "dayjs"

type Exerice = {
    id:string,
    created_at:Dayjs,
    name:string,
    description:string,
    area:string
}

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
            <div className="p-6 bg-slate-200 rounded-md">
                <p className="text-2xl">Welcome back!</p>
            </div>
            <div className="grid grid-cols-4 gap-5">
                {
                    exercises.map((item)=>{
                        return <ExerciseCard key={item.id} data={item}/>
                    })
                }
            </div>
        </div>
    )
}

type DashboardItemProps = {
    data:Exerice
}

const DashboardItem = ({data}:DashboardItemProps) =>{
    return(
        <div className="h-52 bg-slate-100 shadow-md rounded-md p-4 flex flex-col justify-around cursor-pointer hover:shadow-xl">
            <div>
                <p className="text-2xl font-bold">{data.name}</p>
                <p className="text-md">{data.description}</p>
            </div>
            <p className="bg-orange-300 p-2 w-fit text-sm rounded-md">{data.area.toUpperCase()}</p>
            <p>{data.created_at.toString()}</p>
        </div>
    )
}

const ExerciseCard = ({data}:DashboardItemProps) =>{
    return(
        <Card className="bg-slate-100 shadow-md rounded-md flex flex-col justify-around cursor-pointer hover:shadow-xl">
            <CardHeader>
                <CardTitle>{data.name}</CardTitle>
                <CardDescription>{data.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="bg-orange-300 p-2 w-fit text-sm rounded-md">{data.area.toUpperCase()}</p>
            </CardContent>
            <CardFooter>
                <p className="text-sm">{data.created_at.toString()}</p>
            </CardFooter>
        </Card>
    )
}