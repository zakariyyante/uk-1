// ExclusiveOfferPopup — disabled by default
// To enable: import and render in app/page.tsx

/*
"use client";
import { useState, useEffect } from "react";

export default function ExclusiveOfferPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 max-w-sm rounded-2xl p-6 shadow-2xl"
      style={{
        background: "linear-gradient(145deg, #1e1e32, #16162a)",
        border: "1px solid rgba(201,168,76,0.4)",
      }}
    >
      <button
        onClick={() => setVisible(false)}
        className="absolute top-3 right-3 text-xs"
        style={{ color: "rgba(232,232,240,0.4)" }}
        aria-label="Close offer"
      >
        ✕
      </button>
      <div className="gold-text font-black text-lg mb-1">🎰 Exclusive Offer</div>
      <p className="text-sm mb-4" style={{ color: "rgba(232,232,240,0.7)" }}>
        Claim your welcome bonus before it expires!
      </p>
      <a
        href="#casinos"
        onClick={() => setVisible(false)}
        className="btn-gold block text-center py-2.5 rounded-xl font-bold text-gray-900 text-sm uppercase tracking-wide"
      >
        View Offers →
      </a>
    </div>
  );
}
*/

export default function ExclusiveOfferPopup() {
  return null;
}
