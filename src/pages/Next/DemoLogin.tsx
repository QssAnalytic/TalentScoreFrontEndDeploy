import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import ClockLoader from 'react-spinners/ClockLoader'
import axiosInstance from 'axioss'
import useAuth from 'hooks/useAuth'

// Shared review account. Anyone who opens /#/demo signs in as this user, so it
// must never hold real personal data. It is created on first use, which also
// covers the backend database being reset by a redeploy.
export const DEMO_ACCOUNT = {
	email: 'demo@talentscore.az',
	password: 'TalentScoreDemo2026',
	first_name: 'Demo',
	last_name: 'User',
	birth_date: '2000-06-20',
	gender: 'Male',
	native_language: 'Azərbaycan dili',
	country: 'Azerbaijan'
}

const DemoLogin = () => {
	const { setAccessToken, setCSRFToken, setUser } = useAuth()
	const navigate = useNavigate()
	const { search } = useLocation()
	// ?next=personas opens a page inside the profile after signing in.
	const next = new URLSearchParams(search).get('next')
	const [error, setError] = useState('')
	const started = useRef(false)

	useEffect(() => {
		if (started.current) return
		started.current = true

		const signIn = async () => {
			const credentials = { email: DEMO_ACCOUNT.email, password: DEMO_ACCOUNT.password }
			try {
				let response
				try {
					response = await axiosInstance.post('user/login/', JSON.stringify(credentials))
				} catch {
					// First visit after a database reset: create the account, then sign in.
					await axiosInstance.post('user/register/', JSON.stringify({ ...DEMO_ACCOUNT, password2: DEMO_ACCOUNT.password }))
					response = await axiosInstance.post('user/login/', JSON.stringify(credentials))
				}
				const token = response?.data?.access_token
				localStorage.setItem('access_token', token)
				setAccessToken(token)
				setCSRFToken(response.headers['x-csrftoken'])
				try {
					const me = await axiosInstance.get('user/user/', {
						headers: { Authorization: `Bearer ${token}` }
					})
					setUser(me.data)
				} catch {
					/* the profile page loads the user itself */
				}
				navigate(next && /^[a-z/-]+$/.test(next) ? `/profile/${next}` : '/profile', { replace: true })
			} catch (err: any) {
				console.log(err)
				setError(err?.response?.status ? `The server answered ${err.response.status}.` : 'The server could not be reached.')
			}
		}
		signIn()
	}, [])

	return (
		<div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-qss-transbg px-4 text-center">
			{error ? (
				<>
					<p className="font-manrope text-2xl font-semibold text-qss-primary">Demo sign-in didn’t work</p>
					<p className="text-qss-inputText max-w-md">{error} Try again in a minute — the backend may still be starting after a deploy.</p>
					<div className="flex gap-4">
						<button type="button" onClick={() => window.location.reload()} className="text-[14px] text-white py-[10px] px-[28px] rounded-[25px] bg-qss-secondary">
							Try again
						</button>
						<Link to="/login" className="text-[14px] py-[10px] px-[28px] rounded-[25px] border border-qss-secondary text-qss-secondary">
							Sign in normally
						</Link>
					</div>
				</>
			) : (
				<>
					<ClockLoader size={60} color="#038477" />
					<p className="font-manrope text-xl font-semibold text-qss-primary">Signing you in to the demo account…</p>
				</>
			)}
		</div>
	)
}

export default DemoLogin
