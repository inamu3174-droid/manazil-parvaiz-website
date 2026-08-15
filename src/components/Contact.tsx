import { motion } from "framer-motion";
import { Mail, Phone, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-stone-50">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-gray mb-4">
            Contact
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-warm-black mb-6">
            Let's Talk
          </h2>
          <p className="text-muted-gray mb-10 max-w-md mx-auto">
            For press, collaboration, speaking, or simply to share a thought —
            reach out.
          </p>

          <div className="flex flex-col items-center gap-5">
            <a
              href="mailto:manazilparvaiz19@gmail.com"
              className="inline-flex items-center gap-2 text-sm tracking-wide text-warm-black hover:text-burgundy transition-colors"
            >
              <Mail size={16} />
              <span>manazilparvaiz19@gmail.com</span>
            </a>

            <a
              href="tel:+919149906624"
              className="inline-flex items-center gap-2 text-sm tracking-wide text-warm-black hover:text-burgundy transition-colors"
            >
              <Phone size={16} />
              <span>+91 91499 06624</span>
            </a>

            <a
              href="https://instagram.com/ofc.manazil"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm tracking-wide text-warm-black hover:text-burgundy transition-colors"
            >
              <Instagram size={16} />
              <span>@ofc.manazil</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
