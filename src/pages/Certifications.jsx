import React from 'react';

const Certifications = () => {
  return (
    <main className="flex flex-col min-h-screen dark:bg-black font-poppins">
      <div className="flex justify-center mt-8">
        <h1 className="text-2xl font-semibold dark:text-white">All Certifications</h1>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-y-2 gap-x-2 w-11/12 md:grid-cols-2 px-4 md:w-7/12 mx-auto">
        <div className="border rounded-lg p-4 dark:bg-dark-111 dark:border-gray-111">
          <h1 className="text-sm font-semibold mb-2 dark:text-white">CCNAv7: Introduction to Networks</h1>
          <p className="text-sm dark:text-white">Issued Date: Feb 01, 2023</p>
        </div>
        <div className="border rounded-lg p-4 dark:bg-dark-111 dark:border-gray-111">
          <h1 className="text-sm font-semibold mb-2 dark:text-white">CCNAv7: Introduction to Networks</h1>
          <p className="text-sm dark:text-white">Issued Date: Feb 01, 2023</p>
        </div>
        <div className="border rounded-lg p-4 dark:bg-dark-111 dark:border-gray-111">
          <h1 className="text-sm font-semibold mb-2 dark:text-white">CCNAv7: Introduction to Networks</h1>
          <p className="text-sm dark:text-white">Issued Date: Feb 01, 2023</p>
        </div>
        <div className="border rounded-lg p-4 dark:bg-dark-111 dark:border-gray-111">
          <h1 className="text-sm font-semibold mb-2 dark:text-white">CCNAv7: Introduction to Networks</h1>
          <p className="text-sm dark:text-white">Issued Date: Feb 01, 2023</p>
        </div>
      </div>
    </main>
  );
};

export default Certifications;