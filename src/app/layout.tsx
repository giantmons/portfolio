import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "@/components/theme/theme-context";
import Head from "next/head";

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
      <Head>
        <title>Leuan Santos | Frontend Developer</title>
        <meta name="google-site-verification" content="OZW8Q8yRF3NZZYPi-m6ByzDSRQ5dId5-s-7b9uIqsdo" />
        <meta name="description" content="Hi! Im Leuan, a frontend developer passionate about building user-centric web experiences." />
        <meta name="keywords" content="Frontend Developer, Portfolio, React, Next.js, JavaScript, Tailwind CSS" />
        <meta name="author" content="Leuan Santos" />
        <meta property="og:title" content="Leuan Santos | Frontend Developer" />
        <meta property="og:description" content="Explore my projects, skills, and work experience in web development." />
        {/* <meta property="og:image" content="/images/og-image.png" /> */}
        <meta property="og:url" content="https://leuansantos.vercel.app/" />
        <link rel="canonical" href="https://leuansantos.vercel.app/" />
      </Head>
      <body className={`${poppins.className}`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>

      </body>
    </html>
  );
}
