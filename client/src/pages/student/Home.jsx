import Footer from "../../components/student/Footer";
import CallToAction from "../../components/student/CallToAction";
import Companies from "../../components/student/Companies";
import CourseSection from "../../components/student/CourseSection";
import Hero from "../../components/student/Hero";
import Testimonials from "../../components/student/Testimonials";

const Home = () => {
  return (
    <main className="flex flex-col items-center space-y-7">
      <Hero />
      <Companies />
      <CourseSection />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
};

export default Home;
