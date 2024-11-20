"use client";
import { useEffect, useState } from 'react';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import UploadInstead from './uploadInstead';

interface VideoModalProps {
    subtitle: string;
    setClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const VideoModal: React.FC<VideoModalProps> = ({ subtitle }) => {
    const [animate, setAnimate] = useState(false);
    const [currentSubtitle, setCurrentSubtitle] = useState(subtitle);

    useEffect(() => {
        setAnimate(true);
        setTimeout(() => {
            setCurrentSubtitle(subtitle);
            setAnimate(false);
        }, 1000); 
    }, [subtitle]);

    return (
        <>
            <div className='w-full flex justify-center md:p-10 max-md:h-full'>
                <div className={`bg-[#262626] rounded-2xl flex justify-center flex-col max-w-3xl sm:px-10 py-6 transition-all duration-300 ${animate ? 'animate-move-up' : ''}`}>
                    <div className='max-sm:px-6'>
                        <div className='text-xl sm:text-2xl font-bold'>{currentSubtitle}</div>
                        <div className='flex mt-2 mb-4'>
                            <AccessTimeFilledIcon className='text-[#A3A3A3]' fontSize='small' />
                            <div className="ml-1.5 text-[#A3A3A3] text-[13px]">Time limit: 90 seconds</div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center max-md:h-full bg-black rounded-2xl'>
                        <div className="flex flex-col items-center w-full py-40">
                            <div className="text text-center text-white px-2 mb-4">
                                We have detected that you are blocking the use of webcam. Please enable it and refresh the page to continue, or upload below.
                            </div>
                            <div className='z-10'><UploadInstead /></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Add this style tag in your component or in a CSS file */}
            <style jsx>{`
                @keyframes moveUp {
                    0% {
                        transform: translateY(0);
                    }
                    25% {
                        transform: translateY(-100%);
                        opacity: 0;
                    }
                    50% {
                        opacity: 0;
                        transform: translateY(100%);
                    }
                    75% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-move-up {
                    animation: moveUp 1s forwards; /* Adjust duration as needed */
                }
            `}</style>
        </>
    );
}

export default VideoModal;