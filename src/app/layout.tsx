import type { Metadata } from "next";
import { MantineProvider } from "@mantine/core";
import themes from "@/themes";
import { inter } from "@/themes/typography";
import "@mantine/core/styles.css";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "iamtanong - Portfolio",
  description:
    "Personal portfolio of Tanongsak Anurak, showcasing projects, resume, and blog.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <MantineProvider
          theme={themes}
          defaultColorScheme="auto"
          withCssVariables
          withGlobalClasses
          withStaticClasses
        >
          <Navbar />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
