"use client";

import { useEffect, useState } from "react";
import { AppBar } from "./appbar";
import { usePathname } from "next/navigation";
import AdminLogin from "./login/page";

export default function Layout({ children }: any) {

    const [loggedIn, setLoggedIn] = useState(false);
    const pathName = usePathname();

    if (!loggedIn) {
        return <AdminLogin setLoggedIn={setLoggedIn} />
    }

    return <div className="w-full h-screen overflow-y-auto flex flex-col">
        <AppBar />
        <div className="flex-1">
            {children}
        </div>
    </div>
}