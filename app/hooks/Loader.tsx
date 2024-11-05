import { useState, useEffect } from 'react';

const Loader = (minLoadingTime: number = 1500) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  useEffect(() => {
    // Set the mounted state after the initial render
    setHasMounted(true);

    // Promise for minimum loading time
    const minLoadingPromise = new Promise<void>((resolve) => setTimeout(resolve, minLoadingTime));
    const fontLoading = document.fonts.ready;

    // Wait for both the minimum load time and fonts to be ready
    Promise.all([minLoadingPromise, fontLoading]).then(() => setIsLoading(false));
  }, [minLoadingTime]);

  // Return true if loading is in progress or if the component has not yet mounted
  return isLoading || !hasMounted;
};

export default Loader;