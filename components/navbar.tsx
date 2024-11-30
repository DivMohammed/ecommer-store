import Link from "next/link"

import Container from "@/components/ui/container"
import MainNav from "@/components/main-nav"
import NavbarActions from "@/components/navbar-actions"
import getCategories from "@/actions/get-categories"
import getProducts from "@/actions/get-products"
import Search from "./search"

import getSortCategory from '@/actions/get-sort-category ';


export const revalidate = 0;

const Navbar = async () => {
    const categories = await getCategories();
    const products = await getProducts({ isFeatured: true });
    const sortCategory = await getSortCategory("eff368dc-50d7-44fb-ae9f-6ee46ab341b2");

// console.log(products[0].name)
    return (
        <div className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                    <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                        <p className="font-bold text-xl">Store</p>
                    </Link>
                    <MainNav data={categories} sort={sortCategory} />
                    <Search data={products} />
                    <NavbarActions />
                </div>
            </Container>
        </div>
    )
}

export default Navbar