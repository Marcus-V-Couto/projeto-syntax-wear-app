import { useState } from "react";
import { Link } from "@tanstack/react-router";
import IconMenu from "@/assets/img/icon-menu.png";
import { FaRegUserCircle } from "react-icons/fa";
import type { NavLink } from "../Header/index";
import { IoMdClose } from "react-icons/io";

interface MenuMobileProps {
  navLinks: NavLink[];
}

export const MenuMobile = ({ navLinks }: MenuMobileProps) => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  return (
    <>
      <button
        className="cursor-pointer"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
        type="button"
      >
        <img src={IconMenu} alt="Ícone de Menu" />
      </button>

      <div
        className={`${menuIsOpen ? "bg-black/70 opacity-100" : "bg-black/70 opacity-0 pointer-events-none"} fixed top-0 bottom-0 left-0 w-full z-30 transition-opacity duration-500`}
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        <div
          className={`${menuIsOpen ? "translate-x-0" : "-translate-x-full"} absolute top-0 bottom-0 bg-white pt-6 transition-transform duration-500 ease-in-out z-10 w-75`}
          onClick={(e) => e.stopPropagation()}
        >
          <header className="bg-black text-white py-5 px-5">
            <nav className="flex justify-between">
              <Link to="/sign-in" className="flex items-center gap-3">
                <FaRegUserCircle className="h-6 w-6" />
                <p>Olá! Acesse sua conta aqui</p>
              </Link>
              <IoMdClose onClick={() => setMenuIsOpen(!menuIsOpen)} className="cursor-pointer" />
            </nav>
          </header>
          <ul className="p-4 h-[calc(100%_-_140px)] overflow-y-auto scrollbar-hide flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.href} onClick={() => setMenuIsOpen(!menuIsOpen)}>
                  {link.name}
                </Link>
              </li>
            ))}

            <li>
              <Link to="/our-stores" onClick={() => setMenuIsOpen(!menuIsOpen)}>Nossas Lojas</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuIsOpen(!menuIsOpen)}>Sobre</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
