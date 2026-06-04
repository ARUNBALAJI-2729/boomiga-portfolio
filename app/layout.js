import { Inter, Rajdhani } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Boomiga S | Brand & UI/UX Designer",
  description: "Creative Portfolio of Boomiga S, a UI/UX and Brand Designer based in Madurai, Tamil Nadu. CSE Graduate specialized in crafting interactive, visual digital experiences.",
  keywords: ["Boomiga S", "UI/UX Designer", "Brand Designer", "Madurai Designer", "Portfolio", "Web Developer"],
  authors: [{ name: "Boomiga S" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${rajdhani.variable} bg-black font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
