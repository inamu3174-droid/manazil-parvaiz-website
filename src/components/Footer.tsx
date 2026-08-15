export default function Footer() {
  return (
    <footer className="py-16 border-t border-stone-200 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <p className="font-serif text-lg tracking-wide text-warm-black">
              MANAZIL PARVAIZ
            </p>
            <p className="text-xs tracking-widest uppercase text-muted-gray mt-1">
              Books · Stories · Reflections
            </p>
          </div>
          <nav className="flex flex-wrap gap-6 text-xs tracking-widest uppercase text-muted-gray">
            <a href="#books" className="hover:text-warm-black transition-colors">
              Books
            </a>
            <a href="#about" className="hover:text-warm-black transition-colors">
              About
            </a>
            <a href="#journal" className="hover:text-warm-black transition-colors">
              Journal
            </a>
            <a href="#contact" className="hover:text-warm-black transition-colors">
              Contact
            </a>
            <a href="#" className="hover:text-warm-black transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-warm-black transition-colors">
              Terms
            </a>
          </nav>
        </div>
        <p className="mt-12 text-xs text-stone-400">
          © 2026 Manazil Parvaiz. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
