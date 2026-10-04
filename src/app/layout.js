import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";


const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["latin", "bengali"],
});;

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
        <main className="max-w-7xl mx-auto flex-1">{children}</main>
      </body>
    </html>
  );
}

