'use client'

import { Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";
import Link from "next/link.js";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32" id="Hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
              Vehicle Verification Platform
            </div>
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Know the Car Before You Buy It
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              R Check reveals the real condition, history, and legality 
  of any vehicle through a simple QR scan.
            </p>

            <Link href={'/scan'}>
              <Button icon="/images/zap.svg">Try it now</Button>
            
            </Link>
          </div>

          <div className="absolute -top-32 left-[calc(50%-130px)] w-[1230px] pointer-events-none hero-img_res hidden md:block">
            <img
              src="/images/hero.png"
              className="size-1230 max-lg:h-auto "
              alt="hero"
            />
          </div>
        </div>
    </section>
  );
};

export default Hero;
