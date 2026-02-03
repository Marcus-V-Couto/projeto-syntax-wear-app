import { Link } from "@tanstack/react-router";
import { MdAddShoppingCart } from "react-icons/md";
import type { Product } from "../../interfaces/product";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden shadow-lg flex flex-col">
      {/* <Link to={`/products/${product.id}`}> */}
      <Link to='/products'>
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
          <p className="font-bold">R${product.price.toFixed(2)}</p>
          <button type="button" className="cursor-pointer">
            <MdAddShoppingCart className="h-7 w-7 text-[#5433EB]" />
          </button>
        </div>
      </div>
    </div>
  );
};
