'use client'
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Exercise } from "@/types";
import { TableItem } from "./ExerciseItem";

type ExerciseTableProps = {
    data:Exercise[] | undefined
}

const ExerciseTable = ({data}:ExerciseTableProps) =>{

    return (
        <div>
            <Table className="px-6 mt-3 overflow-auto rounded-sm shadow-md">
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead className="text-center">Area</TableHead>
                        <TableHead className="text-center">Created At</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        data?.map((item)=>{
                            return <TableItem key={item.id} data={item}/>
                        })
                    }
                </TableBody>
            </Table>
        </div>
        
    )
}

export default ExerciseTable

