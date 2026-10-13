import { Appointment } from './bookingService';

// ============================================================
// ★ 설정 1 (필수): 예약 알림을 받을 병원 이메일 주소를 아래에 입력하세요.
//
//   예)  export const BOOKING_RECEIVE_EMAIL = 'clinic@gmail.com';
//
//   ※ 아래 예시 주소를 실제 받을 메일 주소로 바꾼 뒤 업로드하세요.
// ============================================================
export const BOOKING_RECEIVE_EMAIL = '여기에-예약받을-이메일-주소-입력@gmail.com';

// ============================================================
// ★ 설정 2 (선택): Web3Forms 자동 전달 접속 키
//
//   1) https://web3forms.com 접속 → Sign Up (이메일 가입만 하면 됨)
//   2) 발급받은 Access Key를 아래 큰따옴표 안에 붙여넣기
//
//   → 키가 입력되면 고객이 [예약 신청]만 눌러도 병원 메일로 자동 발송됩니다.
//   → 비워두면 고객의 메일 앱이 열리고 내용이 자동 입력되어,
//      고객이 [보내기]를 누르는 방식으로 동작합니다.
// ============================================================
export const WEB3FORMS_ACCESS_KEY = '';

export type SendResult = 'auto' | 'mailto' | 'unconfigured';

export function isBookingEmailConfigured(): boolean {
  const email = BOOKING_RECEIVE_EMAIL.trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && !email.includes('여기에');
}

function buildSubject(appt: Appointment): string {
  return `[덴트아트 예약 신청] ${appt.patientName} / ${appt.date} ${appt.time}`;
}

function buildMessage(appt: Appointment): string {
  return [
    '덴트아트 치과 홈페이지 예약 신청이 접수되었습니다.',
    '',
    `예약 코드: ${appt.bookingCode}`,
    `환자명: ${appt.patientName}`,
    `연락처: ${appt.phone}`,
    `진료 과목: ${appt.treatmentName}`,
    `희망 일시: ${appt.date} ${appt.time}`,
    `증상 및 메모: ${appt.symptoms || '없음'}`,
    '',
    '※ 회신은 환자 연락처로 연락 부탁드립니다.',
  ].join('\n');
}

/**
 * 예약 신청 내용을 병원 이메일로 전달합니다.
 *  1순위 — Web3Forms 자동 전달 (접속 키가 설정된 경우)
 *  2순위 — 고객의 메일 앱 열기 (내용 자동 입력 후 고객이 전송)
 */
export async function sendBookingEmail(appt: Appointment): Promise<SendResult> {
  const subject = buildSubject(appt);
  const message = buildMessage(appt);

  if (WEB3FORMS_ACCESS_KEY) {
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject,
          from_name: '덴트아트 치과 홈페이지',
          replyto: appt.email || undefined,
          message,
        }),
      });
      const data = await res.json();
      if (data && data.success) return 'auto';
    } catch (err) {
      console.error('자동 전송 실패, 메일 앱 방식으로 대체합니다.', err);
    }
  }

  if (!isBookingEmailConfigured()) {
    return 'unconfigured';
  }

  const mailtoUrl =
    `mailto:${BOOKING_RECEIVE_EMAIL.trim()}` +
    `?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(message)}`;
  window.location.href = mailtoUrl;
  return 'mailto';
}
