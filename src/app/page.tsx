import HeroSection from './Components/HeroSection'
import Main from './ui/Main'

export default function Home() {
  return (
    <Main className="flex w-screen min-h-screen flex-col items-center justify-center relative">
      <HeroSection />
      <section
        className="w-screen h-svh bg-black relative z-20"
        id="about"
      ></section>
      <section className="w-screen h-svh bg-red-600" id="projects"></section>
      <section className="w-screen h-svh bg-blue-500" id="contact"></section>
    </Main>
  )
}
