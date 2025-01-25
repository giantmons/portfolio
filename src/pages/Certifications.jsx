import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Certifications = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  const handleGoBack = () => {
    navigate(-1);
  }

  const allCertificates = [
    {
      title: 'CCNA: Introduction to Networks - CISCO',
      date: 'Issued Date: Feb 01, 2023',
      link: 'https://www.credly.com/badges/d2528bda-f486-4e9a-9196-53a3f4b2bc89',
      animation: '300',
    },
    {
      title: 'CCNA: Enterprise Networking, Security, and Automation - CISCO',
      date: 'Issued Date: Feb 12, 2024',
      link: 'https://www.credly.com/badges/79f2871d-700f-4d20-a2d3-e73a212f53c7',
      animation: '400',
    },
    {
      title: 'Cybersecurity Essentials - CISCO',
      date: 'Issued Date: May 18, 2024',
      link: 'https://www.credly.com/badges/2eb7b68e-80ec-4f2f-8bb7-c877644064da',
      animation: '500',
    },
    {
      title: 'Introduction to Cloud - AWS Academy',
      date: 'Issued Date: May 18, 2024',
      link: 'https://www.credly.com/badges/a7d6f4ee-fc35-420a-91f6-c27325faf019',
      animation: '600',
    },
    {
      title: 'Cloud Security Foundations - AWS Academy',
      date: 'Issued Date: Dec 21, 2024',
      link: 'https://www.credly.com/badges/d5ac4006-cd5e-4e34-8cc5-ec117233e194',
      animation: '700',
    },
  ]


  return (
    <main className="flex flex-col min-h-screen dark:bg-black font-poppins">
      <div
        className="flex justify-start gap-6 mt-8 w-11/12 mx-auto md:w-8/12"
        data-aos="fade-up"
      >
        <button
          className='text-sm dark:text-white'
          onClick={handleGoBack}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Back to Home
        </button>
        <h1
          className="text-2xl font-semibold dark:text-white self-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          All Certifications
        </h1>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-y-2 gap-x-2 w-11/12 md:grid-cols-2 px-4 md:w-8/12 mx-auto">

        {allCertificates.map((cert, index) => (
          <a
            key={index}
            href={`${cert.link}`}
            data-aos="fade-up"
            data-aos-delay={`${cert.animation}`}
          >
            <div className="border rounded-lg p-4 dark:bg-dark-111 dark:border-gray-111 hover:translate-y-[-2px] transition-transform duration-300 cursor-pointer">
              <h1 className="text-sm font-semibold mb-2 dark:text-white">{`${cert.title}`}</h1>
              <p className="text-sm dark:text-white">{`${cert.date}`}</p>
            </div>
          </a>
        ))}

      </div>


      <div className="mt-20 w-11/12 md:w-10/12 lg:w-8/12 xl:w-8/12 mx-auto mb-20 px-4 md:px-0 font-poppins"
        data-aos="fade-up" data-aos-delay="600">
        <hr className="border mb-10 dark:border-gray-111" />
        <p className="text-sm dark:text-white">@2024 Leuan Santos. All rights reserved.</p>
      </div>
    </main>
  );
};

export default Certifications;