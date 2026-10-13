import React from 'react';
import { CLINIC_IMAGES, Language } from '../data/clinicData';
import { Calendar, CheckCircle2, Sparkles } from 'lucide-react';

interface RecentWorkSliderProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

// Keep the existing component export and anchor so App.tsx and navigation work unchanged.
// AI model imagery must not be presented as an actual before/after clinical result.
export const RecentWorkSliderSection: React.FC<RecentWorkSliderProps> = ({
  currentLang,
  onOpenBooking,
}) => {
  const ko = currentLang === 'ko';
  const points = ko
    ? ['현재 치아 상태에 맞춘 상담', '치료 방법과 비용을 충분히 설명', '치료 후 정기적인 구강 관리 안내']
    : ['Consultation tailored to your oral health', 'Clear explanations of treatment options and fees', 'Guidance for ongoing oral care'];

  return (
    <section id="before-after" className="py-24 bg-white border-b border-[#E7EBE4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-3xl space-y-3.5">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#1D4A32] bg-[#EBF1EC] px-3.5 py-1.5 rounded-full border border-[#D5E2D8]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Healthy Smile & Everyday Care</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#122A1F] tracking-tight">
            {ko ? '건강한 미소를 위한 첫걸음' : 'Your first step toward a healthy smile'}
          </h2>
          <p className="text-sm sm:text-base text-[#4E6254] font-light leading-relaxed">
            {ko ? '나에게 맞는 진료는 정확한 검진과 충분한 상담에서 시작됩니다. 치아 상태와 생활 습관을 함께 살펴보며 관리 방법을 안내합니다.' : 'Thoughtful care begins with an examination and a clear conversation about your needs and daily habits.'}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <figure className="lg:col-span-8 overflow-hidden rounded-3xl border border-[#D5DFD7] bg-[#FAF9F5]">
            <img src={CLINIC_IMAGES.patientSmile} alt={ko ? '자연스럽게 웃는 한국인 여성 AI 모델' : 'AI model with a natural smile'} className="w-full aspect-[3/2] object-cover" loading="lazy" />
            <figcaption className="px-5 py-3 text-xs text-[#526458]">
              {ko ? 'AI 모델 이미지 · 실제 환자 및 치료 전후 결과 사진이 아닙니다.' : 'AI model image. Not an actual patient or a before-and-after treatment result.'}
            </figcaption>
          </figure>
          <div className="lg:col-span-4 p-7 rounded-3xl bg-[#FAF9F5] border border-[#DEE5DF] space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#122A1F]">{ko ? '충분히 설명하고, 함께 결정합니다' : 'Understand your options'}</h3>
            <ul className="space-y-3">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-[#35483B]">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-[#2E6B47]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-[#526458] leading-relaxed">{ko ? '진료 방법과 예상 경과는 검진 결과에 따라 달라집니다. 상세 내용은 상담을 통해 확인하세요.' : 'Treatment options and expected outcomes depend on your examination. Please discuss the details during your consultation.'}</p>
            <button onClick={onOpenBooking} className="w-full bg-[#122A1F] text-white py-3 rounded-full text-sm font-semibold hover:bg-[#1D3E2F] transition-colors flex items-center justify-center gap-2 cursor-pointer">
              <Calendar className="w-4 h-4 text-[#79D29B]" />
              <span>{ko ? '맞춤 상담 예약하기' : 'Book a consultation'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
