import Image from "next/image";
import React from "react";

const ArticleCardHome = (props) => {
  const dateConvert = (data) => {
    var date = new Date(data);
    var newDate = date.toString();
    return newDate.substring(0, 15);
  };

  return (
    <a
      key={props.key}
      href={"/articles-rozgaar/" + props.data.ArticleId}
      className="flex border border-gray-200 flex-col cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all duration-200 hover:shadow-[0_1px_20px_1px_rgba(0,0,0,0.2)]"
    >
      <div className={"h-40 sm:h-32 flex-shrink-0 w-full relative"}>
        <Image
          style={{ objectFit: "cover", objectPosition: "top" }}
          src={props.data.ArticleImage.ArticleImage}
          fill
          quality={40}
          sizes="(max-width: 500px) 100vw"
          alt={props.data?.title || "article image"}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white px-4 pb-4 pt-2">
        <div className="flex-1">
          {/* <p className="text-sm font-medium text-timesPurple">
                        <>{props.data?.category}</>
                    </p> */}
          <div className="mt-1 block ">
            <p className="text-base font-semibold  line-clamp-2">
              {props.data?.Title}
            </p>
            <p className="mt-1 text-sm text-gray-700 line-clamp-3">
              {props.data?.ShortDescription.substring(0, 60) + "..."}
            </p>
          </div>
        </div>
        <div className="mt-2 flex items-center ">
          <div className="truncate">
            {/*  <p className="text-sm font-medium truncate">
                            {props.data?.author}
                        </p> */}
            <div className="flex space-x-1 text-sm text-gray-500">
              <time>{dateConvert(props.data.UpdatedAt)}</time>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ArticleCardHome;
