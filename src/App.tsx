import { MotionConfig } from "framer-motion";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { HowItWorks } from "./components/HowItWorks";
import { Architecture } from "./components/Architecture";
import { BlastRadius } from "./components/BlastRadius";
import { History } from "./components/History";
import { Reviewers } from "./components/Reviewers";
import { ClaudeRole } from "./components/ClaudeRole";
import { Differentiation } from "./components/Differentiation";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-ink font-sans text-fog antialiased">
        <Nav />
        <main>
          <Hero />
          <Problem />
          <HowItWorks />
          <Architecture />
          <BlastRadius />
          <History />
          <Reviewers />
          <ClaudeRole />
          <Differentiation />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
