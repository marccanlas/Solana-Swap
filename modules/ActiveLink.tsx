import { useRouter, usePathname } from "next/navigation";
import { ActiveLinkProp } from "@/types/link";

const ActiveLink = ({ children, href }: ActiveLinkProp) => {
  const router = useRouter();
  const activePage = usePathname();

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${activePage === href ? " border-b-2 border-white text-white " : " "} text-[#A6A0BB] hover:text-white font-Poppins font-medium text-base py-2 transition ease-in-out duration-300`}
    >
      {children}
    </a>
  );
};

export default ActiveLink;