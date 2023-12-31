import "./globals.css";
import { Space_Grotesk } from "next/font/google";

const inter = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "SDA Kinyarwanda App",
  description:
    "Access a collection of Seventh-day Adventist Kinyarwanda Hymns on your phone",
  image: "https://sda-kinyarwanda-hymnal.vercel.app/icon.png",
  openGraph: {
    title: "SDA Kinyarwanda App",
    site_name: "SDA Kinyarwanda App",
    description:
      "Access a collection of Seventh-day Adventist Kinyarwanda Hymns on your phone",
    url: "https://sda-kinyarwanda-hymnal.vercel.app/",
    image: "https://sda-kinyarwanda-hymnal.vercel.app/icon.png",
    type: "website",
    locale: "en_US",
  },
  appLinks: {
    ios: {
      url: "https://apps.apple.com/ca/app/sda-kinyarwanda-hymnal/id6449814873",
      app_store_id: "6449814873",
    },
    android: {
      package:
        "https://play.google.com/store/apps/details?id=com.devseb.sdaKinyarwandaHymnal",
      app_name: "sdaKinyarwandaHymnal",
    },
    twitter: {
      card: "summary_large_image",
      domain: "sda-kinyarwanda-hymnal.vercel.app",
      url: "https://sda-kinyarwanda-hymnal.vercel.app/",
      title: "SDA Kinyarwanda App",
      description:
        "Access a collection of Seventh-day Adventist Kinyarwanda Hymns on your phone",
      image: "https://sda-kinyarwanda-hymnal.vercel.app/icon.png",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
