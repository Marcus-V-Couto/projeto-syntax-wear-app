/**
 * Componente Gallery
 *
 * Exibe uma galeria de produtos em layout grid responsivo com imagens de tênis e modelos.
 * O layout se adapta automaticamente entre dispositivos móveis e desktop:
 *
 * Mobile:
 * - 2 colunas
 * - Itens empilhados verticalmente em ordem específica
 *
 * Desktop:
 * - 4 colunas com 3 linhas
 * - Layout complexo com grid-template-areas customizado
 *
 * As imagens são organizadas em áreas nomeadas para melhor controle de layout,
 * utilizando CSS Module integrado com Tailwind para responsividade mobile-first.
 */

import styles from "./Gallery.module.css";

// Importar imagens da galeria
import galeriaHomem from "../../assets/img/galeria-homem.jpg";
import galeriaModeloFeminina from "../../assets/img/galeria-modelo.jpg";
import galeriaTenisRoxo from "../../assets/img/galeria-tenis-roxo.jpg";
import galeriaTenisColorido from "../../assets/img/galeria-tenis-colorido.jpg";
import galeriaTenisAmarelo from "../../assets/img/galeria-tenis-branco-e-preto.jpg";
import galeriaTenisCinza from "../../assets/img/galeria-tenis-cinza.jpg";

import { Button } from "../Button";
import { useRouter } from "@tanstack/react-router";

// Interface para tipagem dos itens da galeria
interface GalleryItem {
  id: string;
  gridArea:
    | "highlight"
    | "sneaker-white"
    | "model"
    | "sneaker-color"
    | "sneaker-purple"
    | "sneaker-silver";
  image: string;
  alt: string;
}

export const Gallery = () => {
  const router = useRouter();
  // Array com os dados dos itens da galeria
  // A ordem aqui representa a estrutura para desktop
  const galleryItems: GalleryItem[] = [
    {
      id: "highlight",
      gridArea: "highlight",
      image: galeriaHomem,
      alt: "Modelo masculino usando tênis SyntaxWear",
    },
    {
      id: "sneaker-purple",
      gridArea: "sneaker-purple",
      image: galeriaTenisRoxo,
      alt: "Tênis roxo e verde SyntaxWear",
    },
    {
      id: "sneaker-white",
      gridArea: "sneaker-white",
      image: galeriaTenisAmarelo,
      alt: "Tênis branco e preto SyntaxWear",
    },
    {
      id: "model",
      gridArea: "model",
      image: galeriaModeloFeminina,
      alt: "Modelo feminina com estilo urbano",
    },
    {
      id: "sneaker-color",
      gridArea: "sneaker-color",
      image: galeriaTenisColorido,
      alt: "Tênis colorido com múltiplas cores",
    },
    {
      id: "sneaker-silver",
      gridArea: "sneaker-silver",
      image: galeriaTenisCinza,
      alt: "Tênis cinza SyntaxWear",
    },
  ];

  return (
    <div className="container">
      <section className={styles.galleryGrid}>
        {galleryItems.map((item) => (
          <div
            key={item.id}
            data-grid-area={item.gridArea}
            className={styles.galleryItem}
          >
            <img src={item.image} alt={item.alt} />

            {/* Render overlay somente no highlight (homem sentado) */}
            {item.id === "highlight" && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white flex flex-col items-center w-[260px] md:w-[388px] mx-auto">
                  <h2 className="text-x1 font-medium leading-normal tracking-wider mb-2.5">
                    Krypton One
                  </h2>
                  <h1 className="text-2x1 leading-9 tracking-widest mb-6">
                    Estilo urbano com atitude
                  </h1>
                  <div className="flex gap-3.5">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() =>
                        router.navigate({
                          to: "/products/category/$category",
                          params: { category: "Feminino" },
                        })
                      }
                    >
                      Feminino
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() =>
                        router.navigate({
                          to: "/products/category/$category",
                          params: { category: "Masculino" },
                        })
                      }
                    >
                      Masculino
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};
