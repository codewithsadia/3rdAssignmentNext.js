import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-800 flex items-center justify-center h-screen">
      <div className="bg-gray-400 shadow-md rounded-lg max-w-3xl w-full p-6 flex">
        <div className="w-1/2 p-4">
          <h1 className="text-2xl font-bold text-gray-100 mb-2">Welcome to My Portfolio</h1>
          <p className="text-gray-100">Hello! I&apos;m Sadia Imran, a passionate developer with expertise in HTML, CSS, TypeScript, Next.js. Check out my projects and get in touch if you&apos;re interested in working together.</p>
          <div className="text-center mt-4">
            <Link href="/projects" className="bg-blue-200 text-gray-800 py-2 px-4 rounded hover:text-blue-500">View My Work</Link>
          </div>
        </div>
        <div className="w-1/2">
          <Image src="/sadiaimran.png" alt="Profile Image" width={500} height={500} className="rounded-l-lg" />
        </div>
      </div>
    </div>
  );
};

export default Home;
