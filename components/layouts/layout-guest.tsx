import React, { ReactNode } from "react";
import Navigation from "@/components/navigation/navigation";
import Footer from "@/components/footer/footer";

interface PageLayoutProps {
  children: ReactNode;
}

export default function LayoutGuest({
  children,
}: PageLayoutProps): React.ReactElement {
  return (
    <div className="flex flex-col min-h-screen bg-yellow-400">
      <Navigation />
      <div className="flex flex-col flex-grow"> {children}</div>
      <Footer />
    </div>
  );
}
