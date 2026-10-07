import { useState, useEffect } from "react";
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
import { Founders } from "./components/Founders";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { CompanyPage } from "./components/CompanyPage";

export default function App({ path }: { path?: string }) {
  const [currentPath, setCurrentPath] = useState(() => {
    if (path) return path;
    if (typeof window !== "undefined") {
      return window.location.pathname;
    }
    return "/";
  });

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", onLocationChange);
    return () => window.removeEventListener("popstate", onLocationChange);
  }, []);

  const isCompany = currentPath === "/company" || currentPath === "/company/";

  if (isCompany) {
    return (
      <MotionConfig reducedMotion="user">
        <CompanyPage />
      </MotionConfig>
    );
  }

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
          <Founders />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
