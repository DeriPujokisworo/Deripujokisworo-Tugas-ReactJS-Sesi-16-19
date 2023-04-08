import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white
    "
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full
      "
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am Deri Pujokisworo, graduated from SMK Taman Harapan, Bekasi, West
          Java majoring in Computer Network Engineering. I am currently 28 years
          old and not married. Currently working in the DKI Jakarta VI Flats
          Management Unit as a Mechanical Electrical. I have been following
          bootcamp for 3 months. I took a full stack developer class. The
          material that has been studied is HTML CSS Version Control Service
          Javascript React JS, and currently studying Node JS.
        </p>

        <br />

        <p className="text-xl">
          I wanted to switch careers, so I joined a bootcamp to add value and
          self-knowledge. for that I followed one of the bootcamps that are
          still looking for a car
        </p>
      </div>
    </div>
  );
};

export default About;
