import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import Header from "../Components/Header";
import ProgressBarCute from "../Components/ProgressBarCute";

const RootLayout = ({ isDark, setIsDark }) => {
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);
  return (
    // <div>
    <div>
      <Header />
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Outlet />
      <Footer />
      <ScrollToTop />
      <ProgressBarCute />
    </div>
  );
};

export default RootLayout;
