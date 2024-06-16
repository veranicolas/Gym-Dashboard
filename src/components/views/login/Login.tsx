"use client";
import { Button } from "@/components/ui/button";
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
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const Login = () => {

    const supabase = createClient()
    const router = useRouter()
    const [loading, setLoading] = useState<boolean>(false)

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

        setLoading(true)

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        })

        if(!error){
            console.log(data.user)
            router.push('/homepage')
        } else {
            setLoading(false)
        }
    }

    return (
        <section className="bg-white">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
                    <Image
                        alt=""
                        src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        fill
                        style={{height:'100%', width:'100%'}}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </aside>
                <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                    <div className="w-full sm:w-4/6 lg:max-w-3xl flex flex-col gap-4">
                        <Form {...form}>
                            <div>
                                <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                                    Welcome back!
                                </h1>
                                <p className="mt-4 leading-relaxed text-gray-500">
                                    Let&apos;s track some progress 🏋️‍♂️💪
                                </p>
                            </div>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-1">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input type="email" placeholder="Enter your email" {...field} autoComplete="email" />
                                            </FormControl>
                                            <FormDescription />
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input type="password" placeholder="Enter your password" {...field} />
                                            </FormControl>
                                            <FormDescription />
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                {/* animate-spin */}
                                <Button disabled={loading} title="Login" className="w-full mt-3">
                                    {loading ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Please wait
                                        </>
                                    ) : 'Login'}
                                </Button>
                            </form>
                            <Separator className="my-4" />
                            <div className="flex flex-row w-full justify-center items-center">
                                <p className="text-sm text-gray-500 sm:mt-0">
                                    Are you new to the app?
                                </p>
                                <Button variant={'link'} onClick={()=> router.push('/signup')} className="text-gray-700 underline ml-1">Sign up!</Button>
                            </div>
                        </Form>
                    </div>
                </main>
            </div>
        </section>
    );
};
