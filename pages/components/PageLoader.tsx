// components/PageLoader.tsx
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function PageLoader() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  if (!loading) return null;

  return (
    <>
    <div className="fixed top-0 left-0 right-0 h-1 bg-blue-600 animate-pulse z-50" />
     {/* <div className="loader">Loading...</div> */}
    </>
  );
}
