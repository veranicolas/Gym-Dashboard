import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { createClient } from "@/config/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const AddNewDialog = () => {

    const supabase = createClient()
    const [open, setOpen] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const FormSchema = z.object({
        name: z.string().min(4,{
            message: "Must have atleast 4 letters"
        }),
        description: z.string(),
        area: z.string().min(2,{
            message: "Must pick an area type"
        })
    })

    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues:{
            name: "",
            description: "",
            area:""
        }
    });

    const onSubmit = async (exerciseData:{name:string, description:string, area:string}) =>{
        // console.log(exerciseData)
        setLoading(true)

        const { error } = await supabase
            .from('exercises')
            .insert([
                {
                    name:exerciseData.name,
                    description:exerciseData.description,
                    area:exerciseData.area
                }
            ])

        if(error){
            setLoading(false)
        } else {
            console.log('Se guardo el ejercicio')
            form.reset()
            setOpen(false)
            setLoading(false)
        }
    }

    return (
        <Dialog open={open} onOpenChange={(open)=> setOpen(open)}>
            <Button onClick={()=> setOpen(true)}>Add New</Button>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>New Exercise</DialogTitle>
                    <DialogDescription>
                        Add a new exercise to your dashboard
                    </DialogDescription>
                </DialogHeader>
                <div className="w-full flex items-center space-x-2">
                    <Form {...form}>
                        <form id="exercise-form" onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-3">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel />
                                        <FormControl>
                                            <Input type="text" placeholder="Name" {...field} autoComplete="off"/>
                                        </FormControl>
                                        <FormDescription />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="description"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel />
                                        <FormControl>
                                            <Input type="text" placeholder="Description" {...field} autoComplete="off"/>
                                        </FormControl>
                                        <FormDescription />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="area"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel id="area-label">Area</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select the workout area type" />
                                        </SelectTrigger>
                                        </FormControl>
                                        <SelectContent id="area-select-items">
                                            <SelectItem value="top">Upper</SelectItem>
                                            <SelectItem value="mid">Middle</SelectItem>
                                            <SelectItem value="bottom">Lower</SelectItem>
                                            <SelectItem value="body">Full Body</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* animate-spin */}
                            <DialogFooter className="sm:justify-end mt-4">
                                <Button disabled={loading} variant="default">
                                    {loading ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Please wait
                                        </>
                                    ): 'Save'}
                                </Button>
                            </DialogFooter>
                        </form>
                    </Form>
                </div>
            </DialogContent>
        </Dialog>
    )
}