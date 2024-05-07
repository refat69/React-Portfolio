import { AboutMe } from "./components/AboutMe";
import { ContactMe } from "./components/ContactMe";
import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";

export const App = () => {
  return (
    <div className="relative bg-primaryColor text-lightText">
      <Hero />
      <AboutMe />
      <Features />
      <Portfolio />
      <ContactMe />
    </div>
  );
};
