import React, { ReactNode } from "react";
import Navigation from "@/components/navigation/navigation";
import Footer from "@/components/footer/footer";

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({
  children,
}: PageLayoutProps): React.ReactElement {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col flex-grow"> {children}</div>
    </div>
  );
}
