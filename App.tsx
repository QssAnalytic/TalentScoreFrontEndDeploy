import {Outlet, Route, Routes} from 'react-router-dom';
import Stages from './pages/Stages';
import Landing from './pages/Landing/Landing';
import ReportFront from './assets/report-front.png';
import ReportBack from './assets/report-back.png';
import {useAppDispatch, useAppSelector} from './state/hooks';
import {setShowReport} from './state/report/reportSlice';
import Login from 'pages/Auth/Login/Login';
import Register from 'pages/Auth/Register/Register';
import NavBar from 'pages/Landing/components/NavBar';
const App = () => {
	const {showReport} = useAppSelector(state => state.reportState);
	const dispatch = useAppDispatch();
	return (
		<div className="min-h-screen bg-qss-background font-inter relative">
			<Outlet />
			{!showReport && (
				<div className="fixed bg-black/60 z-40 inset-0" onClick={() => dispatch(setShowReport(!showReport))}>
					<div className="flex gap-4 w-full h-full pl-32 scale-75">
						<img src={ReportFront} alt="reportFront" className=" aspect-[3/4]" />
						<img src={ReportBack} alt="reportBack" className=" aspect-[3/4]" />
					</div>
				</div>
			)}
		</div>
	);
};

export default App;
