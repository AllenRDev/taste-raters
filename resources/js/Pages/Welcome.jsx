import React from 'react';
import { Link, Head } from '@inertiajs/react';

const Welcome = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Head title="Welcome"/>
      <header className="text-center p-3 md:p-6 absolute w-full z-10">
        <h1 className="text-2xl md:text-5xl font-bold text-orange-200/80 mix-blend-color-burn font-lobster">Welcome to Tasterater</h1>
      </header>
      <main className="flex-grow relative">
        <img
          src='images/homepage/banner.png'
          alt="Hero Image"
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="border-t border-t-amber-950/40 border-l border-l-amber-950/40 border-b border-b-amber-800/40 border-r border-r-amber-800/40 border-amber-950 text-center p-4 md:p-6 rounded-lg bg-[#341803]/50 bg-blend-overlay">
            <p className="text-lg md:text-xl font-bold text-[#EDCCA7]">Start your culinary journey today!</p>
            <p className="text-sm md:text-lg text-[#F2C59C] mt-2">
              Create an account to unlock a world of delicious recipes and culinary inspiration.
            </p>
            <div className="mt-4">
            <Link href={route('login')} className="text-orange-200 font-bold px-4 py-2 text-sm md:text-lg md:px-6 md:py-3 block md:inline-block transition duration-300 ease-in-out">
                Log in
            </Link>
            <Link href={route('register')} className="text-orange-200 font-bold px-4 py-2 text-sm md:text-lg md:px-6 md:py-3 block md:inline-block mt-2 md:mt-0 md:ml-4 transition duration-300 ease-in-out">
                Register
            </Link>

            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-900 text-white text-center py-2 absolute w-full bottom-0">
        &copy; {new Date().getFullYear()} Tasterater. All rights reserved.
      </footer>
    </div>
  );
}

export default Welcome;
