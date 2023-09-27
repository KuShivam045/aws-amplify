import React from "react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const HireForOptions = (props) => {
  return (
    <div className="py-12 sm:py-24 px-6 sm:px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-display text-center font-bold text-neutral-900">
        Hire Remote Hybrid Flexible Freelancers
      </h2>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {props.data.map((item, idx) => (
          <section
            key={idx}
            className={classNames(
              "ring-1 ring-inset flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5",
              `${item.bgColor}`
            )}
          >
            <h3 className="flex items-center text-sm font-semibold text-gray-900">
              <svg
                viewBox="0 0 40 40"
                aria-hidden="true"
                className="h-6 w-6 flex-none fill-gray-500"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20ZM4 20c0 7.264 5.163 13.321 12.02 14.704C17.642 35.03 19 33.657 19 32V8c0-1.657-1.357-3.031-2.98-2.704C9.162 6.68 4 12.736 4 20Z"
                ></path>
              </svg>
              <span className="ml-4">{item.heading}</span>
            </h3>
            <p className="mt-5 text-sm text-gray-700 h-10">{item.subheading}</p>
            <div className="order-last mt-6">
              <ul
                role="list"
                className="-my-2 divide-y text-sm divide-gray-200 text-gray-700"
              >
                <li className="flex py-2">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-6 w-6 flex-none text-cyan-500"
                  >
                    <path
                      d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                      fill="currentColor"
                    ></path>
                    <circle
                      cx="12"
                      cy="12"
                      r="8.25"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></circle>
                  </svg>
                  <span className="ml-4">{item.bulletA}</span>
                </li>
                <li className="flex py-2">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-6 w-6 flex-none text-cyan-500"
                  >
                    <path
                      d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                      fill="currentColor"
                    ></path>
                    <circle
                      cx="12"
                      cy="12"
                      r="8.25"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></circle>
                  </svg>
                  <span className="ml-4">{item.bulletB}</span>
                </li>
              </ul>
            </div>
            <a
              href="/par-stepfirst"
              className="cursor-pointer flex mt-6"
            >
              <div
                className={classNames(
                  "cursor-pointer inline-flex gap-0.5 justify-between text-sm font-medium transition rounded-full",
                  `${item.textColor}`
                )}
              >
                View more
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 -mr-1"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
                  ></path>
                </svg>
              </div>
            </a>
          </section>
        ))}
      </div>
    </div>
  );
};

export default HireForOptions;
