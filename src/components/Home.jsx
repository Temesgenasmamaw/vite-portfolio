import React from "react";
import TypeWriter from "typewriter-effect";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";
import Me from '../assets/me.jpg'

const Home = () => {
  return (
    <section name="home" className="w-full md:h-screen backdrop-blur-lg">
      <div className="flex flex-col h-full max-w-screen-lg mx-auto items-center justify-center text-white md:px-5 md:flex-row">
        <div className="flex flex-col mx-5 items-center justify-center h-full md:items-start text-center md:text-left">
          <h1 className="text-4xl xl:text-3xl md:text-2xl font-bold pt-20 md:scroll-pt-20">
            Temesgen Asmamaw
          </h1>
          <h2 className="text-2xl xl:text-3xl md:text-5xl font-normal">
            {/* <TypeWriter
              options={{
                autoStart: true,
                loop: true,
                delay: 80,
                strings: ["Making Ideas Come to Life Using Web Technology"],
              }}
            /> */}
          </h2>
          <p className="text-gray-300 text-xl md:text-1xl py-4 max-w-md">
            Junior Artificial intelligent enabled Software Developer.
  
          </p>
          <div>
            <Link to="contact" smooth>
              <button className="group inline-flex items-center px-10 py-4 border border-transparent font-semibold rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Contact Me &nbsp;
                <span className="group-hover:rotate-90 duration-300">
                  <FaArrowRight size={20} />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img
            loading="lazy"
            src={Me}
            alt="developer"
            className="m-5 mx-auto rounded-full w-full md:w-[80px] lg:w-[300px] xl:w-80 z-40"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
