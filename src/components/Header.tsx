"use client";

import Link from "next/link";
import { gsap } from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import NavCard from "./NavCard";
import HamburgerMenu from "./HamburgerMenu";
import ButtonGradient from "./ButtonGradient";
import { cn } from "@/utils/helper.utils";
import { HeaderProps } from "@/types/nav.interface";
import { FaGithub } from "react-icons/fa";

const Header = (props: HeaderProps) => {
  const { items, className = "", ease = "power3.out" } = props;

  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);
  const [isExpanded     , setIsExpanded     ] = useState<boolean>(false);

  const navRef   = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef    = useRef<gsap.core.Timeline | null>(null);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 260;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) {
      const contentEl = navEl.querySelector(".card-nav-content") as HTMLElement;

      if (contentEl) {
        const wasVisible       = contentEl.style.visibility;
        const wasPointerEvents = contentEl.style.pointerEvents;
        const wasPosition      = contentEl.style.position;
        const wasHeight        = contentEl.style.height;

        contentEl.style.visibility    = "visible";
        contentEl.style.pointerEvents = "auto";
        contentEl.style.position      = "static";
        contentEl.style.height        = "auto";

        contentEl.offsetHeight;

        const topBar        = 60;
        const padding       = 16;
        const contentHeight = contentEl.scrollHeight;

        contentEl.style.visibility    = wasVisible;
        contentEl.style.pointerEvents = wasPointerEvents;
        contentEl.style.position      = wasPosition;
        contentEl.style.height        = wasHeight;

        return topBar + contentHeight + padding;
      }
    }
    return 260;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 60, overflow: "hidden" });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, { height: calculateHeight, duration: 0.4, ease });

    tl.to(
      cardsRef.current,
      { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 },
      "-=0.1"
    );

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, [ease, items]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;

    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback("onReverseComplete", () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div
      className={cn(
        "card-nav-container absolute left-1/2 -translate-x-1/2 w-[90%] max-w-200 z-50 top-[1.2em] md:top-[2em]",
        className
      )}
    >
      <nav
        ref={navRef}
        className={cn(
          "card-nav block h-15 p-0 rounded-xl shadow-md relative overflow-hidden will-change-[height] bg-slate-950",
          isExpanded && "open"
        )}
      >
        <div className="card-nav-top absolute inset-x-0 top-0 h-15 flex items-center justify-between p-2 sm:pl-[1.1rem] z-2">
          <HamburgerMenu isOpen={isHamburgerOpen} onClick={toggleMenu} />

          <Link href="/" className="logo-container flex items-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 order-1 md:order-0">
            <img src="/logo-vizgit-dark.webp" alt="Logo VizGit" className="logo h-10" />
          </Link>


          <ButtonGradient>
            <a
              href="https://github.com/rody-huancas/vizgit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center sm:gap-2 p-2 sm:px-5 sm:py-2"
            >
              <FaGithub />
              <span className="hidden sm:block">GitHub</span>
            </a>
          </ButtonGradient>
        </div>

        <div
          className={cn(
            "card-nav-content absolute left-0 right-0 top-15 bottom-0 p-2 flex flex-col items-stretch gap-2 justify-start z-1 md:flex-row md:items-end md:gap-3",
            isExpanded ? "visible pointer-events-auto" : "invisible pointer-events-none"
          )}
          aria-hidden={!isExpanded}
        >
          {(items || []).slice(0, 3).map((item, idx) => (
            <NavCard key={`${item.label}-${idx}`} item={item} cardRef={setCardRef(idx)} />
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Header;
