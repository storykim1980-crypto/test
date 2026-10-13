import React, { useState } from 'react';
import { CLINIC_FAQS, TREATMENTS, Language } from '../data/clinicData';
import { saveAppointment, generateGoogleCalendarLink, Appointment } from '../data/bookingService';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Calendar, 
  Check, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2,
  CalendarCheck
} from 'lucide-react';

interface ConsultFormProps {
  currentLang: Language;
  onOpenBookingModal: () => void;
}

export const ConsultFormAndFaqSection: React.FC<ConsultFormProps> = ({
  currentLang,
  onOpenBookingModal,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Form State
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [treatmentId, setTreatmentId] = useState(TREATMENTS[0].id);
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('10:30');
  const [symptoms, setSymptoms] = useState('');
  const [confirmedBooking, setConfirmedBooking] = useState<Appointment | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim() || !phone.trim() || !preferredDate) {
      alert('성함, 연락처, 희망 날짜를 모두 입력해 주세요.');
      return;
    }

    const matchedTreatment = TREATMENTS.find((t) => t.id === treatmentId);

    const newAppt = saveAppointment({
      patientName,
      phone,
      email: '',
      countryCode: '+82',
      language: 'ko',
      treatmentId,
      treatmentName: matchedTreatment ? matchedTreatment.name.ko : '맞춤 진료 상담',
      doctorId: 'dr-kim',
      doctorName: '김태훈 대표원장',
      date: preferredDate,
      time: preferredTime,
      symptoms,
      estimatedPriceKrw: matchedTreatment ? matchedTreatment.priceKrw : '진단 후 확정',
    });

    setConfirmedBooking(newAppt);
  };

  return (
    <section id="faq" className="py-24 bg-white border-b border-[#E7EBE4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Top Split: DentArt Booking Banner & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Forest Green Promise & Contact Card */}
          <div className="lg:col-span-5 bg-[#122A1F] text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xl space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#79D29B] bg-[#1D3E2F] px-3.5 py-1 rounded-full">
                <Sparkles className="w-3 h-3 text-[#79D29B]" />
                <span>Book a Professional Consult</span>
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
                과잉진료 없는 편안한<br />
                1:1 맞춤 진료 상담
              </h2>

              <p className="text-xs sm:text-sm text-[#B7CBC0] font-light leading-relaxed">
                치과 치료에 대한 두려움과 비용 부담을 덜어드립니다. 
                원하시는 진료 과목과 희망 일정을 남겨주시면 수석 상담 실장이 정성을 다해 사전 확인 연락을 드립니다.
              </p>
            </div>

            {/* Quick Contact & Info */}
            <div className="space-y-4 pt-6 border-t border-[#234534] text-xs">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#79D29B] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#849C8D] block">실시간 전화 예약 및 상담</span>
                  <a href="tel:02-882-2875" className="font-serif text-lg font-bold text-white hover:text-[#79D29B] transition-colors">
                    02-882-2875
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#79D29B] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#849C8D] block">진료 시간</span>
                  <span className="text-[#DCE8E0]">
                    월·수·목·금: 09:30 - 18:30<br />
                    <strong className="text-[#79D29B] font-semibold">화요일 야간진료: 09:30 - 20:30</strong><br />
                    토요일: 09:30 - 14:00 (점심시간 없음)
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#79D29B] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#849C8D] block">오시는 길</span>
                  <span className="text-[#DCE8E0]">
                    서울 강남구 테헤란로 152 강남타워 4층 (지하철역 3번 출구 도보 1분 · 전용 무료 주차)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-conversion Consultation Form */}
          <div className="lg:col-span-7 bg-[#FAF9F5] rounded-3xl p-8 sm:p-10 border border-[#DEE5DF] shadow-md flex flex-col justify-between">
            {confirmedBooking ? (
              <div className="space-y-6 my-auto text-center py-6">
                <div className="w-16 h-16 rounded-full bg-[#EBF1EC] text-[#2E6B47] flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#2E6B47] uppercase tracking-wider">
                    Appointment Requested
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#122A1F]">
                    상담 예약 접수가 완료되었습니다
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4E6254] max-w-md mx-auto font-light">
                    예약 번호 <strong className="font-mono text-[#122A1F]">{confirmedBooking.bookingCode}</strong>로 등록되었습니다. 
                    수석 상담 실장이 기재해 주신 연락처로 일정 확인 안내 문자를 발송해 드립니다.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#E0E6E1] text-xs text-left max-w-md mx-auto space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#687C70]">예약자 성함:</span>
                    <strong className="text-[#122A1F]">{confirmedBooking.patientName}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#687C70]">희망 진료 과목:</span>
                    <span className="font-medium text-[#122A1F]">{confirmedBooking.treatmentName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#687C70]">희망 일시:</span>
                    <span className="font-medium text-[#122A1F]">{confirmedBooking.date} {confirmedBooking.time}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <a
                    href={generateGoogleCalendarLink(confirmedBooking)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-[#122A1F] text-white px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-[#1D3E2F] transition-colors"
                  >
                    <CalendarCheck className="w-4 h-4 text-[#79D29B]" />
                    <span>구글 캘린더에 일정 추가</span>
                  </a>

                  <button
                    onClick={() => setConfirmedBooking(null)}
                    className="px-5 py-2.5 rounded-full border border-[#CBD6CE] text-[#4F6255] text-xs font-semibold hover:bg-white transition-colors cursor-pointer"
                  >
                    새 예약 신청하기
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <h3 className="font-serif text-2xl font-bold text-[#122A1F]">
                    간편 상담 및 진료 예약 신청
                  </h3>
                  <p className="text-xs text-[#526458] font-light">
                    아래 항목을 작성해 주시면 담당 코디네이터가 30분 이내에 예약 확정 안내를 드립니다.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
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
                      className="w-full bg-white border border-[#CBD6CE] rounded-xl px-4 py-2.5 text-xs text-[#122A1F] placeholder:text-[#9FB1A5] focus:outline-none focus:border-[#122A1F] transition-colors"
                    />
                  </div>

                  {/* Phone */}
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
                      className="w-full bg-white border border-[#CBD6CE] rounded-xl px-4 py-2.5 text-xs text-[#122A1F] placeholder:text-[#9FB1A5] focus:outline-none focus:border-[#122A1F] transition-colors"
                    />
                  </div>
                </div>

                {/* Treatment Select */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#122A1F] block">
                    상담 희망 진료 과목 <span className="text-[#2E6B47]">*</span>
                  </label>
                  <select
                    value={treatmentId}
                    onChange={(e) => setTreatmentId(e.target.value)}
                    className="w-full bg-white border border-[#CBD6CE] rounded-xl px-4 py-2.5 text-xs text-[#122A1F] focus:outline-none focus:border-[#122A1F] transition-colors cursor-pointer"
                  >
                    {TREATMENTS.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.name.ko} ({t.insuranceBadge.ko})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Preferred Date */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#122A1F] block">
                      희망 내원 날짜 <span className="text-[#2E6B47]">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full bg-white border border-[#CBD6CE] rounded-xl px-4 py-2.5 text-xs text-[#122A1F] focus:outline-none focus:border-[#122A1F] transition-colors"
                    />
                  </div>

                  {/* Preferred Time */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#122A1F] block">
                      희망 내원 시간대
                    </label>
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full bg-white border border-[#CBD6CE] rounded-xl px-4 py-2.5 text-xs text-[#122A1F] focus:outline-none focus:border-[#122A1F] transition-colors cursor-pointer"
                    >
                      <option value="10:00">오전 10:00</option>
                      <option value="11:30">오전 11:30</option>
                      <option value="14:00">오후 02:00</option>
                      <option value="15:30">오후 03:30</option>
                      <option value="17:00">오후 05:00</option>
                      <option value="19:00">화요일 야간 오후 07:00</option>
                    </select>
                  </div>
                </div>

                {/* Symptoms / Notes */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#122A1F] block">
                    증상 및 원하시는 점 (선택)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="예: 앞니가 시려요 / 치과 공포증이 심해서 안 아프게 치료받고 싶어요 / 보험 적용 여부 알고 싶어요"
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                    className="w-full bg-white border border-[#CBD6CE] rounded-xl p-3 text-xs text-[#122A1F] placeholder:text-[#9FB1A5] focus:outline-none focus:border-[#122A1F] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#122A1F] hover:bg-[#1D3E2F] text-white py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-[#79D29B]" />
                    <span>상담 및 예약 신청서 전송</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Split: Clinical FAQ Accordion */}
        <div className="space-y-8 pt-8 border-t border-[#E7EBE4]">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#1D4A32] bg-[#EBF1EC] px-3.5 py-1 rounded-full border border-[#D5E2D8]">
              Frequently Asked Questions
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#122A1F]">
              환자분들이 가장 자주 묻는 질문
            </h3>
            <p className="text-xs sm:text-sm text-[#526558] font-light">
              치과 방문 전 궁금하셨던 점들을 전문의가 알기 쉽게 답변해 드립니다.
            </p>
          </div>

          <div className="space-y-3 max-w-4xl">
            {CLINIC_FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-[#DDE5DF] overflow-hidden bg-[#FAF9F5] transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-serif text-base font-bold text-[#122A1F] leading-snug">
                      {faq.q}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white border border-[#CBD6CE] flex items-center justify-center shrink-0 text-[#122A1F]">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-[#E7ECE4] bg-white">
                      <p className="text-xs sm:text-sm text-[#4E6254] font-light leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
