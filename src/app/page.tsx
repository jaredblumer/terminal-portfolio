"use client";

import React, { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import Terminal from "@/components/Terminal/Terminal";
import { Ubuntu_Mono } from "next/font/google";

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

if (gaId) {
  ReactGA.initialize(gaId);
} else {
  console.warn("Google Analytics measurement ID is missing");
}

const ubuntuMono = Ubuntu_Mono({ weight: "400", subsets: ["latin"] });

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!gaId) return;
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: document.title,
    });
  }, []);

  return isLoaded ? (
    <div id="container" className={ubuntuMono.className}>
      <Terminal />
    </div>
  ) : null;
}
