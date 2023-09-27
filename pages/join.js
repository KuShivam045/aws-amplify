import Footer from "../components/Footer";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import clientImage from "../public/assets/Joinpage/Client.png";
import freelancerImage from "../public/assets/Joinpage/Freelancer.png";
import RedirectFreelancer from "../components/ModalComponents/RedirectFreelancer";
import RiHeader from "../components/MainComponents/RiHeader";
import Head from "next/head";

const mailingLists = [
  {
    id: 1,
    title: "Client",
    descFirstLine: "I'm a Client",
    descSecondLine: "hiring a freelancer",
    imagesrc: (props) => {
      return (
        <Image
          alt="client logo"
          src={clientImage}
          height={100}
          width={100}
          {...props}
        />
      );
    },
  },
  {
    id: 2,
    title: "Freelancer",
    descFirstLine: "I'm a freelancer looking for",
    descSecondLine: "freelance job and project",
    imagesrc: (props) => {
      return (
        <Image
          alt="freelancer logo"
          src={freelancerImage}
          height={100}
          width={100}
          {...props}
        />
      );
    },
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const join = (props) => {
  const [selectedMailingLists, setSelectedMailingLists] = useState(
    mailingLists[0]
  );
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
        <Head>
      <meta
          name="google-site-verification"
          content="u54uZFqgNrTkSuahTM5I6bofhv_If1lA4yajPDkIaVg"
        />
        <title>
        Join | Rozgaar India
        </title>
        <link rel="canonical" href="https://www.rozgaarindia.com/join" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Join freelance jobs and projects platform.Hire freelancer globally for short or long term work. Make your remote team and save full time employee cost."
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
          content="Join | Rozgaar India"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Join freelance jobs and projects platform.Hire freelancer globally for short or long term work. Make your remote team and save full time employee cost."
        />
        <meta
          property="og:url"
          content="https://www.rozgaarindia.com/join"
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
          content="Join | Rozgaar India"
        />
        <meta
          property="twitter:description"
          content="Join freelance jobs and projects platform.Hire freelancer globally for short or long term work. Make your remote team and save full time employee cost."
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
      <div className="bg-gray-200">
      <RiHeader
        userLoggedIn={props.UserLoggedIn}
        profile={props.ProfilePicture}
        firstName={props.FirstName}
        lastName={props.LastName}
      />
      {modalOpen && (
        <RedirectFreelancer
          setModalOpen={setModalOpen}
          modalOpen={modalOpen}
          href="https://freelancer.rozgaarindia.com/signup"
        />
      )}
      <div className="max-w-4xl mx-auto px-4 py-20 lg:py-16 bg-white lg:my-20 rounded-xl">
        <RadioGroup
          value={selectedMailingLists}
          onChange={setSelectedMailingLists}
        >
          <RadioGroup.Label className="text-2xl flex justify-center tracking-wider font-display font-bold leading-6 text-gray-900">
            Join as a Client or Freelancer
          </RadioGroup.Label>

          <div className="mt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4 max-w-3xl mx-auto">
            {mailingLists.map((mailingList) => (
              <RadioGroup.Option
                key={mailingList.id}
                value={mailingList}
                className={({ active }) =>
                  classNames(
                    active
                      ? "border-blue-600 ring-2 ring-blue-600"
                      : "border-gray-300",
                    "relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none"
                  )
                }
              >
                {({ checked, active }) => (
                  <>
                    <span className="flex justify-center flex-1">
                      <span className="flex flex-col justify-center items-center">
                        <div className="flex items-center w-24 h-20">
                          <mailingList.imagesrc className="h-full w-full" />
                        </div>
                        <RadioGroup.Description
                          as="span"
                          className="mt-4 flex items-center justify-center text-md text-gray-700"
                        >
                          {mailingList.descFirstLine}
                        </RadioGroup.Description>
                        <RadioGroup.Description
                          as="span"
                          className="mt-1 flex items-center justify-center text-md text-gray-700"
                        >
                          {mailingList.descSecondLine}
                        </RadioGroup.Description>
                      </span>
                    </span>
                    <CheckCircleIcon
                      className={classNames(
                        !checked ? "invisible" : "",
                        "h-5 w-5 text-blue-600"
                      )}
                      aria-hidden="true"
                    />
                    <span
                      className={classNames(
                        active ? "border" : "border-2",
                        checked ? "border-blue-600" : "border-transparent",
                        "pointer-events-none absolute -inset-px rounded-lg"
                      )}
                      aria-hidden="true"
                    />
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
        <div className="flex justify-center">
          {selectedMailingLists.title === "Client" ? (
            <a
              className="mt-10 cursor-pointer inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-3 bg-blue-600 text-white hover:bg-blue-500"
              href="/signup"
            >
              <span>
                Signup as a Client <span aria-hidden="true">→</span>
              </span>
            </a>
          ) : (
            <div
              className="mt-10 cursor-pointer inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-3 bg-blue-600 text-white hover:bg-blue-500"
              onClick={() => setModalOpen(true)}
            >
              <span>
                Signup as a Freelancer <span aria-hidden="true">→</span>
              </span>
            </div>
          )}
        </div>
        <p className="mt-10 text-center text-md text-gray-500">
          Already have an account?
          <a
            href="/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Login
          </a>
        </p>
      </div>
      <Footer />
    </div>
    </div>
  );
};
export async function getServerSideProps(context) {
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
    },
  };
}
export default join;
