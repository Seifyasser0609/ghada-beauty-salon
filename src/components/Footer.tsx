import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-moss-dark text-cloud pt-32 pb-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
          
          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-6xl font-light mb-8">GHADA <span className="italic">BEAUTY</span></h2>
            <p className="font-mono text-sm opacity-70 max-w-sm">
              Arabella Plaza, New Cairo<br/>
              Egypt
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase mb-6 opacity-50">Contact</h4>
            <ul className="space-y-4 font-mono text-sm">
              <li><a href="#" className="hover:italic transition-all">hello@ghadabeauty.com</a></li>
              <li><a href="#" className="hover:italic transition-all">+20 123 456 7890</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase mb-6 opacity-50">Social</h4>
            <ul className="space-y-4 font-mono text-sm">
              <li><a href="#" className="hover:italic transition-all">Instagram</a></li>
              <li><a href="#" className="hover:italic transition-all">Pinterest</a></li>
              <li><a href="#" className="hover:italic transition-all">TikTok</a></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-cloud/10 font-mono text-xs opacity-50">
          <p>&copy; {new Date().getFullYear()} Ghada Beauty. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
