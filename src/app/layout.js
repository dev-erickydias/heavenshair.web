import { Inter } from "next/font/google";
import "../styles/globals.css";
import "../styles/configsScroll.css"
import NavMenu from "@/components/header/navMenu/NavMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Heavens Hair",
  description: "Heavens Hair salão de cabelereiro.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-nr">
      <body className="page">
        
        {children}
        </body>
    </html>
  );
}
