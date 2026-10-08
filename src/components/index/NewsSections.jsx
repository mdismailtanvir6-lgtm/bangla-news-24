// import React from "react";
// import NewsCard from "../news/NewsCard";

// const NewsSections = async () => {
//   const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
//   const data = await res.json();
//   const news = data.data;
//   console.log(news.slice(1));

//   const UNPUBLISHABLE_NEWS_TITLES = [
//     "বিবিসি বাংলা এখন হোয়াটসঅ্যাপে!",
//     "বিবিসি বাংলা এখন ইন্সটাগ্রামে!",
//     "সামাজিক মাধ্যমে বিবিসি বাংলা",
//   ];
//   const publicableNews = news?.filter(
//     (newsItem) => !UNPUBLISHABLE_NEWS_TITLES.includes(newsItem.title),
//   );

//   return (
//     <div>
//       {publicableNews?.slice(1).map((newsItem, index) => (
//         <div key={index} className="mt-10 pb-10">
//           <h1 className="mb-5 border-b-2 border-[#C50007] text-2xl font-bold">
//             {newsItem?.title}
//           </h1>
//           {/* ======= newsws here ====== */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//             {newsItem?.articles?.map((article) => (
//               <div key={article.id}>
//                 <NewsCard news={article} />
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default NewsSections;

import React from "react";
import NewsCard from "../news/NewsCard";

const API_URL = "https://news-api-v2.vercel.app/api/news/sections";

const UNPUBLISHABLE_NEWS_TITLES = [
  "বিবিসি বাংলা এখন হোয়াটসঅ্যাপে!",
  "বিবিসি বাংলা এখন ইন্সটাগ্রামে!",
  "সামাজিক মাধ্যমে বিবিসি বাংলা",
];

const NewsSections = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch news sections");
  }

  const { data: news = [] } = await response.json();

  const publicableNews = news
    .filter((section) => !UNPUBLISHABLE_NEWS_TITLES.includes(section.title))
    .slice(1);

  return (
    <div>
      {publicableNews.map((section) => (
        <section key={section.id} className="mt-10 pb-10">
          <h2 className="mb-5 border-b-2 border-[#C50007] text-2xl font-bold">
            {section.title}
          </h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {section.articles?.map((article) => (
              <NewsCard key={article.id} news={article} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default NewsSections;
