import "@styles/globals.css";
import type { Metadata } from "next";
import localFont from "@next/font/local";

const SF_Compact = localFont({
  src: "../assets/fonts/sf-compact.otf",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Lulu - movie streaming app",
  description:
    "Lulu is your goto for the best streaming movies, TV shows and sporting events.",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${SF_Compact.variable}`}>{children}</body>
    </html>
  );
}
export default RootLayout;
