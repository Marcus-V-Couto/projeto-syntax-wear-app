import { useState } from "react";
import IconCart from "@/assets/img/icon-cart.png";

import MensTreeDasher from "@/assets/img/tree-dasher-2-natural-black-boyal-blue.webp";
import MensTreeRunnerNz from "@/assets/img/tree-runner-nz-weathered-brown.webp";
import MensWoolCruiser from "@/assets/img/wool-cruiser-burgundy.webp";
import MensWoolCruiserSlipOn from "@/assets/img/wool-cruiser-slip-on-dark-grey.webp";
import MensWoolCruiserWaterproof from "@/assets/img/wool-cruiser-waterproof-natural-black.webp";
// import MensWoolRunnerNzWaterproof from "@/assets/img/wool-runner-nz-waterproof-medium-grey.webp";
// import MensWoolRunnerNzMidWaterproof from "@/assets/img/wool-runner-nz-mid-waterproof-natural-black.webp";
// import MensStriderExplore from "@/assets/img/strider-explore-rustic-green.webp";
// import MensCruiserMidExplore from "@/assets/img/cruiser-mid-explore-rustic-green.webp";
// import MensCruiser from "@/assets/img/cruiser_blizzard_blizzard.webp";
import { formatCurrency } from "../../utils/format-currency";
import { IoMdClose } from "react-icons/io";

const productsInCart = [
  { id: 1, name: "Produto 1", image: MensTreeDasher, price: 35, quantity: 5 },
  { id: 2, name: "Produto 2", image: MensTreeRunnerNz, price: 75, quantity: 2 },
  { id: 3, name: "Produto 3", image: MensWoolCruiser, price: 85, quantity: 4 },
  {
    id: 4,
    name: "Produto 4",
    image: MensWoolCruiserSlipOn,
    price: 135,
    quantity: 6,
  },
  {
    id: 5,
    name: "Produto 5",
    image: MensWoolCruiserWaterproof,
    price: 15,
    quantity: 2,
  },
];

export const ShoppingCart = () => {
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);
  
  return (
    <>
      <button
        className="relative cursor-pointer"
        onClick={() => setCartIsOpen(!cartIsOpen)}
        type="button"
      >
        <img src={IconCart} alt="Ícone de Carrinho" />
      </button>

      <div
        className={`${cartIsOpen ? "bg-black/70 opacity-100" : "bg-black/70 opacity-0 pointer-events-none"} fixed top-0 bottom-0 left-0 w-full z-10 transition-opacity duration-500`}
        onClick={() => setCartIsOpen(!cartIsOpen)}
      >
        <div
          className={`${cartIsOpen ? "translate-x-0" : "translate-x-full"} absolute top-0 right-0 bottom-0 bg-white pt-6 transition-transform duration-500 ease-in-out z-10 w-75 md:w-96 lg:w-106`}
          onClick={(e) => e.stopPropagation()}
        >
          <header className="flex items-center justify-between px-5">
            <div className="w-full flex justify-around items-center">
              <h3 className="font-bold text-xl">Seu Carrinho</h3>
              <div className="flex justify-center items-center gap-2">
                <img src={IconCart} alt="Ícone de Carrinho" />
                <span className="text-xl font-bold">
                  {productsInCart.length}
                </span>
              </div>
            </div>
            <button
              className="text-xl self-end cursor-pointer text-red-500 font-bold cursor-pointer"
              onClick={() => setCartIsOpen(!cartIsOpen)}
              type="button"
            >
              <IoMdClose onClick={() => setCartIsOpen(!cartIsOpen)} className="cursor-pointer" />
            </button>
          </header>
          <ul className="p-4 h-[calc(100%_-_140px)] overflow-y-auto scrollbar-hide flex flex-col gap-3">
            {productsInCart.map((product) => (
              <li key={product.id} className="flex flex-col gap-1 px-6">
                <button
                  type="button"
                  className="self-end text-xs cursor-pointer text-red-500"
                >
                  <IoMdClose onClick={() => setCartIsOpen(!cartIsOpen)} className="cursor-pointer" />
                </button>
                <div className="flex items-center gap-4 p-5 border-b border-gray-200">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover"
                  />
                  <div className="flex flex-col items-start">
                    <h4 className="font-bold text-sm mb-1">{product.name}</h4>
                    <p className="mb-1">
                      <span className="font-bold mr-1.5">
                        {formatCurrency(product.price)}
                      </span>{" "}
                      à vista
                    </p>
                    <p className="mb-1">Qtde: {product.quantity}</p>
                    <div className="border flex gap-6 py-1 px-3">
                      <button type="button" className="mr-2">
                        -
                      </button>
                      <span>{product.quantity}</span>
                      <button type="button">+</button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <footer className="absolute bottom-0 w-full h-25 p-4">
            <button
              className="w-full h-full bg-black text-white rounded-xs cursor-pointer hover-bg-gray-800"
              type="button"
            >
              Fechar Pedido
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};
