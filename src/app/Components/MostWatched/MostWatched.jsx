import React from "react";
import "./MostWatched.css";

export default function MostWatched({ title = "MOST WATCHED", items = [] }) {
  const defaultItems = [
    {
      id: 1,
      number: "1",
      icon: "▶",
      title:
        "Interpreter in tears as Ukrainian boy recalls losing mother in Russian strike",
      url: "#",
    },
    {
      id: 2,
      number: "2",
      icon: "▶",
      title:
        "Watch: Canadians and Americans on a social media ban for everyone under 16",
      url: "#",
    },
    {
      id: 3,
      number: "3",
      icon: "▶",
      title:
        "Cameras on killer whales record first evidence of joint hunt with dolphins",
      url: "#",
    },
    {
      id: 4,
      number: "4",
      icon: "▶",
      title: "Moment skydiver's parachute wraps around plane tail",
      url: "#",
    },
    {
      id: 5,
      number: "5",
      icon: "▶",
      title: "Watch: Moment hiker is rescued from quicksand in Utah",
      url: "#",
    },
    {
      id: 5,
      number: "5",
      icon: "▶",
      title: "Watch: Moment hiker is rescued from quicksand in Utah",
      url: "#",
    },
  ];

  const watchedItems = items.length > 0 ? items : defaultItems;

  return (
    <div className="most-watched-section pt-2 pb-4">
      <h2 className="most-watched-title mb-4">{title}</h2>

      <div className="most-watched-wrapper gap-sm-4 gap-2">
        {watchedItems.map((item) => (
          <div key={item.id} className="most-watched-item">
            <a href={item.url} className="most-watched-link">
              <div className="d-flex gap-3 align-items-flex-start">
                <span className="most-watched-number flex-shrink-0">
                  {item.number}
                </span>
                <div className="d-flex gap-2 align-items-flex-start flex-grow-1">
                  <span className="most-watched-icon flex-shrink-0">
                    {item.icon}
                  </span>
                  <h3 className="most-watched-item-title">{item.title}</h3>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
