
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
import { GoDotFill } from "react-icons/go";

const MarqueeNews = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");

  if (!res.ok) {
    return null;
  }

  const data = await res.json();
  const news = data.data || [];

  return (
    <div className="sticky top-0 z-50 mt-5 flex overflow-hidden bg-[#C10007] text-white">
      {/* Latest Label */}
      <div className="z-10 flex shrink-0 items-center bg-[#9F0712] px-6 py-2 font-semibold">
        সর্বশেষ
      </div>

      {/* Marquee */}
      <div className="min-w-0 flex-1">
        <Marquee speed={100} pauseOnHover>
          {news.map((item) => (
            <div key={item.id} className="flex items-center py-2">
              <Link href={`/news/${item.id}`} className="mx-5 hover:underline">
                {item.title}
              </Link>

              <GoDotFill className="shrink-0 text-red-300" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeNews;
