import Head from 'next/head'
import { FC, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import SideOne from '../components/SideOne';
import * as Projects from '../store/action-creators/ProjectsActionCreators';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import Image from "next/image";
import { useRouter } from "next/dist/client/router";

const Home: FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { GetAllProjects } = bindActionCreators(Projects, dispatch);

  useEffect(() => {
    GetAllProjects()
  }, []);

  return (
    <div className="flex flex-col bg-gray-900 h-screen">
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <Header />
      <div className="flex h-full ">
        <div className="relative h-full w-full">
          <Image
            src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1981&q=80"
            layout="fill"
            objectFit="cover"
            className="opacity-40"
          />
          <div className="absolute group flex flex-col items-center top-15 md:top-1/3 w-full text-center text-white">
            <div className="relative w-64 h-64 rounded-full flex flex-col justify-around items-center p-10 animate-none md:animate-spin-slow ">
              <div className="absolute top-2 h-10 w-10 ">
                <Image
                  src="/image/css.png"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="absolute bottom-2 h-10 w-10 ">
                <Image
                  src="/image/javascript.png"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="absolute left-2 h-10 w-10 ">
                <Image
                  src="/image/mysql.png"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="absolute right-2 h-10 w-10 ">
                <Image
                  src="/image/node.png"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="absolute top-28 h-10 w-10 animate-none md:animate-spin-reverse">
              <Image
                src="/image/physics.png"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-full flex flex-col items-center">
              <h1 className="text-2xl font-semibold pb-4">Lionel Dabee - Développeur frontend</h1>
              <div className="flex flex-col md:flex-row">
                <button className="homeBtn" onClick={() => router.push('/portfolio')}>Voir mes projets</button>
                <a href='/CV_Lionel_Dabee.docx' className="homeBtn" download>Télécharger mon CV</a>
                <button className="homeBtn" onClick={() => router.push('/contact')}>Me contacter</button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Home;

