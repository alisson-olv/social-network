import type { Metadata } from "next";
import "./globals.css";
import { type_second } from "@/functions/fonts";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { userGet } from "@/actions/user-get";
import UserContextProvider from "@/context/user-context";

export const metadata: Metadata = {
  title: "Dogs Next",
  description: "Social Network",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data } = await userGet();

  return (
    <html lang="pt-BR">
      <body className={type_second.variable}>
        <UserContextProvider user={data}>
          <div className="app">
            <Header />
            <main className="appBody">
              {children}
            </main>
            <Footer />
          </div>
        </UserContextProvider>
      </body>
    </html>
  );
}
