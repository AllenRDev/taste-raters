import React from 'react';
import { Link } from '@inertiajs/react';

const Welcome = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <header className="text-center p-3 md:p-6 absolute w-full z-10">
        <h1 className="text-2xl md:text-4xl font-bold text-white">Welcome to Tasterater</h1>
      </header>
      <main className="flex-grow relative">
        <img
          src='images/homepage/banner.webp'
          alt="Hero Image"
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-4 md:p-6 rounded-lg bg-white bg-opacity-80">
            <p className="text-lg md:text-xl text-gray-800">Start your culinary journey today!</p>
            <p className="text-sm md:text-lg text-gray-600 mt-2">
              Create an account to unlock a world of delicious recipes and culinary inspiration.
            </p>
            <div className="mt-4">
            <Link href={route('login')} className="bg-green hover:bg-green-hover text-white px-4 py-2 rounded-lg text-sm md:text-base md:px-6 md:py-3 block md:inline-block transition duration-300 ease-in-out">
                Log in
            </Link>
            <Link href={route('register')} className="bg-green hover:bg-green-hover text-white px-4 py-2 rounded-lg text-sm md:text-base md:px-6 md:py-3 block md:inline-block mt-2 md:mt-0 md:ml-4 transition duration-300 ease-in-out">
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
