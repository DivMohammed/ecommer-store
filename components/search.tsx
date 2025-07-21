// "use client"

// import * as React from "react"

// import { useState } from "react"

// import { Product } from "@/types"



// import Image from "next/image";
// import { useRouter } from "next/navigation";

// import Currency from "@/components/ui/currency";



// export interface InputProps{
//     data: Product[];
// }

// const Search : React.FC<InputProps> = ({
//     data
// }) => {
//     const [value , setValue] = useState("")

//     const router = useRouter()

//     return(
//         <div className="relative w-full">
//             <input
//             onChange={(e) => setValue(e.target.value)}
//             className="flex h-9 w-[440px] rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
//             />
//             {
//             value.length >= 3 && <div className=" absolute w-full top-10 left-0 z-50">
//             {data.map((item) => (
//                 item.name.includes(value) && 

//             <div key={item.id} onClick={() => (router.push(`/product/${item.id}`) , setValue(""))} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 flex justify-between w-[440px]">
//             {/* Images and Actions */}
//             <div className=" aspect-square rounded-xl bg-gray-100 relative">
//                 <Image
//                 src={item?.images?.[0]?.url}
//                 width={80}
//                 height={80}
//                 alt="Image"
//                 className=" aspect-square object-cover rounded-md"
//                 />
//             </div>
//             {/* Description */}
//             <div className="flex flex-col items-end">
//                 <p className="font-semibold text-lg">
//                     {item.name}
//                 </p>
//                 <p className="text-sm text-gray-500">
//                     {item.category?.name}
//                 </p>

//                 {/* Price */}
//                 <div className="flex items-center justify-between">
//                     <Currency value={item?.price} />
//                 </div>
//             </div>
//                 </div>
//                 ))}
//                 </div>
//                 } 
//         </div>
//     )
// }

// export default Search




"use client";

import * as React from "react";
import { useState } from "react";
import { Product } from "@/types";

import Image from "next/image";
import { useRouter } from "next/navigation";

import Currency from "@/components/ui/currency";

export interface InputProps {
  data: Product[];
}

const Search: React.FC<InputProps> = ({ data }) => {
  const [value, setValue] = useState("");
  const router = useRouter();

  // فلترة المنتجات بناءً على الاسم
  const filtered = data.filter((item) =>
    item.name.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <div className="relative">
    <input
        value={value}
        dir="rtl"
        onChange={(e) => setValue(e.target.value)}
        placeholder="ابحث عن منتج..." // ✅ placeholder
        className="flex h-9 w-[240px] sm:w-[440px] rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
    />

      {value.length >= 3 && (
        <div className="absolute w-[440px] top-10 left-0 z-50 bg-white max-h-[400px] overflow-y-auto rounded-md shadow-md">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  router.push(`/product/${item.id}`);
                  setValue("");
                }}
                className="group cursor-pointer rounded-xl border p-3 space-y-4 flex justify-between w-[440px] hover:bg-gray-50 transition"
              >
                {/* Image */}
                <div className="aspect-square rounded-xl bg-gray-100 relative">
                  <Image
                    src={item?.images?.[0]?.url}
                    width={80}
                    height={80}
                    alt="Image"
                    className="aspect-square object-cover rounded-md"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col items-end">
                  <p className="font-semibold text-lg">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.category?.name}</p>
                  <div className="flex items-center justify-between">
                    <Currency value={item?.price} />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="p-4 text-sm text-gray-500 text-center">
              لا يوجد نتائج مطابقة.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
