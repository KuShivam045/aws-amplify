import React from "react";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";

const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ServerIcon,
  },
];

const MatchedFreelancers = () => {
  return (
    <div className="overflow-hidden bg-white py-8 sm:py-19">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Quick and Easy freelancer hiring
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Receive prioritised batches of profiles so that you can stop
                wasting your time sorting hundreds of applicants and connect,
                collaborate, pay and get work done in a secure environment
              </p>
              <a
                class="inline-flex justify-center rounded-md py-2 px-4 text-base font-semibold tracking-tight shadow-sm focus:outline-none bg-blue-600 text-white hover:text-blue-600 hover:bg-blue-100 focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-blue-50 active:text-blue-900/80 disabled:opacity-40 disabled:hover:text-blue-600 mt-8"
                aria-label="Get started with freelancer hiring"
                href="/par-stepfirst"
              >
                Get started
              </a>
            </div>
          </div>
          <Image
            src="/assets/HomePage/mapRozgaar.jpg"
            alt="Product screenshot"
            className="w-full h-full "
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default MatchedFreelancers;
