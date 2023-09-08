import { motion } from "framer-motion";
import {Spline3D }from "../../components/Spline3D";



const About = () => {
  


  return (
    <div className="h-full py-16 xl:py-32 text-center xl:text-left ">
      <div className="container mx-auto flex flex-col gap-y-8 lg:items-start xl:flex-row gap-x-20 pl-10">
        <h2 className="h2 text-center">
          <span className="text-secondary">{"{"}</span>
          Hola
          <span className="text-accent">Mundo</span>
          <span className="text-secondary">{"}"}</span>
        </h2>
        <Spline3D />

      </div>
    </div>
  );
};

export default About;
