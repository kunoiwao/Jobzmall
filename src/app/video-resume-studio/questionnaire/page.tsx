"use client";

import * as React from "react";
import dynamic from 'next/dynamic';

// Dynamically import components with  disabled
const Welcome = dynamic(() => import("@/components/videoResume/welcome"), { ssr: false });
const ProgressBar = dynamic(() => import("@/components/videoResume/progressbar"), { ssr: false });
const StoryStudio = dynamic(() => import("@/components/videoResume/storyStudio"), { ssr: false });

const VideoResumeStudio = () => {
  const [next, setNext] = React.useState(false);
  return (
    <>
      <div className="bg-white">
        {!next && <ProgressBar />}
        {next ? <StoryStudio /> : <Welcome setNext={setNext} />}
      </div>
    </>
  );
};

export default VideoResumeStudio;
