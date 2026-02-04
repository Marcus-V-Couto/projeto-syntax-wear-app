import { Link } from "@tanstack/react-router";
import { MdAddShoppingCart } from "react-icons/md";
import type { Product } from "../../interfaces/product";
import { formatCurrency } from "../../utils/format-currency";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden shadow-lg flex flex-col">
      <Link
        to="/products/$productId"
        params={{ productId: String(product.id) }}
        style={{ textDecoration: "none" }}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-h-100 object-cover rounded-md mb-2"
        />
      </Link>
      <div className="text-black rounded-2xl p-4 flex flex-col flex-1">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p>{product.color}</p>
        <div className="flex justify-between mt-2.5">
          <p className="font-bold">{formatCurrency(product.price)}</p>
          <button
            type="button"
            className="cursor-pointer"
            onClick={() => addToCart(product)}
          >
            <MdAddShoppingCart className="h-7 w-7 text-[#5433EB]" />
          </button>
        </div>
      </div>
    </div>
  );
};
