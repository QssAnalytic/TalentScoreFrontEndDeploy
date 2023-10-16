
import { useEffect, useRef, useState } from "react";
import { axiosPrivateInstance } from "axioss";
import useAuth from "hooks/useAuth";
import TemplateOneFile from "./TemplateOneFile";
import download from './../../../../../../assets/downloadicon.svg'
import domtoimage from 'dom-to-image'
import { useReactToPrint } from "react-to-print";


const TemplateOne = () => {


  const [data, setData] = useState<any>();

  const componentRef = useRef<HTMLDivElement>(null)
  

  // const { user } = useAuth()
  // console.log(user);
  const [user,setUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
    profile_photo:''
  })
  
  const [img, setImg] = useState('')
  const [summaryLoading, setSummaryLoading] = useState(true);
  
  useEffect(()=>{
    async function getUser(){
      const resp = await axiosPrivateInstance('user/user/')
      console.log(resp);
      resp.status===200 && setUser(resp.data)
    }
    getUser()
  },[user])
  useEffect(() => {
    
    async function getCvData() {
      const response = await axiosPrivateInstance.get('user/get-summry-prompt/')
      const response2 = await axiosPrivateInstance.get('user/get-cv-content-prompt/')
      const response3 = await axiosPrivateInstance.get('user/get-job-title-prompt/')
      const response4 = await axiosPrivateInstance.get('user/get-experiance-prompt/')

      setData({
        ...response.data,
        ...response2.data,
        ...response3.data,
        ...response4.data
      })
      // summary = response.data?.
      response.status === 200 && setSummaryLoading(false)

    }
    getCvData()
  }, [])




  useEffect(() => {

    async function componentToImg() {
      if (componentRef.current) {
        await domtoimage.toJpeg(componentRef.current, { quality: 0.98 }).then(function (dataUrl: string) {
          setImg(dataUrl)
          setData({ ...data, report_file: dataUrl })
        })
      }
    }
    componentToImg()
  },[])


  const postData = async () => {
    try {

      const response = await axiosPrivateInstance.post('user/upload-cv/', {
        report_file: img
      })


      console.log(response);

    } catch (error) { }
  }
  useEffect(() => {
    if (img !== null && img !== undefined && img !== '') {
      // postData()
    }
  }, [img])


  console.log(data);
  const generatePDF = useReactToPrint({
    content: () => componentRef.current as HTMLElement,
    documentTitle: 'TalentScoreCV',
  })


  return (
    // <div className="relative overflow-hidden border rounded shadow w-[100%] p-3 font-montserrat">
    //   <Rectangle className="fill-[#FFCC06] absolute top-0 right-0" />

    //   <div className="relative space-y-8">
    //     <div className="px-8">
    //       <div className="flex items-center justify-between mt-10 -tracking-[0.2px]">
    //         <div className="space-y-10">
    //           <div className="text-[11px]">
    //             <h1 className="font-semibold">{user.first_name + ' ' + user.last_name}</h1>

    //             <p className="text-qss-base-500">{data?.sample_job_title}</p>
    //           </div>

    //           <div className="text-[8px]">
    //             <p>{user?.email}</p>

    //             <p className="font-semibold ">{contacts.phone}</p>
    //           </div>
    //         </div>

    //         <img
    //           src="https://scontent.fgyd8-1.fna.fbcdn.net/v/t39.30808-6/346986411_906370997125512_3222888757866143043_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=lFLXvjcrFwMAX-n72TR&_nc_ht=scontent.fgyd8-1.fna&oh=00_AfCBRuHLIGm_8gypZsPi21mMIdgT8qruY7ebfUreserJqA&oe=64BCFEF3"
    //           className=" object-cover w-[121px] h-[121px] rounded-full outline outline-4 outline-qss-base-500 outline-offset-[10px] bg-slate-400"
    //         ></img>

    //         <ul className="space-y-1 text-[5px] tracking-normal">
    //           {contacts.links.map((contact) => (
    //             <li
    //               key={contact.name}
    //               className="flex items-center justify-start gap-1 text-white"
    //             >
    //               {getIcon(contact.name)}
    //               <span>{contact.link}</span>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>

    //       <p className="mt-10 text-[8px] max-w-sm -tracking-[0.2px]">
    //         {summaryLoading ? (
    //           <TextSkeleton />
    //         ) : (
    //           data?.["sample_summary"]
    //         )}
    //       </p>
    //     </div>

    //     <div className="grid grid-cols-2 gap-6 px-3">
    //       <div className="flex gap-1.5">
    //         <h2 className=" [writing-mode:vertical-lr]  uppercase tracking-[0.7px] text-[7px] text-end rotate-180">
    //           WORK EXPERIENCE
    //         </h2>
    //         <div className="border-l border-dotted border-qss-alternative min-h-72" />

    //         <div className="pl-2 space-y-4">
    //           {/* {workExperience.map(({ header, desc }, index) => (
    //             <div key={index} className="text-[8px]">
    //               <h2 className="font-bold">{header.jobTitle}</h2>
    //               <p className="text-qss-base-500">{header.workPlace}</p>
    //               <p>
    //                 {header.date.startDate} - {header.date.endDate}
    //               </p>

    //               <ul className="text-[6px] list-inside list-disc pt-1"> */}
    //           {data?.["job_experience"]?.map(
    //             (d: string, index: number) => (
    //               <li key={index}>{d}</li>
    //             )
    //           )}
    //           {/* {desc.map((d, index) => (
    //                   <li key={index}>{d}</li>
    //                 ))} */}
    //           {/* </ul>
    //             </div>
    //           ))} */}
    //         </div>
    //       </div>

    //       <div className="space-y-10">
    //         <div className="flex gap-1.5">
    //           <h2 className=" [writing-mode:vertical-lr]  uppercase tracking-[0.7px] text-[7px] text-end rotate-180">
    //             EDUCATION
    //           </h2>
    //           <div className="border-l border-dotted border-qss-alternative min-h-28" />

    //           <div className="pl-2 space-y-2 text-[8px]">
    //             {educationAndCertifcates?.master?.map(
    //               ({ specialty, university, desc }, index) => (
    //                 <div key={index} className="text-[8px]">
    //                   <h2 className="font-bold">{specialty}</h2>
    //                   <p className="text-qss-base-500">{university}</p>
    //                   <p>{desc}</p>
    //                 </div>
    //               )
    //             )}
    //             {educationAndCertifcates?.bachelor?.map(
    //               ({ specialty, university, desc }, index) => (
    //                 <div key={index} className="text-[8px]">
    //                   <h2 className="font-bold">{specialty}</h2>
    //                   <p className="text-qss-base-500">{university}</p>
    //                   <p>{desc}</p>
    //                 </div>
    //               )
    //             )}
    //             <div>
    //               {educationAndCertifcates?.certifacetes?.map((cert, index) => (
    //                 <p key={index}>{cert}</p>
    //               ))}
    //             </div>
    //           </div>
    //         </div>

    //         <div className="flex gap-1.5">
    //           <h2 className=" [writing-mode:vertical-lr]  uppercase tracking-[0.7px] text-[7px] text-end rotate-180">
    //             Skills
    //           </h2>
    //           <div className="border-l border-dotted border-qss-alternative min-h-28" />

    //           <div className="pl-2 space-y-2 text-[8px] w-full">
    //             {Object.entries(skills).map(([key, value]) => (
    //               <div className="gap-2 capitalize flexCenter">
    //                 {key}
    //                 <div className="h-0.5 w-full relative rounded bg-gray-300">
    //                   <div
    //                     className="absolute h-full bg-gray-500 rounded"
    //                     style={{ width: `${getPerc(value)}%` }}
    //                   ></div>
    //                 </div>
    //               </div>
    //             ))}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex gap-10">
      <div className="w-[40rem] min-w-[40rem] min-h-[55rem]">

        <TemplateOneFile user={user} ref={componentRef} data={data} summaryLoading={summaryLoading} />
      </div>
      <button onClick={generatePDF} className='flex'>
        <p className='download-text'>FREE DOWNLOAD</p>
        <img src={download} alt='Report Download Icon' />
        
      </button>
    </div>
  );
};



export default TemplateOne;
