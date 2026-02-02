import Banner from "@/assets/img/banner.jpg";
import { Button } from "../Button";
import { Overlay } from "../Overlay";

export const Hero = () => {
  return (
    <div className="container">
      <section className="relative h-125 rounded-[20px] mb-10">
        <img
          src={Banner}
          alt="Homem sentado com os tênis da SyntaxWear"
          className="w-full h-full object-cover rounded-[20px]"
        />

        <Overlay
          title="Krypton One"
          subtitle="Transforme qualquer passo em presença"
          className="bottom-0 px-6 md:px-24 pb-24 flex justify-end md:items-end"
        >
          <Button variant="secondary">Ver modelos</Button>
          <Button>Comprar</Button>
        </Overlay>
      </section>
    </div>
  );
};
