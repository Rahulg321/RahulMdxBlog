import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/Mode-Toggle";
import { cn } from "@/lib/utils";
import { montserrat, source_code_pro, syne } from "./fonts";
import { baseUrl } from "./sitemap";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Navbar } from "@/components/nav";
import Footer from "@/components/Footer";
import { GeistSans } from "geist/font/sans";
import BottomDock from "@/components/BottomDock";
import { CircleIndicator } from "@/components/CircleIndicator";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Rahul Gupta",
    template: "%s | Rahul Gupta",
  },
  description: "Developer, writer, and creator.",
  openGraph: {
    title: "Rahul Gupta",
    description: "Developer, writer, and creator.",
    url: baseUrl,
    siteName: "Rahul Gupta",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Rahul Gupta",
    card: "summary_large_image",
  },
  verification: {
    google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        montserrat.variable,
        syne.variable,
        source_code_pro.variable,
        GeistSans.variable
      )}
    >
      <body
        className={cn(
          "min-h-screen max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] antialiased"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <div className="absolute top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-8">
              <ModeToggle />
            </div>
            <div className="">
              <Navbar />
            </div>
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-DENGLRLTGH" />
    </html>
  );
}
