import React, { useEffect, useState } from "react";
import "./_app.css";
import { AppProps } from "next/app";
import Layout from "../components/layout";
import { assetPrefix } from "../next.config";

function MyApp({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const bgMode = window.localStorage.getItem("bgMode");
    if (bgMode === "light" || !bgMode) {
      setIsDark(false);
    } else {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.getElementsByTagName("html")[0].classList.add("dark_theme");
      document.getElementsByTagName("html")[0].classList.remove("light_theme");
    } else {
      document.getElementsByTagName("html")[0].classList.add("light_theme");
      document.getElementsByTagName("html")[0].classList.remove("dark_theme");
    }
  }, [isDark]);

  const toggleTheme = () => {
    if (isDark) {
      setIsDark(false);
      window.localStorage.setItem("bgMode", "light");
    } else {
      setIsDark(true);
      window.localStorage.setItem("bgMode", "dark");
    }
  };

  return (
    <Layout prefix={assetPrefix} isDark={isDark}>
      <Component
        {...pageProps}
        prefix={assetPrefix}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />
    </Layout>
  );
}

export default MyApp;