import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next";
import "./globals.css";
import { type_second } from "@/functions/fonts";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { userGet } from "@/actions/user-get";
import UserContextProvider from "@/context/user-context";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Dogs Next",
  description: "Social Network",
};

export default async function RootLayout({
  children,
  modal,
}: Readonly<{
  children: ReactNode;
  modal: ReactNode;
}>) {
  const { data } = await userGet();

  return (
    <html lang="pt-BR">
      <body className={type_second.variable}>
        <UserContextProvider user={data}>
          <div className="App">
            <Header />
            <main className="AppBody">
              {children}
            </main>
            <div>{modal}</div>
            <Footer />
          </div>
        </UserContextProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
