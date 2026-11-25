import type { Metadata } from "next";
import { IBM_Plex_Sans, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import ThemeProvider from "./component/ThemeProvider";
import PageTransition from "./component/PageTransition";
import { LanguageProvider } from "./component/LanguageProvider";
import ScrollTheme from "./component/ScrollTheme";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
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
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        suppressHydrationWarning
        className={`${plexSans.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <ScrollTheme>
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
            </ScrollTheme>
          </LanguageProvider>
          <ToastContainer
            position="top-center"
            toastClassName="bg-card text-card-foreground border border-foreground/15 rounded-md"
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
