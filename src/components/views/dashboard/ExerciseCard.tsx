'use client'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExerciseCardProps } from "@/types"
import dayjs from "dayjs"
import { useRouter } from "next/navigation"

export const ExerciseCard = ({data}:ExerciseCardProps) =>{

    const router = useRouter()

    return(
        <Card className="bg-secundario-950 shadow-md rounded-md flex flex-col justify-around cursor-pointer hover:shadow-xl" onClick={()=> router.push(`/exercises/${data.id}`)}>
            <CardHeader>
                <CardTitle>{data.name}</CardTitle>
                <CardDescription>{data.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="bg-secundario-500 text-primary-foreground p-2 w-fit text-sm rounded-md">{data.area.toUpperCase()}</p>
            </CardContent>
            <CardFooter>
                <p className="text-sm" suppressHydrationWarning>{dayjs(data.created_at).toString()}</p>
            </CardFooter>
        </Card>
    )
}