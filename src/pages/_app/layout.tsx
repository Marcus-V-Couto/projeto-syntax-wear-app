import { Outlet, createFileRoute } from "@tanstack/react-router";
import { Header } from "../../components/Headera";
import { Footer } from "../../components/Footer";

export const Route = createFileRoute("/_app")({
  component: AppLayout,
});

function AppLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
