import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme/theme-context";

// Configure the font
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-poppins',
});

// ✅ Use this export — Next.js will inject it into <head>
export const metadata: Metadata = {
  title: "Leuan Santos - Frontend Developer",
  description: "Hi! I'm Leuan, a frontend developer passionate about building user-centric web experiences.",
  keywords: "Frontend Developer, Portfolio, React, Next.js, JavaScript, Tailwind CSS",
  authors: [{ name: "Leuan Santos" }],
  verification: {
    google: "OZW8Q8yRF3NZZYPi-m6ByzDSRQ5dId5-s-7b9uIqsdo"
  },
  openGraph: {
    title: "Leuan Santos | Frontend Developer",
    description: "Explore my projects, skills, and work experience in web development.",
    url: "https://leuansantos.vercel.app/",
    // images: ["https://leuansantos.vercel.app/images/og-image.png"] // optional
  },
  metadataBase: new URL("https://leuansantos.vercel.app/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Analytics />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
