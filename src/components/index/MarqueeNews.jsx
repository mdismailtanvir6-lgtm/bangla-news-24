import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
import { GoDotFill } from "react-icons/go";

const MarqueeNews = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
  const data = await res.json();
  const news = data.data;

  return (
    <div className="z-50 mt-5 sticky top-0 whitespace-nowrap bg-[#9F0712] text-white py-1">

      <Marquee speed={100}>
        {news?.map((item, index) => (
          <div key={index} className="py-2">
            <div className="flex gap-5 items-center">
              <Link href={`/news/${item.id}`} className="ml-5 hover:underline cursor-pointer">
                {item.title}
              </Link>
              <GoDotFill className="inline-block text-red-500" />
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeNews;
