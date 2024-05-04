import React, { ReactNode } from "react";
import NavigationAuthenticated from "@/components/navigation/navigation-authenticated";
import Footer from "@/components/footer/footer";

interface PageLayoutProps {
  children: ReactNode;
}

export default function LayoutAuthenticated({
  children,
}: PageLayoutProps): React.ReactElement {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationAuthenticated />
      <div className="flex flex-col flex-grow bg-snow">{children}</div>
      <Footer />
    </div>
  );
}
