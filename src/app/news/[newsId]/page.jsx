import React from "react";

const NewsDetail = async ({ params }) => {
  const { newsId } = await params;
  return <div>this is news detail page for ID: {newsId}</div>;
};

export default NewsDetail;
