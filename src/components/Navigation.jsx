import React from 'react';

function Navigation() {
  return (
    <div className="flex items-center justify-between w-full h-[70px] px-6 bg-blue-700">
      <div className="ml-6 flex items-center gap-14">
        <img className="w-[60px] h-[60px]" src="./images/logo.png" alt="Logo" />
        <h1 className='text-2xl font-bold text-white'>Basic Page</h1>
      </div>
      <div className="mr-6 flex gap-8">
        <a className="text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-500 transition duration-200">Home</a>
        <a className="text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-500 transition duration-200">About</a>
        <a className="text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-500 transition duration-200">Contact</a>
      </div>
    </div>
  );
}

export default Navigation;
