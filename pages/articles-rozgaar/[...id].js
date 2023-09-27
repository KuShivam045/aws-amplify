import React, { useEffect, useState } from "react";
import BreadCrumb from "../../components/MainComponents/BreadCrumb";
import Footer from "../../components/Footer";
import RiHeader from "../../components/MainComponents/RiHeader";
import { useRouter } from "next/router";
import classes from "./ArticlesRozgaarWeb.module.css";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import { FaGlobeAsia } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";
import ArticleAreaWeb from "../../components/HomeAndLandingPages/ArticleAreaWeb";
import { ArticleList } from "../api/ArticleListRozgaar";
import { ArticleDetail } from "../api/ArticleDetail";
import Articles from "../../components/HomeAndLandingPages/Articles";
import Head from "next/head";

const articlesrozgaar = (props) => {
  const [articleDetailData, setArticleDetailData] = useState(
    props.ArticleDetails
  );
  const [articleData, setArticledata] = useState(props.ArticleListData.data);

  const router = useRouter();
  useEffect(() => {
    setArticleDetailData(props.ArticleDetails);
    setArticledata(props.ArticleListData.data);
  }, []);

  const pages = [
    {
      name: "Articles",
      href: "https://www.rozgaarindia.com/articles-rozgaar" + router.query.id,
      current: true,
    },
  ];
  let date = articleDetailData.data.UpdatedAt
    ? articleDetailData.data.UpdatedAt.slice(0, 10)
    : "";

  return (
    <div>
      <Head>
        <meta
          name="google-site-verification"
          content="u54uZFqgNrTkSuahTM5I6bofhv_If1lA4yajPDkIaVg"
        />
        <title>
        {articleDetailData.Title}
        </title>
        <link
          rel="canonical"
          href={
            "https://www.rozgaarindia.com/articlesRozgaar" + "/" + router.query.id
          }
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content={articleDetailData.ShortDescription}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/IPassets/rozgaarIcon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/IPassets/rozgaarIcon.png"
        />
        <meta
          property="og:title"
          content="Best Remote work and freelance projects at RozgaarIndia.com via Times Ascent"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={articleDetailData.ShortDescription}
        />
        <meta
          property="og:url"
          content={
            "https://www.rozgaarindia.com/articlesRozgaar" + "/" + router.query.id
          }
        />
        <meta
          property="og:image"
          content="https://www.sasone.in/IPassets/rozgaarIcon.png"
        />
        <meta
          property="twitter:image"
          content="https://www.sasone.in/IPassets/rozgaarIcon.png"
        />
        <meta
          property="twitter:title"
          content="Best Remote work and freelance projects at RozgaarIndia.com via Times Ascent"
        />
        <meta
          property="twitter:description"
          content={articleDetailData.ShortDescription}
        />
        <meta property="twitter:card" content="summary" />
        <meta
          property="twitter:site"
          content="https://twitter.com/sasonesocial"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
      </Head>
      <RiHeader
        userLoggedIn={props.UserLoggedIn}
        profile={props.ProfilePicture}
        firstName={props.FirstName}
        lastName={props.LastName}
      />
      <BreadCrumb pages={pages} />
      <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="w-full">
          <h1 className="text-center text-2xl font-bold">
            {" "}
            {articleDetailData.data.Title}
          </h1>
          <div className="flex justify-end gap-2 items-center py-3">
            <a
              href={
                "https://facebook.com/sharer/sharer.php?u=https://freelancer.rozgaarindia.com" +
                router.asPath
              }
              target="_blank"
              //   className="w-10 h-10"
              rel="noreferrer"
            >
              <GrFacebookOption size={20} />
            </a>
            <a
              href={
                "https://twitter.com/intent/tweet?url=https://freelancer.rozgaarindia.com" +
                router.asPath
              }
              target="_blank"
              //   className="w-10 h-10"
              rel="noreferrer"
            >
              <AiOutlineTwitter size={20} />
            </a>
            <a
              href={
                "https://web.whatsapp.com/send?text=https://freelancer.rozgaarindia.com" +
                router.asPath
              }
              target="_blank"
              //   className="w-10 h-10"
              rel="noreferrer"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
          <div>
            <img
              src={props.ArticleDetails.data.ArticleImage.ArticleImage}
              className="w-full"
            />
            <div className="text-right text-sm font-semibold pt-2">
              Posted date {date}
            </div>
            <div className="pb-8">
              <div
                dangerouslySetInnerHTML={{
                  __html: articleDetailData.data.ArticleText,
                }}
                className="py-2 prose-neutral text-neutral-900 text-prose"
              />
            </div>
            <div className="text-2xl lg:text-4xl font-bold text-center ">
              Recommended Read
            </div>
            <div className="text-xl lg:text-2xl  text-center mt-1 mb-4 lg:mb-8">
              Check whats trending in freelance and remote
            </div>
            <div>
              <Articles articleCard={articleData} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export async function getServerSideProps(context) {
  const ArticleDetails = await ArticleDetail(context.query.id[0]);
  const ArticleListData = await ArticleList();
  const UserLoggedIn = context.req.cookies.Client_userLoggedIn || null;
  const FirstName = context.req.cookies.Client_FirstName || null;
  const LastName = context.req.cookies.Client_LastName || null;
  const ProfilePicture = context.req.cookies.Client_ProfilePicture || "";

  /*  if (!context.req.cookies.Client_userLoggedIn) {
     return {
       props: {},
       redirect: { destination: "/login" },
     };
   } */

  return {
    props: {
      UserLoggedIn,
      FirstName,
      LastName,
      ProfilePicture,
      resolvedUrl: context.resolvedUrl,
      ArticleListData,
      ArticleDetails,
    },
  };
}
export default articlesrozgaar;
