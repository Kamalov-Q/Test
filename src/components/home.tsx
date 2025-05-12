"use client";

import Image from "next/image";
import homeImage from "@/../public/home/home.png";
import ParticleBackground from "./particles";

function HomePage() {
  return (
    <>
      <div className="flex items-center justify-between h-[300px] overflow-hidden relative gap-5">
        <ParticleBackground height={300} />
        <div className="bg-white flex-1 text-black p-10 rounded-xl absolute left-10 max-w-sm shadow-md">
          <h1 className="text-5xl font-bold mb-2 tracking-wide font-[Orbitron]">
            JustRobotics
          </h1>
          <p className="text-lg font-medium leading-tight mb-4">
            твой проводник в мир <br />
            технологий и искусства
          </p>
          <p className="text-sm text-gray-600 mb-3">
            получите бесплатное первое занятие
          </p>
          <button className="bg-black text-yellow-400 font-bold py-2 px-4 rounded-md hover:bg-gray-900 transition">
            ПЕРЕЙТИ К КУРСАМ
          </button>
        </div>
        <div className="flex items-center absolute right-0 flex-1 justify-center">
          <Image
            src={homeImage}
            alt="Home Image"
            className="size-[500px] scale-125"
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;
