import "./globals.css";
import { Space_Grotesk } from "next/font/google";

const inter = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "SDA Kinyarwanda App",
  description:
    "Access a collection of Seventh-day Adventist Kinyarwanda Hymns on your phone",
  openGraph: {
    title: "SDA Kinyarwanda App",
    site_name: "SDA Kinyarwanda App",
    description:
      "Access a collection of Seventh-day Adventist Kinyarwanda Hymns on your phone",
    url: "https://sda-kinyarwanda.vercel.app/",
    image: "https://sda-kinyarwanda.vercel.app/icon.png",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
