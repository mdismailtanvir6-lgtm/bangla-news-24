import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import { Toaster } from "react-hot-toast";
import MarqueeNews from "../components/index/MarqueeNews";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["latin", "bengali"],
});

export const metadata = {
  title: "bangla-news-24",
  description: "A leading news website",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${notoSerifBengali.className} h-full antialiased`}
    >
      <body className="min-h-full">
        <Header />
        <MarqueeNews />
        <main className="max-w-7xl mx-auto flex-1">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
