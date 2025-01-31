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
import MainDock from "@/components/MainDock";
import { MenuDemo } from "@/components/MenuDemo";

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    manifest: "./manifest.json",
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
    //
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={cn(
                montserrat.variable,
                syne.variable,
                source_code_pro.variable,
                GeistSans.variable,
            )}
        >
            <body
                className={cn(
                    "w-full min-h-screen relative dark:bg-neutral-950",
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <main className="">
                        <div className="">
                            <MainDock />
                        </div>
                        {children}
                        <div className="pointer-events-none absolute inset-0 w-full -z-40 h-full bg-[url('/noisetexture.jpg')] opacity-40 mix-blend-soft-light"></div>
                        <Footer />
                    </main>
                </ThemeProvider>
            </body>
            <GoogleAnalytics gaId="G-DENGLRLTGH" />
        </html>
    );
}
