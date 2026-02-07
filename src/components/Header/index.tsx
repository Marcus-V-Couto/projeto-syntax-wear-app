import { Link } from "@tanstack/react-router";
import Logo from "@/assets/img/logo.png";
import IconUser from "@/assets/img/icon-user.png";
import IconAbout from "@/assets/img/icon-about.png";
import { CartButton } from "../CartButton";
import { CartDrawer } from "../CartDrawer";
import { MenuMobile } from "../MenuMobile";
import { useState } from "react";

export interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  {
    name: "Masculino",
    href: "/products/category/masculino",
  },
  {
    name: "Feminino",
    href: "/products/category/feminino",
  },
  {
    name: "Outlet",
    href: "/products/category/outlet",
  },
];

export const Header = () => {

  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);


  return (
    <div className="relative">
      <header className="fixed top-5 left-0 right-0 z-10 mx-10">
        <div className="bg-white text-black max-w-330 mx-auto flex justify-between items-center py-3 px-7 rounded-2xl mt-5">
          <Link to="/">
            <img src={Logo} alt="Logo SyntaxWear" className="w-32 md:w-36" />
          </Link>
          <nav className="hidden lg:block">
            <ul className="flex gap-4 md:gap-10">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="flex items-center">
            <ul className="flex gap-4 md:gap-10 items-center">
              <li className="hidden lg:block">
                <Link to="/our-stores">Nossas Lojas</Link>
              </li>
              <li className="hidden lg:block">
                <Link to="/about">Sobre</Link>
              </li>
              <li className="lg:hidden flex items-center">
                <MenuMobile navLinks={navLinks} />
              </li>
              <li className="hidden lg:flex items-center">
                <Link to="/sign-up" className="flex items-center">
                  <img
                    src={IconUser}
                    alt="Ícone de Usuário"
                    className="w-6 h-6"
                  />
                </Link>
              </li>
              <li className="hidden lg:flex items-center">
                <Link to="/about" className="flex items-center">
                  <img
                    src={IconAbout}
                    alt="Ícone de Sobre"
                    className="w-6 h-6"
                  />
                </Link>
              </li>
              <li className="flex items-center">
                <CartButton onClick={() => setCartIsOpen(true)}/>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <CartDrawer isOpen={cartIsOpen} onClose={() => setCartIsOpen(false)}/>
    </div>
  );
};
