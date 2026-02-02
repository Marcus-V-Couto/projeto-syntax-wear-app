import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
  component: AppLayout,
});

function AppLayout() {
  return (
    <div>
      <header>Outro</header>
      <Outlet />
      <footer>Outro</footer>
    </div>
  );
}
