interface ChartData {
    sport: ChartItem
    education: ChartItem
    program: ChartItem
    work: ChartItem
    special: ChartItem
    language: ChartItem
}

interface ChartItem {
    score: number
    education_color: string
    text: string
    result: string
}

const PolarAreaChart = ({ data }: { data: ChartData }) => {
    const { sport, education, program, work, special, language } = data

    const dataArray = Object.values(data)

    // This variables used for the filling of slices of polar area chart
    const sportFill = Math.round(sport?.score / 10)
    const eduFill = Math.round(education?.score / 10)
    const progFill = Math.round(program?.score / 10)
    const workFill = Math.round(work?.score / 10)
    const specialFill = Math.round(special?.score / 10)
    const langFill = Math.round(language?.score / 10)

    return (
        <div className='chart-2'>
            {
                // This method used for display the value of each stage with its value, text and colored circle 
                dataArray.map((elem, i) => (
                    <div key={i} className={`chart-2-info chart-2-info-${i + 1} ${(i === 4 || i === 5) ? 'chart2-info-reverse' : ''}`}>
                        <p className='chart-2-percent'>{+elem?.score}%</p>
                        <div className='chart2-field'>
                            <div style={{
                                width: '6px',
                                height: '6px',
                                backgroundColor: `${elem?.education_color}`,
                                borderRadius: '50%'
                            }}
                            ></div>
                            <p className='chart-2-text'>{elem?.text}</p>
                        </div>
                    </div>
                ))
            }

            {
                // This method used for display the branched line of polar area chart
                Array.from({ length: 4 }, (_, i) => (
                    <svg key={i} className={`chart-2-direct chart-2-direct-${i + 1}`} width='118' height='12' viewBox='0 0 118 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <g opacity='0.4'>
                            <path d='M0.939941 11.5702H116.16V1.4502' stroke='#003F4D' strokeWidth='0.25' strokeMiterlimit='10' />
                            <path d='M116.16 2.44006C116.679 2.44006 117.1 2.01921 117.1 1.50006C117.1 0.980913 116.679 0.560059 116.16 0.560059C115.641 0.560059 115.22 0.980913 115.22 1.50006C115.22 2.01921 115.641 2.44006 116.16 2.44006Z' fill='#003F4D' />
                        </g>
                    </svg>
                ))
            }

            {
                // This method used for display the straight line of polar area chart
                Array.from({ length: 2 }, (_, i) => (
                    <svg key={i} className={`chart-2-direct chart-2-direct-${i + 5}`} width='40' height='3' viewBox='0 0 40 3' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <g opacity='0.4'>
                            <path d='M0.949951 1.17993H38.14' stroke='#003F4D' strokeWidth='0.25' strokeMiterlimit='10' />
                            <path d='M38.0999 2.12C38.6199 2.12 39.0399 1.69999 39.0399 1.17999C39.0399 0.659993 38.6199 0.23999 38.0999 0.23999C37.5799 0.23999 37.1599 0.659993 37.1599 1.17999C37.1599 1.69999 37.5799 2.12 38.0999 2.12Z' fill='#003F4D' />
                        </g>
                    </svg>
                ))
            }

            <svg xmlns='http://www.w3.org/2000/svg' width='144' height='144' viewBox='0 0 144 144' fill='none'>

                // background color - #EDF4F6

                // 1st slice (education stage) - #00E5BC 
                <path d='M72.6801 51.4199V52.6699C79.3001 52.8799 85.06 56.4499 88.36 61.7299L89.44 61.1099C85.93 55.4599 79.7601 51.6399 72.6801 51.4299V51.4199Z' fill={eduFill >= 1 ? '#00E5BC' : '#EDF4F6'} />
                <path d='M72.6801 45.74V46.99C81.3901 47.21 89.01 51.91 93.28 58.89L94.36 58.2599C89.86 50.9099 81.85 45.96 72.67 45.74H72.6801Z' fill={eduFill >= 2 ? '#00E5BC' : '#EDF4F6'} />
                <path d='M72.6801 40.0701V41.3201C83.4901 41.5401 92.93 47.3801 98.2 56.0501L99.28 55.4301C93.8 46.3901 83.9501 40.2901 72.6801 40.0801V40.0701Z' fill={eduFill >= 3 ? '#00E5BC' : '#EDF4F6'} />
                <path d='M72.6801 34.3999V35.6499C85.5801 35.8699 96.86 42.8599 103.1 53.2199L104.18 52.5999C97.7201 41.8699 86.04 34.6299 72.67 34.4099L72.6801 34.3999Z' fill={eduFill >= 4 ? '#00E5BC' : '#EDF4F6'} />
                <path d='M72.6801 28.73V29.98C87.6701 30.2 100.78 38.3299 108.01 50.3799L109.09 49.7599C101.65 37.3399 88.1301 28.95 72.6801 28.73Z' fill={eduFill >= 5 ? '#00E5BC' : '#EDF4F6'} />
                <path d='M72.6801 23.0601V24.3101C89.7701 24.5301 104.71 33.8 112.92 47.55L114 46.9301C105.57 32.8101 90.2301 23.29 72.6801 23.07V23.0601Z' fill={eduFill >= 6 ? '#00E5BC' : '#EDF4F6'} />
                <path d='M72.6801 17.3999V18.6499C91.8601 18.8699 108.63 29.2899 117.82 44.7199L118.9 44.0999C109.49 28.2899 92.32 17.6199 72.67 17.3999H72.6801Z' fill={eduFill >= 7 ? '#00E5BC' : '#EDF4F6'} />
                <path d='M72.6801 11.73V12.98C93.9601 13.2 112.56 24.76 122.73 41.89L123.81 41.27C113.42 23.77 94.4101 11.96 72.6801 11.74V11.73Z' fill={eduFill >= 8 ? '#00E5BC' : '#EDF4F6'} />
                <path d='M72.6801 6.06006V7.31006C96.0501 7.53006 116.48 20.23 127.64 39.05L128.72 38.4301C117.35 19.2301 96.5101 6.28006 72.6801 6.06006Z' fill={eduFill >= 9 ? '#00E5BC' : '#EDF4F6'} />
                <path d='M72.6801 1.64014C98.1401 1.86014 120.41 15.7002 132.54 36.2202L133.62 35.6002C121.27 14.7102 98.6 0.620137 72.67 0.390137V1.64014H72.6801Z' fill={eduFill === 10 ? '#00E5BC' : '#EDF4F6'} />

                // 2nd slice (work stage) - #FFCB05
                <path d='M91.28 71.8602C91.28 75.1402 90.45 78.2202 89 80.9202L90.08 81.5502C91.64 78.6602 92.52 75.3702 92.52 71.8602C92.52 68.3502 91.63 65.0602 90.08 62.1702L89 62.8002C90.45 65.5002 91.28 68.5902 91.28 71.8602Z' fill={workFill >= 1 ? '#FFCB05' : '#EDF4F6'} />
                <path d='M96.95 71.8601C96.95 76.1701 95.85 80.2201 93.92 83.7601L95 84.3801C97.04 80.6601 98.2 76.3901 98.2 71.8601C98.2 67.3301 97.04 63.0601 95 59.3401L93.92 59.9601C95.85 63.5001 96.95 67.5501 96.95 71.8601Z' fill={workFill >= 2 ? '#FFCB05' : '#EDF4F6'} />
                <path d='M99.9001 56.5102L98.8201 57.1302C101.24 61.5002 102.62 66.5202 102.62 71.8602C102.62 77.2002 101.24 82.2202 98.8201 86.5902L99.9001 87.2102C102.42 82.6502 103.86 77.4202 103.86 71.8502C103.86 66.2802 102.42 61.0502 99.9001 56.4902V56.5102Z' fill={workFill >= 3 ? '#FFCB05' : '#EDF4F6'} />
                <path d='M104.81 53.6802L103.73 54.3002C106.63 59.5102 108.29 65.4902 108.29 71.8602C108.29 78.2302 106.63 84.2202 103.73 89.4202L104.81 90.0402C107.82 84.6502 109.54 78.4502 109.54 71.8502C109.54 65.2502 107.82 59.0502 104.81 53.6602V53.6802Z' fill={workFill >= 4 ? '#FFCB05' : '#EDF4F6'} />
                <path d='M109.72 50.8401L108.64 51.4601C112.02 57.5001 113.96 64.4601 113.96 71.8601C113.96 79.2601 112.02 86.2201 108.64 92.2601L109.72 92.8801C113.21 86.6601 115.21 79.4901 115.21 71.8601C115.21 64.2301 113.21 57.0601 109.72 50.8401Z' fill={workFill >= 5 ? '#FFCB05' : '#EDF4F6'} />
                <path d='M114.63 48.0103L113.55 48.6302C117.42 55.5102 119.63 63.4303 119.63 71.8603C119.63 80.2903 117.41 88.2103 113.55 95.0903L114.63 95.7103C118.6 88.6503 120.88 80.5203 120.88 71.8603C120.88 63.2003 118.6 55.0603 114.63 48.0103Z' fill={workFill >= 6 ? '#FFCB05' : '#EDF4F6'} />
                <path d='M119.53 45.1802L118.45 45.8002C122.8 53.5102 125.29 62.4002 125.29 71.8602C125.29 81.3202 122.8 90.2102 118.45 97.9202L119.53 98.5402C123.99 90.6502 126.54 81.5402 126.54 71.8502C126.54 62.1602 123.98 53.0602 119.53 45.1602V45.1802Z' fill={workFill >= 7 ? '#FFCB05' : '#EDF4F6'} />
                <path d='M124.44 42.3401L123.36 42.9601C128.19 51.5001 130.96 61.3601 130.96 71.8601C130.96 82.3601 128.19 92.2101 123.36 100.76L124.44 101.38C129.38 92.6501 132.21 82.5801 132.21 71.8601C132.21 61.1401 129.38 51.0701 124.44 42.3401Z' fill={workFill >= 8 ? '#FFCB05' : '#EDF4F6'} />
                <path d='M129.35 39.5103L128.27 40.1302C133.59 49.5102 136.64 60.3303 136.64 71.8603C136.64 83.3903 133.59 94.2103 128.27 103.59L129.35 104.21C134.77 94.6503 137.88 83.6103 137.88 71.8603C137.88 60.1103 134.77 49.0703 129.35 39.5103Z' fill={workFill >= 9 ? '#FFCB05' : '#EDF4F6'} />
                <path d='M142.3 71.8602C142.3 84.4202 138.97 96.2102 133.17 106.42L134.25 107.04C140.16 96.6402 143.55 84.6402 143.55 71.8502C143.55 59.0602 140.16 47.0602 134.25 36.6602L133.17 37.2802C138.97 47.4902 142.3 59.2801 142.3 71.8401V71.8602Z' fill={workFill === 10 ? '#FFCB05' : '#EDF4F6'} />

                // 3rd slice (language stage) - #FF0038
                <path d='M89.44 82.6202L88.36 82.0002C85.07 87.2802 79.3001 90.8402 72.6801 91.0602V92.3102C79.7601 92.1002 85.93 88.2802 89.44 82.6302V82.6202Z' fill={langFill >= 1 ? '#FF0038' : '#EDF4F6'} />
                <path d='M94.37 85.4701L93.2899 84.8401C89.0099 91.8101 81.3999 96.5201 72.6899 96.7401V97.9901C81.8599 97.7701 89.8799 92.8201 94.3799 85.4701H94.37Z' fill={langFill >= 2 ? '#FF0038' : '#EDF4F6'} />
                <path d='M99.28 88.3002L98.2 87.6802C92.94 96.3402 83.4901 102.19 72.6801 102.41V103.66C83.9501 103.44 93.8 97.3402 99.28 88.3102V88.3002Z' fill={langFill >= 3 ? '#FF0038' : '#EDF4F6'} />
                <path d='M104.19 91.14L103.11 90.52C96.87 100.88 85.5899 107.87 72.6899 108.08V109.33C86.0499 109.11 97.7299 101.87 104.19 91.14Z' fill={langFill >= 4 ? '#FF0038' : '#EDF4F6'} />
                <path d='M109.1 93.9701L108.02 93.3501C100.79 105.4 87.6799 113.53 72.6899 113.75V115C88.1499 114.78 101.66 106.4 109.1 93.9701Z' fill={langFill >= 5 ? '#FF0038' : '#EDF4F6'} />
                <path d='M114 96.8002L112.92 96.1802C104.71 109.92 89.7701 119.19 72.6801 119.42V120.67C90.2301 120.45 105.57 110.93 114 96.8102V96.8002Z' fill={langFill >= 6 ? '#FF0038' : '#EDF4F6'} />
                <path d='M118.91 99.6302L117.83 99.0103C108.64 114.45 91.8699 124.86 72.6899 125.08V126.33C92.3299 126.11 109.51 115.44 118.92 99.6302H118.91Z' fill={langFill >= 7 ? '#FF0038' : '#EDF4F6'} />
                <path d='M123.82 102.47L122.74 101.85C112.57 118.98 93.9699 130.54 72.6899 130.76V132.01C94.4299 131.79 113.43 119.98 123.82 102.48V102.47Z' fill={langFill >= 8 ? '#FF0038' : '#EDF4F6'} />
                <path d='M128.72 105.3L127.64 104.68C116.48 123.5 96.0501 136.2 72.6801 136.42V137.67C96.5101 137.45 117.35 124.5 128.72 105.3Z' fill={langFill >= 9 ? '#FF0038' : '#EDF4F6'} />
                <path d='M132.55 107.51C120.41 128.03 98.1499 141.87 72.6899 142.09V143.34C98.6199 143.12 121.28 129.02 133.64 108.13L132.56 107.51H132.55Z' fill={langFill === 10 ? '#FF0038' : '#EDF4F6'} />

                // 4th slice (special stage) - #00A8E1
                <path d='M71.4301 92.3002V91.0502C64.8201 90.8402 59.05 87.2702 55.75 81.9902L54.67 82.6102C58.18 88.2602 64.3501 92.0802 71.4301 92.2902V92.3002Z' fill={specialFill >= 1 ? '#00A8E1' : '#EDF4F6'} />
                <path d='M71.43 97.9901V96.7401C62.72 96.5201 55.1 91.8201 50.83 84.8401L49.75 85.4701C54.24 92.8201 62.26 97.7701 71.44 97.9901H71.43Z' fill={specialFill >= 2 ? '#00A8E1' : '#EDF4F6'} />
                <path d='M71.43 103.66V102.41C60.63 102.19 51.18 96.3402 45.92 87.6802L44.84 88.3002C50.32 97.3402 60.1699 103.44 71.4399 103.66H71.43Z' fill={specialFill >= 3 ? '#00A8E1' : '#EDF4F6'} />
                <path d='M71.4301 109.33V108.08C58.5301 107.86 47.25 100.87 41.01 90.5103L39.9301 91.1302C46.3901 101.86 58.0701 109.1 71.4301 109.32V109.33Z' fill={specialFill >= 4 ? '#00A8E1' : '#EDF4F6'} />
                <path d='M71.43 114.99V113.74C56.44 113.52 43.33 105.39 36.1 93.3401L35.02 93.9601C42.46 106.38 55.98 114.76 71.43 114.99Z' fill={specialFill >= 5 ? '#00A8E1' : '#EDF4F6'} />
                <path d='M71.43 120.66V119.41C54.34 119.19 39.4 109.92 31.19 96.1702L30.11 96.7902C38.54 110.91 53.88 120.43 71.43 120.65V120.66Z' fill={specialFill >= 6 ? '#00A8E1' : '#EDF4F6'} />
                <path d='M71.43 126.33V125.08C52.25 124.86 35.48 114.44 26.29 99.0103L25.21 99.6302C34.62 115.44 51.79 126.11 71.43 126.33Z' fill={specialFill >= 7 ? '#00A8E1' : '#EDF4F6'} />
                <path d='M71.4301 132V130.75C50.1501 130.53 31.5501 118.97 21.3801 101.84L20.3 102.46C30.69 119.96 49.6901 131.77 71.4301 131.99V132Z' fill={specialFill >= 8 ? '#00A8E1' : '#EDF4F6'} />
                <path d='M71.43 137.67V136.42C48.06 136.2 27.63 123.5 16.47 104.68L15.39 105.3C26.76 124.5 47.6 137.45 71.43 137.67Z' fill={specialFill >= 9 ? '#00A8E1' : '#EDF4F6'} />
                <path d='M71.43 142.09C45.97 141.87 23.7 128.03 11.57 107.51L10.49 108.13C22.84 129.02 45.51 143.11 71.44 143.34V142.09H71.43Z' fill={specialFill === 10 ? '#00A8E1' : '#EDF4F6'} />

                // 5th slice (program stage) - #8800E0
                <path d='M52.84 71.8602C52.84 68.5802 53.67 65.5002 55.12 62.8002L54.04 62.1702C52.48 65.0602 51.6 68.3502 51.6 71.8602C51.6 75.3702 52.49 78.6602 54.04 81.5502L55.12 80.9202C53.67 78.2202 52.84 75.1302 52.84 71.8602Z' fill={progFill >= 1 ? '#8800E0' : '#EDF4F6'} />
                <path d='M47.17 71.8601C47.17 67.5501 48.27 63.5001 50.2 59.9601L49.1201 59.3401C47.0801 63.0601 45.92 67.3301 45.92 71.8601C45.92 76.3901 47.0801 80.6601 49.1201 84.3801L50.2 83.7601C48.27 80.2201 47.17 76.1701 47.17 71.8601Z' fill={progFill >= 2 ? '#8800E0' : '#EDF4F6'} />
                <path d='M44.21 87.22L45.29 86.6C42.87 82.23 41.49 77.2101 41.49 71.8701C41.49 66.5301 42.87 61.51 45.29 57.14L44.21 56.52C41.69 61.08 40.25 66.31 40.25 71.88C40.25 77.45 41.69 82.68 44.21 87.23V87.22Z' fill={progFill >= 3 ? '#8800E0' : '#EDF4F6'} />
                <path d='M39.31 90.0502L40.39 89.4302C37.49 84.2202 35.83 78.2402 35.83 71.8702C35.83 65.5002 37.49 59.5102 40.39 54.3102L39.31 53.6902C36.3 59.0802 34.58 65.2801 34.58 71.8801C34.58 78.4801 36.3 84.6801 39.3 90.0701L39.31 90.0502Z' fill={progFill >= 4 ? '#8800E0' : '#EDF4F6'} />
                <path d='M34.4 92.8801L35.48 92.2601C32.1 86.2201 30.16 79.2701 30.16 71.8601C30.16 64.4501 32.1 57.5001 35.48 51.4601L34.4 50.8401C30.91 57.0601 28.91 64.2301 28.91 71.8601C28.91 79.4901 30.91 86.6601 34.4 92.8801Z' fill={progFill >= 5 ? '#8800E0' : '#EDF4F6'} />
                <path d='M29.49 95.72L30.57 95.1C26.7 88.22 24.49 80.3001 24.49 71.8701C24.49 63.4401 26.71 55.52 30.57 48.64L29.49 48.02C25.52 55.08 23.24 63.2101 23.24 71.8701C23.24 80.5301 25.52 88.66 29.49 95.72Z' fill={progFill >= 6 ? '#8800E0' : '#EDF4F6'} />
                <path d='M24.59 98.5502L25.67 97.9302C21.32 90.2202 18.83 81.3302 18.83 71.8702C18.83 62.4102 21.32 53.5202 25.67 45.8102L24.59 45.1902C20.13 53.0802 17.58 62.1901 17.58 71.8801C17.58 81.5701 20.14 90.6701 24.59 98.5701V98.5502Z' fill={progFill >= 7 ? '#8800E0' : '#EDF4F6'} />
                <path d='M19.68 101.38L20.76 100.76C15.93 92.2201 13.16 82.3601 13.16 71.8601C13.16 61.3601 15.93 51.5101 20.76 42.9601L19.68 42.3401C14.74 51.0701 11.91 61.1401 11.91 71.8601C11.91 82.5801 14.74 92.6501 19.68 101.38Z' fill={progFill >= 8 ? '#8800E0' : '#EDF4F6'} />
                <path d='M7.49001 71.8603C7.49001 60.3303 10.54 49.5102 15.86 40.1302L14.78 39.5103C9.36 49.0703 6.25 60.1103 6.25 71.8603C6.25 83.6103 9.36 94.6503 14.78 104.21L15.86 103.59C10.54 94.2103 7.49001 83.3903 7.49001 71.8603Z' fill={progFill >= 9 ? '#8800E0' : '#EDF4F6'} />
                <path d='M1.81995 71.8602C1.81995 84.4202 5.14995 96.2102 10.95 106.42L9.86995 107.04C3.95995 96.6402 0.569946 84.6402 0.569946 71.8502C0.569946 59.0602 3.95995 47.0602 9.86995 36.6602L10.95 37.2802C5.14995 47.4902 1.81995 59.2801 1.81995 71.8401V71.8602Z' fill={progFill === 10 ? '#8800E0' : '#EDF4F6'} />

                // 6th slice (sport stage) - #09959A
                <path d='M54.6801 61.1102L55.76 61.7302C59.05 56.4502 64.82 52.8902 71.44 52.6702V51.4202C64.36 51.6402 58.1901 55.4502 54.6801 61.1002V61.1102Z' fill={sportFill >= 1 ? '#09959A' : '#EDF4F6'} />
                <path d='M49.75 58.2602L50.83 58.8902C55.11 51.9202 62.72 47.2102 71.43 46.9902V45.7402C62.26 45.9602 54.24 50.9202 49.74 58.2602H49.75Z' fill={sportFill >= 2 ? '#09959A' : '#EDF4F6'} />
                <path d='M44.84 55.4301L45.92 56.0501C51.18 47.3901 60.63 41.5401 71.43 41.3201V40.0701C60.16 40.2901 50.31 46.3901 44.83 55.4201L44.84 55.4301Z' fill={sportFill >= 3 ? '#09959A' : '#EDF4F6'} />
                <path d='M39.9301 52.5901L41.01 53.2101C47.25 42.8501 58.5301 35.8701 71.4301 35.6401V34.3901C58.0701 34.6101 46.3901 41.8501 39.9301 52.5801V52.5901Z' fill={sportFill >= 4 ? '#09959A' : '#EDF4F6'} />
                <path d='M35.02 49.7602L36.1 50.3802C43.33 38.3302 56.44 30.2002 71.43 29.9802V28.7302C55.98 28.9502 42.46 37.3302 35.02 49.7602Z' fill={sportFill >= 5 ? '#09959A' : '#EDF4F6'} />
                <path d='M30.12 46.9301L31.2 47.55C39.41 33.81 54.35 24.5401 71.44 24.3101V23.0601C53.89 23.2801 38.55 32.8 30.12 46.92V46.9301Z' fill={sportFill >= 6 ? '#09959A' : '#EDF4F6'} />
                <path d='M25.21 44.0901L26.29 44.7101C35.48 29.2701 52.25 18.8601 71.43 18.6401V17.3901C51.79 17.6101 34.61 28.2801 25.21 44.0901Z' fill={sportFill >= 7 ? '#09959A' : '#EDF4F6'} />
                <path d='M20.3 41.2602L21.3801 41.8802C31.5501 24.7502 50.1501 13.2002 71.4301 12.9702V11.7202C49.6901 11.9402 30.69 23.7502 20.3 41.2502V41.2602Z' fill={sportFill >= 8 ? '#09959A' : '#EDF4F6'} />
                <path d='M15.39 38.4301L16.47 39.05C27.62 20.23 48.06 7.53006 71.43 7.31006V6.06006C47.6 6.28006 26.76 19.2301 15.39 38.4301Z' fill={sportFill >= 9 ? '#09959A' : '#EDF4F6'} />
                <path d='M11.57 36.2202C23.71 15.7002 45.97 1.86014 71.43 1.64014V0.390137C45.5 0.610137 22.84 14.7002 10.48 35.6002L11.56 36.2202H11.57Z' fill={sportFill === 10 ? '#09959A' : '#EDF4F6'} />
            </svg>
        </div>
    )
}

export default PolarAreaChart
