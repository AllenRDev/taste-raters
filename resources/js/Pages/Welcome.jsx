import React from 'react';
import { Link, Head } from '@inertiajs/react';

const Welcome = () => {
  return (
    //Split the page into 2 columns one for an image the other for login register and call to action

    <div className="flex h-screen justify-center bg-gradient-to-r from-slate-200 to-orange-200">
      <Head title="Welcome" />
      <div className="flex flex-grow flex-col justify-center py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-orange-300 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg rounded-3xl sm:p-20 mx-auto ">
            <div className="max-w-md mx-auto">
              <div className="flex items-center space-x-5">
                <div className="h-14 w-14 bg-gradient-to-r from-orange-200 to-orange-300 rounded-full flex flex-shrink-0 justify-center items-center text-white text-2xl font-mono">
                  <span className="material-icons">
                    restaurant
                  </span>
                </div>
                <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                  <h2 className="leading-relaxed font-lobster">TasteRaters</h2>
                  <p className="text-sm text-gray-500 font-normal leading-relaxed">A place to upload and compare recipes</p>
                </div>
              </div>
              <div className="">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <p>Upload your own recipes and compare them to others.</p>
                  <p>See how your recipes compare to others.</p>
                  <p>Find new recipes to try.</p>
                </div>
                <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7 text-center">
                  <p>Sign up for free</p>
                </div>
                <div className="flex flex-col pt-6">
                  <Link href={route('register')} className="bg-gradient-to-r from-orange-200 to-orange-300 text-white font-bold py-2 rounded-md hover:from-orange-300 hover:to-orange-200 flex items-center justify-center">
                    <span className="material-icons">
                      person_add
                    </span>
                    <span className="ml-2">Register</span>
                  </Link>
                  <Link href={route('login')} className="bg-gradient-to-r from-orange-200 to-orange-300 text-white font-bold py-2 rounded-md hover:from-orange-300 hover:to-orange-200 flex items-center justify-center mt-4">
                    <span className="material-icons">
                      login
                    </span>
                    <span className="ml-2">Login</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

  );
}

export default Welcome;
