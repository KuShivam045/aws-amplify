
import Footer from "../../components/Footer";
import BreadCrumb from "../../components/MainComponents/BreadCrumb";
import NewFreelancerDashBoard from "../../components/DashBoardComponents/NewFreelancerDashboard";
import Cookies from "js-cookie";
import TransactionsList from "../../components/TransactionsList";
import { useEffect, useState } from "react";
import RiHeader from "../../components/MainComponents/RiHeader";
import Head from "next/head";

const mytransaction = (props) => {
  const [trasactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let userID = Cookies.get("Client_userID");

  useEffect(() => {
    trasactionDetails();
  }, []);

  const trasactionDetails = async () => {
    setIsLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 52e6faf229b4c8d1f6832edd4dde9a9d60a8c0d3"
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      ClientId: userID,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch(
      process.env.BASE_URL + "/api/client/ClientTransaction",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "SUCCESS") {
          setTransactions(result.data);
        } else {
          console.log("fail");
        }
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const pages = [
    {
      name: "Transactions",
      href: "https://www.rozgaarindia.com/employer-workplace/my-transaction",
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
        Transactions and Invoices | Rozgaar
        </title>
        <link rel="canonical" href="https://www.rozgaarindia.com/employer-workplace/my-trasaction/"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Transaction History shows all payments made to the freelancers. We accept Visa, Mastercard, Credit Card, Debit Card, Netbanking, Wallets like Paytm, Google Pay, PhonePay  and more"
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
          content="Transactions and Invoices | Rozgaar"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Transaction History shows all payments made to the freelancers. We accept Visa, Mastercard, Credit Card, Debit Card, Netbanking, Wallets like Paytm, Google Pay, PhonePay  and more"
        />
        <meta
          property="og:url"
          content="https://www.rozgaarindia.com/employer-workplace/my-trasaction/"
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
          content="Transactions and Invoices | Rozgaar"
        />
        <meta
          property="twitter:description"
          content="Transaction History shows all payments made to the freelancers. We accept Visa, Mastercard, Credit Card, Debit Card, Netbanking, Wallets like Paytm, Google Pay, PhonePay  and more"
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
          <div>
          <h1 className="text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl mb-4">
                    Transactions
                  </h1>
            {trasactions.length > 0 ? (
              <TransactionsList data={trasactions} />
            ) : (
              <div className="flex flex-col items-center justify-center h-full">
             <div className="h-52 w-52">
             <img
                  src={"/assets/notification/Transaction.svg"}
                  className="w-full h-full"
                  alt="Transaction_Logo"
                  title="Transaction_Logo"
                  loading="lazy"
                  width={100}
                  height={150}
                />
             </div>
              <h2 className="text-gray-500">You do not have any Transaction yet.</h2>
            </div>
            )}
          </div>
        </NewFreelancerDashBoard>
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
    },
  };
}
export default mytransaction;
