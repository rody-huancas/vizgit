import { CardNavItem } from "@/types/nav.interface";
import { GoArrowUpRight } from "react-icons/go";

interface NavCardProps {
  item   : CardNavItem;
  cardRef: (el: HTMLDivElement | null) => void;
}

const NavCard: React.FC<NavCardProps> = ({ item, cardRef }) => (
  <article
    className="nav-card select-none relative flex flex-col gap-2 p-[12px_16px] rounded-[calc(0.75rem-0.2rem)] min-w-0 flex-[1_1_auto] h-auto min-h-15 md:h-full md:min-h-0 md:flex-[1_1_0%]"
    ref={cardRef}
    style={{ backgroundColor: item.bgColor, color: item.textColor }}
    role="region"
    aria-label={item.label}
  >
    <h2 className="nav-card-label font-normal tracking-[-0.5px] text-[18px] md:text-[22px]">
      {item.label}
    </h2>
    <nav 
      className="nav-card-links mt-auto flex flex-col gap-0.5"
      aria-label={`${item.label} navigation`}
    >
      {item.links?.map((lnk, i) => (
        <a
          key={`${lnk.label}-${i}`}
          className="nav-card-link inline-flex items-center gap-1.5 no-underline cursor-pointer transition-opacity duration-300 hover:opacity-75 text-[15px] md:text-[16px]"
          href={lnk.href}
          aria-label={lnk.ariaLabel || lnk.label}
          target={lnk.isExternal ? "_blank" : "_self"}
          rel={lnk.isExternal ? "noopener noreferrer" : undefined}
          title={lnk.label}
        >
          <GoArrowUpRight
            className="nav-card-link-icon shrink-0"
            aria-hidden="true"
          />
          <span>{lnk.label}</span>
        </a>
      ))}
    </nav>
  </article>
);

export default NavCard;
