import { motion } from "framer-motion";
import { Mail } from "lucide-react";

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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 text-sm tracking-wide text-warm-black hover:text-burgundy transition-colors"
            >
              <Mail size={16} />
              <span>hello@example.com</span>
            </a>
            <span className="hidden sm:inline text-stone-300">|</span>
            <div className="flex gap-6 text-xs tracking-widest uppercase text-muted-gray">
              <a href="#" className="hover:text-warm-black transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-warm-black transition-colors">
                X / Twitter
              </a>
            </div>
          </div>
          <p className="mt-8 text-xs text-stone-400">
            Email and social links are placeholders — configure with real details.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
