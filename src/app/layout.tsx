import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import Navbar from "./navbar";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Richik's Corner on the Web",
  description: "Building things that matter, one block at a time.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://richik.me",
    siteName: "Richik's Corner on the Web",
    images: [
      {
        url: "https://richik.me/me.jpg",
        width: 4011,
        height: 3712,
        alt: "Richik Chanda",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <div className="flex flex-col bg-primary w-screen">
          <Navbar />
          <div className="w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
