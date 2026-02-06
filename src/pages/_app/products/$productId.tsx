import { createFileRoute, Link } from "@tanstack/react-router";
import { products } from "../../../mocks/products";
import { formatCurrency } from "../../../utils/format-currency";
import { CartContext } from "../../../contexts/CartContext";
import { useContext } from "react";
import { CEPForm } from "../../../components/CEPForm";

export const Route = createFileRoute("/_app/products/$productId")({
  component: RouteComponent,
  head: ({ params }) => {
    const filteredProduct = products.find(
      (product) => product.id === Number(params.productId)
    );

    const title = filteredProduct
      ? `${filteredProduct.name} - Produtos - SyntaxWear`
      : "Produto não encontrado - Produtos - SyntaxWear";

    return { meta: [{ title }] };
  },

});

function RouteComponent() {
  const { addToCart } = useContext(CartContext);

  const { productId } = Route.useParams();

  const filteredProduct = products.find(
    (product) => product.id === Number(productId),
  );

  if (!filteredProduct)
    return (
      <section className="container pt-44 md:pt-54 lg:pt-64 pb-10 px-2 md:px-10 lg:px-20 mb-10 text-black min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="mb-4 text-center text-3xl font-bold">
          Produto Inexistente
        </h1>
        <p className="text-gray-600 text-center mb-6">
          O produto que você está procurando não existe ou foi removido.
        </p>
        <Link
          to="/products"
          className="text-accent hover:text-accent-hover underline"
        >
          Voltar para produtos
        </Link>
      </section>
    );

  const discount = 0.9;
  const originalPrice = filteredProduct?.price ?? 0;
  const discountPrice = (filteredProduct?.price ?? 0) * discount;
  const installment = 6;
  const inInstallmentsPrice = originalPrice / installment;

  return (
    <section className="container pt-44 md:pt-54 lg:pt-64 pb-10 px-2 md:px-10 lg:px-20 mb-10 text-black">
      <h2 className="flex justify-center mb-3 text-3xl text-center font-bold">
        Detalhes do Produto
      </h2>
      <div className="bg-red-400"></div>
      <nav className="text-sm mb-15 ml-5">
        <Link to="/">Home</Link> / <Link to="/products">Produtos</Link> /{" "}
        <span className="font-semibold">{filteredProduct?.name}</span>
      </nav>
      <div className="flex justify-center gap-10">
        <img
          src={filteredProduct?.image}
          alt={filteredProduct?.name}
          className="bg-white w-125 max-h-100 object-cover rounded-2xl mb-2"
        />
        <div className="text-black rounded-2xl p-4 flex flex-col max-w-lg">
          <h1 className="text-4xl font-bold mb-1">{filteredProduct?.name}</h1>
          <p className="mb-2">{filteredProduct?.color}</p>
          <div className="flex flex-col justify-between mt-2.5">
            <p className="font-bold text-sm text-[#878787] line-through mb-2">
              {formatCurrency(originalPrice)}
            </p>
            <p className="text-3xl font-bold mb-2">
              {formatCurrency(discountPrice)} no PIX
            </p>
            <p className="text-sm text-[#878787]">
              Você economiza:{" "}
              <span className="font-semibold">{100 - discount * 100}%</span>
            </p>
            <p className="mb-2">
              Ou{" "}
              <span className="text-[#38373A] font-semibold">
                {installment}X{" "}
              </span>
              de <span>{formatCurrency(inInstallmentsPrice)}</span> sem juros no
              cartão!
            </p>
            <p className="mb-2">
              <span className="font-semibold">Descrição:</span>{" "}
              {filteredProduct?.description}
            </p>
            {/* <p>
              <span className="font-semibold">Estoque:</span>{" "}
              {filteredProduct?.stock} unidades
            </p> */}
            <div className="mb-6">
              <p>Calcular o prazo de entrega</p>
              <CEPForm />
            </div>
            <button
              type="button"
              className="bg-black text-white rounded-md p-5 w-full cursor-pointer hover-bg-gray-800"
              onClick={() => addToCart(filteredProduct)}
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
