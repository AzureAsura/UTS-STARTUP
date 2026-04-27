'use client'
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

const QRIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <rect x="4" y="4" width="16" height="16" rx="2" stroke="#2EF2FF" strokeWidth="1.5" fill="none" />
    <rect x="8" y="8" width="8" height="8" rx="1" fill="#2EF2FF" opacity="0.4" />
    <rect x="28" y="4" width="16" height="16" rx="2" stroke="#2EF2FF" strokeWidth="1.5" fill="none" />
    <rect x="32" y="8" width="8" height="8" rx="1" fill="#2EF2FF" opacity="0.4" />
    <rect x="4" y="28" width="16" height="16" rx="2" stroke="#2EF2FF" strokeWidth="1.5" fill="none" />
    <rect x="8" y="32" width="8" height="8" rx="1" fill="#2EF2FF" opacity="0.4" />
    <rect x="28" y="28" width="5" height="5" rx="1" fill="#2EF2FF" opacity="0.5" />
    <rect x="36" y="28" width="5" height="5" rx="1" fill="#2EF2FF" opacity="0.5" />
    <rect x="28" y="36" width="5" height="5" rx="1" fill="#2EF2FF" opacity="0.5" />
    <rect x="36" y="36" width="5" height="5" rx="1" fill="#2EF2FF" opacity="0.5" />
  </svg>
);

const PenIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M11 2L14 5L5 14H2V11L11 2Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const UploadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 10V3M5 6L8 3L11 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 12h10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M7 1L2 3.5v3.5c0 2.9 2.2 5 5 5.7C10 12 12.2 9.9 12 7V3.5L7 1z"
      stroke="#2EF2FF" strokeWidth="1.2" fill="none" />
    <path d="M4.5 7L6.5 9L9.5 5" stroke="#2EF2FF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);


const CornerBrackets = ({ color = "#2EF2FF", size = 32 }) => (
  <>
    <svg style={{ position: "absolute", top: -1, left: -1 }} width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <path d={`M${size} 4 L4 4 L4 ${size}`} stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <svg style={{ position: "absolute", top: -1, right: -1 }} width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <path d={`M0 4 L${size - 4} 4 L${size - 4} ${size}`} stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <svg style={{ position: "absolute", bottom: -1, left: -1 }} width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <path d={`M${size} ${size - 4} L4 ${size - 4} L4 0`} stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <svg style={{ position: "absolute", bottom: -1, right: -1 }} width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <path d={`M0 ${size - 4} L${size - 4} ${size - 4} L${size - 4} 0`} stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </>
);


const Page = () => {
  const [status, setStatus] = useState("idle"); 
  const [showVINModal, setShowVINModal] = useState(false);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

const statusLabel = {
  idle: "Ready to Scan",
  initializing: "Initializing Lens...",
  scanning: "Scanning QR Code...",
  denied: "Camera Access Denied",
};

  const startCamera = async () => {
    setStatus("initializing");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment", width: { ideal: 1280 }, height: { ideal: 720 } },
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      setStatus("scanning");
    } catch {
      setStatus("denied");
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
    setStatus("idle");
  };

  useEffect(() => {
    return () => stopCamera();
  }, []);

  return (
    <div className="min-h-screen bg-s1 flex flex-col items-center justify-center pt-28 md:pt-40 pb-20 px-4 relative overflow-hidden">

      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, #2EF2FF 0%, transparent 70%)" }} />

      <div className="text-center mb-12 max-md:mb-8 relative z-10">
        <p className="caption mb-5">R-CHECK SCANNER</p>
        <h1 className="h2 text-p4 mb-4 max-md:h3">Vehicle Identity Scan</h1>
        <p className="body-1 text-p5 max-w-[480px] mx-auto max-md:body-3">
          Point the vehicle QR code into the frame to access tamper-proof blockchain history.
        </p>
      </div>

      <div className="relative z-10 w-full max-w-[560px]">

        <div className="relative border-2 border-s3 rounded-3xl g7 overflow-hidden">

          <div className="absolute top-0 left-1/4 right-1/4 h-0.5 opacity-40 z-20"
            style={{ background: "linear-gradient(to right, transparent, #2EF2FF, transparent)" }} />

          <div className="relative m-5 rounded-2xl overflow-hidden bg-s2" style={{ aspectRatio: "4/3" }}>

            <div className="absolute inset-0 z-20 pointer-events-none">
              <CornerBrackets color="#2EF2FF" size={36} />
            </div>

            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              style={{ display: status === "scanning" ? "block" : "none" }}
              playsInline
              muted
            />

            {status !== "scanning" && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">

                <div className={status === "initializing" ? "opacity-60" : "opacity-100"}>
                  <QRIcon />
                </div>

                <p className="small-2 uppercase tracking-[0.25em] text-p1 opacity-70">
                  {statusLabel[status]}
                </p>

                {status === "idle" && (
                  <button
                    onClick={startCamera}
                    className="mt-2 h-11 px-7 rounded-xl border-2 border-s4 g2 base-small text-p4"
                  >
                    Enable Camera
                  </button>
                )}

                {status === "denied" && (
                  <p className="body-3 text-p5 opacity-50 text-center max-w-[240px] mt-1">
                    Allow camera access in your browser settings.
                  </p>
                )}
              </div>
            )}

            {status === "scanning" && (
              <div className="absolute left-6 right-6 z-10 pointer-events-none"
                style={{ top: "50%", height: 1, background: "linear-gradient(to right, transparent, #2EF2FF, transparent)", opacity: 0.7 }} />
            )}
          </div>

          <div className="flex items-center justify-between px-6 py-4 border-t border-s3">
            <div className="flex items-center gap-2">
              <div className={`size-2 rounded-full ${
                status === "scanning" ? "bg-p3" : status === "denied" ? "bg-red-500" : "bg-s3"
              }`} />
              <span className="small-2 uppercase tracking-widest text-p5">
                {status === "scanning" ? "Live" : status === "denied" ? "Error" : "Standby"}
              </span>
            </div>


            {status === "scanning" && (
              <button onClick={stopCamera} className="small-2 uppercase tracking-widest text-p5 hover:text-p4 transition-colors duration-200">
                Stop
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-4">
          <Link
          href={'/details/1'}
            className="flex items-center justify-center gap-2.5 h-14 rounded-2xl border-2 border-s4 g2"
          >
            <PenIcon />
            <span className="base-bold text-p4">See result</span>
          </Link>

          <button
            onClick={() => {}}
            className="flex items-center justify-center gap-2.5 h-14 rounded-2xl border-2 border-s3 hover:border-s4 transition-colors duration-300"
          >
            <span className="text-p5"><UploadIcon /></span>
            <span className="base-bold text-p5">Upload Document</span>
          </button>
        </div>

        <p className="body-3 text-p5 opacity-40 text-center mt-6">
          Make sure the R-Check QR tag is clearly visible and not obstructed.
        </p>
      </div>


    </div>
  );
};

export default Page;