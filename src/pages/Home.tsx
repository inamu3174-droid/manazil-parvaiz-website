import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AuthorSection from "../components/AuthorSection";
import WhyIWrite from "../components/WhyIWrite";
import Collection from "../components/Collection";
import Themes from "../components/Themes";
import FeaturedBook from "../components/FeaturedBook";
import WordsReflections from "../components/WordsReflections";
import Journal from "../components/Journal";
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
        <div id="why">
          <WhyIWrite />
        </div>
        <Collection />
        <Themes />
        <FeaturedBook />
        <div id="reflections">
          <WordsReflections />
        </div>
        <Journal />
        <Purchase />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
