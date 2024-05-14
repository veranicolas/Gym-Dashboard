import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExerciseCardProps } from "@/types"

export const ExerciseCard = ({data}:ExerciseCardProps) =>{
    return(
        <Card className="bg-slate-100 shadow-md rounded-md flex flex-col justify-around cursor-pointer hover:shadow-xl">
            <CardHeader>
                <CardTitle>{data.name}</CardTitle>
                <CardDescription>{data.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="bg-slate-900 text-white p-2 w-fit text-sm rounded-md">{data.area.toUpperCase()}</p>
            </CardContent>
            <CardFooter>
                <p className="text-sm" suppressHydrationWarning>{data.created_at.toString()}</p>
            </CardFooter>
        </Card>
    )
}