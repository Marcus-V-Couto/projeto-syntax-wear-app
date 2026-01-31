import tenisBranco from "@/assets/img/tenis-branco.jpg";
import tenisCinza from "@/assets/img/tenis-cinza.jpg";
import tenisColorido from "@/assets/img/tenis-colorido.jpg";
import tenisFuturista from "@/assets/img/tenis-futurista.jpg";
import { Button } from "../Button";

const categories = [
  {
    id: 1,
    name: "Casual",
    image: tenisBranco,
  },
  {
    id: 2,
    name: "Esporte",
    image: tenisCinza,
  },
  {
    id: 3,
    name: "Moderno",
    image: tenisColorido,
  },
  {
    id: 4,
    name: "Futurista",
    image: tenisFuturista,
  },
];

export const Categories = () => {
  return (
    <section className="container flex gap-2.5 lg:grid lg:grid-cols-4 lg:gap-6 mb-10 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
      {categories.map((category, index) => (
        <div
          key={index}
          style={{ backgroundImage: `url(${category.image})` }}
          className="h-125 bg-cover bg-center rounded-[20px] relative flex justify-center items-center shrink-0 w-95% md:w-1/2 lg:w-full snap-start"
        >
          <div className="absolute inset-0 bg-black/30 rounded-[20px]"></div>
          <div className="relative">
            <Button variant="secondary">{category.name}</Button>
          </div>
        </div>
      ))}
    </section>
  );
};
