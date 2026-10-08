import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Energy from '@/components/Energy';
import Trainers from '@/components/Trainers';
import CourtSection from '@/components/CourtSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Marquee />
      <Energy />
      <Trainers />
      <CourtSection />
      <Footer />
    </main>
  );
}