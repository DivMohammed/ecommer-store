import { Urbanist } from "next/font/google";

import Footer from "@/components/footer"
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

import type { Metadata } from "next";

import "./globals.css";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}



// app/layout.tsx (أو app/root-layout.tsx)
// ——————————————————————————————————————————————————
// "use client";

// import { Urbanist } from "next/font/google";
// import Script from "next/script";

// import Footer from "@/components/footer";
// import Navbar from "@/components/navbar";
// import ModalProvider from "@/providers/modal-provider";
// import ToastProvider from "@/providers/toast-provider";

// import type { Metadata } from "next";

// import "./globals.css";

// const font = Urbanist({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Store",
//   description: "Store",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <head>
//         {/* ربط الـ CSS الخارجي فورًا */}
//         <link
//           rel="stylesheet"
//           href="https://fashion-slider.uiinitiative.com/assets/index.fca86069.css"
//         />
//       </head>

//       <body className={font.className}>
//         {/* تحميل vendor module قبل أي تفاعل */}
//         <Script
//           src="https://fashion-slider.uiinitiative.com/assets/vendor.688a9bfa.js"
//           strategy="beforeInteractive"
//           type="module"
//         />

//         {/* تحميل السكربت الرئيسي بأقل تأثير على الأداء */}
//         <Script
//           src="https://fashion-slider.uiinitiative.com/assets/index.ff8f4572.js"
//           strategy="lazyOnload"
//           type="module"
//         />

//         <ModalProvider />
//         <ToastProvider />
//         <Navbar />
//           {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }

