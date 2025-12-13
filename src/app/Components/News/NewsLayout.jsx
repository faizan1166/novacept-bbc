import React from "react";
import "./NewsLayout.css";
import MostWatched from "../MostWatched/MostWatched";

export default function NewsLayout({
  index,
  title = "NEW HITS",
  news = [],
  moreNews,
}) {
  const featuredNews = news.filter((item) => item.featured);
  const otherNews = news.filter((item) => !item.featured);

  return (
    <>
      <div
        className={`featured-news-section py-2 ${
          index === 0 && "border-top-0"
        }`}
      >
        {index > 0 && (
          <h1 className="featured-news-title  mb-2 text-uppercase">{title}</h1>
        )}

        <div className="d-flex flex-column flex-lg-row  gap-sm-3 gap-0 mb-5">
          <div className="flex-grow-1">
            <article
              className="featured-main-article mb-sm-4 mb-0"
              role="button"
            >
              <div className="d-flex flex-column flex-lg-row gap-3 overflow-x-hidden">
                <div className="align-content-center order-md-1 order-2">
                  <h2 className="featured-main-title">
                    {featuredNews[0]?.title}
                  </h2>
                  <p className="featured-main-description">
                    {featuredNews[0]?.description}
                  </p>
                  <div className="featured-meta">
                    <span>{featuredNews[0]?.time}</span>
                    <span className="separator">|</span>
                    {featuredNews[0]?.category && (
                      <span>{featuredNews[0].category}</span>
                    )}
                  </div>
                </div>

                <img
                  src={featuredNews[0]?.image}
                  alt=""
                  className="featured-main-image flex-shrink-0 flex-grow-1 order-md-2 order-1"
                />
              </div>
            </article>

            <div className="d-flex flex-wrap gap-0 gap-sm-3">
              {otherNews.map((item, index) => (
                <div
                  key={item.id || index}
                  className="news-card-wrapper flex-grow-1"
                >
                  <article
                    className="news-card h-100 flex-sm-column flex-row  gap-sm-0 gap-3"
                    role="button"
                  >
                    <img
                      src={item.image}
                      alt=""
                      className="news-card-image d-block mb-sm-2 mb-0"
                    />
                    <div>
                      <h4 className="news-card-title">{item.title}</h4>
                      <p className="news-card-description d-none d-sm-block">
                        {item.description}
                      </p>
                      <div className="news-card-meta">
                        <span>{item.time}</span>
                        <span className="separator">|</span>
                        {item.category && <span>{item.category}</span>}
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <div className="featured-secondary-container">
            {featuredNews.slice(1).map((item, index) => (
              <article
                className={`featured-secondary-article py-md-2 flex-sm-column flex-row  gap-md-0 gap-3 ${
                  index === 0 && "pt-md-0"
                }`}
                role="button"
                key={index}
              >
                {index === 0 && (
                  <img
                    src={item?.image}
                    alt=""
                    className="featured-secondary-image d-block mb-md-2 mb-0"
                  />
                )}
                <div>
                  <h3 className="featured-secondary-title">{item?.title}</h3>
                  <p className="featured-secondary-description d-none d-md-block">
                    {item?.description}
                  </p>
                  <div className="featured-secondary-meta">
                    <span>{item?.time}</span>
                    <span className="separator">|</span>
                    {item?.category && <span>{item.category}</span>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      {moreNews.map((section, index) => {
        return (
          <div key={index}>
            <MostWatched title={section.title} items={section.items} />
          </div>
        );
      })}
    </>
  );
}
