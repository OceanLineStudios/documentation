/* eslint-env node */
import Image from "next/image";
import Link from "next/link";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import Tebex from "../icons/tebex";
import "../styles/globals.css";

export const metadata = {
  metadataBase: new URL("https://docs.OceanLineStudios.eu"),
  title: {
    template: "%s - OceanLineStudios",
  },
  description: "OceanLineStudios: Documentation",
  applicationName: "OceanLineStudios",
  generator: "Next.js",
  appleWebApp: {
    title: "OceanLineStudios",
  },
  openGraph: {
    title: "OceanLineStudios",
    description: "OceanLineStudios: Documentation",
    url: "https://docs.OceanLineStudios.eu",
    siteName: "OceanLineStudios",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "OceanLineStudios Open Graph Image",
      },
    ],
    type: "website",
  },
  other: {
    "msapplication-TileImage": "/ms-icon-144x144.png",
    "msapplication-TileColor": "#fff",
  },
  twitter: {
    site: "https://docs.OceanLineStudios.eu",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navbar = (
    <Navbar
      logo={
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="OceanLineStudios"
            width={32}
            height={32}
          />
          <b>OceanLineStudios</b>
        </div>
      }
      chatLink="https://discord.gg/7HXQWDZJ"
      children={
        <Link href="https://oceanlinestudios.tebex.io/" target="_blank">
          <Tebex />
        </Link>
      }
    />
  );
  const pageMap = await getPageMap();

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="✦" />
      <body>
        <Layout
          navbar={navbar}
          footer={
            <Footer>MIT {new Date().getFullYear()} © OceanLineStudios.</Footer>
          }
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/oceanlinestudios/documentation/blob/main"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
