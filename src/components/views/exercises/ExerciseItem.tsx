'use client'
import { TableCell, TableRow } from "@/components/ui/table";
import { Exercise } from "@/types";
import dayjs from "dayjs";

type TableItemProps = {
    data:Exercise
}

export const TableItem = ({data}:TableItemProps) =>{

    return(
        <TableRow className="hover:bg-secundario-700">
            <TableCell>{data.name}</TableCell>
            <TableCell>{data.description}</TableCell>
            <TableCell className="text-center bg-secundario-300 text-primary-foreground p-2">{data.area.toUpperCase()}</TableCell>
            <TableCell className="text-center">{dayjs(data.created_at).format('DD-MM-YYYY')}</TableCell>
        </TableRow>
    )
}