import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AuthorSection from "../components/AuthorSection";
import Collection from "../components/Collection";
import Themes from "../components/Themes";
import FeaturedBook from "../components/FeaturedBook";
import Journal from "../components/Journal";
import Quote from "../components/Quote";
import Purchase from "../components/Purchase";
import Newsletter from "../components/Newsletter";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AuthorSection />
        <Collection />
        <Themes />
        <FeaturedBook />
        <Journal />
        <Quote />
        <Purchase />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
