"use client";

import { useEffect, useState } from "react";
import Preloader from "./Preloader";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Show loader for 1 second

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return <>{children}</>;
};