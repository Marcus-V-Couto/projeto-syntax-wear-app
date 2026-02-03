import { createFileRoute, Link } from "@tanstack/react-router";
import LoginForm from "../../components/LoginForm";
import { Logo } from "../../components/Logo";
import GoogleIcon from "../../assets/img/google-icon.png";
import { Separator } from "../../components/Separator";

export const Route = createFileRoute("/_auth/sign-in")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="text-black bg-[#f5f5f5] h-screen w-full flex justify-center items-center p-5">
      <div className="w-[450px] bg-white rounded-[18px] p-10 shadow-md">
        <div className="flex flex-col">
          <Logo />
          <h2 className="text-black font-bold text-[21px] mb-2">Entrar</h2>
          <p className="mb-3.5">
            Escolha como você gostaria de acessar sua conta
          </p>
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-3 hover:bg-gray-50 transition-all cursor-pointer"
          >
            <img
              src={GoogleIcon}
              alt="Ícone do Google"
              className="w-5 h-5 mr-2"
            />
            <span className="text-sm font-medium text-black">
              Continuar com Google
            </span>
          </button>
          <p className="text-sm text-gray-600 mt-6 text-center">
            Já tem uma conta?{" "}
            <a href="/sign-in" className="text-[#5433EB] hover:underline">
              Entrar
            </a>
          </p>
          <Separator />
          <LoginForm />

          <p className="mt-3.55">
            Não possui uma conta?{" "}
            <Link to="/sign-up" className="ml-1 text-[#5433EB] hover:underline">Cadastre-se</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
