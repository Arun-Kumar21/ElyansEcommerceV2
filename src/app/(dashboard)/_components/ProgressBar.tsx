"use client";

import { useState, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();
  
  let activePage = pathname?.split("/")?.[2];

  useEffect(() => {
    setProgress(100);
    setTimeout(() => {
      setProgress(0);
    }, 1000);
  }, [activePage]);

  return (
    <div>
      <LoadingBar
        color="#0ea5e9"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    </div>
  );
};

export default ProgressBar;
