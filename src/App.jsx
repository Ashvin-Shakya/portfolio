import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

import Cursor from "./components/Cursor";

const App = () => {
  return (
    <BrowserRouter>
      <Cursor />

      <div className="relative z-0 bg-primary">
        {/* Hero Section - NO STARS */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        {/* About Section - NO STARS */}
        <About />

        {/* Everything below About gets Stars */}
        <div className="relative z-0">
          <StarsCanvas />

          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;