import { motion } from 'motion/react';

const services = [
  {
    category: "Hair",
    items: [
      { name: "Bespoke Cut & Style", price: "from 1200 EGP", image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=400&auto=format&fit=crop" },
      { name: "Signature Color", price: "from 2500 EGP", image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=400&auto=format&fit=crop" },
      { name: "Restorative Treatment", price: "from 1800 EGP", image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=400&auto=format&fit=crop" }
    ]
  },
  {
    category: "Nails",
    items: [
      { name: "Classic Manicure", price: "450 EGP", image: "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?q=80&w=400&auto=format&fit=crop" },
      { name: "Gel Extensions", price: "950 EGP", image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=400&auto=format&fit=crop" },
      { name: "Spa Pedicure", price: "600 EGP", image: "https://images.unsplash.com/photo-1516975080661-422fc8cbfd57?q=80&w=400&auto=format&fit=crop" }
    ]
  },
  {
    category: "Skin",
    items: [
      { name: "Ghada Signature Facial", price: "2200 EGP", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=400&auto=format&fit=crop" },
      { name: "Lifting Massage", price: "1500 EGP", image: "https://images.unsplash.com/photo-1544161515-4abfbce596dc?q=80&w=400&auto=format&fit=crop" },
      { name: "Bridal Preparation", price: "Consultation", image: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=400&auto=format&fit=crop" }
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 md:px-12 lg:px-24 bg-cloud text-moss">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-moss/20 pb-12"
        >
          <h2 className="text-5xl md:text-7xl font-light tracking-tight">Curated<br/><span className="italic">Services</span></h2>
          <p className="font-mono text-xs tracking-widest uppercase max-w-xs text-right mt-8 md:mt-0">
            A tailored approach to your natural beauty.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8">
          {services.map((section, idx) => (
            <motion.div 
              key={section.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="flex flex-col"
            >
              <h3 className="text-2xl italic mb-8 pb-4 border-b border-moss/10">{section.category}</h3>
              <ul className="space-y-8">
                {section.items.map((item) => (
                  <li 
                    key={item.name} 
                    className="group cursor-none"
                    data-service-preview={item.image}
                  >
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="font-mono text-sm tracking-wide group-hover:italic transition-all duration-300">{item.name}</span>
                      <span className="font-mono text-xs text-moss/60">{item.price}</span>
                    </div>
                    <div className="w-full h-[1px] bg-moss/10 group-hover:bg-moss/40 transition-colors duration-300"></div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
