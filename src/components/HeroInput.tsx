"use client";

import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import { cn } from "@/utils/helper.utils";
import { FiSearch, FiArrowRight } from "react-icons/fi";

const HeroInput = () => {
  const [username , setUsername ] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const router   = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (username.trim()) {
      router.push(`/${username.trim()}`);
    }
  };

  return (
    <div className="max-w-2xl w-full mx-auto mb-12 sm:mb-16 px-4">
      <div
        className={cn(
          "relative rounded-2xl border transition-all duration-300 overflow-hidden",
          isFocused ? "border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.08)]" : "border-white/10 hover:border-white/15"
        )}
      >
        <div className="absolute inset-0 bg-white/2 backdrop-blur-xl" />

        {isFocused && (
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-emerald-500/50 to-transparent" />
        )}

        <div className="relative flex items-center flex-col sm:flex-row gap-3 sm:gap-0 p-1">
          <div className="w-full sm:w-auto flex items-center flex-1 px-4 sm:px-5">
            <FiSearch
              className={cn(
                "w-5 h-5 mr-3 transition-colors duration-300",
                isFocused ? "text-emerald-400" : "text-white/30"
              )}
            />

            <input
              ref={inputRef}
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="rody-huancas"
              className="flex-1 bg-transparent py-4 sm:py-5 text-base sm:text-lg text-white placeholder:text-white/30 outline-none"
            />
          </div>

          <button
            onClick={handleSearch}
            disabled={!username.trim()}
            className={cn(
              "w-full sm:w-auto px-8 py-3 m-1.5 rounded-xl font-medium text-sm sm:text-base transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap",
              username.trim() ? "bg-emerald-600 hover:bg-emerald-700 text-white active:scale-[0.98]" : "bg-white/5 text-white/20 cursor-not-allowed"
            )}
          >
            <span>Buscar</span>
            <FiArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <p className="text-center text-xs sm:text-sm text-white/25 mt-4">
        Presiona{" "}
        <kbd className="px-2 py-0.5 rounded bg-white/5 border border-white/10 font-mono text-[11px] text-white/40">
          Enter ↵
        </kbd>{" "}
        para buscar
      </p>
    </div>
  );
};

export default HeroInput;
