import React, { useState, useEffect } from "react";

const About = () => {
  return (
    <section
      name="about"
      className="w-full min-h-screen flex justify-between items-center text-white px-10 flex-col lg:flex-row pb-10 backdrop-blur-lg"
    >
      <div className="">
        <div className="mx-10 md:mx-24">
          <h2 className="text-4xl mb-4 text-center">About Me</h2>
          <div className="md:text-xl">
            <p className="mb-4">
              I graduated from Bahir Dar University as a software engineer in
              July 2023. Throughout my education, I obtained expertise in
              programming languages and complete website, mobile application
              development, and Artificial Intelligence projects that demonstrate
              my ability to create high-quality software solutions that fulfill
              the expectations of consumers. I am a quick learner and a team
              player who is constantly willing to master new skills and
              technology.
           </p>
            <p className="pb-1">
              💼 I'm open to work on Website Development &amp Mobile Application; 
            </p>
          </div>
          {/* <div className="pt-10 min-w-full grid grid-rows-2 md:grid-rows-1 gap-2 grid-flow-col">
            {socialMediaLinks.map((link, idx) => {
              return (
                <span className="px-2 col-span-3" key={idx}>
                  <a
                    href={link.profileLink}
                    target="_blank"
                    rel="noreferrer"
                    className=""
                  >
                    <img
                      src={link.iconLink}
                      alt={link.name}
                      className="w-10 h-10 bg-slate-700 bg-opacity-70"
                    />
                  </a>
                </span>
              );
            })}
          </div> */}
        </div>
      </div>
      <div>
        {/* <Articles /> */}
      </div>
    </section>
  );
};

export default About;
