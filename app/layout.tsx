import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
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
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
          >
            Skip to content
          </a>
          <NavBar />
          <PageTransition>
            {children}
            <Footer />
          </PageTransition>
          <ToastContainer
            position="top-center"
            toastClassName="bg-card text-card-foreground border border-border rounded-md shadow-lg"
          />
          <AIChatbox />
        </ThemeProvider>
      </body>
    </html>
  );
}
