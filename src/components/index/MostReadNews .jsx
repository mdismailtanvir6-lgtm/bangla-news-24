import Link from "next/link";
import React from "react";

const MostReadNews = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const data = await res.json();
  const news = data.data;
  return (
    <div className="px-4 py-4 rounded-md shadow-sm">
      <h2 className="text-lg font-semibold mb-4">সর্বাধিক পঠিত</h2>
      <div className="space-y-4">
        {news?.map((newsItem, index) => (
          <div key={newsItem.id} className="py-1 flex  items-center gap-2">
            <p className="text-lg font-bold text-gray-600">{index + 1}.</p>
            <Link
              href={`/news/${newsItem.id}`}
              className="text-lg font-bold hover:text-[#C50007] transition duration-200"
            >
              {newsItem.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostReadNews;
