"use client";

import logo from "@/public/images/gymbff-logo-white.png";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <section className="bg-black text-white px-10 lg:px-40 2xl:px-[20%] pt-20">
      <div className="flex flex-col sm:flex-row justify-between gap-10">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.5, once: true }}
          variants={{
            offscreen: { x: "-100", opacity: 0 },
            onscreen: { x: 0, opacity: 1, transition: { type: "spring", bounce: 0.2, duration: 1, delay: 0.1 } },
          }}
        >
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="logo" className="w-14 mr-2" />
            <span className="font-bold text-xl">GymBff</span>
          </Link>
          <div className="pt-2">
            <p>Results not promises..</p>
          </div>
          <div className="flex gap-8 text-2xl mt-4">
            <Link href="/" className="my-4">
              <FaFacebookF />
            </Link>
            <Link href="/" target="_blank" rel="noopener noreferrer" className="my-4">
              <FaTwitter />
            </Link>
            <Link href="https://instagram.com/gymbff_?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" className="my-4">
              <FaInstagram />
            </Link>
            <Link href="/" target="_blank" rel="noopener noreferrer" className="my-4">
              <FaTiktok />
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.5, once: true }}
          variants={{
            offscreen: { x: "100", opacity: 0 },
            onscreen: { x: 0, opacity: 1, transition: { type: "spring", bounce: 0.2, duration: 1, delay: 0.1 } },
          }}
          className="grid grid-cols-2 gap-3 sm:gap-14"
        >
          <div>
            <p className="text-xl font-bold mb-4 uppercase">Membership</p>
            <div className="flex flex-col gap-3 text-gray-400">
              <Link href="/">Individual</Link>
              <Link href="/">Corporate</Link>
              <Link href="/">Personal Training</Link>
            </div>
          </div>
          <div>
            <p className="text-xl font-bold mb-4 uppercase">Get in touch</p>
            <div className="flex flex-col gap-3 text-gray-400">
              <Link href="/">Free trial</Link>
              <Link href="/">Contact Us</Link>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="py-10 text-center text-gray-400">
        <p className="[word-spacing:3px]">Copyright &copy; 2023 GymBff. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
