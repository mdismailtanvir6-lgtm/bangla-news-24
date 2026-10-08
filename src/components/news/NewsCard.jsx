import Link from "next/link";
import React from "react";

const NewsCard = ({ news }) => {
  const { title, category, lastPublished, description, imageUrl } = news;

  const publishedDate = new Date(lastPublished);

  return (
    <Link href={`/news/${news.id}`} className="card bg-base-100 shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer rounded-md">
      <figure className="relative  w-full">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px)"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-base-200">
            <span className="text-sm text-base-content/50">No Image</span>
          </div>
        )}
      </figure>

      <div className="card-body">
        <p className="text-sm text-primary">{category}</p>

        <h2 className="card-title">{title}</h2>

        <p className="line-clamp-3 text-sm text-base-content/70">
          {description}
        </p>

        <p className="text-xs text-base-content/50">
          {publishedDate.toLocaleDateString("bn-BD", {
            dateStyle: "full",
          })}
        </p>
      </div>
    </Link>
  );
};

export default NewsCard;
