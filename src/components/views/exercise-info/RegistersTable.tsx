import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Register } from "@/types/exercises";
import RegisterItem from "./RegisterItem";

type RegisterTableProps = {
    data: Register[]
}

const RegistersTable = ({data}:RegisterTableProps) =>{

    return(
        <div>
            <Table className="px-6 mt-3 overflow-auto">
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-center">Series</TableHead>
                        <TableHead className="text-center">Repetitions</TableHead>
                        {
                            data[0].own_weight === true ? (
                                <TableHead className="text-center">Own Weight</TableHead>
                            ) : <TableHead className="text-center">Weight</TableHead>
                        }
                        <TableHead className="text-center">Created At</TableHead>
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



export default RegistersTable