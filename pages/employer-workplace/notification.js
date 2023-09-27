
import Footer from "../../components/Footer";
import BreadCrumb from "../../components/MainComponents/BreadCrumb";
import NewFreelancerDashBoard from "../../components/DashBoardComponents/NewFreelancerDashboard";
import Cookies from "js-cookie";
import classes from "./Notification.module.css";
import { useEffect, useState } from "react";
import RISkeletonLoading from "../../components/RISkeletonLoading";
import {
  FcUnlock,
  FcMoneyTransfer,
  FcHighPriority,
  FcServices,
  FcRating,
  FcDocument,
  FcInfo,
  FcOk,
  FcApproval,
  FcBriefcase,
  FcFile,
  FcPuzzle,
} from "react-icons/fc";
import { RiMessage2Fill } from "react-icons/ri";
import { getNotification } from "../api/NotificationApi";
import RiHeader from "../../components/MainComponents/RiHeader";
import { BellIcon } from "@heroicons/react/20/solid";
import Head from "next/head";

const notification = (props) => {
  const [isdataUnread, setIsDataUnread] = useState([]);
  const [readData, setReadData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let userID = Cookies.get("Client_userID");

  useEffect(() => {
    GetNotificationAPI();
  }, []);

  const GetNotificationAPI = () => {
    setIsLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 52e6faf229b4c8d1f6832edd4dde9a9d60a8c0d3"
    );
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      UserId: userID,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(
      process.env.BASE_URL + "/api/rozgaarapi/GetNotification",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setIsDataUnread(result.dataunread);
        setReadData(result.dataread);
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setIsLoading(false);
      });
  };
  const timeSince = (date) => {
    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
      return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  };

  console.log(readData);

  const SwitchStatus = (imagesfornotification) => {
    switch (imagesfornotification) {
      case "Post Live":
        return (
          <div>
            <FcBriefcase className={classes.icon} />
          </div>
        );
      case "Post Rejected":
        return (
          <div>
            <FcHighPriority className={classes.icon} />
          </div>
        );
      case "Urgent":
        return (
          <div>
            <FcInfo className={classes.icon} />
          </div>
        );
      case "Feature":
        return (
          <div>
            <FcPuzzle className={classes.icon} />
          </div>
        );
      case "Personal Manager":
        return (
          <div>
            <FcServices className={classes.icon} />
          </div>
        );
      case "NDA ":
        return (
          <div>
            <FcFile className={classes.icon} />
          </div>
        );
      case "Waitlist Unlocked":
        return (
          <div>
            <FcUnlock className={classes.icon} />
          </div>
        );
      case "Freelancer Proposal":
        return (
          <div>
            <FcDocument className={classes.icon} />
          </div>
        );
      case "Hired Freelancer":
        return (
          <div>
            <FcApproval className={classes.icon} />
          </div>
        );
      case "Request Payment":
        return (
          <div>
            <FcMoneyTransfer className={classes.icon} />
          </div>
        );
      case "Sucess Payment Message":
        return (
          <div>
            <FcOk className={classes.icon} />
          </div>
        );
      case "Rate And Review":
        return (
          <div>
            <FcRating className={classes.icon} />
          </div>
        );
      case "MESSAGE":
        return (
          <div>
            <RiMessage2Fill className={classes.icon} />
          </div>
        );
      default:
        return <></>;
    }
  };
  const pages = [
    {
      name: "Notifications",
      href: "https://www.rozgaarindia.com/employer-workplace/notification/",
      current: true,
    },
  ];
  return (
    <div>
        <Head>
      <meta
          name="google-site-verification"
          content="u54uZFqgNrTkSuahTM5I6bofhv_If1lA4yajPDkIaVg"
        />
        <title>
        Stay updated with freelancer notifications | Rozgaar
        </title>
        <link rel="canonical" href="https://www.rozgaarindia.com/employer-workplace/notification/" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Turn on Rozgaar notifications and get alerts on freelancer messages, work proposals, project status. Hassle Free relevant updates"
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
          content="Stay updated with freelancer notifications | Rozgaar"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Turn on Rozgaar notifications and get alerts on freelancer messages, work proposals, project status. Hassle Free relevant updates"
        />
        <meta
          property="og:url"
          content="https://www.rozgaarindia.com/employer-workplace/notification/"
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
          content="Stay updated with freelancer notifications | Rozgaar"
        />
        <meta
          property="twitter:description"
          content="Turn on Rozgaar notifications and get alerts on freelancer messages, work proposals, project status. Hassle Free relevant updates"
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
      <div className="mx-auto max-w-7xl px-4 pb-4 lg:pb-6">
        <NewFreelancerDashBoard>
          <div className="border border-gray-300 p-4 rounded-lg">
            <div className="text-lg font-semibold text-gray-900 inline-flex items-center">
              Notification
            </div>
            <div className="border border-gray-200 mt-1" />
            <div className="">
              <div className="">
                {isdataUnread || readData ? (
                  <div>
                    {isLoading ? (
                      <div>
                        <RISkeletonLoading loadingType={"Notifation"} />
                      </div>
                    ) : (
                      <div>
                        {isdataUnread &&
                          isdataUnread.map((item, index) => {
                            return (
                              <>
                                <div
                                  key={index}
                                  className={classes.Notification_flex}
                                >
                                  {SwitchStatus(item.Event)}
                                  <div>
                                    <div
                                      className={
                                        Text === "dataunread"
                                          ? "text-base font-medium leading-6 text-gray-900"
                                          : "text-base font-semibold leading-6 text-gray-900"
                                      }
                                    >
                                      {item.Text}
                                    </div>
                                    <div className="text-xs font-semibold leading-6 text-gray-700">
                                      {timeSince(new Date(item.UpdatedDate))}{" "}
                                      ago
                                    </div>
                                  </div>
                                </div>
                              </>
                            );
                          })}

                        {readData &&
                          readData.map((item, index) => {
                            return (
                              <>
                                <div
                                  key={index}
                                  className={classes.Notification_flex}
                                >
                                  {SwitchStatus(item.Event)}
                                  <div>
                                    <div
                                      className={
                                        Text === "dataunread"
                                          ? classes.notification_text
                                          : classes.notification_textbold
                                      }
                                    >
                                      {item.Text}
                                    </div>
                                    <div className={classes.Notification_time}>
                                      {timeSince(new Date(item.UpdatedDate))}{" "}
                                      ago
                                    </div>
                                  </div>
                                </div>
                              </>
                            );
                          })}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col justify-center items-center">
                    <img
                      src={"/assets/notification/Nothing.svg"}
                      className={classes.blank_Notification_img}
                      alt="Notification_Image"
                      title="Notification_Image"
                      loading="lazy"
                      width={"20%"}
                      height={130}
                    />
                    <div className="text-lg font-semibold leading-6 text-gray-700 mt-4">
                      Nothing here!
                    </div>
                    <p className="leading-6 text-gray-700">
                      You do not have any notifications yet
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </NewFreelancerDashBoard>
      </div>
      <Footer />
    </div>
  );
};

export async function getServerSideProps(context) {
  const notificationList = await getNotification(
    context.req.cookies.Client_userID
  );
  const UserLoggedIn = context.req.cookies.Client_userLoggedIn || null;
  const FirstName = context.req.cookies.Client_FirstName || null;
  const LastName = context.req.cookies.Client_LastName || null;
  const ProfilePicture = context.req.cookies.Client_ProfilePicture || "";

  if (!context.req.cookies.Client_userLoggedIn) {
    return {
      props: {},
      redirect: { destination: "/login" },
    };
  }

  return {
    props: {
      UserLoggedIn,
      FirstName,
      LastName,
      ProfilePicture,
      notificationList,
    },
  };
}
export default notification;
