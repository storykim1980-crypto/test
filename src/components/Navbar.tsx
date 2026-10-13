import React, { useState } from 'react';
import { Language } from '../data/clinicData';
import { Calendar, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentLang: Language;
  onOpenBooking: (treatmentId?: string) => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onOpenBooking,
  activeSection,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'before-after', label: { ko: '건강한 미소', en: 'Healthy Smile' } },
    { id: 'process', label: { ko: '3단계 진료과정', en: 'Process' } },
    { id: 'team', label: { ko: '의료진 & 전담팀', en: 'Medical Team' } },
    { id: 'pricing', label: { ko: '비용 & 보증제', en: 'Fees & Warranty' } },
    { id: 'faq', label: { ko: '자주 묻는 질문', en: 'FAQ' } },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FCFCFA]/90 backdrop-blur-md border-b border-[#E7EBE4] transition-all">
      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* Brand Wordmark (DentArt) */}
        <button
          onClick={() => handleLinkClick('hero')}
          className="text-left group cursor-pointer focus:outline-none flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-full bg-[#122A1F] text-white flex items-center justify-center font-serif text-lg tracking-wider shadow-sm group-hover:scale-105 transition-transform">
            D
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-2xl font-bold tracking-tight text-[#122A1F]">
                DentArt
              </span>
              <span className="text-[11px] font-sans font-medium text-[#2E6B47] tracking-wider uppercase">
                덴트아트 치과
              </span>
            </div>
            <p className="text-[10px] text-[#55695D] font-light tracking-wide">
              자연치아 보존 · 편안한 치과 진료
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#384A3F]">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`cursor-pointer transition-colors whitespace-nowrap ${
                activeSection === link.id
                  ? 'text-[#122A1F] font-semibold border-b-2 border-[#122A1F] pb-1'
                  : 'text-[#4A5D50] hover:text-[#122A1F]'
              }`}
            >
              {link.label[currentLang]}
            </button>
          ))}
        </nav>

        {/* Right Action Zone */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Book Consultation CTA Button */}
          <button
            onClick={() => onOpenBooking()}
            className="inline-flex items-center gap-2 bg-[#122A1F] hover:bg-[#1D3E2F] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm hover:shadow-md cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#79D29B]" />
            <span>상담 및 예약</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => onOpenBooking()}
            className="sm:hidden bg-[#122A1F] text-white p-2.5 rounded-full text-xs"
          >
            <Calendar className="w-4 h-4 text-[#79D29B]" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-[#122A1F] hover:bg-[#EBF0E9] transition-colors focus:outline-none"
            aria-label="메뉴 열기 및 닫기"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FCFCFA] border-b border-[#E7EBE4] px-5 py-5 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="text-left text-base font-medium text-[#122A1F] py-2 border-b border-[#F0F3EE] flex items-center justify-between"
              >
                <span>{link.label[currentLang]}</span>
                <span className="text-xs text-[#526B5C]">→</span>
              </button>
            ))}
          </nav>

          <div className="pt-2 flex items-center justify-between gap-3">


            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="flex-1 bg-[#122A1F] text-white py-2.5 px-4 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5"
            >
              <Calendar className="w-4 h-4 text-[#79D29B]" />
              <span>상담 및 예약하기</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
