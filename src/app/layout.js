import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Skeleton - Bare bones app",
  description: "Skeleton - Bare bones app - Vercel test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Link href="/">Home</Link>
          
        </nav>
        
        
        {children}

        <footer></footer>
      </body>
    </html>
  );
}
