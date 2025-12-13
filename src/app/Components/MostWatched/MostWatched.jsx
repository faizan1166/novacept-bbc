import React from "react";

export default function MostWatched({ title = "MOST WATCHED", items = [] }) {
  return (
    <div className="most-watched-section pt-2 pb-4">
      <h2 className="most-watched-title mb-4">{title}</h2>

      <div className="most-watched-wrapper gap-sm-4 gap-2">
        {items.map((item, index) => (
          <div key={item.id || index} className="most-watched-item">
            <a href={item.url} className="most-watched-link">
              <div className="d-flex gap-3 align-items-flex-start">
                <span className="most-watched-number flex-shrink-0">
                  {index + 1}
                </span>
                <div className="d-flex gap-2 align-items-flex-start flex-grow-1">
                  <span className="most-watched-icon flex-shrink-0">▶</span>
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
