import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "TAURUS Multiservicios",
  description: "Encuentra servicios confiables de pintura, plomería, electricidad y más para resolver problemas del hogar. Tu solución multiservicios Taurus, todo en un solo lugar. ¡Fácil, rápido y seguro!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
