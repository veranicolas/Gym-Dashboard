import { Login } from "@/components/views/login/Login";
import Image from 'next/image'

export default function Home() {

    return (
        <main className="flex min-h-screen flex-row items-center justify-between">
            <div className="w-full p-10 sm:w-1/2 sm:max-w-3xl sm:p-20 mb-52 flex flex-col mx-auto">
                <Login />
            </div>
            <div className="hidden sm:block bg-texto-50 h-full w-1/2 relative">
                <Image 
                    src={'/background2.jpg'}
                    alt="background"
                    width={0}
                    height={0}
                    sizes="100vh"
                    objectFit="cover"
                    style={{ width: '100%', height: '100vh' }}
                />
            </div>
        </main>
    );
}
