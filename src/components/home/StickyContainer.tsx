"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../Layout";
import { useInView } from "framer-motion";

const StickyContainer = ({ className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -30% 0px", once: true });
  return (
    <Layout className={`relative pr-0 lg:mr-0 ${className}`}>
      {isInView ? (
        <div
          className="md:col-span-5 md:col-start-2 md:sticky h-fit top-1/4 flex flex-col md:mt-32
        max-md:col-span-10 max-md:col-start-2"
        >
          <div className="flex items-center">
            <span className="text-red-500 font-bold text-xl focus-in-size">
              ・
            </span>
            <span className="text-sm opacity-0 animate-[focus-in-expand_0.6s_0.3s_ease_forwards]">
              私たちの想い
            </span>
          </div>
          <h1 className="text-h3 mt-[1em] opacity-0 animate-[focus-in-expand_1.5s_0.6s_ease_forwards]">
            すべては美味しい
            <br />
            珈琲のために。
          </h1>
          <div className="opacity-0 animate-[fade-in-up_1.5s_0.9s_ease_forwards] md:text-body/loose ">
            <p className="mt-[1em]">
              昭和25年創業、西日本屈指の焙煎工場を有し、
              <br />
              培ってきた焙煎とブレンドの技術を駆使し、
              <br />
              珈琲事業に関するあらゆる可能性を広げます。
            </p>
            <p className="mt-[1em]">
              私たちは人のつながりと、コーヒーの持つ無限の可能性を信じ、
              <br />
              皆様の豊かな生活のために挑戦し続けます。
            </p>
          </div>
        </div>
      ) : (
        <div ref={ref} className="col-span-6" />
      )}
      <div className="col-span-6 max-md:col-span-11 max-md:col-start-2 max-md:mt-10 aspect-[5/9] relative flex flex-col">
        <Link
          className="relative w-full aspect-square rounded-tl-[20%] overflow-hidden"
          href={"/"}
        >
          <Image
            src={"/coffeePics/quality.jpg"}
            alt={"Quality Picture"}
            fill
            // sizes="100vh"
            className="object-cover object-center h-full"
          />
        </Link>
        <Link
          className="absolute w-full aspect-square rounded-tl-[20%] overflow-hidden top-0 translate-y-[80%]"
          href={"/"}
        >
          <Image
            src={"/coffeePics/roasting.jpg"}
            alt={"Quality Picture"}
            fill
            // sizes="100vh"
            className="object-cover object-center h-full"
          />
        </Link>
      </div>
    </Layout>
  );
};

export default StickyContainer;
