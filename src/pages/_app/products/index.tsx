import { createFileRoute } from "@tanstack/react-router";
import { ProductList } from "../../../components/ProductList";
import { products } from "../../../mocks/products";

export const Route = createFileRoute("/_app/products/")({
  component: RouteComponent,
  head: () => ({
    title: "Produtos - SyntaxWear",
    meta: [{ property: "og:title", content: "Produtos - SyntaxWear" }],
  }),
});

function RouteComponent() {
  return (
    <section className="container pt-44 md:pt-54 lg:pt-64 pb-10 px-2 md:px-10 lg:px-20 mb-10 text-black bg-surface">
      <h1 className="text-3xl text-center mb-3">Lista de Produtos</h1>
      <h2 className="text-2xl text-center mb-10 p-2">
        Conforto excepcional para suas aventuras do dia-a-dia
      </h2>
      <ProductList products={products} />
    </section>
  );
}
