import { HiSparkles } from "react-icons/hi";
import { BiGitBranch } from "react-icons/bi";

const Hero = () => {
  return (
    <section 
      className="relative max-w-5xl w-full"
      aria-labelledby="hero-title"
    >
      <div className="flex justify-center mb-6 sm:mb-8">
        <div className="relative group">
          <div className="absolute -inset-4 bg-linear-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-2xl group-hover:blur-3xl transition-all opacity-0 group-hover:opacity-100"></div>
          <div 
            className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-linear-to-br from-emerald-500/10 to-blue-500/10 border border-white/10 flex items-center justify-center backdrop-blur-sm transform group-hover:scale-110 transition-all duration-500"
            role="img"
            aria-label="Icono de rama Git"
          >
            <BiGitBranch className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400" aria-hidden="true" />
          </div>
        </div>
      </div>

      <header className="text-center mb-4 sm:mb-6">
        <h1 
          id="hero-title"
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-black tracking-tighter mb-3 sm:mb-4"
        >
          <span
            className="inline-block animate-bounce-letter"
            style={{ animationDelay: "0s", color: "#fff" }}
            aria-hidden="true"
          >
            v
          </span>
          <span
            className="inline-block animate-bounce-letter"
            style={{ animationDelay: "0.1s", color: "#fff" }}
            aria-hidden="true"
          >
            i
          </span>
          <span
            className="inline-block animate-bounce-letter"
            style={{ animationDelay: "0.2s", color: "#fff" }}
            aria-hidden="true"
          >
            z
          </span>
          <span
            className="inline-block animate-bounce-letter"
            style={{ animationDelay: "0.3s", color: "#fff" }}
            aria-hidden="true"
          >
            g
          </span>
          <span
            className="inline-block animate-bounce-letter"
            style={{ animationDelay: "0.4s", color: "#fff" }}
            aria-hidden="true"
          >
            i
          </span>
          <span
            className="inline-block animate-bounce-letter"
            style={{ animationDelay: "0.5s", color: "#fff" }}
            aria-hidden="true"
          >
            t
          </span>
          <span className="sr-only">vizgit</span>
        </h1>
      </header>

      <div className="text-center mb-8 sm:mb-10 px-4">
        <p className="text-lg sm:text-xl md:text-2xl text-white/70 font-light mb-2">
          Transforma tus commits en una{" "}
          <strong className="text-emerald-400 font-medium">
        experiencia visual única
          </strong>
          .
        </p>
        <p className="text-sm sm:text-base text-white/50">
          Visualiza y comparte el verdadero impacto de tu trabajo como developer.
        </p>
      </div>

      <div className="flex justify-center mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-linear-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 backdrop-blur-sm hover:border-emerald-500/40 transition-all duration-300 cursor-default">
          <HiSparkles className="w-4 h-4 text-emerald-400 animate-pulse" aria-hidden="true" />
          <span className="text-xs sm:text-sm font-medium text-white/90">
            Gratis • Sin registro • Instantáneo
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
