import "../styles/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NavBar from "../components/NavBar";
import Logo from "../components/Logo";
import NavLinks from "../components/NavLinks";
import Container from "../components/Container";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "damiadev Web Page",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Container widthDesktop="1195px">
          {/* NAV ################################### */}
          <NavBar>
            <Logo text={"nameit"}></Logo>
            <NavLinks links={["Inicio", "Apps", "Blog", "Acerca"]} />
          </NavBar>
          {/* CONTENT ################################### */}
          {children}
        </Container>
      </body>
    </html>
  );
}
