import { Bangers, Inter } from "next/font/google"; // Bangers para títulos, Inter para textos
import "./globals.css";

// Fuente para títulos (Estilo Logo)
const bangers = Bangers({ 
  subsets: ["latin"],
  weight: ['400'], // Bangers solo tiene un peso
  variable: '--font-bangers'
});

// Fuente para lectura (Textos chicos)
const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata = {
  title: "Mi Cumpleaños",
  description: "Invitación extra especial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${bangers.variable} ${inter.variable} font-sans bg-black`}>
        {children}
      </body>
    </html>
  );
}