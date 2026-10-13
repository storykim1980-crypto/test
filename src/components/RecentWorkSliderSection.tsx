import React, { useState, useRef } from 'react';
import { BEFORE_AFTER_CASES, Language } from '../data/clinicData';
import { ArrowLeftRight, CheckCircle2, Calendar, Sparkles } from 'lucide-react';

interface RecentWorkSliderProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const RecentWorkSliderSection: React.FC<RecentWorkSliderProps> = ({
  currentLang,
  onOpenBooking,
}) => {
  const [selectedCaseIdx, setSelectedCaseIdx] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCase = BEFORE_AFTER_CASES[selectedCaseIdx];

  const handlePointerMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handlePointerMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handlePointerMove(e.touches[0].clientX);
    }
  };

  return (
    <section id="before-after" className="py-24 bg-white border-b border-[#E7EBE4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3.5">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#1D4A32] bg-[#EBF1EC] px-3.5 py-1.5 rounded-full border border-[#D5E2D8]">
              <Sparkles className="w-3.5 h-3.5 text-[#2E6B47]" />
              <span>Our Most Recent Work</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#122A1F] tracking-tight">
              실제 임상 치료 전후 비교
            </h2>
            <p className="text-sm sm:text-base text-[#4E6254] font-light leading-relaxed">
              자연치아를 무분별하게 깎지 않고 자연스러운 미소선과 건강한 기능을 복원합니다. 
              슬라이더를 좌우로 드래그하여 시술 전후의 변화를 직접 비교해 보세요.
            </p>
          </div>

          {/* Case Selection Pills */}
          <div className="flex items-center gap-2 bg-[#FAF9F5] p-1.5 rounded-full border border-[#E0E6E1] overflow-x-auto">
            {BEFORE_AFTER_CASES.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedCaseIdx(idx);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  selectedCaseIdx === idx
                    ? 'bg-[#122A1F] text-white shadow-xs'
                    : 'text-[#55695D] hover:text-[#122A1F]'
                }`}
              >
                {item.categoryLabel}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Slider Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Draggable Slider (8 cols) */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-[#D5DFD7] shadow-xl select-none cursor-ew-resize bg-[#EBF0EB]"
            >
              {/* After Image (Background) */}
              <img
                src={activeCase.afterImage}
                alt="치료 후 미소"
                className="w-full h-full object-cover pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-[#122A1F]/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full pointer-events-none">
                치료 후 (After)
              </div>

              {/* Before Image (Clipped Overlay) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={activeCase.beforeImage}
                  alt="치료 전 상태"
                  className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
                  style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full pointer-events-none">
                  치료 전 (Before)
                </div>
              </div>

              {/* Slider Divider Bar */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl cursor-ew-resize"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-[#122A1F] border border-[#CBD6CE] shadow-xl flex items-center justify-center">
                  <ArrowLeftRight className="w-4 h-4 text-[#122A1F]" />
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-[#526458] mt-3 font-light">
              ↕ 좌우로 바를 드래그하여 전후 차이를 비교하세요
            </p>
          </div>

          {/* Clinical Case Details (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-7 rounded-3xl bg-[#FAF9F5] border border-[#DEE5DF] space-y-4">
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#2E6B47]">
                  {activeCase.category} Case Review
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#122A1F]">
                  {activeCase.title}
                </h3>
              </div>

              <p className="text-xs text-[#4F6255] font-light leading-relaxed">
                {activeCase.desc}
              </p>

              <div className="pt-2 border-t border-[#E7EBE4] space-y-2">
                <span className="text-[11px] font-bold text-[#122A1F] block">
                  임상 데이터 요약:
                </span>
                {activeCase.metrics.map((m, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#35483B]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2E6B47] shrink-0" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <span className="text-xs text-[#526458] block mb-3 font-light">
                  치료 소요 기간: <strong className="text-[#122A1F] font-semibold">{activeCase.period}</strong>
                </span>

                <button
                  onClick={onOpenBooking}
                  className="w-full bg-[#122A1F] text-white py-3 rounded-full text-xs font-semibold hover:bg-[#1D3E2F] transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#79D29B]" />
                  <span>이 치료로 맞춤 상담 예약</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
