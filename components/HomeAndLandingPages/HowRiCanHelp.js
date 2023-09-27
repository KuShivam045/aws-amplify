import Image from "next/image";
import React from "react";

const HowRiCanHelp = () => {
  const data = [
    {
      id: 1,
      title: "Tell us your requirement",
      href: "/par-stepfirst",
      description:
        "Answer a few questions and we’ll connect you with verified freelancers ready to work on your terms.",
      tip: 'Tip: Upgrade to "Urgent" to receive freelancers within an hour',
      image: "/assets/HomePage/yourRequirement.png",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Smart Freelancer Matching",
      href: "/par-stepfirst",
      description:
        "Receive top 5 trusted freelancers profiles.You can initiate a free chat to discuss your work.",
      tip: "Tip: Unlock “waitlist” to review, compare and select the best Freelancers for your job",
      image: "/assets/HomePage/freelancerMatching.png",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Connect with the Freelancer",
      href: "/par-stepfirst",
      description:
        "Select the Freelancer(s) you want to hire, e-sign the NDA, discuss payment terms and timeline.",
      tip: "Tip: Share non-disclosure agreement with the freelancer(s) to keep things confidential",
      image: "/assets/HomePage/connectFreelancerr.png",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Secure Payment system",
      href: "/par-stepfirst",
      description:
        "When you pay, the funds will remain secured for a certain time and released to freelancer automatically.",
      tip: "Tip: Always pay your freelancers on our platform in order to assure maximum safety",
      image: "/assets/HomePage/releasePayment.png",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];
  return (
    <section className="hidden lg:block bg-gray-200 py-6 md:py-8 lg:py-12">
      <div className="lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <h2
          className="scroll-mt-24 text-4xl font-display text-center font-bold text-neutral-900"
          id="help"
        >
          See how we can help you
        </h2>
        <div class="mt-8 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-4">
          {data.map((item) => (
            <div className="">
              <a
                className="sm:flex lg:block p-2 cursor-pointer transition duration-100 ease-in-out scale-100 hover:scale-105"
                href="/par-stepfirst"
              >
                <div className="sm:flex-shrink-0">
                  <div className="h-[50px] w-[50px] relative text-left">
                    <Image
                      alt="help"
                      loading="lazy"
                      height={100}
                      width={100}
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: "contain",
                        color: "transparent",
                      }}
                      src={item.image}
                    />
                  </div>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h3 className="text-sm font-medium">{item.title}</h3>
                  <p className="mt-2 text-sm line-clamp-4 lg:h-20">
                    {item.description}
                  </p>
                </div>
              </a>
              <div>
                <div class="bg-timesPurple text-black p-3 py-5 flex flex-col justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="yellow"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 text-black m-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                    />
                  </svg>
                  <em class="text-center text-gray-700 mt-2">{item.tip}</em>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowRiCanHelp;
