import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { formatCurrency } from "../../utils/format-currency";
import { IoMdClose } from "react-icons/io";
import IconCart from "@/assets/img/icon-cart.png";


interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const { cart, removeFromCart, incrementInCart, decrementInCart } =
    useContext(CartContext);

  return (
    <>
      {/* Overlay */}
      <div
        className={`${isOpen ? "bg-black/70 visible" : "bg-transparent invisible"} text-black fixed inset-0 z-50 transition-all duration-600 ease-in-out`}
        onClick={onClose}
      >
        {/* Drawer
            translate-x-0 - posição normal da drawer
            translate-x-full - fora da tela (para a direita)
        */}
        <div
          className={`${isOpen ? "translate-x-0" : "translate-x-full"} absolute top-0 right-0 bottom-0 bg-white pt-6 transition-all duration-500 ease-in-out w-75 md:w-100`}
          onClick={(e) => e.stopPropagation()}
        >
          <header className="flex items-center justify-between px-5">
            <div className="w-full flex justify-around items-center">
              <h3 className="font-bold text-xl">Seu Carrinho</h3>
              <div className="flex justify-center items-center gap-2">
                <img src={IconCart} alt="Ícone de Carrinho" />
                <span className="text-xl font-bold">{cart.length}</span>
              </div>
            </div>
            <button
              className="text-xl self-end cursor-pointer text-error font-bold cursor-pointer"
              onClick={onClose}
              type="button"
            >
              <IoMdClose className="cursor-pointer" />
            </button>
          </header>
          <ul className="p-4 h-[calc(100%_-_140px)] overflow-y-auto scrollbar-hide flex flex-col gap-3">
            {cart.map((product) => (
              <li key={product.id} className="flex flex-col gap-1 px-6">
                <button
                  type="button"
                  className="self-end text-xs cursor-pointer text-error"
                  onClick={() => removeFromCart(product.id)}
                >
                  <IoMdClose className="cursor-pointer" />
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
                      <button
                        type="button"
                        className="mr-2"
                        onClick={() => decrementInCart(product)}
                      >
                        -
                      </button>
                      <span>{product.quantity}</span>
                      <button
                        type="button"
                        onClick={() => incrementInCart(product)}
                      >
                        +
                      </button>
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
