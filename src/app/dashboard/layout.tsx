import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Sidebar } from "@/components/views/sidebar/Sidebar";
import { createClient } from "@/config/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Track your progress",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const supabase = createClient()

    const { data } = await supabase.auth.getUser()

    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="flex flex-row">
                    <Sidebar data={data.user}/>
                    <div className="w-full h-screen bg-slate-50 overflow-auto">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}

