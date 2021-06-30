import Head from 'next/head'
import Navbar from '../components/Navbar'
import { Hero, Technologies, Services, Projects, Footer } from '../components/exports'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar /> 
      <main className="flex flex-col items-center justify-center w-full space-y-40 mt-10 mb-20 text-center">
          <Hero />
          <Technologies /> 
          <Projects /> 
          <Services /> 
          <Footer />
          
      </main>


    </div>
  )
}
