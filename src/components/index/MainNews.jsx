import React from "react";
import NewsCard from "../news/NewsCard";
import Link from "next/link";

const MainNews = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news");
  const data = await res.json();
  const [news, ...latestNews] = data.data;

  return (
    <div className="grid grid-cols-2 w-full max-w-7xl flex-col gap-4 px-4 sm:flex-row sm:gap-6">
      {/* ==== left part / main news ==== */}
      <div className="col-span-1">
        <NewsCard news={news} />
      </div>

      {/* ====== right part / latest news ======= */}
      <div className="rounded-md col-span-1 shadow-sm ">
        {latestNews?.slice(1, 5).map((newsItem) => (
          <div
            key={newsItem.id}
            className="border-b border-gray-200 pb-4 last:mb-0 last:border-b-0 last:pb-0 hover:bg-[#FAFAFA] transition-color duration-300 cursor-pointer"
          >
            <div className="py-4 px-5">
              <p className="text-sm text-primary">{newsItem?.category}</p>

              <Link href={`/news/${newsItem.id}`} className="card-title">
                {newsItem?.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
