import Footer from './components/layout/footer';
import Header from './components/layout/header';
import AboutSection from './components/sections/about-section';
import EducationSection from './components/sections/education-section';
import HeroSection from './components/sections/hero-section';
import HobbiesSection from './components/sections/hobbies-section';
import MinigamesSection from './components/sections/minigames-section';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <HobbiesSection />
        <EducationSection />
        <MinigamesSection />
      </main>
      <Footer />
    </div>
  );
}
