import "./globals.css";
import { Oxanium } from "next/font/google";
import { Toaster } from "sonner";

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-oxanium",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${oxanium.variable} antialiased`}>{children}</body>
      <Toaster theme="dark" />
    </html>
  );
}
