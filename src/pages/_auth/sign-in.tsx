import { createFileRoute, Link } from "@tanstack/react-router";
import LoginForm from "../../components/LoginForm";
import { Logo } from "../../components/Logo";
import GoogleIcon from "../../assets/img/google-icon.png";
import { Separator } from "../../components/Separator";

export const Route = createFileRoute("/_auth/sign-in")({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: "Login - SyntaxWear" }],
  }),
});

function RouteComponent() {
  return (
    <section className="text-black bg-surface h-screen w-full flex justify-center items-center p-5">
      <div className="w-[450px] bg-white rounded-[18px] p-10 shadow-md">
        <div className="flex flex-col">
          <Logo />
          <h2 className="text-black text-center font-bold text-[21px] mb-2">
            Entrar
          </h2>
          <p className="mb-3.5 text-center">
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
          <Separator />
          <LoginForm />

          <p className="text-gray-600 mt-3.5 text-center">
            Não possui uma conta?{" "}
            <Link
              to="/sign-up"
              className="flex items-center justify-center text-accent hover:underline"
            >
              Cadastre-se
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
