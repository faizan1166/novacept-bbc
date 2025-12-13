import React from "react";
import { newsData } from "../../data/News";

export default function NewsDetail({ params }) {
  const { id } = React.use(params);
  let article = null;

  Object.entries(newsData).some(([category, data]) => {
    if (!data.news) return false;
    const found = data.news.find((item) => item?.id === Number(id));
    if (found) {
      article = found;
      return true;
    }
    return false;
  });

  return (
    <>
      {article ? (
        <div className="detailed-page py-4 m-auto">
          <h4 className="mb-2">{article.title}</h4>
          <p className="text-muted my-2">{article.time}</p>
          <img
            src={article.image}
            alt={article.title}
            className="img-fluid w-100 mb-3"
            loading="lazy"
          />
          <p>{article.brief}</p>
        </div>
      ) : (
        <div className="article-not-found d-flex align-items-center justify-content-center">
          <h6>Not Found</h6>
        </div>
      )}
    </>
  );
}
