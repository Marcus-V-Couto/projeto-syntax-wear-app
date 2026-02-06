import { createFileRoute, Link } from "@tanstack/react-router";
import { Logo } from "../../components/Logo";
import RegisterForm from "../../components/RegisterForm";
import { Separator } from "../../components/Separator";
import GoogleIcon from "../../assets/img/google-icon.png";

export const Route = createFileRoute("/_auth/sign-up")({
  component: RouteComponent,
  head: () => ({
    title: "Cadastre-se - SyntaxWear",
    meta: [{ property: "og:title", content: "Cadastre-se  - SyntaxWear" }],
  }),
});

function RouteComponent() {
  return (
    <section className="min-h-screen w-full flex justify-center items-center bg-surface p-5">
      <div className="w-[450px] bg-white  rounded-2xl p-5 flex flex-col">
        <Logo />
        <RegisterForm />
        <Separator />

        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 border border-border rounded-md py-3 hover:bg-gray-50 transition-all cursor-pointer"
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
          <Link
            to="/sign-in"
            className="flex items-center justify-center text-[#5433EB] hover:underline"
          >
            Entrar
          </Link>
        </p>
      </div>
    </section>
  );
}
