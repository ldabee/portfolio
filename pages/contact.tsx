import Head from 'next/head'
import React, { FC } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SideOne from '../components/SideOne'

const Contact: FC = () => {

  return (
    <div className="flex flex-col bg-gray-900 h-screen">
      <Head>
        <title>Portfolio - Contact</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <Header />
      <div className="flex h-full">
        <div >
          <h1>This is my contact page</h1>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
