import {
  AlignJustify,
  Cable,
  ChevronLeft,
  Copyright,
  Github,
  Loader2,
  Image,
  Search,
  Send,
  Moon,
  SunMedium,
  AlertTriangle,
  X,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  chevronLeft: ChevronLeft,
  menuOpen: AlignJustify,
  menuClose: X,
  copyright: Copyright,
  moon: Moon,
  placeholder: Image,
  search: Search,
  send: Send,
  spinner: Loader2,
  sun: SunMedium,
  github: Github,
  logo: Cable,
  warning: AlertTriangle,
  facebook: ({ ...props }: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
      <path
        fill="currentColor"
        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
      />
    </svg>
  ),
};
