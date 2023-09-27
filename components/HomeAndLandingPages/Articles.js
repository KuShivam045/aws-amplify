import { useRouter } from "next/router";
import React from "react";

const Articles = (props) => {
  const router = useRouter();

  const dateConvert = (data) => {
    var date = new Date(data);
    var newDate = date.toString();
    return newDate.substring(0, 15);
  };

  return (
    <div className="">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mx-auto px-4 lg:px-16 py-3">
        {props.articleCard.slice(0, 6).map((item, i) => (
          <a
            key={item.key}
            className="cursor-pointer"
            href={"/articles-rozgaar/" + item.ArticleId}
          >
            <div className="">
              <img
                src={item.banner.BannerImageUrl}
                alt={item.Title.split(" ").join("_")}
                className="w-full"
                title={item.Title.split(" ").join("_")}
                loading="lazy"
                width={"250px"}
                height={180}
              />

              <div className="mt-2">
                <div className="text-sm font-semibold">
                  {" "}
                  {dateConvert(item.UpdatedAt)}{" "}
                </div>
                <div className="text-base font-semibold">{item.Title}</div>

                <div className="text-sm font-normal text-neutral-900 mt-2">
                  {item.ShortDescription.substring(0, 60)}...{" "}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Articles;
