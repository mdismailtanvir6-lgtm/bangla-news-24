import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";

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
      data-theme="dark"
      className={`${notoSerifBengali.className} h-full antialiased`}
    >
      <body className="min-h-full">
        <Header />
        <main className="max-w-7xl mx-auto flex-1">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
