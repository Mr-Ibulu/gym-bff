"use client";

import logo from "@/public/images/gymbff-logo-white.png";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <section className="bg-black text-white px-10 lg:px-40 2xl:px-[15%] pt-20">
      <div id="contact" className="flex flex-col sm:flex-row justify-between gap-10">
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
            <Link href="https://x.com/gymbff_?s=21" target="_blank" rel="noopener noreferrer" className="my-4">
              <FaXTwitter />
            </Link>
            <Link href="https://www.instagram.com/gymbff_?igsh=MXJ6aWxyaTVlODk4cA==" target="_blank" rel="noopener noreferrer" className="my-4">
              <FaInstagram />
            </Link>
            <Link href="https://www.tiktok.com/@gymbff_?_t=8l8VLBuZ3sT&_r=1" target="_blank" rel="noopener noreferrer" className="my-4">
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
          className="grid grid-cols-2 xl:grid-cols-3 gap-3 gap-y-10 sm:gap-14"
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
          <div>
            <p className="text-xl font-bold mb-4 uppercase">Legal</p>
            <div className="flex flex-col gap-3 text-gray-400">
              <Link href="/privacy">Privacy policy</Link>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="py-10 text-center text-gray-400">
        <p>Copyright &copy; 2023 GymBff. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
