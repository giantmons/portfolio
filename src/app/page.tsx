"use client"
import Lanyard from "@/components/lanyard/lanyard";
import About from "@/components/homepage/About";
import WorkExperience from "@/components/homepage/WorkExperience";
import TechStack from "@/components/homepage/TechStack";
import BeyondCoding from "@/components/homepage/BeyondCoding";
import ContactInformation from "@/components/homepage/ContactInformation";
import RecentProjects from "@/components/homepage/RecentProjects";
import Certifications from "@/components/homepage/Certifications";
import GetInTouch from "@/components/homepage/GetInTouch";
import Footer from "@/components/homepage/Footer";
import Title from "@/components/homepage/Title";
import Head from "next/head";

export default function Home() {

  return (
    <>
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

      <div className="relative bg-white dark:bg-black min-h-screen font-poppins flex flex-col items-center">

        {/* Lanyard component with controlled positioning */}
        <div className="absolute xl:-left-140 -top-76 xl:-top-45 w-full h-full">
          <Lanyard />
        </div>

        {/* Main content container with proper spacing */}
        <main className="w-11/12 md:w-[700px] xl:w-[760px] mt-[425px] xl:mt-[50px] pb-16 text-black relative z-50">

          {/* TITLE CONTENT */}
          <Title />

          {/* GRID CONTAINER */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-6 sm:grid-rows-12 gap-2">

            {/* ABOUT ME CONTAINER */}
            <About />

            {/* WORK EXPERIENCE */}
            <WorkExperience />


            {/* TECH STACK */}
            <TechStack />

            {/* BEYOND CODING */}
            <BeyondCoding />

            {/* CONTACT INFORMATION */}
            <ContactInformation />

            {/* RECENT PROJECTS */}
            <RecentProjects />

            {/* GET IN TOUCH */}
            <GetInTouch />

            {/* CERTIFICATIONS */}
            <Certifications />
          </div>

          {/* FOOTER */}
          <Footer />
        </main>
      </div>
    </>

  );
}