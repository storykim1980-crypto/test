import React from 'react';
import { DOCTORS, CLINICAL_STAFF, CLINIC_IMAGES, Language } from '../data/clinicData';
import { Award, GraduationCap, CheckCircle2, ShieldCheck, Calendar, Sparkles } from 'lucide-react';

interface MedicalTeamProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const MedicalTeamSection: React.FC<MedicalTeamProps> = ({
  currentLang,
  onOpenBooking,
}) => {
  const leadDoctor = DOCTORS[0];

  return (
    <section id="team" className="py-24 bg-white border-b border-[#E7EBE4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3.5">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#1D4A32] bg-[#EBF1EC] px-3.5 py-1.5 rounded-full border border-[#D5E2D8]">
            <Sparkles className="w-3.5 h-3.5 text-[#2E6B47]" />
            <span>Dedicated Medical & Clinical Team</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#122A1F] tracking-tight">
            의료진 및 4인 임상 전담팀
          </h2>
          <p className="text-sm sm:text-base text-[#4E6254] font-light leading-relaxed">
            체인점의 유령 의사나 페이닥터 교체 없이, 대표원장이 첫 상담부터 마지막 진료까지 1:1로 직접 책임집니다. 
            국가면허를 보유한 전문 치과위생사와 숙련된 수석 실장이 가장 안전하고 편안한 진료 환경을 약속합니다.
          </p>
        </div>

        {/* Lead Doctor Feature Card (DentArt Luxury Style) */}
        <div className="bg-[#FAF9F5] rounded-3xl border border-[#DDE5DF] overflow-hidden shadow-md grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Portrait Column */}
          <div className="lg:col-span-5 aspect-[4/5] sm:aspect-square lg:aspect-auto h-full bg-[#E8EDE7] relative overflow-hidden group">
            <img
              src={leadDoctor.image}
              alt={leadDoctor.name[currentLang]}
              className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#122A1F] shadow-xs">
              {leadDoctor.badge[currentLang]}
            </div>
          </div>

          {/* Bio & Credentials Column */}
          <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
            <div className="space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2E6B47]">
                {leadDoctor.role[currentLang]}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#122A1F]">
                {leadDoctor.name[currentLang]}
              </h3>
              <p className="text-xs sm:text-sm text-[#55695D] font-light">
                {leadDoctor.title[currentLang]}
              </p>
            </div>

            {/* Philosophy quote */}
            <div className="p-5 rounded-2xl bg-white border border-[#E4EAE4] text-xs sm:text-sm text-[#2D3E33] italic leading-relaxed">
              {leadDoctor.philosophy[currentLang]}
            </div>

            {/* Credentials List */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#122A1F] flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-[#2E6B47]" />
                <span>주요 약력 및 학술 활동</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#4F6255]">
                {leadDoctor.credentials.map((cred, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2E6B47] shrink-0 mt-0.5" />
                    <span>{cred}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 bg-[#122A1F] hover:bg-[#1D3E2F] text-white px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-xs cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#79D29B]" />
                <span>대표원장 1:1 상담 예약하기</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3 Dedicated Team Staff Members (1 Concierge + 2 Hygienists) */}
        <div className="space-y-6">
          <div className="border-t border-[#E7EBE4] pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#2E6B47]">
                Clinical & Concierge Staff
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#122A1F]">
                환자 중심 진료를 실천하는 3인의 전담 스태프
              </h3>
            </div>
            <p className="text-xs text-[#526558] max-w-md font-light">
              접수 및 보험 청구 1명, 보건복지부 면허 치과위생사 2명으로 구성되어 환자 한 분 한 분께 집중합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CLINICAL_STAFF.map((staff, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-[#FAF9F5] border border-[#DEE5DF] space-y-4 hover:border-[#ADC7B5] transition-colors flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#EBF1EC] text-[#1D4A32]">
                      {staff.badge[currentLang]}
                    </span>
                    <span className="text-[11px] text-[#5A7062]">
                      {staff.role[currentLang]}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-serif text-xl font-bold text-[#122A1F]">
                      {staff.name[currentLang]}
                    </h4>
                    <p className="text-xs text-[#2E6B47] font-medium">
                      {staff.title[currentLang]}
                    </p>
                  </div>

                  <p className="text-xs text-[#4F6255] font-light leading-relaxed">
                    {staff.description[currentLang]}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E7EBE4] space-y-1.5 text-xs text-[#35483B]">
                  {staff.duties.map((duty, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2E6B47] shrink-0" />
                      <span>{duty}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
