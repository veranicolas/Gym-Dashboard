'use client'
import { TableCell, TableRow } from "@/components/ui/table";
import { Exercise } from "@/types";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";

type TableItemProps = {
    data:Exercise
}

export const TableItem = ({data}:TableItemProps) =>{

    const router = useRouter()

    return(
        <TableRow className="hover:bg-secundario-700 cursor-pointer" onClick={()=> router.push(`/exercises/${data.id}`)}>
            <TableCell>{data.name}</TableCell>
            <TableCell className="text-nowrap">{data.description}</TableCell>
            <TableCell className="text-center bg-secundario-300 text-primary-foreground p-2">{data.area.toUpperCase()}</TableCell>
            <TableCell className="text-center text-nowrap">{dayjs(data.created_at).format('DD-MM-YYYY')}</TableCell>
        </TableRow>
    )
}