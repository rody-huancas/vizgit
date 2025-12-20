import { cn } from "@/utils/helper.utils";

interface Props {
  isOpen  : boolean;
  onClick : () => void;
}

const HamburgerMenu = ({ isOpen, onClick }: Props) => (
  <div
    className={cn(
      "hamburger-menu group h-full flex flex-col items-center justify-center cursor-pointer gap-1.5 order-2 md:order-0 text-white/90",
      isOpen && "open"
    )}
    onClick={onClick}
    role="button"
    aria-label={isOpen ? "Close menu" : "Open menu"}
    tabIndex={0}
  >
    <div
      className={cn(
        "hamburger-line w-7.5 h-0.5 bg-current transition-[transform,opacity,margin] duration-300 ease-linear origin-[50%_50%] group-hover:opacity-75",
        isOpen && "translate-y-1 rotate-45"
      )}
    />
    <div
      className={cn(
        "hamburger-line w-7.5 h-0.5 bg-current transition-[transform,opacity,margin] duration-300 ease-linear origin-[50%_50%] group-hover:opacity-75",
        isOpen && "-translate-y-1 -rotate-45"
      )}
    />
  </div>
);

export default HamburgerMenu;
