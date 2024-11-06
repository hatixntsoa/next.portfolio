"use client";

import { useState, useEffect } from 'react';

const Loader = (minLoadingTime: number): boolean => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  useEffect(() => {
    // Set the mounted state after the initial render
    setHasMounted(true);

    // Set a timeout for the minimum loading time
    const timer = setTimeout(() => setIsLoading(false), minLoadingTime);

    // Cleanup the timer on unmount
    return () => clearTimeout(timer);
  }, [minLoadingTime]);

  // Return true if loading is in progress or if the component has not yet mounted
  return isLoading || !hasMounted;
};

export default Loader;