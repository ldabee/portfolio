import Head from 'next/head';
import React, { FC } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import SideOne from '../components/SideOne';
import SideTwo from '../components/SideTwo';
import Terminal from '../components/Terminal';



const Portfolio: FC = () => {
  return (
    <div className="flex flex-col bg-gray-900 h-screen overflow-hidden">
      <Head>
        <title>Portfolio - Mes projets</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <Header />
      <div className="flex h-full">
        <div className="hidden md:flex">
          <SideOne />
        </div>
        <SideTwo />
        <div className="flex flex-col w-full">
          <MainContent />
          <div className="hidden md:flex">
            <Terminal />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Portfolio
