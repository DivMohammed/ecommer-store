"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Category, SortCategory } from "@/types";




interface MainNavProps {
    data: Category[];
    sort: any;
};

const  MainNav: React.FC<MainNavProps>  = ({
    data, sort
}) => {
    const pathname = usePathname()

    const arr = ['رجالية', 'نسائي', 'لوحات']

    const dataMemory = data.map((memory) => (
        memory
    ))

    const result = sort.sortName.split(",");

    console.log(result)

    const sortData = dataMemory.sort((a, b) => result.indexOf(b.name) - result.indexOf(a.name));



    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`
    }))

    return (
        <nav
            className="mx-6 flex items-center space-x-4 lg:space-x-6"
        >
            {routes.map((route) => (
                <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                        "text-sm font-medium transition-colors hover:text-black",
                        route.active ? "text-black" : "text-neutral-500"
                    )}
                >
                    {route.label}
                </Link>
            ))}
        </nav>
    )
}

export default MainNav