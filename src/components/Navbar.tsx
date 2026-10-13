import React, { useState } from 'react';
import { Language } from '../data/clinicData';
import { Phone, Calendar, Menu, X, Sparkles, Clock } from 'lucide-react';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenBooking: (treatmentId?: string) => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  onOpenBooking,
  activeSection,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'treatments', label: { ko: '치료 프로그램', en: 'Treatments' } },
    { id: 'before-after', label: { ko: '치료 전후', en: 'Before & After' } },
    { id: 'process', label: { ko: '3-Step 진료과정', en: 'Process' } },
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
      {/* Top subtle announcement strip */}
      <div className="bg-[#122A1F] text-[#E0E8E3] text-[11px] py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-medium text-[#79D29B]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>대표원장 1:1 전담 책임 진료 · 대학병원급 3D 구강스캐너 완비</span>
            </span>
            <span className="text-[#3A5C4A]">|</span>
            <span className="text-[#B9CFC2] flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#79D29B]" />
              <span>화요일 야간진료 (저녁 8:30까지) · 토요일 진료</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:02-882-2875"
              className="flex items-center gap-1.5 text-white hover:text-[#79D29B] font-semibold transition-colors"
            >
              <Phone className="w-3 h-3 text-[#79D29B]" />
              <span>진료 예약 및 상담: 02-882-2875</span>
            </a>
          </div>
        </div>
      </div>

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
              Aesthetic & Restorative Dental Studio
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
          {/* Language Toggle */}
          <div className="flex items-center bg-[#EBF0E9] rounded-full p-1 text-xs font-semibold">
            <button
              onClick={() => onLanguageChange('ko')}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                currentLang === 'ko'
                  ? 'bg-white text-[#122A1F] shadow-xs'
                  : 'text-[#5C7063] hover:text-[#122A1F]'
              }`}
            >
              KR
            </button>
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                currentLang === 'en'
                  ? 'bg-white text-[#122A1F] shadow-xs'
                  : 'text-[#5C7063] hover:text-[#122A1F]'
              }`}
            >
              EN
            </button>
          </div>

          {/* Book Consultation CTA Button */}
          <button
            onClick={() => onOpenBooking()}
            className="inline-flex items-center gap-2 bg-[#122A1F] hover:bg-[#1D3E2F] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm hover:shadow-md cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#79D29B]" />
            <span>{currentLang === 'ko' ? '상담 및 예약' : 'Book a Consult'}</span>
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
            aria-label="Toggle navigation"
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
            <div className="flex items-center bg-[#EBF0E9] rounded-full p-1 text-xs font-semibold">
              <button
                onClick={() => onLanguageChange('ko')}
                className={`px-3 py-1 rounded-full ${
                  currentLang === 'ko' ? 'bg-white text-[#122A1F]' : 'text-[#5C7063]'
                }`}
              >
                한국어
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-3 py-1 rounded-full ${
                  currentLang === 'en' ? 'bg-white text-[#122A1F]' : 'text-[#5C7063]'
                }`}
              >
                English
              </button>
            </div>

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
