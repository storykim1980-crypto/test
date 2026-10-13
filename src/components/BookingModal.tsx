import React, { useState, useEffect } from 'react';
import { TREATMENTS, Language } from '../data/clinicData';
import { 
  saveAppointment, 
  getStoredAppointments, 
  cancelAppointment, 
  findAppointmentByCode, 
  generateGoogleCalendarLink,
  Appointment 
} from '../data/bookingService';
import { 
  X, 
  Calendar, 
  Clock, 
  Phone, 
  CheckCircle2, 
  AlertCircle, 
  Search, 
  ExternalLink, 
  Trash2, 
  ChevronRight, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  initialTreatmentId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  initialTreatmentId,
}) => {
  const [activeTab, setActiveTab] = useState<'new' | 'lookup'>('new');
  const [currentStep, setCurrentStep] = useState<number>(1);

  const [selectedTreatmentId, setSelectedTreatmentId] = useState<string>(
    initialTreatmentId || TREATMENTS[0].id
  );
  const [selectedDate, setSelectedDate] = useState<string>('2026-10-21');
  const [selectedTime, setSelectedTime] = useState<string>('10:30');
  const [patientName, setPatientName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [symptoms, setSymptoms] = useState<string>('');
  const [confirmedBooking, setConfirmedBooking] = useState<Appointment | null>(null);

  // Lookup state
  const [lookupCode, setLookupCode] = useState<string>('');
  const [lookedUpAppt, setLookedUpAppt] = useState<Appointment | null>(null);
  const [lookupError, setLookupError] = useState<string | null>(null);
  const [allAppointments, setAllAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    if (initialTreatmentId) {
      setSelectedTreatmentId(initialTreatmentId);
      setCurrentStep(2);
    }
    if (isOpen) {
      setAllAppointments(getStoredAppointments());
    }
  }, [initialTreatmentId, isOpen]);

  if (!isOpen) return null;

  const currentTreatment = TREATMENTS.find((t) => t.id === selectedTreatmentId) || TREATMENTS[0];

  const availableTimeSlots = [
    { time: '10:00', label: '10:00 AM' },
    { time: '10:30', label: '10:30 AM' },
    { time: '11:30', label: '11:30 AM' },
    { time: '14:30', label: '02:30 PM' },
    { time: '15:30', label: '03:30 PM' },
    { time: '16:30', label: '04:30 PM' },
    { time: '19:00', label: '07:00 PM (화 야간)' },
    { time: '19:30', label: '07:30 PM (화 야간)' },
  ];

  const handleCompleteBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !phone) return;

    const newAppt = saveAppointment({
      patientName,
      phone,
      email: '',
      countryCode: '+82',
      language: currentLang,
      treatmentId: currentTreatment.id,
      treatmentName: currentTreatment.name[currentLang],
      doctorId: 'dr-kim',
      doctorName: '김태훈 대표원장 (1:1 책임진료)',
      date: selectedDate,
      time: selectedTime,
      symptoms: symptoms || '온라인 간편 예약 신청',
      estimatedPriceKrw: currentTreatment.priceKrw,
    });

    setConfirmedBooking(newAppt);
    setAllAppointments(getStoredAppointments());
    setCurrentStep(4);
  };

  const handleLookup = () => {
    setLookupError(null);
    if (!lookupCode.trim()) return;
    const found = findAppointmentByCode(lookupCode);
    if (found) {
      setLookedUpAppt(found);
    } else {
      setLookedUpAppt(null);
      setLookupError('일치하는 예약 정보를 찾을 수 없습니다. 예약번호를 확인해 주세요.');
    }
  };

  const handleCancelBooking = (code: string) => {
    if (confirm('예약을 취소하시겠습니까?')) {
      cancelAppointment(code);
      setAllAppointments(getStoredAppointments());
      if (lookedUpAppt && lookedUpAppt.bookingCode === code) {
        setLookedUpAppt({ ...lookedUpAppt, status: 'cancelled' });
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-[#D5DFD7] overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-[#FAF9F5] border-b border-[#E7ECE5] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-lg font-bold text-[#122A1F]">DentArt</span>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#2E6B47] bg-[#EBF1EC] px-2 py-0.5 rounded-full">
                덴트아트 치과의원
              </span>
            </div>
            <p className="text-[11px] text-[#55695D] font-light">
              대표원장 1:1 책임 진료 · 실시간 온라인 상담 및 예약
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#5E7165] hover:text-[#122A1F] rounded-full hover:bg-[#EAEFE8] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-[#E7ECE5] bg-[#FAF9F5] px-6 gap-6">
          <button
            onClick={() => setActiveTab('new')}
            className={`py-3 text-xs sm:text-sm font-bold border-b-2 cursor-pointer transition-all ${
              activeTab === 'new' ? 'border-[#122A1F] text-[#122A1F]' : 'border-transparent text-[#65796E]'
            }`}
          >
            새 진료 예약 신청
          </button>
          <button
            onClick={() => setActiveTab('lookup')}
            className={`py-3 text-xs sm:text-sm font-bold border-b-2 cursor-pointer transition-all ${
              activeTab === 'lookup' ? 'border-[#122A1F] text-[#122A1F]' : 'border-transparent text-[#65796E]'
            }`}
          >
            예약 번호 조회 & 변경
          </button>
        </div>

        {/* Tab Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          {activeTab === 'new' ? (
            <div className="space-y-6">
              {/* Step indicator */}
              <div className="flex items-center justify-between max-w-md mx-auto mb-6">
                {[
                  { step: 1, label: '진료과목 선택' },
                  { step: 2, label: '일정 선택' },
                  { step: 3, label: '환자 정보' },
                  { step: 4, label: '예약 완료' },
                ].map((s) => (
                  <div key={s.step} className="flex flex-col items-center gap-1">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                        currentStep === s.step
                          ? 'bg-[#122A1F] text-white shadow-xs'
                          : currentStep > s.step
                          ? 'bg-[#2E6B47] text-white'
                          : 'bg-[#EBF0EB] text-[#718579]'
                      }`}
                    >
                      {currentStep > s.step ? '✓' : s.step}
                    </div>
                    <span className="text-[10px] text-[#55695D] font-medium hidden sm:inline">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Step 1: Select Treatment */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div className="text-center space-y-1">
                    <h4 className="font-serif text-xl font-bold text-[#122A1F]">
                      어떤 치료 상담을 원하시나요?
                    </h4>
                    <p className="text-xs text-[#526458] font-light">
                      과잉진료 없이 환자분께 꼭 필요한 치료만 권해 드립니다.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
                    {TREATMENTS.map((t) => (
                      <div
                        key={t.id}
                        onClick={() => setSelectedTreatmentId(t.id)}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                          selectedTreatmentId === t.id
                            ? 'border-[#122A1F] bg-[#F4F7F4] shadow-xs'
                            : 'border-[#DEE5DF] hover:border-[#ADC7B5] bg-white'
                        }`}
                      >
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white border border-[#CBD6CE] text-[#122A1F]">
                              {t.categoryLabel[currentLang]}
                            </span>
                            <span className="text-[11px] font-semibold text-[#2E6B47]">
                              {t.warrantyYears}년 보증
                            </span>
                          </div>
                          <h5 className="font-serif text-sm font-bold text-[#122A1F]">
                            {t.name[currentLang]}
                          </h5>
                          <p className="text-[11px] text-[#5A6E60] line-clamp-2 font-light">
                            {t.tagline[currentLang]}
                          </p>
                        </div>
                        <div className="pt-2 text-[11px] font-bold text-[#122A1F]">
                          {t.priceKrw}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="bg-[#122A1F] hover:bg-[#1D3E2F] text-white px-6 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>일정 선택하기</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Date & Time Picker */}
              {currentStep === 2 && (
                <div className="space-y-6 max-w-xl mx-auto">
                  <div className="text-center space-y-1">
                    <h4 className="font-serif text-xl font-bold text-[#122A1F]">
                      희망 내원 일정을 선택해 주세요
                    </h4>
                    <p className="text-xs text-[#526458] font-light">
                      화요일은 저녁 8시 30분까지 야간진료가 가능합니다.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold text-[#122A1F] block">
                      날짜 선택
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-white border border-[#CBD6CE] rounded-xl px-4 py-2.5 text-xs text-[#122A1F] focus:outline-none focus:border-[#122A1F]"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold text-[#122A1F] block">
                      시간대 선택
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {availableTimeSlots.map((slot) => (
                        <button
                          key={slot.time}
                          type="button"
                          onClick={() => setSelectedTime(slot.time)}
                          className={`py-2.5 px-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                            selectedTime === slot.time
                              ? 'bg-[#122A1F] text-white border-[#122A1F] shadow-xs'
                              : 'bg-white text-[#4A5E51] border-[#CBD6CE] hover:border-[#122A1F]'
                          }`}
                        >
                          {slot.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="px-5 py-2.5 rounded-full border border-[#CBD6CE] text-[#55695D] text-xs font-semibold hover:bg-[#FAF9F5] cursor-pointer"
                    >
                      이전 단계
                    </button>
                    <button
                      onClick={() => setCurrentStep(3)}
                      className="bg-[#122A1F] hover:bg-[#1D3E2F] text-white px-6 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>환자 정보 입력</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Patient Info Form */}
              {currentStep === 3 && (
                <form onSubmit={handleCompleteBooking} className="space-y-4 max-w-xl mx-auto">
                  <div className="text-center space-y-1">
                    <h4 className="font-serif text-xl font-bold text-[#122A1F]">
                      환자 연락처 및 증상 입력
                    </h4>
                    <p className="text-xs text-[#526458] font-light">
                      예약 확인 문자 발송을 위해 정확한 정보를 입력해 주세요.
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#122A1F] block">
                      성함 <span className="text-[#2E6B47]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="예: 홍길동"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full bg-white border border-[#CBD6CE] rounded-xl px-4 py-2.5 text-xs text-[#122A1F] focus:outline-none focus:border-[#122A1F]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#122A1F] block">
                      휴대전화 번호 <span className="text-[#2E6B47]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="010-0000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white border border-[#CBD6CE] rounded-xl px-4 py-2.5 text-xs text-[#122A1F] focus:outline-none focus:border-[#122A1F]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#122A1F] block">
                      주요 증상 및 전달사항 (선택)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="예: 마취 통증이 무서워요 / 앞니 벌어짐으로 상담 원해요"
                      value={symptoms}
                      onChange={(e) => setSymptoms(e.target.value)}
                      className="w-full bg-white border border-[#CBD6CE] rounded-xl p-3 text-xs text-[#122A1F] focus:outline-none focus:border-[#122A1F] resize-none"
                    />
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="px-5 py-2.5 rounded-full border border-[#CBD6CE] text-[#55695D] text-xs font-semibold hover:bg-[#FAF9F5] cursor-pointer"
                    >
                      이전 단계
                    </button>
                    <button
                      type="submit"
                      className="bg-[#122A1F] hover:bg-[#1D3E2F] text-white px-7 py-2.5 rounded-full text-xs font-semibold shadow-md cursor-pointer"
                    >
                      예약 신청 완료
                    </button>
                  </div>
                </form>
              )}

              {/* Step 4: Booking Confirmation */}
              {currentStep === 4 && confirmedBooking && (
                <div className="text-center space-y-6 max-w-lg mx-auto py-4">
                  <div className="w-16 h-16 rounded-full bg-[#EBF1EC] text-[#2E6B47] flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-serif text-2xl font-bold text-[#122A1F]">
                      진료 예약 신청이 완료되었습니다
                    </h4>
                    <p className="text-xs text-[#526458] font-light">
                      예약 확인 코드는 <strong className="font-mono text-[#122A1F] font-bold">{confirmedBooking.bookingCode}</strong>입니다. 
                      담당 코디네이터가 30분 이내에 사전 확인 문자를 드립니다.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-[#DEE5DF] text-xs text-left space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[#65796D]">환자명:</span>
                      <strong className="text-[#122A1F]">{confirmedBooking.patientName}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#65796D]">진료과목:</span>
                      <span className="font-semibold text-[#122A1F]">{confirmedBooking.treatmentName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#65796D]">전담의:</span>
                      <span className="text-[#122A1F]">{confirmedBooking.doctorName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#65796D]">예약일시:</span>
                      <span className="font-semibold text-[#2E6B47]">{confirmedBooking.date} {confirmedBooking.time}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={generateGoogleCalendarLink(confirmedBooking)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-[#122A1F] text-white px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-[#1D3E2F] transition-colors"
                    >
                      <Calendar className="w-4 h-4 text-[#79D29B]" />
                      <span>구글 캘린더 등록</span>
                    </a>

                    <button
                      onClick={onClose}
                      className="px-6 py-2.5 rounded-full border border-[#CBD6CE] text-[#55695D] text-xs font-semibold hover:bg-[#FAF9F5] cursor-pointer"
                    >
                      창 닫기
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Lookup Tab */
            <div className="space-y-6 max-w-xl mx-auto">
              <div className="text-center space-y-1">
                <h4 className="font-serif text-xl font-bold text-[#122A1F]">
                  예약 번호 조회 및 관리
                </h4>
                <p className="text-xs text-[#526458] font-light">
                  발급받으신 예약 코드(예: DENT-2026-XXXX)를 입력해 주세요.
                </p>
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="예: DENT-2026-8812"
                  value={lookupCode}
                  onChange={(e) => setLookupCode(e.target.value)}
                  className="flex-1 bg-white border border-[#CBD6CE] rounded-xl px-4 py-2.5 text-xs text-[#122A1F] focus:outline-none focus:border-[#122A1F]"
                />
                <button
                  onClick={handleLookup}
                  className="bg-[#122A1F] text-white px-5 py-2.5 rounded-xl text-xs font-semibold hover:bg-[#1D3E2F] cursor-pointer flex items-center gap-1.5"
                >
                  <Search className="w-4 h-4 text-[#79D29B]" />
                  <span>조회</span>
                </button>
              </div>

              {lookupError && (
                <div className="p-3.5 rounded-xl bg-[#FFF5F5] border border-[#FAD2D2] text-xs text-[#C53030] flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{lookupError}</span>
                </div>
              )}

              {lookedUpAppt && (
                <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-[#DEE5DF] space-y-3 text-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E7EBE4]">
                    <span className="font-mono font-bold text-[#122A1F]">{lookedUpAppt.bookingCode}</span>
                    <span
                      className={`px-2 py-0.5 rounded-full font-bold ${
                        lookedUpAppt.status === 'confirmed'
                          ? 'bg-[#EBF1EC] text-[#2E6B47]'
                          : 'bg-[#FBE8E8] text-[#C53030]'
                      }`}
                    >
                      {lookedUpAppt.status === 'confirmed' ? '예약 확정' : '취소 완료'}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <p><strong className="text-[#122A1F]">환자명:</strong> {lookedUpAppt.patientName}</p>
                    <p><strong className="text-[#122A1F]">진료 과목:</strong> {lookedUpAppt.treatmentName}</p>
                    <p><strong className="text-[#122A1F]">예약 일시:</strong> {lookedUpAppt.date} {lookedUpAppt.time}</p>
                    <p><strong className="text-[#122A1F]">담당:</strong> {lookedUpAppt.doctorName}</p>
                  </div>

                  {lookedUpAppt.status === 'confirmed' && (
                    <div className="pt-3 border-t border-[#E7EBE4] flex justify-end">
                      <button
                        onClick={() => handleCancelBooking(lookedUpAppt.bookingCode)}
                        className="text-xs text-[#C53030] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>예약 취소하기</span>
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Seed / History List Preview */}
              <div className="pt-4 border-t border-[#E7EBE4] space-y-2">
                <span className="text-[11px] font-bold text-[#55695D] uppercase tracking-wider block">
                  최근 예약 내역 ({allAppointments.length})
                </span>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {allAppointments.map((a) => (
                    <div
                      key={a.id}
                      onClick={() => {
                        setLookupCode(a.bookingCode);
                        setLookedUpAppt(a);
                        setLookupError(null);
                      }}
                      className="p-3 rounded-xl bg-white border border-[#E0E6E1] hover:border-[#122A1F] transition-all cursor-pointer flex items-center justify-between text-xs"
                    >
                      <div>
                        <span className="font-semibold text-[#122A1F]">{a.patientName}</span>
                        <span className="text-[#65796E] ml-2 font-mono text-[11px]">{a.bookingCode}</span>
                        <p className="text-[11px] text-[#55695D]">{a.treatmentName}</p>
                      </div>
                      <span className="text-[11px] font-medium text-[#2E6B47]">{a.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
