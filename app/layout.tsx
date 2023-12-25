import "@styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lulu - movie streaming app",
  description:
    "Lulu is your goto for the best streaming movies, TV shows and sporting events.",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
export default RootLayout;
