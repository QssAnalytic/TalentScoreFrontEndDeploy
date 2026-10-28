import { getDemoState } from 'mock/mockApi'

// Scripted Talent bot replies for the demo. The planned version sends the
// user's stage answers and scores to ChatGPT (see Mərhələlər › Chatbot_old).
const fallback = {
  education: { score: 85, result: 'Extensive' },
  language: { score: 91, result: 'Advanced' },
  special: { score: 41, result: 'Average' },
  sport: { score: 10, result: 'Limited' },
  work: { score: 70, result: 'Solid' },
  program: { score: 15, result: 'Limited' }
}

export function talentBotReply(input: string, userMessageCount: number): string {
  const t = input.toLowerCase()
  const db = getDemoState()
  const d: any = db.report?.data || fallback
  const hasReport = !!db.report
  const line = (label: string, k: string) => `${label}: ${d[k]?.score}% (${d[k]?.result})`

  if (userMessageCount === 0 && t.split(' ').length <= 3 && !/\?/.test(t)) {
    const name = input.trim().replace(/^\w/, c => c.toUpperCase())
    return `Tanış olmağıma şadam, ${name}! Mənə nəticələrin haqqında sual verə bilərsən: təhsil, dil, iş təcrübəsi, idman, proqram bilikləri, xüsusi bacarıqlar və ya karyera.`
  }
  if (/təhsil|tehsil|educat/.test(t)) return `${line('Təhsil', 'education')}. Yaşıdlarınla müqayisədə güclü tərəflərindən biridir.`
  if (/dil|language|ingilis/.test(t)) return `${line('Dil bilikləri', 'language')}. IELTS və ya TOEFL sertifikatını Verification bölməsində yükləsən, bu nəticə təsdiqlənəcək.`
  if (/iş|is tecrube|təcrübə|work|experience/.test(t)) return `${line('İş təcrübəsi', 'work')}. Job Fit Assessment hazırkı vəzifən üçün 93% uyğunluq göstərir.`
  if (/idman|sport/.test(t)) return `${line('İdman', 'sport')}. Peşəkar nailiyyətlər əlavə etsən, bu bal yüksələ bilər.`
  if (/proqram|program|kod|python/.test(t)) return `${line('Proqram bilikləri', 'program')}. Professional Development Guide-da sənin üçün kurslar var.`
  if (/bacarıq|bacariq|skill|talent/.test(t)) return `${line('Xüsusi bacarıqlar', 'special')}.`
  if (/karyera|career|vəzifə|vezife|rol|job/.test(t)) return 'Sənin üçün tövsiyə olunan rollar: Project Coordinator (91%) və Project Support Specialist. Ətraflı Career Advancement Report-da.'
  if (/cv|resume/.test(t)) return 'CV bölməsində ChatGPT xülasəni və vəzifə adını sənin cavablarına görə hazırlayır. Profil › Open CV.'
  if (/sertifikat|certif/.test(t)) return 'Sertifikatın ID ilə yoxlanıla bilər. Sənədlərini yükləyəndən sonra "Verified" statusu alacaq.'
  if (/salam|hello|hi\b/.test(t)) return 'Salam! Sənə necə kömək edə bilərəm?'
  return hasReport
    ? `Ümumi mənzərə — ${line('Təhsil', 'education')}, ${line('Dil', 'language')}, ${line('İş', 'work')}. Hansı sahə haqqında ətraflı danışaq?`
    : 'Testi tamamlayandan sonra nəticələrini izah edə bilərəm. Hələlik təhsil, dil, iş, idman və ya karyera haqqında soruşa bilərsən.'
}
