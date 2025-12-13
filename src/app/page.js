import NewsLayout from "./Components/News/NewsLayout";
import { textFormatter } from "./helpers";
import { newsData } from "./data/News";

export default function page() {
  return (
    <>
      <h2 className="main-page-title text-center py-sm-3 py-2">NEWS</h2>

      {Object.entries(newsData).map(([sectionTitle, sectionData], index) => {
        const extraSections = Object.entries(sectionData)
          .filter(
            ([key, value]) =>
              key !== "news" && Array.isArray(value) && value.length
          )
          .map(([key, items]) => ({
            key,
            title: textFormatter(key),
            items,
          }));
        return (
          <NewsLayout
            index={index}
            key={sectionTitle}
            title={textFormatter(sectionTitle)}
            news={sectionData.news}
            moreNews={extraSections}
          />
        );
      })}
    </>
  );
}
