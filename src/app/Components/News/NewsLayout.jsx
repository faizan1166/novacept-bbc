import React from "react";
import "./NewsLayout.css";

export default function NewsLayout({ title = "NEWS", news = [] }) {
  const defaultNews = [
    {
      id: 1,
      title:
        "US sanctions six more ships after seizing oil tanker off Venezuela",
      description:
        "The White House plans to move the tanker to a US port and seize the oil on board, a move Caracas has labelled as an act of 'international piracy'.",
      time: "5 hrs ago",
      category: "World",
      image:
        "https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true,
    },
    {
      id: 2,
      title:
        "Tricked, abducted and abused: Inside China's schools for 'rebellious' teens",
      description:
        "Young people tell the BBC that military-style schools deceive and abuse students they claim to help.",
      time: "5 hrs ago",
      category: "Asia",
      image:
        "https://images.pexels.com/photos/8923181/pexels-photo-8923181.jpeg?auto=compress&cs=tinysrgb&w=450",
      featured: true,
    },
    {
      id: 3,
      title:
        "Tricked, abducted and abused: Inside China's schools for 'rebellious' teens",
      description:
        "Young people tell the BBC that military-style schools deceive and abuse students they claim to help.",
      time: "5 hrs ago",
      category: "Asia",
      image:
        "https://images.pexels.com/photos/8923181/pexels-photo-8923181.jpeg?auto=compress&cs=tinysrgb&w=450",
      featured: true,
    },
    {
      id: 4,
      title:
        "Tricked, abducted and abused: Inside China's schools for 'rebellious' teens",
      description:
        "Young people tell the BBC that military-style schools deceive and abuse students they claim to help.",
      time: "5 hrs ago",
      category: "Asia",
      image:
        "https://images.pexels.com/photos/8923181/pexels-photo-8923181.jpeg?auto=compress&cs=tinysrgb&w=450",
      featured: true,
    },
    {
      id: 5,
      title:
        "Chief of S Korea's high-stakes exam quits over 'insane' English test",
      description:
        "Some critics say the questions were unnecessarily complex, while others argue that their intended purpose.",
      time: "5 hrs ago",
      category: "Asia",
      image:
        "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 6,
      title: "Thai PM dissolves parliament to return 'power to people'",
      description:
        "The dissolution order comes after Anutin Charnvirakul lost the support of the largest opposition bloc.",
      time: "3 hrs ago",
      category: "Asia",
      image:
        "https://images.pexels.com/photos/1059116/pexels-photo-1059116.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 7,
      title:
        "Charlie Kirk murder accused makes first in-person court appearance",
      description:
        "The 22-year-old appeared in court for the first time as a judge allowed cameras to cover the proceedings.",
      time: "5 hrs ago",
      category: "US & Canada",
      image:
        "https://images.pexels.com/photos/8730555/pexels-photo-8730555.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 8,
      title:
        "Myanmar's army says it wants to eradicate scam compounds. Is it really doing that?",
      description:
        "The junta has been demolishing buildings in KK Park, one of the largest and most notorious scam compounds.",
      time: "5 hrs ago",
      category: "Asia",
      image:
        "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 9,
      title: "Snoop Dogg named US 'honorary coach' for Winter Olympics",
      description:
        "The American rapper says he hopes to 'cheer, uplift and maybe drop a little wisdom from the sidelines'.",
      time: "7 hrs ago",
      category: "Sport",
      image:
        "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=450",
    },
    {
      id: 10,
      title:
        "Fears grow that world's rarest apes were swept away in mountain floods",
      description:
        "A carcass thought to belong to a Tapanuli orangutan, the world's rarest ape, has alarmed conservationists.",
      time: "5 hrs ago",
      category: "Asia",
      image:
        "https://images.pexels.com/photos/50588/orangutan-monkey-ape-indonesia-50588.jpeg?auto=compress&cs=tinysrgb&w=450",
    },
  ];

  const newsItems = news.length > 0 ? news : defaultNews;
  const featuredNews = newsItems.filter((item) => item.featured);
  const otherNews = newsItems.filter((item) => !item.featured);

  return (
    <div className="featured-news-section py-4">
      <h1 className="featured-news-title mb-4">{title}</h1>

      <div className="d-flex flex-column flex-lg-row gap-3 mb-5">
        <div className="flex-grow-1 ">
          <article className="featured-main-article mb-4">
            <div className="d-flex flex-column flex-sm-row gap-3">
              <div className="">
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
                className="featured-main-image flex-shrink-0 flex-grow-1"
              />
            </div>
          </article>

          <div className="d-flex flex-wrap gap-3">
            {otherNews.map((item) => (
              <div key={item.id} className="news-card-wrapper flex-grow-1">
                <article className="news-card h-100">
                  <img
                    src={item.image}
                    alt=""
                    className="news-card-image w-100 d-block mb-2"
                  />
                  <h4 className="news-card-title">{item.title}</h4>
                  <p className="news-card-description">{item.description}</p>
                  <div className="news-card-meta">
                    <span>{item.time}</span>
                    <span className="separator">|</span>
                    {item.category && <span>{item.category}</span>}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="featured-secondary-container">
          {featuredNews.slice(1).map((item, index) => (
            <article className="featured-secondary-article mb-4" key={index}>
              {index === 0 && (
                <img
                  src={item?.image}
                  alt=""
                  className="featured-secondary-image w-100 d-block mb-3"
                />
              )}
              <h3 className="featured-secondary-title">{item?.title}</h3>
              <p className="featured-secondary-description">
                {item?.description}
              </p>
              <div className="featured-secondary-meta">
                <span>{item?.time}</span>
                <span className="separator">|</span>
                {item?.category && <span>{item.category}</span>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
