import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "QuotiCoffee - Votre Guide Ultime du Café 🧋",
  description: "Explorez l'univers du café avec Cafés Quotidiens ! Découvrez des astuces de préparation expertes, des critiques de machines et de grains de café, et plongez dans nos recettes exclusives de café.",
};

export default function RootLayout({ children }) {
  return (

    <html lang="fr">
      <body className={`flex flex-col min-h-screen ${inter.className}`}>
        <Navbar />
        <main className="grow max-w-6xl m-auto px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
