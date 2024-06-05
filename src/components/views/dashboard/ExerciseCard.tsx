'use client'
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExerciseCardProps } from "@/types"
import { useRouter } from "next/navigation"

export const ExerciseCard = ({data}:ExerciseCardProps) =>{

    const router = useRouter()

    return(
        <Card className="bg-[white] shadow-md rounded-md flex flex-col justify-around cursor-pointer hover:shadow-xl" onClick={()=> router.push(`/exercises/${data.id}`)}>
            <CardHeader className="p-5">
                <CardTitle className="flex flex-row justify-between items-center">{data.name} <span className="bg-acento-300 text-primary-foreground p-2 w-fit text-sm rounded-md">{data.area.toUpperCase()}</span></CardTitle>
                <CardDescription>{data.description}</CardDescription>
            </CardHeader>
        </Card>
    )
}