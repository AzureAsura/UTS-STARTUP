'use client'

import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import React, { useState } from "react";

const vehicle = {
  badge: "R-CHECK VERIFIED PASS",
  title: "2021 Honda Civic",
  vin: "1HGCV1F12MAXXXXXX",
  reportId: "8829-BK-021",
  image: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1jbGFyZW58ZW58MHx8MHx8fDA%3D",
  tags: ["Premium Trim", "Low Mileage"],
  specs: [
    { label: "Engine", value: "2.0L I4 DOHC" },
    { label: "Odometer", value: "18,432 MI" },
    { label: "Exterior", value: "Lunar Silver" },
    { label: "Tahun", value: "2021" },
  ],
  audit: [
    { label: "Structural Integrity", pass: true },
    { label: "Airbag Deployment", pass: true },
    { label: "Flood Damage", pass: true },
    { label: "Odometer Rollback", pass: true },
  ],
  timeline: [
    {
      date: "MAR 14, 2024",
      title: "Emissions Inspection",
      desc: "Certified by State Authority. Passed all diagnostic benchmarks.",
    },
    {
      date: "NOV 22, 2023",
      title: "Routine Service (20k)",
      desc: "Full synthetic oil change, brake fluid flush, and multipoint inspection.",
    },
    {
      date: "MAY 08, 2022",
      title: "Ownership Transfer",
      desc: "Title verified and recorded on blockchain ledger at 8,200 miles.",
    },
    {
      date: "JAN 10, 2021",
      title: "Vehicle Birth Record",
      desc: "Manufacturing completion recorded at Honda Manufacturing Plant.",
    },
  ],
  hash: "0x742d35Cc66340C0532925a3b844Bc454e4438f44e2b8f8...9f01",
  nodes: 5,
};

// ─── Icons ───────────────────────────────────────────────────────────────────
const CheckCircle = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="9.25" stroke="#2EF2FF" strokeWidth="1.5" />
    <path d="M6.5 10L9 12.5L13.5 7.5" stroke="#2EF2FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 1.5L2 4v4c0 3.3 2.5 5.8 6 6.5C12 14 14.5 11.3 14 8V4L8 1.5z" stroke="#2EF2FF" strokeWidth="1.2" fill="none" />
    <path d="M5.5 8L7 9.5L10.5 6" stroke="#2EF2FF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LinkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M6.5 9.5a3.5 3.5 0 0 0 5 0l2-2a3.5 3.5 0 0 0-5-5L7.5 3.5" stroke="#2EF2FF" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M9.5 6.5a3.5 3.5 0 0 0-5 0l-2 2a3.5 3.5 0 0 0 5 5l1-1" stroke="#2EF2FF" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 2v8M5 7l3 3 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 12h10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

const PinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="6.25" stroke="#2EF2FF" strokeWidth="1.2" />
    <circle cx="7" cy="7" r="2.5" fill="#2EF2FF" opacity="0.6" />
  </svg>
);

// ─── Page ─────────────────────────────────────────────────────────────────────
const Page = () => {
  const [activeTab, setActiveTab] = useState("timeline");

  return (
    <>
    {/* <Header/> */}
    
    <div className="min-h-screen bg-s1 pt-28 md:pt-40 pb-20">
      <div className="container max-w-[960px]">


        {/* ── Title ── */}
        <div className="text-center mb-12 max-md:mb-8">
          <h1 className="h2 text-p4 mb-3 max-md:h3">{vehicle.title}</h1>
          <p className="base text-p5 opacity-60 font-mono tracking-wider">
            VIN: {vehicle.vin} &nbsp;•&nbsp; REPORT ID: {vehicle.reportId}
          </p>
        </div>

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-[1fr_380px] gap-5 max-lg:grid-cols-1">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col gap-5">

            {/* Car photo card */}
            <div className="relative border-2 border-s3 rounded-3xl g7 overflow-hidden">
              {/* Glow line top */}
              <div className="absolute top-0 left-1/4 right-1/4 h-0.5 opacity-40"
                style={{ background: "linear-gradient(to right, transparent, #2EF2FF, transparent)" }} />

              <div className="relative" style={{ aspectRatio: "16/9" }}>
                <img
                  src={vehicle.image}
                  alt={vehicle.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay bottom */}
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, #0C1838 0%, transparent 50%)" }} />

                {/* Tags on photo */}
                <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
                  {vehicle.tags.map((tag) => (
                    <span key={tag}
                      className="small-2 uppercase tracking-wider px-3 py-1 rounded-full bg-s1/80 text-p3 border border-p3/30 backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Specs row */}
              <div className="grid grid-cols-4 divide-x divide-s3 border-t border-s3 max-sm:grid-cols-2 max-sm:divide-y max-sm:divide-x-0">
                {vehicle.specs.map((spec) => (
                  <div key={spec.label} className="px-5 py-4 max-sm:border-s3 max-sm:even:border-l max-sm:even:border-s3">
                    <p className="small-2 uppercase tracking-widest text-p5 opacity-50 mb-1">{spec.label}</p>
                    <p className="base-bold text-p4">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Audit card */}
            <div className="border-2 border-s3 rounded-3xl g7 overflow-hidden">
              <div className="px-7 py-5 border-b border-s3">
                <p className="base-bold text-p4">Technical Audit</p>
              </div>
              <div className="grid grid-cols-2 divide-x divide-y divide-s3 max-sm:grid-cols-1 max-sm:divide-x-0">
                {vehicle.audit.map((item) => (
                  <div key={item.label} className="flex items-center justify-between px-6 py-4">
                    <span className="base text-p5">{item.label}</span>
                    <CheckCircle size={22} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="flex flex-col gap-5">

            {/* Timeline / tabs card */}
            <div className="border-2 border-s3 rounded-3xl g7 overflow-hidden flex-1">

              {/* Tab header */}
              <div className="flex border-b border-s3">
                {["timeline"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative flex-1 py-4 base-small uppercase tracking-widest transition-colors duration-300 ${
                      activeTab === tab ? "text-p4" : "text-p5 opacity-50 hover:opacity-80"
                    }`}
                  >
                    {tab === "timeline" ? "Verification Timeline" : "Dokumen"}
                    {activeTab === tab && (
                      <div className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full"
                        style={{ background: "linear-gradient(to right, transparent, #2EF2FF, transparent)" }} />
                    )}
                  </button>
                ))}
              </div>

              {/* Timeline content */}
              {activeTab === "timeline" && (
                <div className="px-6 py-5">
                  <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-[9px] top-3 bottom-3 w-0.5 bg-s3" />

                    <div className="flex flex-col gap-6">
                      {vehicle.timeline.map((item, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="flex-shrink-0 mt-0.5 relative z-10">
                            <CheckCircle size={20} />
                          </div>
                          <div>
                            <p className="small-2 uppercase tracking-widest text-p1 mb-1">{item.date}</p>
                            <p className="base-bold text-p4 mb-1">{item.title}</p>
                            <p className="body-3 text-p5 opacity-60 leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Dokumen tab placeholder */}
              {activeTab === "dokumen" && (
                <div className="px-6 py-10 text-center">
                  <p className="body-3 text-p5 opacity-40">Dokumen STNK, BPKB & KIR tersedia setelah verifikasi identitas.</p>
                </div>
              )}

              {/* Identity Confirmed strip */}
              <div className="border-t border-s3 px-6 py-4 flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <PinIcon />
                </div>
                <div>
                  <p className="base-bold text-p4 mb-0.5">Identity Confirmed</p>
                  <p className="body-3 text-p5 opacity-60 text-sm">
                    All entries have been validated via multi-party cryptographic consensus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Blockchain Proof ── */}
        <div className="mt-5 border-2 border-s3 rounded-3xl g7 overflow-hidden">
          <div className="absolute top-0 left-1/3 right-1/3 h-0.5 opacity-20"
            style={{ background: "linear-gradient(to right, transparent, #2EF2FF, transparent)" }} />

          <div className="flex items-center justify-between px-8 py-6 max-md:flex-col max-md:gap-6 max-md:items-start">
            <div className="flex items-start gap-4 min-w-0">
              <div className="flex-shrink-0 mt-0.5">
                <LinkIcon />
              </div>
              <div className="min-w-0">
                <p className="base-bold text-p4 mb-2">Blockchain Proof of Authenticity</p>
                <div className="flex items-center gap-3">
                  <span className="small-2 uppercase tracking-widest text-p5 opacity-50">HASH:</span>
                  <span className="base text-p1 font-mono text-sm truncate max-w-xs">{vehicle.hash}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3 flex-shrink-0">
              <button className="flex items-center gap-2 h-11 px-6 rounded-xl border-2 border-s4 g2">
                <LinkIcon />
                <span className="base-small text-p4">View on Ledger</span>
              </button>
              <button className="flex items-center gap-2 h-11 px-6 rounded-xl border-2 border-s3 hover:border-s4 transition-colors duration-300">
                <DownloadIcon />
                <span className="base-small text-p5">PDF Report</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>

    {/* <Footer/> */}
    </>
  );
};

export default Page;