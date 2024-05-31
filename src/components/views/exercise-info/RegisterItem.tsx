import { TableCell, TableRow } from "@/components/ui/table";
import { Register } from "@/types/exercises";
import dayjs from "dayjs";

const RegisterItem = ({data}:{data:Register}) =>{

    return(
        <TableRow>
            <TableCell className="text-center">{data.series}</TableCell>
            <TableCell className="text-center">{data.reps}</TableCell>
            {
                data.own_weight === true ? (
                    <TableCell className="text-center">YES</TableCell>
                ) : <TableCell className="text-center">{data.weight}</TableCell>
            }
            <TableCell className="text-center text-nowrap" suppressHydrationWarning>{dayjs(data.created_at).format('DD-MM-YYYY hh:mm a')}</TableCell>
        </TableRow>
    )
}

export default RegisterItem