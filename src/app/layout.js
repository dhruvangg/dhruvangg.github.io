import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "dhruvang.com",
  description: "Dhruvang Gajjar, a software engineer with 6+ YoE in web development industry. Product Management, Problem solving and requiement understanding expert.",
  keywords: ['dhruvang', 'champdecay', 'software', 'blog'],
  image: '',
  canonical: '#'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden scroll-smooth`} >{children}</body>
    </html>
  );
}
