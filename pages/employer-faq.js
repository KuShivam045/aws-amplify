import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Faq from "../components/HowtoHire/Faq";
import BreadCrumb from "../components/MainComponents/BreadCrumb";
import Cookies from "js-cookie";
import RiHeader from "../components/MainComponents/RiHeader";
import Head from "next/head";

const employerfaq = (props) => {
  const [Data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [question, setQuestion] = useState([]);
  const [answer, setAnswer] = useState([]);

  const pages = [
    {
      name: "Frequently Asked Questions",
      href: "https://www.rozgaarindia.com/employer-faq",
      current: true,
    },
  ];
  useEffect(() => {
    FrequentlyAskedQuestions();
  }, []);

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
      <Head>
      <meta
          name="google-site-verification"
          content="u54uZFqgNrTkSuahTM5I6bofhv_If1lA4yajPDkIaVg"
        />
        <title>
        Frequently Asked Questions about Freelance Jobs  | Rozgaar India
        </title>
        <link rel="canonical" href="https://www.rozgaarindia.com/employer-faq" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Read the Freelancer FAQ's to learn everything about Freelancing, freelance projects, remote work, contract work and gigs."
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
          content="Frequently Asked Questions about Freelance Jobs  | Rozgaar India"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Read the Freelancer FAQ's to learn everything about Freelancing, freelance projects, remote work, contract work and gigs."
        />
        <meta
          property="og:url"
          content="https://www.rozgaarindia.com/employer-faq"
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
          content="Frequently Asked Questions about Freelance Jobs  | Rozgaar India"
        />
        <meta
          property="twitter:description"
          content="Read the Freelancer FAQ's to learn everything about Freelancing, freelance projects, remote work, contract work and gigs."
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
      <div className="mt-10 lg:my-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Faq
          faqs={Data}
          onClick={() => setShow(!show)}
          show={show}
          setShow={setShow}
        />
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

export default employerfaq;
