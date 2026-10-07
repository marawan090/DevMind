import { useState, useEffect } from "react";
import { MotionConfig } from "framer-motion";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { WhyWeBuilt } from "./components/WhyWeBuilt";
import { HowItWorks } from "./components/HowItWorks";
import { Architecture } from "./components/Architecture";
import { BlastRadius } from "./components/BlastRadius";
import { History } from "./components/History";
import { Reviewers } from "./components/Reviewers";
import { ClaudeRole } from "./components/ClaudeRole";
import { Differentiation } from "./components/Differentiation";
import { ProductStatus } from "./components/ProductStatus";
import { Founders } from "./components/Founders";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { CompanyPage } from "./components/CompanyPage";
import { EarlyAccessModal } from "./components/EarlyAccessModal";
import { EarlyAccessPage } from "./components/EarlyAccessPage";

export default function App({ path }: { path?: string }) {
  const [currentPath, setCurrentPath] = useState(() => {
    if (path) return path;
    if (typeof window !== "undefined") {
      return window.location.pathname;
    }
    return "/";
  });

  const [isEarlyAccessOpen, setIsEarlyAccessOpen] = useState(false);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", onLocationChange);
    return () => window.removeEventListener("popstate", onLocationChange);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const checkHash = () => {
      if (window.location.hash === "#early-access") {
        setIsEarlyAccessOpen(true);
      }
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  const isCompany = currentPath === "/company" || currentPath === "/company/";
  const isEarlyAccess = currentPath === "/early-access" || currentPath === "/early-access/";

  if (isCompany) {
    return (
      <MotionConfig reducedMotion="user">
        <CompanyPage />
      </MotionConfig>
    );
  }

  if (isEarlyAccess) {
    return (
      <MotionConfig reducedMotion="user">
        <EarlyAccessPage />
      </MotionConfig>
    );
  }

  const openEarlyAccess = () => setIsEarlyAccessOpen(true);
  const closeEarlyAccess = () => {
    setIsEarlyAccessOpen(false);
    if (typeof window !== "undefined" && window.location.hash === "#early-access") {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-ink font-sans text-fog antialiased">
        <Nav onRequestEarlyAccess={openEarlyAccess} />
        <main>
          <Hero onRequestEarlyAccess={openEarlyAccess} />
          <Problem />
          <WhyWeBuilt />
          <HowItWorks />
          <Architecture />
          <BlastRadius />
          <History />
          <Reviewers />
          <ClaudeRole />
          <Differentiation />
          <ProductStatus />
          <Founders />
          <FinalCTA onRequestEarlyAccess={openEarlyAccess} />
        </main>
        <Footer />
        <EarlyAccessModal
          isOpen={isEarlyAccessOpen}
          onClose={closeEarlyAccess}
        />
      </div>
    </MotionConfig>
  );
}
