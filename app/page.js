"use client";

import Image from "next/image";
import hero from "@/public/images/hero1.jpg";
import app from "@/public/images/iphone-frame.png";
import google from "@/public/images/google-play-button.png";
import apple from "@/public/images/apple-store-button.png";
import { PiArrowRightLight } from "react-icons/pi";
import { GiMeditation, GiMuscularTorso, GiWeightLiftingUp } from "react-icons/gi";
import { TbStretching } from "react-icons/tb";
import { BiRun } from "react-icons/bi";
import Link from "next/link";
import { motion } from "framer-motion";

const FitnessDescription = ({ icon, title, description }) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.1, once: true }}
      variants={{
        offscreen: { y: 100, opacity: 0 },
        onscreen: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0.1, duration: 1 } },
      }}
      className="flex gap-4 lg:gap-8 mt-10 sm:mt-14 lg:mt-20"
    >
      <div>
        <div className="text-3xl sm:text-4xl lg:text-5xl text-gray-500 p-5 lg:p-6 shadow-2xl rounded-2xl lg:rounded-3xl">{icon}</div>
      </div>
      <div>
        <h4 className="uppercase text-lg lg:text-2xl font-bold mb-3">{title}</h4>
        <p className="text-sm lg:text-base font-medium lg:w-56 xl:w-64">{description}</p>
      </div>
    </motion.div>
  );
};

export default function Home() {
  return (
    <main className="overflow-hidden before:bg-black before:block before:h-[1px]">
      <section className="h-[96svh] bg-black relative text-white">
        <div className="absolute inset-0">
          <Image src={hero} alt="hero-img" fill placeholder="blur" className="object-cover opacity-10" />
        </div>
        <div className="relative h-full flex items-center pl-10 sm:pl-12 lg:pl-20 xl:pl-48">
          <div className="flex flex-col gap-6 z-10">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ amount: 0.2, once: true }}
              variants={{
                offscreen: { scale: 0.2, opacity: 0 },
                onscreen: { scale: 1, opacity: 1, transition: { type: "spring", bounce: 0.5, duration: 1, delay: 0.2 } },
              }}
              className="w-80 sm:w-[33rem] h-fit"
            >
              <h1 className="text-4xl sm:text-6xl font-bold leading-10 sm:leading-[4rem] [word-spacing:10px]">
                The ultimate online personal training platform
              </h1>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ amount: 0.2, once: true }}
              variants={{
                offscreen: { opacity: 0 },
                onscreen: { opacity: 1, transition: { type: "spring", bounce: 0.5, duration: 1, delay: 0.4 } },
              }}
              className="w-56 sm:w-[20rem] text-sm"
            >
              <p>Reach your body goals, boost your energy for life anytime, anywhere.</p>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ amount: 0.2, once: true }}
              variants={{
                offscreen: { x: "-10vw", opacity: 0 },
                onscreen: { x: 0, opacity: 1, transition: { type: "spring", bounce: 0.2, duration: 1, delay: 0.5 } },
              }}
            >
              <Link
                href="#download"
                className="w-40 sm:w-44 border-b-2 border-blue-500 py-3 text-start flex items-center mt-4 sm:mt-10 hover:scale-105 transition duration-200 ease-in-out"
              >
                Start Your Training <PiArrowRightLight className="ml-auto" />
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.2, once: true }}
            variants={{
              offscreen: { y: 200, opacity: 0 },
              onscreen: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0.1, duration: 2, delay: 0.2, delayChildren: 1.7 } },
            }}
            className="w-[55vw] lg:w-[40vw] xl:w-[20vw] absolute top-[27%] sm:top-auto left-[50%] xl:left-[63%]"
          >
            <motion.div
              variants={{ onscreen: { y: [null, 30, 0], transition: { duration: 5, ease: "easeInOut", repeat: Infinity } } }}
              className="relative overflow-hidden"
            >
              <div className="w-[87.5%] h-[94.5%] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 absolute -z-10 overflow-hidden">
                <video className="w-full h-full object-cover" autoPlay loop muted playsInline disablePictureInPicture>
                  <source src="/videos/gymbffvid2.mp4" type="video/mp4" />
                </video>
              </div>
              <Image src={app} alt="phone-app-preview" className="object-cover" />
            </motion.div>
          </motion.div>
        </div>
        <div className="h-60 absolute bottom-0 w-full bg-gradient-to-b from-transparent to-black"></div>
      </section>
      <section className="bg-gradient-to-b from-black from-10% to-white pb-20 relative">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.1, once: true }}
          variants={{
            offscreen: { y: 100, opacity: 0 },
            onscreen: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0.1, duration: 2, delay: 0.1 } },
          }}
          className="w-[90%] bg-white mx-auto rounded-[2rem] sm:rounded-[4rem] px-6 py-8 sm:px-10 sm:py-14 lg:px-20 xl:px-[15%] lg:py-28"
        >
          <div className="grid sm:grid-cols-2 sm:gap-10 xl:gap-40">
            <div>
              <h2 className="text-2xl mx-auto sm:mx-0 lg:text-3xl font-bold [word-spacing:2px] leading-7 lg:leading-10 w-64 sm:w-60 lg:w-[23rem] pb-2">
                Our trainers follow our 5 key pillars of fitness to get you in top condition
              </h2>
              <FitnessDescription
                icon={<GiMeditation />}
                title={"Posture"}
                description={
                  "Correcting your posture will reduce stress and strain on your body. You'll stand taller, move better, and feel less fatigue."
                }
              />
              <FitnessDescription
                icon={<GiMuscularTorso />}
                title={"Core"}
                description={
                  "Your core is part of almost every move you make. Strong core muscles act as a stabilizer, making moving safer and more efficient."
                }
              />
            </div>
            <div>
              <FitnessDescription
                icon={<TbStretching />}
                title={"Mobility"}
                description={"Good mobility allows your body to move the way it was designed to move - pain free and with a good range of motion."}
              />
              <FitnessDescription
                icon={<GiWeightLiftingUp />}
                title={"Strenght"}
                description={
                  "Strength training helps you develop strong muscles, manage weight and help you do everyday activities better and easier."
                }
              />
              <FitnessDescription
                icon={<BiRun />}
                title={"Cardio"}
                description={
                  "Improving your cardio will strengthen your stamina and endurance so you can work harder for longer and burn more calories."
                }
              />
            </div>
          </div>
        </motion.div>
        <div className="h-40 absolute bottom-0 w-full bg-gradient-to-b from-transparent  to-white"></div>
      </section>
      <section className="bg-gradient-to-b from-white from-10% to-black pb-20 sm:pb-28">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.5, once: true }}
          variants={{
            offscreen: { scale: 0.2, opacity: 0 },
            onscreen: { scale: 1, opacity: 1, transition: { type: "spring", bounce: 0.3, duration: 1, delay: 0.2 } },
          }}
          className="2xl:flex 2xl:justify-start 2xl:w-full sm:px-20"
        >
          <div className="2xl:mx-auto px-10">
            <p className="uppercase font-bold [word-spacing:3px] text-gray-600">Our Plans And Services</p>
            <div
              className="mt-12 pb-8 xl:mt-16 flex gap-14 2xl:gap-24 overflow-x-scroll 
                  2xl:scrollbar-none scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-50/20 scrollbar-thumb-rounded-full"
            >
              <div>
                <h4 className="uppercase text-xl sm:text-2xl font-bold [word-spacing:3px] mb-3">Workout Video</h4>
                <p className="text-lg [word-spacing:3px] w-64 sm:w-72 2xl:w-64 font-medium">Access to hundreds of free, full-length workout videos</p>
              </div>
              <div>
                <h4 className="uppercase text-xl sm:text-2xl font-bold [word-spacing:3px] mb-3">Workout Program</h4>
                <p className="text-lg [word-spacing:3px] w-64 sm:w-72 2xl:w-64 font-medium">Affordable and effective workout programs </p>
              </div>
              <div>
                <h4 className="uppercase text-xl sm:text-2xl font-bold [word-spacing:3px] mb-3">Meal Plans</h4>
                <p className="text-lg [word-spacing:3px] w-64 sm:w-72 2xl:w-64 font-medium">
                  Plans built with registered dietitians and nutritionists
                </p>
              </div>
              <div>
                <h4 className="uppercase text-xl sm:text-2xl font-bold [word-spacing:3px] mb-3">
                  Gym bff+ <div className="inline-block text-xs bg-red-500 text-white p-1 rounded -translate-y-1">All Access</div>
                </h4>
                <p className="text-lg [word-spacing:3px] w-64 sm:w-72 2xl:w-64 font-medium">Add powerful features to your membership</p>
              </div>
            </div>
          </div>
        </motion.div>
        <section className="mt-20 sm:mt-28">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.5, once: true }}
            variants={{
              offscreen: { y: 100, opacity: 0 },
              onscreen: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0.1, duration: 1, delay: 0.1 } },
            }}
            className="w-[90%] 2xl:w-[80%] bg-blue-600 text-white mx-auto rounded-[2rem] sm:rounded-[4rem] px-6 py-8 sm:px-14 sm:py-14 lg:px-20 xl:px-[15%] lg:py-28"
          >
            <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold [word-spacing:2px] leading-8 sm:leading-9 lg:leading-10">
              We believe fitness should be accessible to everyone, anywhere, regardless of income level or access to a gym.
            </h4>
          </motion.div>
        </section>
      </section>
      <section id="download" className="bg-black">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.5, once: true }}
          variants={{
            offscreen: { opacity: 0 },
            onscreen: { opacity: 1, transition: { type: "spring", bounce: 0.5, duration: 1, delay: 0.4 } },
          }}
          className=" flex flex-col gap-10 md:flex-row py-4 sm:py-10 2xl:py-20 relative"
        >
          <div className="text-4xl sm:text-6xl font-bold leading-10 sm:leading-[5rem] [word-spacing:10px] text-white px-10 sm:pl-16 sm:pr-9 2xl:pl-28 md:w-[70%]">
            <h1>Ready to get started?</h1>
            <h1 className="text-2xl sm:text-3xl mt-5 [word-spacing:5px]">Join us by downloading our app and choose a plan that is best for you.</h1>
          </div>
          <div className="flex md:flex-col 2xl:flex-row items-center justify-center gap-6 sm:gap-10 p-4 md:p-10">
            <Link href="/">
              <Image src={google} alt="app-img" placeholder="blur" className="w-36 sm:w-52" />
            </Link>
            <Link href="/">
              <Image src={apple} alt="app-img" placeholder="blur" className="w-36 sm:w-52" />
            </Link>
          </div>
          <div className="absolute bottom-0 bg-gray-700 h-[2px] w-[80%] left-1/2 -translate-x-1/2 rounded-full"></div>
        </motion.div>
      </section>

      <section id="subscribe" className="bg-black">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.5, once: true }}
          variants={{
            offscreen: { x: "10vw", opacity: 0 },
            onscreen: { x: 0, opacity: 1, transition: { type: "spring", bounce: 0.2, duration: 1, delay: 0.5 } },
          }}
          className="text-white py-9 px-10 sm:py-14 flex flex-col gap-8 sm:gap-10 items-center"
        >
          <h5 className="text-xl sm:text-2xl font-medium text-center leading-9 [word-spacing:3px]">
            Subscribe to stay up to date with the latest information
          </h5>
          <form>
            <div className="flex gap-3 sm:gap-5">
              <input
                type="text"
                name="email"
                autoComplete="on"
                required
                placeholder="Enter your email"
                className="rounded-md h-12 px-3 grow text-black font-medium sm:w-80"
              />
              <button className="bg-blue-600 rounded-md px-3 hover:scale-105 transition duration-100">Subscribe</button>
            </div>
          </form>
        </motion.div>
      </section>
    </main>
  );
}
