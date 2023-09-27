import React from "react";
import Footer from "../../components/Footer";
import { useState } from "react";
import NewFreelancerDashBoard from "../../components/DashBoardComponents/NewFreelancerDashboard";
import BreadCrumb from "../../components/MainComponents/BreadCrumb";
import RiHeader from "../../components/MainComponents/RiHeader";
import Head from "next/head";

const perks = [
  {
    name: "Free returns",
    imageUrl: "/assets/HireAssistent/IconFirst.svg",
    description:
      "Your Rozgaar Assistant will Understand your hiring requirement",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-collection-03.jpg",
    imageAlt:
      "Person sitting at a wooden desk with paper note organizer, pencil and tablet.",
  },
  {
    name: "Same day delivery",
    imageUrl: "/assets/HireAssistent/IconSecond.svg",
    description: "Your Rozgaar Assistant will Post your requirement.",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-collection-02.jpg",
    imageAlt: "Man wearing a comfortable and casual cotton t-shirt.",
  },
  {
    name: "All year discount",
    imageUrl: "/assets/HireAssistent/IconThird.svg",
    description: "Your Rozgaar Assistant will Select the freelancer",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-collection-01.jpg",
    imageAlt: "Woman wearing a comfortable cotton t-shirt.",
  },
  {
    name: "For the planet",
    imageUrl: "/assets/HireAssistent/IconFour.svg",
    description: "Your Rozgaar Assistant will Track progress of the work.",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-collection-01.jpg",
    imageAlt: "Woman wearing a comfortable cotton t-shirt.",
  },
];

const pages = [
  {
    name: "Hire Assistant",
    href: "https://www.rozgaarindia.com/employer-workplace/hire-assistant/",
    current: true,
  },
];

const hireassistant = (props) => {
  return (
    <div>
      <Head>
      <meta
          name="google-site-verification"
          content="u54uZFqgNrTkSuahTM5I6bofhv_If1lA4yajPDkIaVg"
        />
        <title>
        Best Remote work and freelance projects at RozgaarIndia.com via Times Ascent
        </title>
        <link rel="canonical" href="https://www.rozgaarindia.com/employer-workplace/hire-assistant/"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Rozgaar India is one of India's Leading online service marketplace for remote work and freelance projects. You can find the best skilled online service providers at RozgaarIndia.com"
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
          content="Rozgaar India is one of India's Leading online service marketplace for remote work and freelance projects. You can find the best skilled online service providers at RozgaarIndia.com"
        />
        <meta
          property="og:url"
          content="https://www.rozgaarindia.com/employer-workplace/hire-assistant/"
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
          content="Rozgaar India is one of India's Leading online service marketplace for remote work and freelance projects. You can find the best skilled online service providers at RozgaarIndia.com"
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
      <div className="bg-gray-100">
        <BreadCrumb pages={pages} />
        <div className=" max-w-7xl mx-auto">
          <NewFreelancerDashBoard>
            <main>
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 hidden sm:flex sm:flex-col"
                >
                  <div className="relative w-full flex-1 bg-gray-800">
                    <div className="absolute inset-0 overflow-hidden">
                      <img
                        src="/assets/HireAssistent/WebMainBanner.png"
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative max-w-3xl px-4 pb-96 text-center lg:text-start sm:px-6 sm:pb-0 lg:px-8">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 flex flex-col sm:hidden"
                  >
                    <div className="relative w-full flex-1 bg-gray-800">
                      <div className="absolute inset-0 overflow-hidden">
                        <img
                          src="/assets/HireAssistent/WebMainBanner.png"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative py-32">
                    <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
                      Rozgaar Assistant
                    </h1>
                    <p className="font-semibold tracking-tight text-neutral-900 text-2xl mt-3">
                      Next-level support for you and your business
                    </p>
                    <div className="mt-4 sm:mt-6">
                      <div className="inline-block rounded-md border border-transparent bg-[#1d7b82] px-8 py-3 font-medium text-white">
                        Coming soon
                      </div>
                    </div>
                  </div>
                </div>

                <section
                  aria-labelledby="collection-heading"
                  className="lg:absolute lg:inset-0 lg:top-96 relative -mt-96 sm:mt-0"
                >
                  <h2 id="collection-heading" className="sr-only">
                    Collections
                  </h2>
                  <div className="mx-auto grid max-w-md grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:grid-cols-4 sm:gap-x-6 sm:gap-y-0 sm:px-6 lg:gap-x-8 lg:px-8">
                    {perks.map((collection) => (
                      <div
                        key={collection.name}
                        className="group relative rounded-lg bg-white shadow-xl flex flex-col justify-center p-4 text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                      >
                        <div className="md:flex-shrink-0">
                          <div className="flow-root">
                            <img
                              className="mx-auto h-12 w-auto"
                              src={collection.imageUrl}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6 flex flex-col-reverse">
                          <h3 className="mt-3 text-base font-medium text-gray-900">
                            {collection.name}
                          </h3>
                          <p className="text-sm text-gray-500 h-16">
                            {collection.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
              <section
                aria-labelledby="perks-heading"
                className="border-t border-gray-200 bg-gray-50 pb-10"
              >
                <h2 id="perks-heading" className="sr-only">
                  Our perks
                </h2>

                <div className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 sm:pt-32 lg:px-8">
                  <div className="lg:mt-20 space-y-6">
                    <dl>
                      <div>
                        <dt class="text-lg font-semibold">
                          What does Rozgaar Assistant do?
                        </dt>
                        <dd class="mt-1 line-clamp-6 text-base leading-7 text-gray-600">
                          Rozgaar personal assistants can be hired for
                          performing certain task for you including
                          understanding your hiring requirement, posting a
                          requirement, selecting top freelancer for the task and
                          stay in touch with you with regular work update.
                        </dd>
                      </div>
                    </dl>
                    <dl className="">
                      <div>
                        <dt class="text-lg font-semibold">
                          Benefits of hiring a Rozgaar Assistant?
                        </dt>
                        <dd class="mt-1 line-clamp-6 text-base leading-7 text-gray-600">
                          Hiring a virtual assistant on rozgaarindia.com is both
                          easy and affordable. You can choose to hire for a
                          certain period of time, or you can hire for specific
                          project, which makes hiring easy & cost efficient and
                          help you focus on your core business.
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>

                <div class="relative mx-auto rounded-3xl ring-1 ring-gray-200 mt-16 lg:mx-8 sm:flex sm:justify-end px-4 lg:px-8 ">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 hidden sm:flex sm:flex-col"
                  >
                    <div className="relative w-full flex-1">
                      <div className="absolute inset-0 overflow-hidden">
                        <img
                          src="/assets/HireAssistent/WebSecondBanner.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center rounded-3xl"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative max-w-md px-4  text-center lg:text-start sm:px-6  lg:px-8">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 flex flex-col sm:hidden"
                    >
                      <div className="relative w-full flex-1">
                        <div className="absolute inset-0 overflow-hidden">
                          <img
                            src="/assets/HireAssistent/WebSecondBanner.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="relative py-32">
                      <div className="text-lg font-bold tracking-tight text-neutral-900 ">
                        Hire Skilled
                      </div>
                      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
                        Personal Assistant
                      </h1>
                      <p className="font-semibold tracking-tight text-neutral-900 text-2xl mt-3">
                        and make hiring easy on Rozgaar.
                      </p>
                      <div className="mt-4 sm:mt-6">
                        <div className="inline-block rounded-md border border-transparent bg-[#1d7b82] px-8 py-3 font-medium text-white">
                          Coming soon
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </NewFreelancerDashBoard>
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
export default hireassistant;
