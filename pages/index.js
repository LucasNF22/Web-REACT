import Head from "next/head";
import ProjectsBtn from "../components/ProjectsBtn";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import Script from "next/script";

const Home = () => {
  return (
    <>
      <Head>
        <script
          type="module"
          src="https://unpkg.com/@splinetool/viewer@0.9.438/build/spline-viewer.js"
        />
      </Head>
      <div className=" flex justify-center w-full relative pb-10">
        <div className="w-full absolute left-[53.5%] top-[30%] hidden xl:flex ">
          <spline-viewer
            loading-anim
            url="https://prod.spline.design/8zWXoV-FQitNq5GP/scene.splinecode"
          ></spline-viewer>
        </div>
        <div className="  ">
          <div className="text-center flex flex-col justify-start pt-10 xl:pt-40 xl:text-left h-full container mx-auto ">
            <motion.h1
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h1"
            >
              Lucas Fiorentino <br />
              Web <span className="text-accent"> Developer</span>
            </motion.h1>
            <motion.p
              className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              Diseño, Tecnología y Desarrollo.
            </motion.p>
            <div className="flex justify-center xl:hidden relative">
              <ProjectsBtn />
            </div>
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden xl:flex"
            >
              <ProjectsBtn />
            </motion.div>
          </div>
        </div>
        <div className="basis-[40%] h-full flex-col items-center text-white text-center justify-start pt-10 xl:pt-40 container hidden xl:flex ">
          <motion.div
            // className="border w-[500px] h-[500px] rounded-full bg-gris flex justify-center items-center"
            variants={fadeIn("center", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
          ></motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
