import "@/styles/globals.css";
import "@/styles/reset.css";
import { IProps } from "@/utils/types";

import { Quicksand, Montserrat, Nunito } from "next/font/google";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Burger Street | Welcome",
  description: "This is a burger street app",
};

export default function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
      </head>
      <body className={font.className}>{children}</body>
    </html>
  );
}
