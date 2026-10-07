import React from "react";
import NewsCard from "./NewsCard";

const NewsByCategory = ({ newses }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {newses?.map((newsItem) => (
        <NewsCard key={newsItem.id} news={newsItem} />
      ))}
    </div>
  );
};

export default NewsByCategory;
