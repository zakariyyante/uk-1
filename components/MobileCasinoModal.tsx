"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CasinoCard from "./CasinoCard";
import { mobileCasinos } from "@/data/casinos";

function ModalContent() {
  const searchParams = useSearchParams();
  const gclid = searchParams.get("gclid");

  if (!gclid) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      style={{ background: "rgba(6,6,16,0.98)" }}
    >
      <Header />

      <main className="max-w-3xl mx-auto px-4 py-10">
        <div className="text-center mb-8">
          <div className="badge-pill mx-auto mb-4" style={{ display: "inline-flex" }}>
            <span>📱</span>
            <span>Mobile Casino Offers</span>
          </div>
          <h1 className="text-3xl font-black text-white mb-2">
            Top <span className="gold-text">Mobile Casinos</span>
          </h1>
          <p className="text-sm" style={{ color: "rgba(232,232,240,0.5)" }}>
            Exclusive offers for mobile players — UKGC licensed
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {mobileCasinos.map((casino) => {
            const urlWithParams = `${casino.url}${casino.url.includes("?") ? "&" : "?"}s=4&utm_medium=${gclid}`;
            return (
              <CasinoCard
                key={casino.id}
                casino={{ ...casino, url: urlWithParams }}
                isOnline={false}
              />
            );
          })}
        </div>

        <p className="text-center text-xs mt-8" style={{ color: "rgba(232,232,240,0.3)" }}>
          New customers only. 18+. T&amp;Cs apply. Please gamble responsibly. BeGambleAware.org
        </p>
      </main>

      <Footer />
    </div>
  );
}

export default function MobileCasinoModal() {
  return (
    <Suspense fallback={null}>
      <ModalContent />
    </Suspense>
  );
}
