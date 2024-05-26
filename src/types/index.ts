
export type Exercise = {
    id:string,
    created_at:string,
    name:string,
    description:string,
    area:string
}

export type ExerciseCardProps = {
    data:Exercise
}