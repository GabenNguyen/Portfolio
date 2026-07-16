import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import NavBar from "./component/NavBar";
import ThemeProvider from "./component/ThemeProvider";
import PageTransition from "./component/PageTransition";
import AIChatbox from "./component/AIChatbox";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ba Hoa Nguyen (Gaben) — Software Engineer",
  description:
    "Portfolio of Ba Hoa Nguyen (Gaben), an IT student at Adelaide University building user-centric web applications with Next.js, React and AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body
          suppressHydrationWarning
          className={`${archivo.variable} ${spaceGrotesk.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar />
            <PageTransition> {children} </PageTransition>
            <ToastContainer />
            <AIChatbox />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
