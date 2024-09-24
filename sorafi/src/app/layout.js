import "./globals.css";
import { Oxanium } from "next/font/google";

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"], // Add desired weights
  variable: "--font-oxanium", // You can use this for Tailwind
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${oxanium.variable} antialiased`}>{children}</body>
    </html>
  );
}
