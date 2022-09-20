import Image from "next/image";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";
import Loader from "../components/Loader";
import Avatar from "../assets/img/man.png";
import VercelLogo from "../assets/img/vercel.svg";
import { motion, useScroll } from "framer-motion";
import { Suspense } from "react";

const Layout = dynamic(
  () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(import("../components/Layout"));
      }, 2000);
    });
  },
  {
    suspense: true,
  }
);
export default function Home() {
  return (
    <Suspense fallback={`Loading...`}>
      <Layout>
        <section className="h-screen w-screen grid place-content-center">
          <motion.figure
            initial={{ opacity: 0, scaleX: 0.8 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5 }}
            className="my-6 border rounded-full"
          >
            <Image src={Avatar} alt="Person" className="w-100" />
          </motion.figure>
          <button className="p-2 bg-green-700 text-white border- rounded-lg hover:animate-none hover:bg-green-800">
            Descargar CV
          </button>
        </section>

        <section className="h-screen w-screen">
          <h1 className="text-white text-center">Experiencia de trabajo</h1>
          <article className="block  sm:flex sm:justify-around sm:items-center h-full">
            <div className="h-60 w-40 border rounded-lg bg-green-500">
              <motion.figure className="my-6 border rounded-full">
                <Image src={Avatar} alt="Person" />
              </motion.figure>
            </div>
            <div className="h-60 w-40 border rounded-lg bg-green-500">
              <motion.figure className="my-6 border rounded-full">
                <Image src={Avatar} alt="Person" />
              </motion.figure>
            </div>
          </article>
        </section>
      </Layout>
    </Suspense>
  );
}
