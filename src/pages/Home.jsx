import TopBar from "../components/layout/TopBar";
import Navbar from "../components/layout/Navbar";

import Hero from "../components/home/Hero";
import Statistics from "../components/home/Statistics";
import ProductCategories from "../components/home/ProductCategories";
import FeaturedProducts from "../components/home/FeaturedProducts";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Process from "../components/home/Process";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import ContactCTA from "../components/home/ContactCTA";

function Home() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main>
        <Hero />
        <Statistics />
        <ProductCategories />
        <FeaturedProducts />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <FAQ limit={3} />
        <ContactCTA />
      </main>
    </>
  );
}

export default Home;