import { useState, useEffect } from 'react';

const Loader = (minLoadingTime: number = 1500) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const minLoadingPromise = new Promise<void>((resolve) => setTimeout(resolve, minLoadingTime));
    const fontLoading = document.fonts.ready;

    // Wait for both the minimum load time and fonts to be ready
    Promise.all([minLoadingPromise, fontLoading]).then(() => setIsLoading(false));
  }, [minLoadingTime]);

  return isLoading;
};

export default Loader;