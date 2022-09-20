import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { motion, useScroll } from "framer-motion";

const Layout = ({ children }) => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-amber-400"
        style={{ transformOrigin: "0%", scaleX: scrollYProgress }}
      ></motion.div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
