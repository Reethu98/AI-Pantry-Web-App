import "./globals.css";
import {Inter} from "next/font/google";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes"
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Servd - AI Recipes Platform",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{theme: neobrutalism}}>
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Toaster richcolors />
        <footer className="py-8 px-4 border-t">
          <div className="max-w-6xl mx-auto flex justify-center items-center">
            <p className="text-stone-500 text-sm">
              Designed & developed by Reethu
            </p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
