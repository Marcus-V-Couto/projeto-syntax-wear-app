import { createFileRoute } from "@tanstack/react-router";
import { Logo } from "../../components/Logo";
import RegisterForm from "../../components/RegisterForm";
import { Separator } from "../../components/Separator";
import GoogleIcon from "../../assets/img/google-icon.png";

export const Route = createFileRoute("/_auth/sign-up")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="min-h-screen w-full flex justify-center items-center bg-[#f5f5f5] p-5">
      <div className="w-[450px] bg-white  rounded-2xl p-5 flex flex-col">
        <Logo />
        <RegisterForm />
        <Separator />

        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-3 hover:bg-gray-50 transition-all cursor-pointer"
        >
          <img src={GoogleIcon} alt="Ícone do Google" className="w-5 h-5 mr-2" />
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
      </div>
    </section>
  );
}
