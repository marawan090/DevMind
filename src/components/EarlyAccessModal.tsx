import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, X } from "lucide-react";
import { EarlyAccessForm } from "./EarlyAccessForm";

export function EarlyAccessModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  // Handle escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="early-access-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
            className="fixed inset-0 bg-ink/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-[560px] my-8 rounded-xl border border-line-2 bg-panel shadow-2xl overflow-hidden z-10"
          >
            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-line bg-panel-2 px-6 py-4">
              <div className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-lime anim-pulse-dot" />
                <span className="label-mono text-mute">Request Early Access</span>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close dialog"
                className="flex h-7 w-7 items-center justify-center rounded-md border border-line text-dim transition-colors hover:border-line-2 hover:bg-panel-3 hover:text-fog"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Content */}
            <div className="px-6 py-6 sm:px-8">
              <div className="mb-6">
                <h2 id="early-access-modal-title" className="text-[22px] font-semibold tracking-[-0.01em] text-fog sm:text-[24px]">
                  Join the devvmind evaluation
                </h2>
                <p className="mt-1.5 text-[14px] leading-relaxed text-mute">
                  We're currently onboarding early teams and evaluating devvmind across real-world codebases. Tell us about your repository.
                </p>
              </div>

              <EarlyAccessForm />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
