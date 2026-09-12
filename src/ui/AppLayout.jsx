import { Outlet } from "react-router-dom";
import { cloneElement, isValidElement, useState } from "react";
import Header from "./Header";

function AppLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="app-layout">
      <Header onMenuClick={() => setIsSidebarOpen((prev) => !prev)} />

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="app-content">
        {isValidElement(children) &&
          cloneElement(children, {
            isOpen: isSidebarOpen,
            onClose: () => setIsSidebarOpen(false),
          })}

        <main className="app-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;