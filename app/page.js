import AboutSection from '@/components/AboutSection'
import EmailSection from '@/components/EmailSection'
import Footer from '@/components/Footer'
import HeaderSeaction from '@/components/HeroSection'
import ProjectSection from '@/components/ProjectSection'
import Navbar from '@/components/navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
    <container className=" container mx-auto
    px-12 py-3">
    <Navbar />
    <HeaderSeaction />
    <AboutSection />
    <ProjectSection />
    <EmailSection />
    <Footer />
    </container>
    </main>
  )
}
