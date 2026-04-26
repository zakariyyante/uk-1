"use client";

export default function GamblingWarningBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 px-4 py-2.5"
      style={{
        background: "rgba(10,8,0,0.97)",
        borderTop: "2px solid rgba(201,168,76,0.5)",
        backdropFilter: "blur(8px)",
      }}
    >
      <p
        className="text-center text-xs leading-snug max-w-4xl mx-auto"
        style={{ color: "rgba(232,232,240,0.75)" }}
      >
        <span className="font-bold" style={{ color: "#f5d27a" }}>⚠️ Gambling can harm you or those close to you.</span>
        {" "}For help call the National Gambling Helpline:{" "}
        <a
          href="tel:08088020133"
          className="font-bold underline underline-offset-2"
          style={{ color: "#c9a84c" }}
        >
          0808 8020 133
        </a>
        {" "}(free, 24/7) —{" "}
        <a
          href="https://www.begambleaware.org"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold underline underline-offset-2"
          style={{ color: "#c9a84c" }}
        >
          begambleaware.org
        </a>
      </p>
    </div>
  );
}
