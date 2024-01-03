import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const awesomeFont = localFont({
  src: [
    {
      path: "../assets/fonts/graphik-400.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/graphik-500.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/graphik-600.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Lulu - movie streaming app",
  description:
    "Lulu is your goto for the best streaming movies, TV shows and sporting events.",
  icons: {
    icon: "/icon.png",
  },
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${awesomeFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
export default RootLayout;
