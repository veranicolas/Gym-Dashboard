import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Sidebar } from "@/components/views/sidebar/Sidebar";
import { StoreWrapper } from "@/store/provider";
import { Navbar } from "@/components/views/navbar/Navbar";

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

    return (
        <html lang="en">
            <body className={inter.className}>
                <StoreWrapper>
                    <div className="flex flex-row">
                        <Sidebar />
                        <div className="w-full h-screen bg-slate-50 overflow-auto">
                            <Navbar />
                            {children}
                        </div>
                    </div>
                </StoreWrapper>
            </body>
        </html>
    );
}

