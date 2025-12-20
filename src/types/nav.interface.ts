export type CardNavLink = {
  label      : string;
  href       : string;
  ariaLabel  : string;
  isExternal?: boolean;
};

export type CardNavItem = {
  label    : string;
  bgColor  : string;
  textColor: string;
  links    : CardNavLink[];
};

export interface HeaderProps {
  items           : CardNavItem[];
  className      ?: string;
  ease           ?: string;
}
