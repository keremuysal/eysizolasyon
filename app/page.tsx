import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import ProjectsGallery from "@/components/ProjectsGallery";
import References from "@/components/References";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="flex flex-col w-full max-w-[100vw] bg-[#0d1117] overflow-hidden m-0 p-0 gap-y-16 sm:gap-y-24 lg:gap-y-32 pb-10">
      <Header />
      <Hero />
      <Services />
      <About />
      <ProjectsGallery />
      <References />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}