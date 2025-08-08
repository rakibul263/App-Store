import React from 'react';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router';

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className='w-10/12 mx-auto'>
        <Navbar></Navbar>
      </header>
      <main className="flex-grow w-10/12 mx-auto mt-[3rem]">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
