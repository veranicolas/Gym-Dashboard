import { Login } from "@/components/views/login/Login";

export default function Home() {

    return (
        <main className="flex min-h-screen flex-row items-center justify-between">
            <div className="w-full p-10 sm:w-3/4 sm:max-w-3xl sm:p-20 mb-52 flex flex-col mx-auto">
                <Login />
            </div>
        </main>
    );
}