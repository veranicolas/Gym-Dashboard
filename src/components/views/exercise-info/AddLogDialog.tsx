'use client'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { createClient } from "@/config/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const AddLogDialog = ({exerciseId, userId}:{exerciseId:string, userId:string}) => {

    const supabase = createClient()
    const router = useRouter()
    const [open, setOpen] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const FormSchema = z.object({
        reps: z.coerce.number().max(100, {
            message:'Must be a realistic value'
        }),
        weight: z.coerce.number().max(1000, {
            message:'Must be a realistic value'
        }),
        own_weight: z.coerce.boolean(),
        series: z.coerce.number().max(20, {
            message:'Must be a realistic value'
        })
    })

    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues:{
            reps: 0,
            weight: 0,
            own_weight:false,
            series:0
        }
    });

    const onSubmit = async (exerciseData:{reps:number, weight:number, own_weight:boolean, series:number}) =>{
        console.log(exerciseData)
        setLoading(true)

        const { error } = await supabase
            .from('exercise_log')
            .insert([
                {
                    reps:exerciseData.reps,
                    weight:exerciseData.weight,
                    own_weight:exerciseData.own_weight,
                    series:exerciseData.series,
                    exercise_id:exerciseId,
                    user_id:userId
                }
            ])

        if(error){
            setLoading(false)
        } else {
            console.log('Se guardo el ejercicio')
            form.reset()
            setOpen(false)
            setLoading(false)
            router.refresh()
        }
    }

    return (
        <Dialog open={open} onOpenChange={(open)=> setOpen(open)}>
            <Button onClick={()=> setOpen(true)}>Add New</Button>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>New Exercise Log</DialogTitle>
                    <DialogDescription>
                        Add a new register to your exercise
                    </DialogDescription>
                </DialogHeader>
                <div className="w-full flex items-center space-x-2">
                    <Form {...form}>
                        <form id="exercise-form" onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-3">
                            <FormField
                                control={form.control}
                                name="reps"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Reps</FormLabel>
                                        <FormControl>
                                            <Input type="number" placeholder="Reps" {...field} autoComplete="off"/>
                                        </FormControl>
                                        <FormDescription />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="weight"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Weight</FormLabel>
                                        <FormControl>
                                            <Input type="number" placeholder="Weight" {...field} autoComplete="off"/>
                                        </FormControl>
                                        <FormDescription />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="series"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Series</FormLabel>
                                        <FormControl>
                                            <Input type="number" placeholder="Series" {...field} autoComplete="off"/>
                                        </FormControl>
                                        <FormDescription />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="own_weight"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                        <div className="space-y-0.5">
                                            <FormLabel className="text-base">
                                                Own Weight
                                            </FormLabel>
                                            <FormDescription>
                                                Are you using your body weight for this exercise?
                                            </FormDescription>
                                        </div>
                                        <FormControl>
                                            <Switch
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
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