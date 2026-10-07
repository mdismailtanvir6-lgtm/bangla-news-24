import Image from "next/image";

export const NewsDetails = ({ news }) => {
  if (!news) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">News not found</h1>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-4xl px-4 py-10 md:px-6 lg:py-14">
      {/* =========================
          Header
      ========================== */}
      <header className="mb-8">
        {/* Category */}
        {news.category && (
          <span className="mb-4 inline-block text-sm font-semibold text-red-600">
            {news.category}
          </span>
        )}

        {/* Title */}
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          {news.title}
        </h1>

        {/* Description / Summary */}
        {news.description && (
          <p className="mt-5 text-lg leading-8 text-gray-600 md:text-xl">
            {news.description}
          </p>
        )}

        {/* Author + Date */}
        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-500">
          {news.author && (
            <span className="font-medium text-gray-800">{news.author}</span>
          )}

          {news.createdAt && (
            <>
              <span>•</span>

              <time dateTime={news.createdAt}>
                {formatDate(news.createdAt)}
              </time>
            </>
          )}

          {news.readTime && (
            <>
              <span>•</span>
              <span>{news.readTime} শব্দ</span>
            </>
          )}
        </div>
      </header>

      {/* =========================
          Featured Image
      ========================== */}
      {news.image && (
        <figure className="mb-10">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-100">
            <Image
              src={news.image}
              alt={news.title || "News image"}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>

          {news.imageCaption && (
            <figcaption className="mt-3 text-sm leading-6 text-gray-500">
              {news.imageCaption}
            </figcaption>
          )}
        </figure>
      )}

      {/* =========================
          Article Content
      ========================== */}
      <div className="news-content">
        {news.content?.map((block, index) => (
          <NewsBlock key={block._id || block.id || index} block={block} />
        ))}
      </div>

      {/* =========================
          Tags
      ========================== */}
      {news.tags?.length > 0 && (
        <div className="mt-12 border-t border-gray-200 pt-6">
          <div className="flex flex-wrap gap-2">
            {news.tags.map((tag, index) => (
              <span
                key={`${tag}-${index}`}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </article>
  );
};

/* =================================
   Dynamic Content Block
================================= */

const NewsBlock = ({ block }) => {
  if (!block) return null;

  switch (block.type) {
    /* -----------------------------
       Paragraph
    ------------------------------ */
    case "paragraph":
      return (
        <p className="mb-6 text-[17px] leading-8 text-gray-800 md:text-lg">
          {block.text}
        </p>
      );

    /* -----------------------------
       Heading
    ------------------------------ */
    case "heading":
      return (
        <h2 className="mb-5 mt-12 text-2xl font-bold leading-tight text-gray-900 md:text-3xl">
          {block.text}
        </h2>
      );

    /* -----------------------------
       Image
    ------------------------------ */
    case "image":
      return (
        <figure className="my-10">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-100">
            <Image
              src={block.src}
              alt={block.alt || ""}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>

          {block.caption && (
            <figcaption className="mt-3 text-sm leading-6 text-gray-500">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    /* -----------------------------
       Quote
    ------------------------------ */
    case "quote":
      return (
        <blockquote className="my-8 border-l-4 border-red-500 bg-gray-50 px-6 py-5 text-lg leading-8 text-gray-700">
          “{block.text}”
        </blockquote>
      );

    /* -----------------------------
       Divider
    ------------------------------ */
    case "divider":
      return <hr className="my-10 border-gray-200" />;

    default:
      return null;
  }
};

/* =================================
   Date Formatter
================================= */

const formatDate = (date) => {
  try {
    return new Intl.DateTimeFormat("bn-BD", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(new Date(date));
  } catch {
    return date;
  }
};

export default NewsDetails;
