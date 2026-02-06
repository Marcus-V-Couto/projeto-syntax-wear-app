import { createFileRoute, Link } from '@tanstack/react-router'
import { ProductList } from '../../../../components/ProductList'
import { products } from "../../../../mocks/products";

export const Route = createFileRoute('/_app/products/category/$category')({
  component: RouteComponent,
  head: () => ({
    title: "Produtos - SyntaxWear",
    meta: [{ title: "Produtos - SyntaxWear"}],
  }),
})

function RouteComponent() {

  const { category } = Route.useParams();

  const filteredProducts = products.filter(product => (product.category?.name ?? "").toLowerCase() === category.toLowerCase());



  return (
      <section className="container pt-44 md:pt-54 lg:pt-64 pb-10 px-2 md:px-10 lg:px-20 mb-10 text-black bg-surface min-h-[80vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl text-center mb-3">Lista de Produtos</h1>
        <h2 className="text-2xl text-center mb-10 p-2">
          Conforto excepcional para suas aventuras do dia-a-dia
        </h2>
        {
        filteredProducts.length === 0 ? (
          <>
            <p className="text-center">Nenhum produto encontrado para esta categoria.</p>
            <Link to="/products" className="text-accent hover:text-accent-hover underline">Voltar para produtos</Link>
          </>
        ) : (
          <ProductList products={filteredProducts} />
        )
      }

      </section>
    );
}
