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

export default function Home() {

  return (
    <>
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