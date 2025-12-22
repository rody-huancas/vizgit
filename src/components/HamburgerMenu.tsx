import { cn } from "@/utils/helper.utils";

interface Props {
  isOpen : boolean;
  onClick: () => void;
}

const HamburgerMenu = ({ isOpen, onClick }: Props) => (
  <button
    type="button"
    className={cn(
      "hamburger-menu group h-full flex flex-col items-center justify-center cursor-pointer gap-1.5 order-2 md:order-0 text-white/90",
      isOpen && "open"
    )}
    onClick={onClick}
    aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
    aria-expanded={isOpen}
    aria-controls="navigation-menu"
  >
    <span
      className={cn(
        "hamburger-line w-7.5 h-0.5 bg-current transition-[transform,opacity,margin] duration-300 ease-linear origin-[50%_50%] group-hover:opacity-75",
        isOpen && "translate-y-1 rotate-45"
      )}
      aria-hidden="true"
    />
    <span
      className={cn(
        "hamburger-line w-7.5 h-0.5 bg-current transition-[transform,opacity,margin] duration-300 ease-linear origin-[50%_50%] group-hover:opacity-75",
        isOpen && "-translate-y-1 -rotate-45"
      )}
      aria-hidden="true"
    />
  </button>
);

export default HamburgerMenu;
