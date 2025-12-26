import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MissionImpact from '@/components/MissionImpact';
import ValuesGrid from '@/components/ValuesGrid';
import CommunityEngagement from '@/components/CommunityEngagement';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <MissionImpact />
        <ValuesGrid />
        <CommunityEngagement />
      </main>
      <Footer />
    </div>
  );
}

export default App;
