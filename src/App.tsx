import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import ReportFront from './assets/report-front.png';
import ReportBack from './assets/report-back.png';
import { useAppDispatch, useAppSelector } from './state/hooks';
import { setShowReport } from './state/report/reportSlice';
import Login from 'pages/Auth/Login/Login';
import Register from 'pages/Auth/Register/Register';
import AuthMiddleware from 'middleware/Auth';
import PersistLogin from 'pages/Landing/components/PersistLogin';
import Home from 'pages/Home';
import Report from 'pages/Auth/Profile/Report/Report';
import Plans from 'pages/Next/Plans';
import Verification from 'pages/Next/Verification';
import CareerReport from 'pages/Next/CareerReport';
import VerifyCertificate from 'pages/Next/VerifyCertificate';
import DemoBanner from 'pages/Next/DemoBanner';
import DemoLogin from 'pages/Next/DemoLogin';
import Chatbot from 'components/Chatbot/Chatbot';
import { useLocation } from 'react-router-dom';
import AppShell from 'components/AppShell/AppShell';
import Dashboard from 'pages/Tests/Dashboard';
import { TalentStages, TalentTest } from 'pages/Tests/TalentTest';
import IqTest from 'pages/Tests/iq/IqTest';
import MbtiTest from 'pages/Tests/mbti/MbtiTest';
import EnneaTest from 'pages/Tests/enneagram/EnneaTest';
import FullReport from 'pages/Tests/FullReport';
import Certificates from 'pages/Tests/Certificates';
import CvBuilder from 'pages/Tests/cv/CvBuilder';


// Talent bot on the signed-in pages (the landing page already renders it).
const ProfileChatbot = () => {
	const { pathname } = useLocation();
	return pathname.startsWith('/profile') && !pathname.includes('/stages/') && !pathname.startsWith('/profile/tests/') ? <Chatbot /> : null;
};

const App = () => {
	const { showReport } = useAppSelector(state => state.reportState);
	const dispatch = useAppDispatch();


	return (

		<>
			<DemoBanner />
			<ProfileChatbot />
			<Routes>


				<Route path='/' element={<PersistLogin />}>
					<Route index element={<Landing />}></Route>

					<Route path='login' element={<Login />}></Route>
					<Route path='register' element={<Register />}></Route>
					<Route path='verify' element={<VerifyCertificate />}></Route>
					<Route path='demo' element={<DemoLogin />}></Route>
					<Route path='profile' element={<AuthMiddleware />}>
						<Route element={<AppShell />}>
							<Route index element={<Dashboard />}></Route>
							<Route path='tests/talent' element={<TalentTest />}></Route>
							<Route path='stages/:stageSlug/:subStageSlug' element={<TalentStages />}></Route>
							<Route path='tests/iq' element={<IqTest />}></Route>
							<Route path='tests/mbti' element={<MbtiTest />}></Route>
							<Route path='tests/enneagram' element={<EnneaTest />}></Route>
							<Route path='full-report' element={<FullReport />}></Route>
							<Route path='certificates' element={<Certificates />}></Route>
							<Route path='cv' element={<CvBuilder />}></Route>
							<Route path='report' element={<Report />}></Route>
							<Route path='plans' element={<Plans />}></Route>
							<Route path='verification' element={<Verification />}></Route>
							<Route path='career' element={<CareerReport />}></Route>
						</Route>
						<Route path='certificate' element={<Navigate to='/profile/certificates' replace />}></Route>
					</Route>
				</Route>
				<Route path='*' element={<Navigate to='/' />}></Route>

			</Routes>
		</>
	);
};

export default App;
