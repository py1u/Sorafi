import { Oxanium, Poppins, Montserrat } from "next/font/google";

export const oxanium = Oxanium({
  display: "swap",
  subsets: ["latin"],
});

export const poppins = Poppins({
  display: "swap",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const montserrat = Montserrat({
  display: "swap",
  subsets: ["latin"],
});
