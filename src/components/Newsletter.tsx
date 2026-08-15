import { useState } from "react";
import { motion } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  };

  return (
    <section className="py-24 md:py-28 border-t border-stone-200">
      <div className="max-w-xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-2xl md:text-3xl text-warm-black mb-3">
            Stay Close to the Words
          </h2>
          <p className="text-sm text-muted-gray mb-8">
            New writing, book updates and reflections — occasionally,
            thoughtfully.
          </p>
          {status === "success" ? (
            <p className="text-burgundy text-sm tracking-wide">
              Thank you. You're on the list.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setStatus("idle");
                }}
                placeholder="Your email address"
                className="flex-1 px-5 py-3.5 border border-stone-300 bg-transparent text-sm focus:outline-none focus:border-warm-black transition-colors"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="px-8 py-3.5 bg-warm-black text-ivory text-xs tracking-widest uppercase hover:bg-burgundy transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}
          {status === "error" && (
            <p className="mt-3 text-xs text-red-700">
              Please enter a valid email address.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
