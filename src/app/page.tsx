"use client"

import Stack from "@/components/stack/stack";
import Link from 'next/link';
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { BookOpen, BriefcaseBusiness, FlaskConical, Folder, Mail, MedalIcon, PersonStanding } from "lucide-react";
import { IoLogoInstagram } from "react-icons/io5";
import Squares from "@/components/squares/squares";
import Lanyard from "@/components/lanyard/lanyard";
import onePic from "@/assets/stack/one.png"
import twoPic from "@/assets/stack/two.webp"
import threePic from "@/assets/stack/three.webp"
import fourPic from "@/assets/stack/four.png"
import FadeInOnScroll from "@/components/fade-on-scroll/FadeInOnScroll";
import { useTheme } from "@/components/theme/theme-context";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  const images: { id: number; img: string }[] = [
    { id: 1, img: fourPic.src },
    { id: 2, img: twoPic.src },
    { id: 3, img: threePic.src },
    { id: 4, img: onePic.src }
  ];

  return (
    <div className="relative bg-white dark:bg-black min-h-screen font-poppins flex flex-col items-center">
      {/* Lanyard component with controlled positioning */}
      <div className="absolute xl:-left-140 -top-76 xl:-top-45 w-full h-full">
        <Lanyard />
      </div>

      {/* Main content container with proper spacing */}
      <main className="w-11/12 md:w-[700px] xl:w-[760px] mt-[425px] xl:mt-[50px] pb-16 text-black relative z-50">
        {/* TITLE CONTENT */}
        <FadeInOnScroll className="flex flex-col sm:flex-row items-center justify-center">
          {/* NAME AND DESCRIPTION */}
          <div className="order-2 mt-8 sm:order-none md:mt-0 xl:mr-36 dark:text-white flex flex-col justify-center items-center xl:items-start">
            <h1 className="font-bold text-4xl text-center xl:text-left">Hi, I&apos;m Leuan👋🏻</h1>
            <p className="text-sm leading-6 text-center xl:text-left">Frontend Developer. I love bringing my ideas to code,
              but not when bugs get creative too.
            </p>
            <label className="toggle theme-controller cursor-pointer h-8 w-14 mt-2">
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={toggleTheme}
                className="hidden"
              />

              {/* Sun Icon for Light Mode */}
              <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

              {/* Moon Icon for Dark Mode */}
              <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>
            </label>

          </div>

          {/* STACK COMPONENT */}
          <div className="hidden xl:flex">
            <Stack
              randomRotation={false}
              sensitivity={180}
              sendToBackOnClick={false}
              cardDimensions={{ width: 200, height: 200 }}
              cardsData={images}
            />
          </div>
        </FadeInOnScroll>

        {/* GRID CONTAINER */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-6 sm:grid-rows-12 gap-3">

          {/* ABOUT ME CONTAINER */}
          <FadeInOnScroll className="bg-white dark:bg-[#111111] dark:text-white sm:col-span-4 row-span-3 border border-gray-200 dark:border-[#333333] p-5 rounded-lg transition hover:shadow-lg">
            <h1 className="font-semibold text-lg flex gap-2 items-center"><PersonStanding size={18} className="opacity-40" /> About</h1>
            <p className="text-sm mt-1 leading-6">I'm an aspiring software engineer with a passion for building responsive, accessible,
              and user-friendly web interfaces. I love working with modern design principles, focusing on performance, and making
              sure every user has a smooth experience. I'm experienced in creating interactive features, making sure websites look
              great on any device, and following best practices in UI/UX design.
            </p>
            <p className="text-sm mt-3 leading-6">
              Lately, I've been working on leveling up my skills even more — diving deeper into both front-end and back-end technologies
              to create more full-fledged, complete applications. I'm excited about building projects from the ground up and bringing
              ideas to life through clean code and thoughtful design.
            </p>
          </FadeInOnScroll>

          {/* WORK EXPERIENCE */}
          <FadeInOnScroll className="bg-white dark:bg-[#111111] dark:border-[#333333] dark:text-white sm:col-span-2 row-span-4 border border-gray-200 p-5 rounded-lg transition hover:shadow-lg">
            <h1 className="font-semibold text-lg mb-3 flex gap-2 items-center"><BriefcaseBusiness size={18} className="opacity-40" />Experience</h1>
            <ul className="timeline timeline-vertical timeline-compact">
              <li>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start timeline-box bg-transparent border-gray-200 w-full text-xs">Frontend Developer</div>
                <div className="timeline-end text-xs"> Center for Artificial Intelligence and Smart Technologies <br /> <span className="badge badge-xs mt-2 bg-transparent text-black dark:text-white border-gray-300">2025</span></div>
                <hr className="bg-gray-100" />
              </li>
              <li>
                <hr className="bg-gray-100" />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start text-xs mt-4 timeline-box bg-transparent border-gray-200">BS Information Technology</div>
                <div className="timeline-end text-xs">Batangas State University TNEU - Alangilan Campus <br /> <span className="badge badge-xs mt-2 bg-transparent text-black dark:text-white border-gray-300">2021</span></div>
                <hr className="bg-gray-100" />
              </li>
              <li>
                <hr className="bg-gray-100" />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start text-xs mt-4 timeline-box w-full bg-transparent border-gray-200">Hello World!</div>
                <div className="timeline-end text-xs">Wrote my first line of code <br /> <span className="badge badge-xs mt-2 bg-transparent text-black dark:text-white border-gray-300">2020</span></div>
                <hr className="bg-gray-100" />
              </li>
            </ul>
          </FadeInOnScroll>


          {/* TECH STACK */}
          <FadeInOnScroll className="bg-white dark:text-white dark:bg-[#111111] dark:border-[#333333] sm:col-span-4 row-span-3 border border-gray-200 p-5 rounded-lg transition hover:shadow-lg">
            <h1 className="font-semibold text-lg flex gap-2 items-center"><FlaskConical size={18} className="opacity-40" />Tech Stack</h1>
            <h2 className="text-sm mt-2">Frontend Development:</h2>
            <div className="flex flex-wrap gap-1 mt-2">
              <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">HTML5</div>
              <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">CSS3</div>
              <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">Tailwind CSS</div>
              <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">ReactJS</div>
              <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">JavaScript</div>
              <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">TypeScript</div>
              <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">NextJS</div>
            </div>

            <h2 className="text-sm mt-3">Backend Development:</h2>
            <div className="flex flex-wrap gap-1 mt-2">
              <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">NodeJS</div>
              <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">Express</div>
              <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">MongoDB</div>
              <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">PostgreSQL</div>
              <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">REST API</div>
              <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">JWT</div>
            </div>

            <h2 className="text-sm mt-3">Tools and Platforms:</h2>
            <div className="flex flex-wrap gap-1 mt-2">
              <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">Git</div>
              <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">Github</div>
              <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">VS Code</div>
              <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">Figma</div>
              <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">Trello</div>
              <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">OpenProject</div>
            </div>
          </FadeInOnScroll>

          {/* BEYOND CODING */}
          <FadeInOnScroll className="bg-white dark:text-white dark:bg-[#111111] dark:border-[#333333] row-span-2 sm:col-span-2 p-5 border border-gray-200 rounded-lg transition hover:shadow-lg">
            <h1 className="font-semibold flex gap-2 items-center"><BookOpen size={18} className="opacity-40" />Beyond Coding</h1>
            <p className="text-sm mt-3 leading-6">When I'm not writing code, I'm busy stretching my skills and staying curious about everything tech and beyond.</p>
            <div className="flex">
              <p className="text-sm mt-3">Other than that, I sleep.</p>
            </div>
          </FadeInOnScroll>

          {/* CONTACT INFORMATION */}
          <FadeInOnScroll className="bg-white dark:text-white dark:bg-[#111111] dark:border-[#333333] row-span-3 sm:col-span-2 border border-gray-200 rounded-lg p-5 transition hover:shadow-lg">
            <h1 className="font-semibold flex gap-2 items-center"><Mail size={18} className="opacity-40" />Contact</h1>

            <a href="mailto:santosleuan@gmail.com">
              <div className="bg-gray-100 dark:bg-black p-4 rounded-lg mt-3">
                <h2 className="text-xs text-gray-400">Email</h2>
                <p className="text-sm">santosleuan@gmail.com</p>
              </div>
            </a>

            <div className="bg-gray-100 dark:bg-black p-4 rounded-lg mt-3">
              <h2 className="text-xs text-gray-400">Phone Number</h2>
              <p className="text-sm">+63 939-762-1668</p>
            </div>

            <div className="bg-gray-100 dark:bg-black p-4 rounded-lg mt-3">
              <h2 className="text-xs text-gray-400">Social Links</h2>
              <div className="flex flex-col lg:flex-row justify-center gap-2 mt-2">
                <a href="https://www.linkedin.com/in/leuan-paolo-santos-139477311/"><button className="btn w-full"><IoLogoLinkedin size={24} /></button></a>
                <a href="https://www.instagram.com/leyunsantos/"><button className="btn w-full"><IoLogoInstagram size={24} /></button></a>
                <a href="https://github.com/giantmons"><button className="btn w-full"><IoLogoGithub size={24} /></button></a>
              </div>
            </div>
          </FadeInOnScroll>

          {/* RECENT PROJECTS */}
          <FadeInOnScroll className="bg-white dark:text-white dark:bg-[#111111] dark:border-[#333333] sm:col-span-4 row-span-3 border border-gray-200 rounded-lg p-5 transition hover:shadow-lg">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold flex gap-2 items-center"><Folder size={18} className="opacity-40" />Recent Projects</h1>
              <Link href={"/projects"}><p className="text-xs text-gray-500 cursor-pointer">See more</p></Link>
            </div>

            <div className="grid grid-rows-2 gap-3 mt-3">
              <div className="border border-gray-200 dark:border-[#333333] p-3 rounded-lg">
                <h2 className="text-sm font-medium">Taskly</h2>
                <p className="text-xs text-gray-400">a todo list web application</p>
              </div>
              <div className="border border-gray-200 dark:border-[#333333] p-3 rounded-lg">
                <h2 className="text-sm font-medium">Bineil - a Store for Designer Brand Perfumes</h2>
                <p className="text-xs text-gray-400">a mobile ecommerce application</p>
              </div>
              <div className="border border-gray-200 dark:border-[#333333] p-3 rounded-lg">
                <h2 className="text-sm font-medium">CICS - BSU</h2>
                <p className="text-xs text-gray-400">a school organization website</p>
              </div>
              <div className="border border-gray-200 dark:border-[#333333] p-3 rounded-lg">
                <h2 className="text-sm font-medium">ACTION CENTER - Crowd System</h2>
                <p className="text-xs text-gray-400">a crowd monitoring system</p>
              </div>
            </div>
          </FadeInOnScroll>

          {/* GET IN TOUCH */}
          <FadeInOnScroll className="dark:text-white dark:bg-[#111111] dark:border-[#333333] sm:col-span-4 row-span-3 relative border border-gray-200 rounded-lg p-5 flex justify-center items-center overflow-hidden transition hover:shadow-lg">
            <h1 className="font-extrabold text-4xl relative z-10">Get in Touch</h1>
            <div className="absolute inset-0 z-0">
              <Squares
                speed={0.5}
                squareSize={40}
                direction='diagonal'
                hoverFillColor='#222'
              />
            </div>
          </FadeInOnScroll>

          {/* CERTIFICATIONS */}
          <FadeInOnScroll className="dark:text-white dark:bg-[#111111] dark:border-[#333333] sm:col-span-2 row-span-3 border border-gray-200 rounded-lg p-5 transition hover:shadow-lg">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold flex gap-2 items-center"><MedalIcon size={18} className="opacity-40" />Certifications</h1>
              <Link href={"/certifications"}><p className="text-xs text-gray-500 cursor-pointer">See more</p></Link>
            </div>

            <div className="grid gap-3 mt-3">
              <div className="border border-gray-200 dark:border-[#333333] p-3 rounded-lg">
                <h2 className="text-sm font-medium">Web Developer Bootcamp</h2>
                <p className="text-xs text-gray-400">Udemy</p>
              </div>
              <div className="border border-gray-200 dark:border-[#333333] p-3 rounded-lg">
                <h2 className="text-sm font-medium">Frontend Speaker</h2>
                <p className="text-xs text-gray-400">CAIST - ICT</p>
              </div>
              <div className="border border-gray-200 dark:border-[#333333] p-3 rounded-lg">
                <h2 className="text-sm font-medium">Cloud Security Foundations</h2>
                <p className="text-xs text-gray-400">AWS Academy</p>
              </div>
              <div className="border border-gray-200 dark:border-[#333333] p-3 rounded-lg">
                <h2 className="text-sm font-medium">Cybersecurity Essentials</h2>
                <p className="text-xs text-gray-400">CISCO</p>
              </div>
            </div>
          </FadeInOnScroll>
        </div>

        <footer className="mt-16 pb-8">
          <hr className="text-gray-200 dark:text-[#333333]" />
          <p className="mt-6 text-sm dark:text-white">@2025 Leuan Santos. All rights Reserved</p>
        </footer>

      </main>
    </div>
  );
}