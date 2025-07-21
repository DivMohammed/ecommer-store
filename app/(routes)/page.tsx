import getBillboard from "@/actions/get-billboard";
import getAllBillboard from "@/actions/get-all-billboard";
import Container from "@/components/ui/container"
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import HomeSwiper from "@/components/homeSwiper";
import Billboard from "@/components/billboard";

// import type { Metadata } from "next";


export const revalidate = 0;

// export const metadata: Metadata = {
//   title: "اشهر المنتجات",
//   description: "Store",
// };

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboards = await getAllBillboard();
  const billboard = await getBillboard("28128a79-b4fa-4cd9-b2db-15686a8c8888");

  console.log("billboards", billboards);

  return (
    <>
        {/* <HomeSwiper data={billboards} /> */}
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard}/>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products}/>
        </div>
      </div>
    </Container>
    </>
  )
}

export default HomePage