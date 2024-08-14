





import ExHero from "@/app/components/ExHero";
import Services from "./services/page";
import Contactpage from "./contact/page";



export default function ExHome() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between ">
          <ExHero/>
          <Services />
          <Contactpage />
      </main>
  )}

