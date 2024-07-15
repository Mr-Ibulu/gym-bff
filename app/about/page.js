"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-[100lvh] bg-black relative text-white">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={{
          offscreen: { x: -50, opacity: 0 },
          onscreen: { x: 0, opacity: 1, transition: { type: "spring", bounce: 0.2, duration: 1, delay: 0.5 } },
        }}
        className="pt-28 text-center"
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">About Us</h1>
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={{
          offscreen: { x: 50, opacity: 0 },
          onscreen: { x: 0, opacity: 1, transition: { type: "spring", bounce: 0.2, duration: 1, delay: 0.5 } },
        }}
        className="py-14 px-10 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto text-lg space-y-6 font-light"
        style={{ textWrap: "pretty" }}
      >
        <p>
          Welcome to GymBFF, your number one online fitness and wellness platform! We are passionate about helping you achieve your dream physique and
          live a vibrant life. We believe that fitness is a journey, not a destination, and we're committed to supporting you every step of the way.
        </p>
        <p>
          Our story began with a shared vision of making fitness accessible and enjoyable for everyone, regardless of their fitness level or goals.
          Our team of certified trainers, nutritionists, and wellness experts has come together to create a comprehensive platform that provides
          everything you need to succeed.
        </p>
        <p>Our app is designed to provide you with the tools, motivation, and community you need to succeed. With GymBFF, you'll get access to:</p>
        <ul className="list-disc list-outside px-4 sm:px-10 space-y-3">
          <li>
            Personalized workout plans tailored to your goals and fitness level · A vast library of exercises and pre-recorded home and gym workout
            plans to guide you through your fitness goals.
          </li>
          <li>
            Live streaming videos: Get ready to Join our expert trainers in real-time as they lead you through energizing and effective workouts,
            designed to get you moving and motivated, With our live streaming feature, you'll feel like you're right there in the studio with us. Our
            trainers will guide you through every rep, every set, and every sweat drop, providing personalized feedback and encouragement along the
            way.Whether you're a morning person or a night owl, our live streaming schedule has got you covered.
          </li>
          <li>Calories tracking to help you track your daily calories intake and help you stay at the top of your fitness goals.</li>
          <li>Progress tracking and analytics to monitor your progress.</li>
          <li>A supportive community of like-minded individuals to motivate and inspire you.</li>
          <li>Fitness Accessories, GymBFF have customized fitness accessories to keep you clean and fresh while enjoying your workouts.</li>
        </ul>
        <p>
          At GymBFF, we're dedicated to helping you unlock your full potential and live a healthier, happier life. Let's get moving and crush those
          fitness goals together!
        </p>
      </motion.div>
    </section>
  );
};

export default About;
