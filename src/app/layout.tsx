import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

// Configure the font (you can set weight, subsets, style, etc.)
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // choose the weights you need
  variable: '--font-poppins', // optional: for custom property use
});

export const metadata: Metadata = {
  title: "Leuan Santos - Frontend Developer",
  description: "A Online Portfolio Created by Leuan Santos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body
        className={`${poppins.className}`}
      >
        {children}
      </body>
    </html>
  );
}
