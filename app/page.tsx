





import Hero from "@/app/components/Hero";
import Services from "./services/page";
import Contactpage from "./contact/page";



export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between ">
          <Hero/>
          <Services />
          <Contactpage />
      </main>
  )}

