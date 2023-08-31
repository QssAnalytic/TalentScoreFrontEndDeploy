import React from 'react'
import Footer from './../../../pages/Landing/components/Footer'
import NavBar from './../../../pages/Landing/components/NavBar'
import Document from './components/Document'
import profilPhoto from './../../../assets/profilePhoto.jpg'
import hand from './../../../assets/hand.png'
import report from './../../../assets/profileReport.png'
import cv1 from './../../../assets/profileCV1.png'
import cv2 from './../../../assets/profileCV2.png'
import career from './../../../assets/profileCareer.png'
import certificate from './../../../assets/profileCertificate.png'

interface DataItem {
    type: string
    url: string
}

const Profile: React.FC = () => {
    const data: DataItem[] = [
        { type: 'Report', url: report },
        { type: 'CV', url: cv1 },
        { type: 'Career planning', url: career },
        { type: 'CV', url: cv2 },
        { type: 'Certificate', url: certificate },
        { type: 'Certificate', url: certificate },
    ]

    return (
        <>
            <NavBar />
            <div>
                <div className='bg-qss-transbg h-[224px] flex justify-center'>
                    <div className='w-[1090px] flex items-center'>
                        <div className='flex justify-center items-center w-[32%]'>
                            <div className='w-[145px] h-[145px] p-[2px] rounded-full overflow-hidden flex justify-center bg-gradient-to-t from-qss-gradientBottom to-qss-gradientTop'>
                                <img src={profilPhoto} alt='Profile Photo' className='w-full object-cover rounded-full' />
                            </div>
                        </div>
                        <div className='w-[67%]'>
                            <div className='flex items-center gap-[8px] py-[8px]'>
                                <p>Hello, <span className='text-qss-secondary font-semibold'>Zulekha Hasanova!</span></p>
                                <img src={hand} alt='Hello Hand' className='w-[28px]' />
                            </div>
                            <p className='py-[8px]'>Start you now to access AI-generated CVs, job fit analysis, and career insights.</p>
                            <button className='w-[243px] text-[14px] text-white py-[10px] px-[24px] rounded-[25px] float-right bg-gradient-to-t from-qss-gradientBottom to-qss-gradientTop'>Start Test</button>
                        </div>
                    </div>
                </div>
                <div className='relative w-full'>
                    <svg 
                        className='absolute top-0' 
                        xmlns='http://www.w3.org/2000/svg' 
                        width='263' 
                        height='876' 
                        viewBox='0 0 263 876' 
                        fill='none'
                    >
                        <path d='M262.169 2.3757C219.124 13.6874 133.351 65.0256 134.622 179.886C136.21 323.461 272.554 389.444 172.068 510.051C71.5822 630.658 -37.2551 611.193 -110.628 598.086C-184.001 584.978 -565.309 450.274 -889.311 620.454C-1148.51 756.598 -1172.08 1137.2 -1224.31 1299.84' stroke='#E4F1F0' strokeWidth='3' strokeDasharray='8 8' />
                    </svg>
                    <svg 
                        className='absolute bottom-0 z-10 right-0' 
                        xmlns='http://www.w3.org/2000/svg' 
                        width='1440' 
                        height='648' 
                        viewBox='0 0 1440 648' 
                        fill='none'
                    >
                        <path d='M1442.6 2.32492C1399.55 13.6366 1313.78 64.9748 1315.05 179.835C1316.64 323.41 1452.98 389.393 1352.5 510C1252.01 630.607 1143.17 611.142 1069.8 598.035C996.428 584.928 615.12 450.223 291.119 620.403C31.9176 756.547 8.34606 1137.15 -43.8851 1299.79' stroke='#E4F1F0' strokeWidth='3' strokeDasharray='8 8' />
                    </svg>
                    <div className='w-[1090px] m-auto flex flex-col z-50 relative'>
                        <p className='text-center text-qss-secondary mt-11 mb-8'>Explore sample reports below!</p>
                        <Document data={data} />
                        <button className='flex justify-between items-center w-[250px] m-auto border-[1px] border-qss-secondary bg-qss-secondary rounded-[25px] text-white text-[14px] py-3 px-4 mb-8 mt-12'>Go to premium subscription 
                            <svg 
                                xmlns='http://www.w3.org/2000/svg' 
                                width='24' 
                                height='24' 
                                viewBox='0 0 24 24' 
                                fill='none'
                            >
                                <path d='M5 18H19M5 14H19L20 5L16 8L12 3L8 8L4 5L5 14Z' stroke='#FFA723' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Profile