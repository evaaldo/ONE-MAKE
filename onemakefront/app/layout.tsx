import type { Metadata } from "next";
import { Search, ShoppingCart, CircleUserRound } from "lucide-react";
import "./globals.css";
import Announcementbar from "@/components/AnnouncementBar";
import CategoryBar from "@/components/CategoryBar";

export const metadata: Metadata = {
  title: "OneMake | Todas as suas comprinhas por apenas R$ 10,007",
  description: "OneMake | Todas as suas comprinhas por apenas R$ 10,00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="bg-pink-50">
          <div className="w-screen bg-pink-500 text-center py-1">
            <Announcementbar />
          </div>
          <div className="flex justify-between px-20 py-5">
            <div className="flex gap-8 items-center">
              <img
                src="logo.png"
                alt="Logo da OneMake"
                className="rounded-full w-20 border"
              />
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Busque aqui o seu produtinho..."
                  className="rounded-lg w-[40vw] h-10 bg-white px-6 py-4 pl-10 placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-0"
                />
              </div>
            </div>
            <div className="flex items-center gap-6">
              <CircleUserRound size={28} className="cursor-pointer" />
              <ShoppingCart size={28} className="cursor-pointer" />
            </div>
          </div>
          <CategoryBar />
        </header>
        {children}
      </body>
    </html>
  );
}
