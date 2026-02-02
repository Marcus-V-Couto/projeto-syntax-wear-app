const menus = [
  {
    id: 1,
    title: "Masculino",
    items: ["Casual", "Esporte", "Moderno", "Futurista"],
  },
  {
    id: 2,
    title: "Feminino",
    items: ["Casual", "Esporte", "Moderno", "Futurista"],
  },
  {
    id: 3,
    title: "Outlet",
    items: ["Masculino", "Feminino"],
  },
  {
    id: 4,
    title: "Nossas Lojas",
    items: ["Loja Física", "Loja Virtual"],
  },
  {
    id: 5,
    title: "Sobre",
    items: ["Quem somos", "Missão"],
  },
];

export const MenuItems = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-8">
        {menus.map((menu) => (
          <nav key={menu.id}>
            <ul className="flex flex-col gap-4">
              <li>
                <p className="font-normal text-surface-alt text-xl">
                  {menu.title}
                </p>
              </li>
              {menu.items.map((item, index) => (
                <li key={index}>
                  <a
                    className="font-medium hover-text-[#CCCCCC] transition-colors text-xl"
                    href="#"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
    </div>
  );
};
