import { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from 'hooks/useAuth'
import { getAge } from 'helper/date'
import PageShell from './PageShell'
import { getDemoState } from 'mock/mockApi'

// Content from the Career Advancement Report, Career Planning, Job Fit Assessment
// and Professional Development Guide sketches (Talent Score QSS › Unconfirmed content and designs › Reports).

const jobFit = [
	{
		role: 'Project Manager',
		tag: 'Current role',
		score: 93,
		text: 'Given a strong IT educational background, practical technical expertise and a wealth of experience overseeing IT projects, you stand out as an exceptionally well-matched candidate for the role of IT Project Manager.'
	},
	{
		role: 'Project Coordinator',
		tag: 'AI recommended',
		score: 91,
		text: 'Your career history demonstrates effectiveness in coordinating and managing many aspects of projects. Your skills align closely with a Project Coordinator, who keeps projects on track, monitors progress and facilitates communication among team members and stakeholders.'
	},
	{
		role: 'Project Support Specialist',
		tag: 'AI recommended',
		score: 48,
		text: 'Remarkable organisational abilities — meticulous attention to detail, systematic task management and efficient handling of project documentation and scheduling — position you as a match for the Project Support Specialist role.'
	}
]

const pdgCourses = [
	{ name: 'Product Management Masterclass: The Complete Course', where: 'Udemy' },
	{ name: 'Agile Crash Course: Agile Project Management; Agile Delivery', where: 'Udemy' },
	{ name: 'UX & Web Design Master Course: Strategy, Design, Development', where: 'Udemy' },
	{ name: 'Design Thinking Bootcamp: Innovate, Understand Users & Solve Problems', where: 'Udemy' },
	{ name: 'Data Science and Machine Learning Bootcamp with Python', where: 'Udemy' },
	{ name: 'Google Analytics for Beginners', where: 'Google Analytics Academy (free)' }
]

const careerPlan = {
	top: ['Junior Software Developer / Programmer', 'IT Support Specialist', 'Sports Analyst or Data Scientist'],
	recommended: ['Web Developer', 'Software QA Tester', 'Language Tutor or Translator'],
	alternative: ['Technical Writer', 'Entry-Level Data Analyst', 'Football Coach or Trainer'],
	local: ['ADA University', 'Baku State University', 'Khazar University', 'Baku Engineering University', 'Azerbaijan State Oil and Industry University'],
	global: ['Massachusetts Institute of Technology (MIT), USA', 'Stanford University, USA', 'University of Cambridge, UK', 'ETH Zurich, Switzerland', 'National University of Singapore (NUS), Singapore'],
	majors: ['Computer Science', 'Software Engineering', 'Information Technology', 'Data Science', 'Computer Engineering', 'Business Administration', 'Linguistics and Translation Studies', 'Sports Science and Management', 'International Relations'],
	courses: [
		{ role: 'Junior Software Developer / Programmer', items: ['Introduction to Python Programming — Coursera or edX', 'Full Stack Web Development — Udemy', 'Algorithms and Data Structures — Khan Academy or Codecademy'] },
		{ role: 'IT Support Specialist', items: ['CompTIA A+ Certification — Udemy or LinkedIn Learning', 'Networking Basics — Coursera', 'ITIL Foundation — edX or Pluralsight'] },
		{ role: 'Sports Analyst or Data Scientist', items: ['Data Science and Machine Learning Bootcamp with Python — Udemy', 'Sports Analytics — Coursera', 'Statistics for Data Science — edX'] }
	]
}

const methods = [
	['Hands-on projects', 'Build software, troubleshoot IT issues or analyse sports performance to turn theory into practical skill.'],
	['Mentorship and networking', 'Connect with experienced professionals through alumni groups, online forums and industry events.'],
	['Internships and work experience', 'Internships, part-time jobs or volunteering give real exposure and industry connections.'],
	['Self-study and research', 'Books, research papers and industry blogs keep you current with the latest trends.'],
	['Practising soft skills', 'Group projects, public speaking and workshops build communication, teamwork and time management.']
]

const SectionTitle = ({ children }: { children: string }) => (
	<h2 className="font-manrope text-xl font-bold tracking-wide text-qss-primary uppercase">{children}</h2>
)

const Pill = ({ children }: { children: string }) => (
	<span className="text-sm text-qss-alternative bg-qss-transbg rounded-[25px] px-4 py-2">{children}</span>
)

const CareerReport = () => {
	const { user } = useAuth()
	const db = getDemoState()
	const [audience, setAudience] = useState<'student' | 'professional'>('professional')
	const name = `${user?.first_name || ''} ${user?.last_name || ''}`.trim() || 'Talent Score user'
	const age = user?.birth_date ? getAge(new Date(user.birth_date)) : null
	const today = new Date().toLocaleDateString('en-GB')
	const reportId = db.report?.report_key || 'TS-DEMO'
	const unlocked = db.plan === 'premium' || db.plan === 'paid'

	return (
		<PageShell
			badge="Premium"
			title="Career Advancement Report"
			subtitle="One report that replaces the separate Career Planning, Job Fit Assessment and Professional Development Guide. Students get career planning; professionals get a job fit assessment — both include the development guide."
		>
			{!unlocked && (
				<div className="rounded-xl border border-[#FFA723] bg-[#FFF8EC] px-6 py-4 flex items-center justify-between gap-6">
					<p className="text-sm text-qss-primary">This report is part of the paid plans. You are seeing the full demo version.</p>
					<Link to="/profile/plans" className="shrink-0 text-[14px] text-white py-[8px] px-[24px] rounded-[25px] bg-qss-secondary">See plans</Link>
				</div>
			)}

			<div className="flex gap-2 self-start bg-qss-input rounded-[25px] p-1" role="tablist">
				<button
					type="button"
					role="tab"
					aria-selected={audience === 'student'}
					onClick={() => setAudience('student')}
					className={`px-6 py-2 rounded-[25px] text-sm ${audience === 'student' ? 'bg-qss-primary text-white' : 'text-qss-primary'}`}
				>
					For students
				</button>
				<button
					type="button"
					role="tab"
					aria-selected={audience === 'professional'}
					onClick={() => setAudience('professional')}
					className={`px-6 py-2 rounded-[25px] text-sm ${audience === 'professional' ? 'bg-qss-primary text-white' : 'text-qss-primary'}`}
				>
					For professionals
				</button>
			</div>

			<div className="bg-white shadow rounded-xl overflow-hidden">
				<div className="bg-gradient-to-r from-qss-gradientTop to-qss-alternative text-white px-10 py-8 flex justify-between items-end">
					<div>
						<p className="font-manrope text-3xl font-extrabold tracking-[0.15em]">TALENT SCORE</p>
						<p className="mt-2 text-white/80 text-sm tracking-widest uppercase">Career Advancement Report</p>
					</div>
					<div className="text-right text-sm leading-6">
						<p className="font-semibold text-base">{name}{age ? `, ${age} years old` : ''}</p>
						<p>Date: {today}</p>
						<p>ID: {reportId}</p>
					</div>
				</div>

				<div className="px-10 py-10 flex flex-col gap-12">
					{audience === 'professional' ? (
						<section className="flex flex-col gap-6">
							<SectionTitle>Job fit assessment</SectionTitle>
							<p className="text-qss-inputText">The following charts and interpretations illustrate your alignment with your current role and identify the roles that are the best fit for you.</p>
							<div className="flex flex-col gap-5">
								{jobFit.map(j => (
									<div key={j.role} className="grid grid-cols-[260px_1fr] gap-8 items-start rounded-xl border border-qss-border p-6">
										<div className="flex flex-col gap-3">
											<span className="self-start text-xs font-semibold uppercase tracking-wide text-qss-alternative bg-qss-transbg rounded-full px-3 py-1">{j.tag}</span>
											<p className="font-manrope text-lg font-semibold text-qss-primary">{j.role}</p>
											<div className="h-2 rounded-full bg-qss-base-400 overflow-hidden">
												<div className="h-full rounded-full bg-qss-secondary" style={{ width: `${j.score}%` }} />
											</div>
											<p className="text-sm text-qss-inputText">Job fit score <span className="font-semibold text-qss-primary">{j.score}%</span> / 100%</p>
										</div>
										<p className="text-qss-inputText leading-relaxed">{j.text}</p>
									</div>
								))}
							</div>
							<p className="text-sm italic text-qss-inputText">Remember, while this recommendation is based on an analysis of your skills and characteristics, the decision on which position to pursue is ultimately yours.</p>
						</section>
					) : (
						<section className="flex flex-col gap-6">
							<SectionTitle>Career planning</SectionTitle>
							<div className="grid grid-cols-3 gap-6">
								<div className="rounded-xl bg-qss-transbg p-6">
									<p className="font-semibold text-qss-primary mb-3">Top recommended positions</p>
									<ol className="list-decimal pl-5 flex flex-col gap-2 text-qss-inputText text-sm">{careerPlan.top.map(x => <li key={x}>{x}</li>)}</ol>
								</div>
								<div className="rounded-xl bg-qss-transbg p-6">
									<p className="font-semibold text-qss-primary mb-3">Recommended roles</p>
									<ol className="list-decimal pl-5 flex flex-col gap-2 text-qss-inputText text-sm">{careerPlan.recommended.map(x => <li key={x}>{x}</li>)}</ol>
								</div>
								<div className="rounded-xl bg-qss-transbg p-6">
									<p className="font-semibold text-qss-primary mb-3">Alternative routes</p>
									<ol className="list-decimal pl-5 flex flex-col gap-2 text-qss-inputText text-sm">{careerPlan.alternative.map(x => <li key={x}>{x}</li>)}</ol>
								</div>
							</div>
							<p className="text-qss-inputText leading-relaxed">Your diverse skills, ranging from programming knowledge to sports achievements, make you a versatile candidate for roles where problem-solving and adaptability are key. Your language proficiency and interest in technology could also open opportunities as a language tutor or translator within the tech industry.</p>

							<p className="font-manrope text-lg font-semibold text-qss-primary mt-4">Suggested universities for further education</p>
							<div className="grid grid-cols-2 gap-6">
								<div>
									<p className="text-sm font-semibold text-qss-alternative mb-2">Local universities</p>
									<ul className="flex flex-col gap-2 text-sm text-qss-inputText">{careerPlan.local.map(x => <li key={x}>{x}</li>)}</ul>
								</div>
								<div>
									<p className="text-sm font-semibold text-qss-alternative mb-2">Global universities</p>
									<ul className="flex flex-col gap-2 text-sm text-qss-inputText">{careerPlan.global.map(x => <li key={x}>{x}</li>)}</ul>
								</div>
							</div>
							<p className="text-sm font-semibold text-qss-alternative">Majors for further education</p>
							<div className="flex flex-wrap gap-2">{careerPlan.majors.map(m => <Pill key={m}>{m}</Pill>)}</div>

							<p className="font-manrope text-lg font-semibold text-qss-primary mt-4">Training and learning methods</p>
							<div className="grid grid-cols-3 gap-6">
								{careerPlan.courses.map(c => (
									<div key={c.role} className="rounded-xl border border-qss-border p-5">
										<p className="font-semibold text-qss-primary mb-3 text-sm">{c.role}</p>
										<ul className="flex flex-col gap-2 text-sm text-qss-inputText">{c.items.map(i => <li key={i}>{i}</li>)}</ul>
									</div>
								))}
							</div>
						</section>
					)}

					<section className="flex flex-col gap-6 border-t border-qss-border pt-10">
						<SectionTitle>Professional development guide</SectionTitle>
						<p className="text-qss-inputText leading-relaxed">
							{audience === 'professional'
								? 'Welcome to your personalised Professional Development Guide for becoming an excellent Project Manager. It is designed to help you excel in your role, expand your skill set and drive successful outcomes.'
								: 'A guide to building the skills your recommended roles need, from first courses to real-world experience.'}
						</p>
						{audience === 'professional' && (
							<div className="grid grid-cols-2 gap-4">
								{pdgCourses.map(c => (
									<div key={c.name} className="rounded-xl bg-qss-transbg px-5 py-4">
										<p className="text-qss-primary font-semibold text-sm">{c.name}</p>
										<p className="text-xs text-qss-inputText mt-1">{c.where}</p>
									</div>
								))}
							</div>
						)}
						<div className="grid grid-cols-5 gap-4">
							{methods.map(([t, d]) => (
								<div key={t} className="rounded-xl border border-qss-border p-4">
									<p className="text-sm font-semibold text-qss-primary mb-2">{t}</p>
									<p className="text-xs text-qss-inputText leading-relaxed">{d}</p>
								</div>
							))}
						</div>
						<p className="text-sm text-qss-inputText">Becoming proficient is an ongoing journey. Seek out mentors, join workshops and conferences, and actively ask for feedback.</p>
					</section>
				</div>
				<div className="px-10 py-4 bg-qss-input text-xs text-qss-base-300 flex justify-between">
					<span>TALENT SCORE · Süni intellekt sistemi</span>
					<span>Copyright 2023</span>
				</div>
			</div>
		</PageShell>
	)
}

export default CareerReport
