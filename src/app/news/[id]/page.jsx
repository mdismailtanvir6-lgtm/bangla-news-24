import NewsDetails from "@/components/news/NewsDetails";
import NotFoundNews from "@/components/news/NotFoundNews";

const NewsDetail = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`https://news-api-v2.vercel.app/api/news/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    return <NotFoundNews />;
  }

  const news = await res.json();

  return <NewsDetails news={news} />;
};

export default NewsDetail;
