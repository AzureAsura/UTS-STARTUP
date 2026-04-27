'use client'

import React, { useRef, useEffect, useState } from "react";

const steps = [
  {
    number: "01",
    caption: "REGISTRATION",
    title: "Vehicle is Registered",
    text: "Sellers register their vehicle on the R-Check platform. Initial data such as VIN, production year, and ownership details are recorded as the foundation of its blockchain identity.",
    tags: ["VIN Entry", "Initial Data", "Ownership Record"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="6" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M9 11h10M9 15h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="22" cy="8" r="4" fill="#C8EA80" />
        <path d="M20.5 8L21.5 9L23.5 7" stroke="#080D27" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accentColor: "#2EF2FF",
  },
  {
    number: "02",
    caption: "INSPECTION",
    title: "Certified Workshop Inspection",
    text: "Trusted R-Check partner workshops perform a comprehensive inspection covering engine performance, body condition, electrical systems, and legal documentation using standardized procedures.",
    tags: ["Engine & Body", "Legal Documents", "Standardized Checks"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="13" r="7" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M14 10v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 19l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    accentColor: "#C8EA80",
  },
  {
    number: "03",
    caption: "BLOCKCHAIN",
    title: "Data Secured on Blockchain",
    text: "All inspection results are hashed and permanently stored on a decentralized blockchain network. The data cannot be altered, deleted, or manipulated ensuring complete integrity.",
    tags: ["Immutable Records", "Decentralized", "Cryptographic Hash"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="9" y="4" width="10" height="7" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="3" y="17" width="9" height="7" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="16" y="17" width="9" height="7" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M14 11v3M14 14l-4.5 3M14 14l4.5 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    accentColor: "#2EF2FF",
  },
  {
    number: "04",
    caption: "QR TAG",
    title: "Unique QR Tag Issued",
    text: "Vehicles that pass inspection receive a physical QR tag available as a card, keychain, or sticker directly linked to the vehicle’s blockchain record. One vehicle, one identity.",
    tags: ["Unique QR", "Tamper-Resistant", "Blockchain Linked"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="6" y="6" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.5" />
        <rect x="15" y="3" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="18" y="6" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.5" />
        <rect x="3" y="15" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="6" y="18" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.5" />
        <rect x="16" y="16" width="3" height="3" rx="0.5" fill="currentColor" opacity="0.6" />
        <rect x="22" y="16" width="3" height="3" rx="0.5" fill="currentColor" opacity="0.6" />
        <rect x="16" y="22" width="3" height="3" rx="0.5" fill="currentColor" opacity="0.6" />
        <rect x="22" y="22" width="3" height="3" rx="0.5" fill="currentColor" opacity="0.6" />
      </svg>
    ),
    accentColor: "#C8EA80",
  },
  {
    number: "05",
    caption: "VERIFICATION",
    title: "Scan and Access Full History",
    text: "Buyers simply scan the QR tag using their smartphone. Within seconds, they can access complete inspection history, legal status, and ownership records in a transparent and real-time view.",
    tags: ["QR Scan", "Real-Time Data", "Full Transparency"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="8" y="3" width="12" height="22" rx="2.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="14" cy="21" r="1.2" fill="currentColor" opacity="0.5" />
        <path d="M11 8h6M11 11h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
        <path d="M13 14l1.5 1.5L17 13" stroke="#C8EA80" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accentColor: "#2EF2FF",
  },
];

const HowItWorks = () => {
  const [visibleSteps, setVisibleSteps] = useState(new Set());
  const stepRefs = useRef([]);

  useEffect(() => {
    const observers = stepRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSteps((prev) => new Set([...prev, i]));
          }
        },
        { threshold: 0.2 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  return (
    <section id="how-it-works" className="relative">
      <div className="container py-20">


        <div className="relative">

          <div className="absolute left-1/2 -translate-x-1/2 -translate-y-22 top-0 bottom-0 w-0.5 bg-s3 max-md:left-8 max-md:translate-x-0" />

          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 h-40 w-0.5 max-md:left-8 max-md:translate-x-0"
            style={{ background: "linear-gradient(to bottom, transparent, #2EF2FF40, transparent)" }}
          />

          <div className="flex flex-col gap-0">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              const isVisible = visibleSteps.has(i);

              return (
                <div
                  key={step.number}
                  ref={(el) => (stepRefs.current[i] = el)}
                  className={`relative flex items-center gap-0 max-md:flex-row max-md:pl-20 max-md:pr-0 ${
                    isEven ? "flex-row" : "flex-row-reverse"
                  }`}
                  style={{ minHeight: 180, marginBottom: i < steps.length - 1 ? 0 : 0 }}
                >
                  {/* Content card — left or right */}
                  <div
                    className={`flex-1 py-8 transition-all duration-700 ${
                      isEven ? "pr-16 max-md:pr-0" : "pl-16 max-md:pl-0"
                    } ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : isEven
                        ? "opacity-0 -translate-x-8"
                        : "opacity-0 translate-x-8"
                    } max-md:opacity-100 max-md:translate-x-0`}
                  >
                    <div
                      className={`relative border-2 border-s3 rounded-3xl g7 overflow-hidden p-7 max-md:p-5 ${
                        isEven ? "ml-auto max-w-[440px] max-md:ml-0 max-md:max-w-full" : "mr-auto max-w-[440px] max-md:ml-0 max-md:max-w-full"
                      }`}
                    >
                      <div
                        className="absolute top-0 left-1/4 right-1/4 h-0.5 opacity-30"
                        style={{ background: `linear-gradient(to right, transparent, ${step.accentColor}, transparent)` }}
                      />

                      <div className="flex items-start justify-between mb-5">
                        <div
                          className="flex items-center justify-center size-12 rounded-2xl border border-s3"
                          style={{ color: step.accentColor, background: `${step.accentColor}10` }}
                        >
                          {step.icon}
                        </div>
                        <span
                          className="h-num text-[40px] leading-none font-bold opacity-10 select-none"
                          style={{ color: step.accentColor }}
                        >
                          {step.number}
                        </span>
                      </div>

                      <p className="caption mb-2">{step.caption}</p>
                      <h3 className="h6 text-p4 mb-3">{step.title}</h3>
                      <p className="body-3 text-p5 mb-5 leading-relaxed">{step.text}</p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 -translate-x-1/2 z-10 flex flex-col items-center max-md:left-1 max-md:translate-x-0">
                    <div
                      className="size-14 rounded-full border-2 flex items-center justify-center"
                      style={{
                        borderColor: isVisible ? step.accentColor : "#334679",
                        background: "#080D27",
                        boxShadow: isVisible ? `0 0 20px ${step.accentColor}30` : "none",
                        transition: "border-color 0.5s, box-shadow 0.5s",
                      }}
                    >
                      <div
                        className="size-4 rounded-full transition-all duration-500"
                        style={{ background: isVisible ? step.accentColor : "#334679" }}
                      />
                    </div>
                  </div>

                  <div className="flex-1 max-md:hidden" />
                </div>
              );
            })}
          </div>

          <div className="relative flex justify-center mt-8 max-md:justify-start max-md:pl-8">
            <div className="flex flex-col items-center gap-4">
              <div
                className="size-16 rounded-full border-2 border-p1 flex items-center justify-center"
                style={{ background: "#080D27", boxShadow: "0 0 32px #2EF2FF20" }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L3 7v5c0 5.25 3.75 9 9 10.35C18.25 21 22 17.25 22 12V7L12 2z"
                    stroke="#2EF2FF" strokeWidth="1.5" fill="none" />
                  <path d="M8 12L11 15L16 9" stroke="#2EF2FF" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="text-center max-md:text-left">
                <p className="base-bold text-p4 mb-1">Kendaraan Terverifikasi</p>
                <p className="body-3 text-p5 opacity-60">Siap diperjualbelikan dengan kepercayaan penuh.</p>
              </div>
            </div>
          </div>

        </div>


      </div>
    </section>
  );
};

export default HowItWorks;