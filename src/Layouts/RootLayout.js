import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
}
