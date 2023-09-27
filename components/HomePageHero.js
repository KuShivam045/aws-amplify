import Image from "next/image";
import React from "react";
import RiTextTransition from "./HomeAndLandingPages/RiTextTransition";

const HomePageHero = (props) => {

  const ArrowUpRight = (props) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
      </svg>
    )
  }

  return (
    <section className="mx-auto max-w-full">
      <div className="relative overflow-hidden lg:h-96">
        <div className="absolute inset-0 hidden lg:block">
          <Image
            src={props.imgUrl}
            alt=""
            height={100}
            width={100}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 block lg:hidden">
          <Image
            src="/assets/banners/CMobileBannerFourth.webp"
            alt=""
            height={100}
            width={100}
            className="h-full w-full object-cover object-center"
          />
        </div>
        
        <div aria-hidden="true" className="relative h-60 lg:h-96 w-full lg:hidden" />
        <div aria-hidden="true" className="relative h-28 lg:h-32 w-full lg:hidden" />
        <div className="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg p-6  sm:flex sm:items-center sm:justify-between lg:inset-y-0 lg:max-w-7xl mx-auto lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg">
          <div className="z-10 max-w-2xl lg:col-span-7 lg:max-w-auto lg:pt-6 xl:col-span-6">
            <h1 className="text-4xl font-medium font-display tracking-wider text-neutral-900 sm:text-5xl">
              <div className="font-bold">HIRE REMOTE</div>
              <div className="text-blue-700 font-bold">
                FREELANCERS
              </div>
            </h1>
            <RiTextTransition/>
            
            {/* <p className="mt-6 text-lg text-gray-600">
              Simplify Remote Hiring for Success. Discover Freelancers on Your
              Terms, Any Duration. Effortless, Efficient, Exceptional.
            </p> */}
            <div className="mt-8 flex flex-col gap-x-6 gap-y-4">
              <a
                aria-label="Download on the App Store"
                className="flex flex-shrink-0 gap-4 rounded-lg transition-colors text-blue-800 py-[calc(theme(spacing.2)-1px)] font-semibold"
                href={"/par-stepfirst"}
              >
                <span className="animate-bounce">Post a Job for free</span>
                <ArrowUpRight className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
              </a>
              <a
                aria-label="Download on the App Store"
                className="flex flex-shrink-0 gap-4 rounded-lg transition-colors text-blue-800 py-[calc(theme(spacing.2)-1px)] font-semibold"
                href={"/freelance-job-posting"}
              >
                <span className="animate-bounce">Freelance Jobs & Projects</span>
                <ArrowUpRight className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageHero;
