"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";

export default function Signup() {

    const router = useRouter()

    return (
        <section className="bg-white">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </aside>

                <main className="flex items-center justify-center px-8 py-4 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                    <div className="max-w-xl lg:max-w-3xl flex flex-col gap-1">
                        {/* title */}
                        <div>
                            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                                Welcome to Gym Dashboard
                            </h1>
                            <p className="mt-4 leading-relaxed text-gray-500">
                                Create your account and start keeping track of your progress 🏋️‍♂️💪
                            </p>
                        </div>

                        {/* signup form */}
                        <div className="mt-8 grid grid-cols-6 gap-6 mb-3">
                            <div className="col-span-6 sm:col-span-3">
                                <Label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                                    First Name
                                </Label>

                                <Input
                                    type="text"
                                    id="FirstName"
                                    name="first_name"
                                    placeholder="Enter your first name"
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <Label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
                                    Last Name
                                </Label>

                                <Input
                                    type="text"
                                    id="LastName"
                                    name="last_name"
                                    placeholder="Enter your last name"
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-6">
                                <Label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </Label>

                                <Input
                                    type="email"
                                    id="Email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <Label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </Label>

                                <Input
                                    type="password"
                                    id="Password"
                                    name="password"
                                    placeholder="Create a password"
                                    
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <Label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
                                    Password Confirmation
                                </Label>

                                <Input
                                    type="password"
                                    id="PasswordConfirmation"
                                    name="password_confirmation"
                                    placeholder="Confirm your password"
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-6">
                                <p className="text-sm text-gray-500">
                                    By creating an account, you agree with the fact that you're really cool! 😎🤙
                                </p>
                            </div>

                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <Button className="w-full">
                                    Create an account
                                </Button>

                            </div>
                        </div>

                        <Separator className="my-2"/>

                        {/* login redirection */}
                        <div className="flex flex-row w-full justify-center items-center">
                            <p className="text-sm text-gray-500 sm:mt-0">
                                Already have an account?
                            </p>
                            <Button variant={'link'} onClick={()=> router.push('/login')} className="text-gray-700 underline ml-1">Log in</Button>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
}