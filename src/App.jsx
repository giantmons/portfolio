import { useState } from "react";
import { IoSunnyOutline, IoMoonOutline, IoMailOutline, IoCallOutline, IoLocationOutline, IoBriefcaseOutline, IoBookOutline, IoBuildOutline, IoCheckboxOutline, IoFolderOpenOutline } from "react-icons/io5";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <main className="flex flex-col min-h-screen dark:bg-black">
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row align-middle w-11/12 md:w-10/12 lg:w-8/12 xl:w-7/12 mx-auto text-black font-poppins mt-10 px-4 md:px-0">
          <div className="h-auto w-40 md:w-52 mx-auto md:mx-0 mb-6 md:mb-0">
            <img className="rounded-lg w-full" src="/profile-picture.jpg" alt="Profile" />
          </div>
          <div className="flex flex-col justify-center md:ml-7 w-full gap-1">
            <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-0">
              <h1 className="font-bold text-2xl dark:text-white text-center md:text-left">Leuan Santos</h1>
              <button
                className="mb-4 md:mb-0 flex items-center justify-center gap-1 border rounded-lg px-4 py-2 text-xs hover:translate-y-[-2px] transition-transform duration-300 dark:text-white"
                onClick={toggleDarkMode}
              >
                {darkMode ? (
                  <>
                    <IoSunnyOutline size={18} />
                  </>
                ) : (
                  <>
                    <IoMoonOutline size={18} />
                  </>
                )}
              </button>
            </div>
            <p className="flex gap-1 items-center text-gray-600 text-sm justify-center md:justify-start dark:text-white">
              <IoLocationOutline size={18} />
              Batangas, Philippines
            </p>
            <p className="text-black text-base dark:text-white text-center md:text-left">
              College Undergraduate
            </p>
            <div className="flex gap-2 mt-2 justify-center md:justify-start">
              <button className="flex justify-center items-center gap-1 bg-black rounded-lg text-white px-4 py-2 text-xs hover:translate-y-[-2px] transition-transform duration-300 dark:bg-white dark:text-black">
                <IoCallOutline size={15} />
                +63 939-762-1668
              </button>
              <a href="mailto:santosleuan@gmail.com">
                <button className="flex items-center justify-center gap-1 border border-gray-200 rounded-lg text-black px-3 py-2 text-xs hover:translate-y-[-2px] transition-transform duration-300 dark:text-white">
                  <IoMailOutline size={20} />
                  Send Email
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-11/12 md:w-10/12 lg:w-8/12 xl:w-7/12 mx-auto mt-10 pb-10 px-4 md:px-0 font-poppins">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2 md:row-span-1 bg-white rounded-lg p-6 border dark:bg-dark-111 dark:border-gray-111">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-3 dark:text-white"> <IoBriefcaseOutline size={18} /> About</h2>
            <p className="text-black text-sm leading-7 dark:text-gray-300">
              Aspiring web developer and undergraduate student pursuing a Bachelor
              of Science in Information Technology with interest in web development.
              Passionate about designing responsive, user-friendly websites and
              seeking an OJT opportunity to apply my skills in web development and
              gain hands-on experience in the field.
            </p>
          </div>

          {/* Tech Stack Section */}
          <div className="bg-white rounded-lg p-6 border md:row-span-2 dark:bg-dark-111 dark:border-gray-111">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 dark:text-white"> <IoBuildOutline size={18} />Tech Stack</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2 dark:text-white text-sm">Frontend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {["HTML", "CSS", "JavaScript", "Tailwind", "ReactJS"].map((tech) => (
                    <span key={tech} className="px-3 py-1 border rounded-lg text-sm dark:bg-black-111 dark:text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2 dark:text-white text-sm">Backend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {["NodeJS", "ExpressJS", "Django", "MySQL", "MongoDB"].map((tech) => (
                    <span key={tech} className="px-3 py-1 border rounded-lg text-sm dark:bg-black-111 dark:text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="bg-white rounded-lg p-6 border md:row-span-1 md:col-span-2 dark:bg-dark-111 dark:border-gray-111">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-3 dark:text-white"><IoBookOutline size={18} />Education</h2>
            <h3 className="font-medium text-sm dark:text-white">
              Bachelor of Science in Information Technology
            </h3>
            <p className="text-black mt-1 text-sm dark:text-gray-300">
              Batangas State University TNEU - Alangilan Campus
            </p>
            <p className="text-black text-sm mt-1 dark:text-gray-400">
              Expected Graduation: 2025
            </p>
          </div>



          {/* Certifications Section */}
          <div className="bg-white rounded-lg p-6 border  dark:bg-dark-111 dark:border-gray-111">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2 dark:text-white"> <IoCheckboxOutline />Certifications</h2>
              <button className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                See All
              </button>
            </div>
            <div className="space-y-4">
              {[
                { name: "Cybersecurity Essentials", org: "CISCO" },
                { name: "Cloud Security Foundations", org: "AWS Academy" },
                { name: "CCNA v7: Introduction to Networks", org: "CISCO" },
              ].map((cert) => (
                <div key={cert.name} className="bg-gray-100 p-4 rounded-lg dark:bg-black text-sm">
                  <h3 className="font-medium dark:text-white">{cert.name}</h3>
                  <p className="text-gray-600 text-sm mt-1 dark:text-gray-300">{cert.org}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Projects Section */}
          <div className="bg-white rounded-lg p-6 border md:col-span-2 dark:bg-dark-111 dark:border-gray-111">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2 dark:text-white"> <IoFolderOpenOutline size={18} />Academic Projects</h2>
              <button className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                See All
              </button>
            </div>
            <div className="space-y-4">
              {[
                {
                  name: "College of Informatics and Computing Sciences (CICS)",
                  desc: "School Organization Website",
                },
                {
                  name: "BINIEL - a Store for Designer Brand Perfumes",
                  desc: "Ecommerce Mobile Application",
                },
                {
                  name: "College Campus Crowd Monitoring System",
                  desc: "Capstone",
                },
              ].map((project) => (
                <div key={project.name} className="bg-gray-100 p-4 rounded-lg dark:bg-black text-sm">
                  <h3 className="font-medium dark:text-white">{project.name}</h3>
                  <p className="text-gray-600 text-sm mt-1 dark:text-gray-300">{project.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-11/12 md:w-10/12 lg:w-8/12 xl:w-7/12 mx-auto mb-20 px-4 md:px-0 font-poppins">
          <hr className="border mb-10 dark:border-gray-111" />
          <p className="text-sm dark:text-white">@2024 Leuan Santos. All rights reserved.</p>
        </div>
      </main>
    </div>
  );
}

export default App;