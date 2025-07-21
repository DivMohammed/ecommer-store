// "use client"

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from 'react';


// import { cn } from "@/lib/utils";
// import { Category } from "@/types";

// interface MainNavProps {
//     data: Category[];
// };

// const  MainNav: React.FC<MainNavProps>  = ({
//     data
// }) => {
//     const pathname = usePathname();

//       const [sortedItems, setSortedItems] = useState<any[]>([]);


//     useEffect(() => {
//     if (Array.isArray(data)) {
//       const sorted = [...data].sort((a, b) => a?.sortCategoryId - b?.sortCategoryId);
//       setSortedItems(sorted);
//     }
//   }, [data]);

//     const routes = sortedItems.map((route: any) => ({
//         href: `/category/${route.id}`,
//         label: route.name,
//         active: pathname === `/category/${route.id}`
//     }))

//     console.log(data)
//     return (
//         <nav
//             className="mx-6 flex items-center space-x-4 lg:space-x-6"
//         >
//             {routes.map((route: any) => (
//                 <Link
//                     key={route.href}
//                     href={route.href}
//                     className={cn(
//                         "text-sm font-medium transition-colors hover:text-black",
//                         route.active ? "text-black" : "text-neutral-500"
//                     )}
//                 >
//                     {route.label}
//                 </Link>
//             ))}
//         </nav>
//     )
// }

// export default MainNav



"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { Category } from "@/types";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ChevronDown, ChevronUp, Menu } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface MainNavProps {
  data: Category[]; // من props
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();
  const [sortedItems, setSortedItems] = useState<Category[] | null>(null);
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // جلب البيانات من localStorage أولاً
  useEffect(() => {
    const cached = localStorage.getItem("cachedCategories");
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        setSortedItems(parsed);
      } catch {
        localStorage.removeItem("cachedCategories");
      }
    }
  }, []);

  // تحديث الكاش بعد استلام `data`
  useEffect(() => {
    if (Array.isArray(data) && data.length > 0) {
      const sorted = [...data].sort((a, b) => a?.sortCategoryId - b?.sortCategoryId);
      setSortedItems(sorted);
      localStorage.setItem("cachedCategories", JSON.stringify(sorted));
    }
  }, [data]);

  const routes = (sortedItems || []).map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  const visibleRoutes = routes.slice(0, 5);
  const hiddenRoutes = routes.slice(5);

  const renderSkeletons = (count: number) =>
    Array.from({ length: count }).map((_, i) => (
      <Skeleton key={i} className="h-6 w-40 rounded-md inline" />
    ));

  return (
    <nav className="relative mx-6 flex items-center">
      {/* Desktop Links */}
      <div className="hidden lg:flex items-center space-x-4 lg:space-x-6">
        {!sortedItems
          ? renderSkeletons(1)
          : visibleRoutes.map((route) => (
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

        {sortedItems && hiddenRoutes.length > 0 && (
          <DropdownMenu onOpenChange={setOpen}>
            <DropdownMenuTrigger className="text-sm font-medium text-neutral-500 hover:text-black flex items-center">
              {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {hiddenRoutes.map((route) => (
                <DropdownMenuItem asChild key={route.href}>
                  <Link
                    href={route.href}
                    className={cn(
                      "text-sm",
                      route.active ? "text-black font-medium" : "text-neutral-500"
                    )}
                  >
                    {route.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>

      {/* Mobile Button */}
      <button
        className="lg:hidden ml-2 text-neutral-600"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <Menu size={24} />
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-screen bg-white border-t mt-2 shadow-md p-4 flex flex-col space-y-2 z-50 lg:hidden">
          {!sortedItems
            ? renderSkeletons(8)
            : routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-black",
                    route.active ? "text-black" : "text-neutral-500"
                  )}
                >
                  {route.label}
                </Link>
              ))}
        </div>
      )}
    </nav>
  );
};

export default MainNav;
