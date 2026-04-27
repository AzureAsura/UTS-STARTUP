'use client'
import { Element } from "react-scroll";
import { useState } from "react";
import clsx from "clsx";
import CountUp from "react-countup";
import { plans } from "../constants/index.jsx";
import Button from "../components/Button.jsx";


const Pricing = () => {
  const [annual, setAnnual] = useState(true);

  return (
    <section>
      <Element name="pricing">
        <div className="container">
          <div className="max-w-960 pricing-head_before relative mx-auto border-l border-r border-s2 bg-s1/50 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
            <h3 className="h3 md:h1 z-3 relative mx-auto mb-14  text-center text-p4 max-md:mb-11 max-sm:max-w-sm ">
              R-Check Pricing
            </h3>

            <div className="relative z-4 mx-auto flex w-[310px] rounded-3xl border-[3px] border-s4/25 bg-s1/50 p-2 backdrop-blur-[6px]">
              <button
                className={clsx("pricing-head_btn", !annual && "text-p4")}
                onClick={() => setAnnual(false)}
              >
                6 Months
              </button>
              <button
                className={clsx("pricing-head_btn", annual && "text-p4")}
                onClick={() => setAnnual(true)}
              >
                Annual
              </button>

              <div
                className={clsx(
                  "g4 rounded-14 before:h-100 pricing-head_btn_before absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden shadow-400 transition-transform duration-500",
                  annual && "translate-x-full",
                )}
              />
            </div>

            <div className="pricing-bg">
              <img src="/images/bg-outlines.svg" width={960} height={380} alt="outline" className="relative z-2" />
              <img src="/images/bg-outlines-fill.png" width={960} height={380} alt="outline" className="absolute inset-0 opacity-5 mix-blend-soft-light" />
            </div>
          </div>

          <div className="scroll-hide relative z-2 -mt-12 flex items-start max-xl:gap-5 max-xl:overflow-auto max-xl:pt-6">
            {plans.map((plan, index) => {
              const price = annual ? plan.priceAnnual : plan.priceSemi;
              const prevPrice = annual ? plan.priceSemi : plan.priceAnnual;

              return (
                <div
                  key={plan.id}
                  className="pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even relative border-2 p-7 max-xl:min-w-80 max-lg:rounded-3xl xl:w-[calc(33.33%+2px)]"
                >
                  {index === 1 && (
                    <div className="g4 absolute h-330 left-0 right-0 top-0 z-1 rounded-tl-3xl rounded-tr-3xl" />
                  )}

                  <div className={clsx("absolute left-0 right-0 z-2 flex items-center justify-center", index === 1 ? "-top-6" : "-top-6 xl:-top-11")}>
                    <img
                      src={plan.logo}
                      alt={plan.title}
                      className={clsx("object-contain drop-shadow-2xl", index === 1 ? "size-[120px]" : "size-[88px]")}
                    />
                  </div>

                  <div className={clsx("relative flex flex-col items-center", index === 1 ? "pt-24" : "pt-12")}>
                    <div className={clsx("small-2 rounded-20 relative z-2 mx-auto mb-6 border-2 px-4 py-1.5 uppercase", index === 1 ? "border-p3 text-p3" : "border-p1 text-p1")}>
                      {plan.caption}
                    </div>

                    <div className="relative z-2 flex items-center justify-center">
                      <div className={clsx("font-inter text-[52px] font-bold leading-[84px] flex items-start", index === 1 ? "text-p3" : "text-p4")}>
                        <CountUp
                          start={prevPrice}
                          end={price}
                          duration={0.4}
                          useEasing={false}
                          preserveValue
                        />
                      </div>
                      <div className="small-1 relative top-3 ml-1 uppercase">
                        / month
                      </div>
                    </div>
                  </div>

                  <div className={clsx("body-1 relative z-2 mb-10 w-full border-b-s2 pb-9 text-center text-p4", index === 1 && "border-b")}>
                    Active {annual ? "12 months" : "6 months"}
                  </div>

                  <ul className="mx-auto space-y-4 xl:px-7">
                    {[
                      "Active and scannable QR code",
                      "Data securely stored on blockchain",
                      "Update vehicle data anytime",
                      "Expiration reminders and notifications",
                    ].map((f) => (
                      <li key={f} className="relative flex items-center gap-5">
                        <img src="/images/check.png" alt="check" className="size-10 object-contain" />
                        <p className="flex-1">{f}</p>
                      </li>
                    ))}

                    {index === 1 && (
                      <li className="relative flex items-center gap-5">
                        <img src="/images/check.png" alt="check" className="size-10 object-contain" />
                        <p className="flex-1">Portable keychain for easy access anywhere</p>
                      </li>
                    )}
                  </ul>

                  <div className="mt-10 flex w-full justify-center">
                    <Button icon={plan.icon}>Choose Package</Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Pricing;