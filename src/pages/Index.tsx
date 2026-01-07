import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import LoadingScreen from "@/components/invitation/LoadingScreen";
import CoverSection from "@/components/invitation/CoverSection";
import HeroSection from "@/components/invitation/HeroSection";
import CoupleSection from "@/components/invitation/CoupleSection";
import StorySection from "@/components/invitation/StorySection";
import CountdownSection from "@/components/invitation/CountdownSection";
import EventSection from "@/components/invitation/EventSection";
import RSVPSection from "@/components/invitation/RSVPSection";
import GallerySection from "@/components/invitation/GallerySection";
import GiftSection from "@/components/invitation/GiftSection";
import FooterSection from "@/components/invitation/FooterSection";
import MusicPlayer from "@/components/invitation/MusicPlayer";

const Index = () => {
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  
  // Get guest name from URL parameter
  const guestName = searchParams.get("to") || "";

  const handleOpen = () => {
    setIsOpen(true);
    // Scroll to top when opening
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Prevent scroll when cover is showing
  useEffect(() => {
    if (!isOpen || isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, isLoading]);

  return (
    <div className="min-h-screen">
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isLoading && !isOpen && (
          <CoverSection guestName={guestName} onOpen={handleOpen} />
        )}
      </AnimatePresence>

      {!isLoading && isOpen && (
        <>
          <HeroSection />
          <CoupleSection />
          <StorySection />
          <CountdownSection />
          <EventSection />
          <RSVPSection />
          <GallerySection />
          <GiftSection />
          <FooterSection />
          <MusicPlayer autoPlay />
        </>
      )}
    </div>
  );
};

export default Index;
