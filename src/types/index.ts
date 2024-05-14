import { Dayjs } from "dayjs"

export type Exerice = {
    id:string,
    created_at:Dayjs,
    name:string,
    description:string,
    area:string
}

export type ExerciseCardProps = {
    data:Exerice
}