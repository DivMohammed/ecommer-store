"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Product } from "@/types";
import Currency from "@/components/ui/currency";


interface ProductCardSearch {
    data: Product;
}

const ProductCardSearch: React.FC<ProductCardSearch> = ({
    data,
}) => {
    const router = useRouter()

    const handleClick = () => {
        router.push(`/product/${data?.id}`)
    }

  return (
    <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 flex justify-between">
        {/* Images and Actions */}
        <div className=" aspect-square rounded-xl bg-gray-100 relative">
            <Image
            src={data?.images?.[0]?.url}
            width={80}
            height={80}
            alt="Image"
            className=" aspect-square object-cover rounded-md"
            />
        </div>
        {/* Description */}
        <div className="flex flex-col items-end">
            <p className="font-semibold text-lg">
                {data.name}
            </p>
            <p className="text-sm text-gray-500">
                {data.category?.name}
            </p>

            {/* Price */}
        <div className="flex items-center justify-between">
            <Currency value={data?.price} />
        </div>
        </div>
    </div>
  )
}

export default ProductCardSearch;