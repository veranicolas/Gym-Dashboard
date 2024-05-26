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
            <Table className="bg-secundario-950 px-6 mt-3 overflow-auto">
                <TableHeader>
                    <TableRow className="bg-secundario-400 hover:bg-secundario-400">
                        <TableHead className="text-primary-foreground">Name</TableHead>
                        <TableHead className="text-primary-foreground">Description</TableHead>
                        <TableHead className="text-center text-primary-foreground">Area</TableHead>
                        <TableHead className="text-center text-primary-foreground">Created At</TableHead>
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

