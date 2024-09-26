import { FloatingDoc } from "./floating-doc";
import {
  IconArrowBack,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBriefcase,
  IconFileText,


} from "@tabler/icons-react";



export function Floating() {
    const links = [
      {
        title: "Back",
        icon: (
          <IconArrowBack className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
      },
      {
        title: "Works",
        icon: (
          <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
      },

      {
        title: "Resume",
        icon: (
          <IconFileText className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
      },
      {
        title: "Instagram",
        icon: (
          <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
      },
      {
        title: "Facebook",
        icon: (
          <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://ui.aceternity.com/components/floating-dock",
      },
    ];

    return (
      <div className="flex items-center justify-center h-screen overflow-hidden cursor-pointer">
      <FloatingDoc items={links} mobileClassName="translate-y-20 " />
  </div>
  
    )
}