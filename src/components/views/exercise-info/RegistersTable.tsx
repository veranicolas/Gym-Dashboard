import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Register } from "@/types/exercises";
import dayjs from "dayjs";

type RegisterTableProps = {
    data: Register[]
}

const RegistersTable = ({data}:RegisterTableProps) =>{

    return(
        <div>
            <Table className="bg-secundario-950 px-6 mt-3 overflow-auto">
                <TableHeader>
                    <TableRow className="bg-secundario-400 hover:bg-secundario-400">
                        <TableHead className="text-center text-primary-foreground">Series</TableHead>
                        <TableHead className="text-center text-primary-foreground">Repetitions</TableHead>
                        {
                            data[0].own_weight === true ? (
                                <TableHead className="text-center text-primary-foreground">Own Weight</TableHead>
                            ) : <TableHead className="text-center text-primary-foreground">Weight</TableHead>
                        }
                        <TableHead className="text-center text-primary-foreground">Created At</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        data?.map((item:any)=>{
                            return <RegisterItem key={item.id} data={item}/>
                        })
                    }
                </TableBody>
            </Table>
        </div>
    )
}

const RegisterItem = ({data}:{data:Register}) =>{

    return(
        <TableRow className="hover:bg-secundario-700">
            <TableCell className="text-center">{data.series}</TableCell>
            <TableCell className="text-center">{data.reps}</TableCell>
            {
                data.own_weight === true ? (
                    <TableCell className="text-center">YES</TableCell>
                ) : <TableCell className="text-center">{data.weight}</TableCell>
            }
            <TableCell className="text-center" suppressHydrationWarning>{dayjs(data.created_at).format('DD-MM-YYYY hh:mm a')}</TableCell>
        </TableRow>
    )
}

export default RegistersTable