
import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Plans from "@/components/Plans";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <Reviews />
      <Plans />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
