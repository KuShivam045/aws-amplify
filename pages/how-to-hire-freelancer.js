import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BreadCrumb from "../components/MainComponents/BreadCrumb";
import NewFreelancerDashBoard from "../components/DashBoardComponents/NewFreelancerDashboard";
import Banner from "../components/HowtoHire/Banner";
import HireType from "../components/HowtoHire/HireType";
import HowToHireSec from "../components/HowtoHire/HowToHireSec";
import Faq from "../components/HowtoHire/Faq";
import Footer from "../components/Footer";
import RiHeader from "../components/MainComponents/RiHeader";
import Head from "next/head";

const howtohirefreelancer = (props) => {
  const [show, setShow] = useState(false);
  const [Data, setData] = useState([]);
  const [question] = useState([]);
  const [answer] = useState([]);
  const router = useRouter();

  useEffect(() => {
    FrequentlyAskedQuestions();
  }, []);

  const pages = [
    {
      name: "How to hire",
      href: "https://www.rozgaarindia.com/how-to-hire-freelancer",
      current: true,
    },
  ];

  const FrequentlyAskedQuestions = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 52e6faf229b4c8d1f6832edd4dde9a9d60a8c0d3"
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      Question: question,
      Answer: answer,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(process.env.BASE_URL + "/api/rozgaarapi/GetFaq", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div>
      <RiHeader
        userLoggedIn={props.UserLoggedIn}
        profile={props.ProfilePicture}
        firstName={props.FirstName}
        lastName={props.LastName}
      />
      <BreadCrumb pages={pages} />
      <div className="mx-auto max-w-7xl px-4 pb-4 lg:pb-6">
        <Banner UserLoggedIn={props.UserLoggedIn} />
        <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="w-full">
            <div className="mt-4 lg:mt-0">
              <HireType />
            </div>
            <div className="mt-4 lg:mt-0">
              <HowToHireSec />
            </div>
            <div className="mt-10 lg:mt-12">
              <Faq
                faqs={Data}
                onClick={() => setShow(!show)}
                show={show}
                setShow={setShow}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export async function getServerSideProps(context) {
  const UserLoggedIn = context.req.cookies.Client_userLoggedIn || null;
  const FirstName = context.req.cookies.Client_FirstName || null;
  const LastName = context.req.cookies.Client_LastName || null;
  const ProfilePicture = context.req.cookies.Client_ProfilePicture || "";

  return {
    props: {
      UserLoggedIn,
      FirstName,
      LastName,
      ProfilePicture,
    },
  };
}

export default howtohirefreelancer;
