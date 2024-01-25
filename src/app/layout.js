import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "dhruvang.com",
  description: "A Software Developer's Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden scroll-smooth`} >{children}</body>
    </html>
  );
}
