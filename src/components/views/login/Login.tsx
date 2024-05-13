"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { createClient } from "@/config/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const Login = () => {

    const supabase = createClient()
    const router = useRouter()

    const FormSchema = z.object({
        email: z.string().email({
            message: "Must be a valid email"
        }),
        password: z.string().min(6, {
            message: "Invalid password"
        })
    })

    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues:{
            email: "",
            password: ""
        }
    });

    const onSubmit = async ({email, password}:{email:string, password:string}) =>{

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        })

        if(!error){
            console.log(data.user)
            router.push('/dashboard')
        }
    }

    return (
        <Card className="w-2/4">
            <CardHeader>
                <CardTitle>Welcome back</CardTitle>
                <CardDescription>Login to enter</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-1">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel />
                                    <FormControl>
                                        <Input type="email" placeholder="Email" {...field} autoComplete="email"/>
                                    </FormControl>
                                    <FormDescription />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel />
                                    <FormControl>
                                        <Input type="password" placeholder="Password" {...field} />
                                    </FormControl>
                                    <FormDescription />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* animate-spin */}
                        <Button title="Login" className="w-full mt-3">
                            Login
                        </Button>
                    </form>
                    <Separator className="my-4"/>
                    <Button className="w-full mt-1">Sign up</Button>
                </Form>
                
            </CardContent>
        </Card>
    );
};
