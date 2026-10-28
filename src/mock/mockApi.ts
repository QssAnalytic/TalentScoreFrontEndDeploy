/*
 * Demo-mode API for the Talent Score website.
 *
 * The real Django backend (Railway project "talent-score-django") is offline,
 * so every request the frontend makes is answered here instead. Stage and
 * question data are the real responses captured from the backend's own
 * database (fixtures.json). Scores are sample values, because the scoring
 * weights are encrypted with the production key and can only be calculated
 * by the live backend.
 */
import axios, { AxiosAdapter, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import fixtures from './fixtures.json'
import { DEMO_MODE } from 'config'

type Json = any
type Result = { status: number; data: Json; headers?: Record<string, string> }

const STORE_KEY = 'ts_demo_db_v1'

interface DemoUser {
  email: string
  first_name: string
  last_name: string
  birth_date: string
  gender: string
  native_language?: string
  country?: string
  report_test: boolean
  profile_photo: string | null
}

interface DemoFile {
  id: number
  file: string
  file_category: 'REPORT' | 'CV' | 'CERTIFICATE'
  user: number
}

interface DemoDb {
  users: Record<string, DemoUser & { password: string }>
  session: string | null
  files: DemoFile[]
  nextId: number
  stageForm: Json[] | null
  report: Json | null
  verification: { name: string; type: string; size: number; status: string }[]
  plan: string
}

const defaultUser: DemoUser & { password: string } = {
  email: 'demo@talentscore.az',
  password: 'demo',
  first_name: 'Yashar',
  last_name: 'Nasibov',
  birth_date: '2000-06-20',
  gender: 'Male',
  native_language: 'Azərbaycan dili',
  country: 'Azerbaijan',
  report_test: false,
  profile_photo: null
}

function freshDb(): DemoDb {
  return {
    users: { [defaultUser.email]: { ...defaultUser } },
    session: null,
    files: [],
    nextId: 1,
    stageForm: null,
    report: null,
    verification: [],
    plan: 'free'
  }
}

let memoryDb: DemoDb | null = null

export function loadDb(): DemoDb {
  if (memoryDb) return memoryDb
  try {
    const raw = window.localStorage.getItem(STORE_KEY)
    memoryDb = raw ? { ...freshDb(), ...JSON.parse(raw) } : freshDb()
  } catch {
    memoryDb = freshDb()
  }
  return memoryDb as DemoDb
}

export function saveDb() {
  try {
    window.localStorage.setItem(STORE_KEY, JSON.stringify(memoryDb))
  } catch {
    /* storage unavailable: keep in memory */
  }
}

export function resetDemo() {
  memoryDb = freshDb()
  saveDb()
  try {
    window.localStorage.removeItem('access_token')
  } catch {
    /* ignore */
  }
}

function currentUser(): (DemoUser & { password: string }) | null {
  const db = loadDb()
  return db.session ? db.users[db.session] || null : null
}

export function getDemoUser() {
  return currentUser()
}

export function getDemoState() {
  return loadDb()
}

function publicUser(u: DemoUser) {
  return {
    email: u.email,
    first_name: u.first_name,
    last_name: u.last_name,
    birth_date: u.birth_date,
    gender: u.gender,
    report_test: u.report_test,
    profile_photo: u.profile_photo
  }
}

const SAMPLE_SCORES = {
  education: { text: 'Education', score: 85, result: 'Extensive' },
  language: { text: 'Language skills', score: 91, result: 'Advanced' },
  special: { text: 'Special talent', score: 41, result: 'Average' },
  sport: { text: 'Sport skills', score: 10, result: 'Limited' },
  work: { text: 'Work experience', score: 70, result: 'Solid' },
  program: { text: 'Program skills', score: 15, result: 'Limited' }
}

function findStage(name: string) {
  const db = loadDb()
  return (db.stageForm || []).find((s: Json) => s?.name === name)
}

function cvInfo() {
  const program = findStage('proqram-bilikleri-substage') || {
    formData: { programSkills: [{ whichLevel: [{ name: 'MS Office', value: { value: 'Peşəkar' } }, { name: 'Python', value: { value: 'Orta' } }] }] }
  }
  const education = findStage('orta-texniki-ve-ali-tehsil-suallari') || {
    formData: {
      education: [
        {
          country: { answer: 'Azərbaycan' },
          currentWorking: false,
          date: { start: '2018', end: '2022' },
          specialty: { answer: 'Kompüter elmləri' },
          tehsil: { answer: 'Bakalavr' },
          university: 'Bakı Dövlət Universiteti'
        }
      ]
    }
  }
  const work = findStage('is-tecrubesi-substage') || {
    formData: {
      experiences: [
        {
          company: 'QSS Analytics',
          profession: 'Project Manager',
          startDate: '2022-09',
          endDate: '',
          currentWorking: true,
          workingActivityForm: { answer: 'Tam ştat' },
          degreeOfProfes: { answer: 'Mütəxəssis' }
        }
      ]
    }
  }
  const safe = (stage: Json, key: string, fallback: Json) => {
    const v = stage?.formData?.[key]
    return Array.isArray(v) && v.length ? stage : fallback
  }
  return {
    program_questions: safe(program, 'programSkills', { formData: { programSkills: [] } }),
    secondary_education_questions: safe(education, 'education', { formData: { education: [] } }),
    work_experience_questions: safe(work, 'experiences', { formData: { experiences: [] } })
  }
}

function jobTitle(): string {
  const work = findStage('is-tecrubesi-substage')
  const p = work?.formData?.experiences?.[0]?.profession
  return p || 'Project Manager'
}

function summaryText(u: DemoUser) {
  const title = jobTitle()
  return `${u.first_name} is a ${title.toLowerCase()} with a strong academic background and hands-on experience coordinating teams and projects. Fluent in several languages and comfortable with modern digital tools, ${u.first_name} combines analytical thinking with clear communication, and is focused on growing into roles with greater responsibility.`
}

function normalize(url: string): string {
  let path = url || ''
  path = path.replace(/^https?:\/\/[^/]+\//, '')
  path = path.split('?')[0].split('#')[0]
  path = path.replace(/^\/+/, '')
  if (path && !path.endsWith('/')) path += '/'
  return path
}

function parseBody(body: Json): Json {
  if (body == null) return {}
  if (typeof body === 'string') {
    try {
      return JSON.parse(body)
    } catch {
      return {}
    }
  }
  return body
}

function readFileAsDataUrl(file: Blob): Promise<string> {
  return new Promise(resolve => {
    try {
      const reader = new FileReader()
      reader.onload = () => resolve(String(reader.result))
      reader.onerror = () => resolve('')
      reader.readAsDataURL(file)
    } catch {
      resolve('')
    }
  })
}

function addFile(category: DemoFile['file_category'], file: string): DemoFile {
  const db = loadDb()
  const existing = db.files.find(f => f.file_category === category)
  if (existing) {
    existing.file = file
    saveDb()
    return existing
  }
  const entry: DemoFile = { id: db.nextId++, file, file_category: category, user: 1 }
  db.files.push(entry)
  saveDb()
  return entry
}

export async function handle(method: string, url: string, rawBody: Json): Promise<Result> {
  const m = (method || 'get').toUpperCase()
  const path = normalize(url)
  const db = loadDb()
  const user = currentUser()
  const ok = (data: Json, status = 200): Result => ({ status, data })

  // ---- static data captured from the real backend ----
  if ((fixtures as Json)[path] !== undefined) return ok((fixtures as Json)[path])
  if (path.startsWith('question-lists/')) {
    const parts = path.split('/').filter(Boolean)
    const base = (fixtures as Json)[`question-lists/${parts[1]}/`]
    if (base) return ok(parts.length > 2 ? [{ ...base[0], questions: [] }] : base)
  }
  if (path.startsWith('stage-object/')) {
    const slug = path.split('/')[1]
    const all = (fixtures as Json)['stage-child-lists/'].concat((fixtures as Json)['stage-parent-lists/'])
    return ok(all.find((s: Json) => s.slug === slug) || {})
  }

  // ---- auth ----
  if (path === 'user/register/' && m === 'POST') {
    const b = parseBody(rawBody)
    if (!b.email) return ok({ email: ['This field is required.'] }, 400)
    if (b.password !== b.password2) return ok({ password: ['Passwords do not match!'] }, 400)
    db.users[b.email] = {
      email: b.email,
      password: b.password,
      first_name: b.first_name || '',
      last_name: b.last_name || '',
      birth_date: b.birth_date || '2000-01-01',
      gender: b.gender || 'Male',
      native_language: b.native_language,
      country: b.country,
      report_test: false,
      profile_photo: null
    }
    saveDb()
    return ok('Registered!')
  }
  if (path === 'user/login/' && m === 'POST') {
    const b = parseBody(rawBody)
    const email = (b.email || '').trim()
    let u = db.users[email]
    if (!u) {
      // Demo mode: any email signs in; unknown emails get a fresh demo profile.
      const name = email.split('@')[0] || 'Guest'
      u = { ...defaultUser, email, first_name: name.charAt(0).toUpperCase() + name.slice(1), last_name: '' }
      db.users[email] = u
    }
    db.session = u.email
    saveDb()
    return { status: 200, data: { access_token: 'demo-access-token', refresh_token: 'demo-refresh-token' }, headers: { 'x-csrftoken': 'demo-csrf' } }
  }
  if (path === 'user/refresh-token/') {
    if (!user) return ok({ detail: 'Not signed in' }, 401)
    return { status: 200, data: { access: 'demo-access-token' }, headers: { 'x-csrftoken': 'demo-csrf' } }
  }
  if (path === 'user/logout/') {
    db.session = null
    saveDb()
    return ok({})
  }

  if (!user) return ok({ detail: 'Authentication credentials were not provided.' }, 401)

  // ---- profile ----
  if (path === 'user/user/') return ok(publicUser(user))
  if (path === 'user/user-accounts-files/') return ok(db.files)
  if (path === 'user/upload-profile-photo/') {
    if (m === 'DELETE') {
      user.profile_photo = null
      saveDb()
      return ok({ message: 'removed' })
    }
    let photo = ''
    if (typeof FormData !== 'undefined' && rawBody instanceof FormData) {
      const f = rawBody.get('profile_photo') || Array.from(rawBody.values())[0]
      if (f instanceof Blob) photo = await readFileAsDataUrl(f)
    }
    user.profile_photo = photo || null
    saveDb()
    return ok({ profile_photo: user.profile_photo }, 201)
  }
  if (path === 'user/user-info-post/') return ok({ message: 'saved' }, 201)

  // ---- report ----
  if (path === 'user/user-education-score/' && m === 'POST') {
    const b = parseBody(rawBody)
    db.stageForm = b.user_info || []
    db.report = { data: JSON.parse(JSON.stringify(SAMPLE_SCORES)), report_key: 'TS-' + Math.random().toString(36).slice(2, 10).toUpperCase() }
    user.report_test = true
    saveDb()
    return ok(db.report)
  }
  if (path === 'user/upload-report/' && m === 'POST') {
    const b = parseBody(rawBody)
    addFile('REPORT', b.report_file || '')
    return ok({ message: 'file uploaded' }, 201)
  }
  if (path.startsWith('user/get-report/')) {
    return ok(db.report || { data: SAMPLE_SCORES, report_key: 'TS-DEMO' })
  }

  // ---- CV ----
  if (path === 'user/get-summry-prompt/') return ok({ sample_summary: summaryText(user) })
  if (path === 'user/get-job-title-prompt/') return ok({ sample_job_title: jobTitle() })
  if (path === 'user/get-cv-content-prompt/') return ok({ cv_content: summaryText(user) })
  if (path === 'user/get-cv-info/') return ok(cvInfo())
  if (path === 'user/change-position/') {
    const b = parseBody(rawBody)
    return ok({ position: [b.position || jobTitle()] })
  }
  if (path === 'user/change-job-experience/') return ok(parseBody(rawBody))
  if (path === 'user/resume-upload/' && m === 'POST') {
    const b = parseBody(rawBody)
    const f = addFile('CV', b.resume_file || b.cv_file || '')
    ;(db as Json).resume = { ...b, id: f.id }
    saveDb()
    return ok({ message: 'Resume created successfully' }, 201)
  }
  if (path.startsWith('user/get-resume/')) return ok((db as Json).resume || {}, 201)

  // ---- certificate ----
  if (path === 'user/get-unique-cert-id/') return ok({ code: '2359874' })
  if (path === 'user/get-certificate-designation-content/') return ok({ certificate_designation_content: 'Aspiring Professional' })
  if (path === 'user/get-certificate-intro/') {
    const name = `${user.first_name} ${user.last_name}`.trim()
    return ok({
      'certificate-intro-content': `This is to certify that ${name} has been thoroughly evaluated by our comprehensive Talent Scoring System, which examines career accomplishments, educational background, specialized proficiencies, sports involvement, language skills, programming knowledge, and more. Based on this assessment, ${name} has exhibited a range of talents and capabilities.`
    })
  }
  if (path === 'user/upload-cert/' && m === 'POST') {
    const b = parseBody(rawBody)
    addFile('CERTIFICATE', b.cert_file || b.certificate_file || '')
    return ok({ message: 'uploaded' }, 201)
  }
  if (path === 'user/upload-file/') return ok({ message: 'uploaded' }, 201)

  return ok({ detail: `Demo mode: ${m} /${path} is not available offline.` }, 404)
}

// ---------- wire into axios ----------
const mockAdapter: AxiosAdapter = async (config: InternalAxiosRequestConfig) => {
  const res = await handle(config.method || 'get', config.url || '', config.data)
  await new Promise(r => setTimeout(r, 120))
  const response: AxiosResponse = {
    data: res.data,
    status: res.status,
    statusText: String(res.status),
    headers: res.headers || {},
    config,
    request: {}
  }
  if (res.status >= 400) {
    const err: Json = new Error(`Request failed with status code ${res.status}`)
    err.response = response
    err.config = config
    err.isAxiosError = true
    throw err
  }
  return response
}

if (DEMO_MODE) axios.defaults.adapter = mockAdapter

const API_HOSTS = ['web-production-5301.up.railway.app', 'pythonanywhere.com', '127.0.0.1:8000', '146.190.122.252', 'talentscorebackend']

const realFetch = window.fetch.bind(window)
if (DEMO_MODE) window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
  const url = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url
  if (!API_HOSTS.some(h => url.includes(h))) return realFetch(input as RequestInfo, init)
  let method = init?.method || (input instanceof Request ? input.method : 'GET')
  let body: Json = init?.body
  if (!body && input instanceof Request && method !== 'GET') {
    try {
      body = await input.clone().text()
    } catch {
      body = undefined
    }
  }
  const res = await handle(method, url, body)
  return new Response(JSON.stringify(res.data), {
    status: res.status,
    headers: { 'Content-Type': 'application/json' }
  })
}
