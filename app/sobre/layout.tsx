import { Navbar } from "../../components/Navbar";
import type { ReactNode } from "react";

export default function SobreLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-auram-black text-auram-white">
            <Navbar />
            <main className="pt-20">{children}</main>
        </div>
    );
}
