import Cursor from './components/Cursor';
import Hero from './components/Hero';
import Editorial from './components/Editorial';
import Services from './components/Services';
import Footer from './components/Footer';
import Navbar from './components/Navbar';  // new

export default function App() {
  return (
    <div className="relative w-full min-h-screen bg-cloud text-moss selection:bg-clay selection:text-cloud">
      <div className="grain-overlay"></div>
      <Cursor />
      <Navbar />   {/* add navbar */}
      <main>
        <Hero />
        <Editorial />
        <Services />
      </main>
      <Footer />
    </div>
  );
}