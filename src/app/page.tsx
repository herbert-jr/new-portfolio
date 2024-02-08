import Main from './ui/Main'

export default function Home() {
  return (
    <Main className="flex w-screen min-h-screen flex-col items-center justify-center">
      <section className="w-screen h-svh space-x-6"></section>
      <section className="w-screen h-svh bg-black" id="b"></section>
      <section className="w-screen h-svh bg-red-600" id="a"></section>
      <section className="w-screen h-svh bg-blue-500" id="contacts"></section>
    </Main>
  )
}
