import React, { useState } from 'react';
import { Language } from './data/clinicData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { RecentWorkSliderSection } from './components/RecentWorkSliderSection';
import { ProcessSection } from './components/ProcessSection';
import { MedicalTeamSection } from './components/MedicalTeamSection';
import { PricingWarrantySection } from './components/PricingWarrantySection';
import { ConsultFormAndFaqSection } from './components/ConsultFormAndFaqSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const currentLang: Language = 'ko';
  const [activeSection, setActiveSection] = useState<string>('hero');
  
  // Interactive Booking Modal
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [preselectedTreatment, setPreselectedTreatment] = useState<string | undefined>(undefined);

  const handleOpenBooking = (treatmentId?: string) => {
    setPreselectedTreatment(treatmentId);
    setIsBookingOpen(true);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFCFA] text-[#122A1F] font-sans antialiased selection:bg-[#122A1F] selection:text-white">
      {/* 1. Header Navigation Bar */}
      <Navbar
        currentLang={currentLang}
        onOpenBooking={() => handleOpenBooking()}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      <main className="flex-1">
        {/* 2. Hero Section: Editorial typography & clinic visual */}
        <div id="hero">
          <HeroSection
            currentLang={currentLang}
            onOpenBooking={() => handleOpenBooking()}
            onExploreTreatments={() => handleNavigate('treatments')}
          />
        </div>

        {/* 4. Interactive Before & After Work Slider: Drag & compare smile transformations */}
        <RecentWorkSliderSection
          currentLang={currentLang}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 5. 3-Step Treatment Process: "Your smile, your solution" */}
        <ProcessSection
          currentLang={currentLang}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 6. Medical Team: 1 Doctor + 1 Receptionist + 2 Hygienists in DentArt Luxury Editorial Style */}
        <MedicalTeamSection
          currentLang={currentLang}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 7. Transparent Fee Schedule & 10-Year Warranty */}
        <PricingWarrantySection
          currentLang={currentLang}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 8. Split Consult Booking Card & Real Clinical FAQ */}
        <ConsultFormAndFaqSection
          currentLang={currentLang}
          onOpenBookingModal={() => handleOpenBooking()}
        />
      </main>

      {/* 9. DentArt Dark Forest Green Footer */}
      <Footer
        currentLang={currentLang}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* 10. Interactive Multi-step Booking & Code Lookup Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        currentLang={currentLang}
        initialTreatmentId={preselectedTreatment}
      />
    </div>
  );
}
