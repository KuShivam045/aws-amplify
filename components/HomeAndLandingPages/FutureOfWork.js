import React from "react";

const FutureOfWork = () => {
  return (
    <section className="bg-[#F6F2F1] p-4 sm:p-6 lg:p-9 lg:py-18 py-9">
      <div className="mx-auto max-w-7xl block lg:flex justify-between px-6 lg:px-8">
        <div className="">
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
            <div>The Future</div>
            <div>of Work</div>
          </h2>
          {/* <p className="mt-6 text-lg leading-8 text-gray-700">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p> */}
        </div>
        <div className="space-y-4 text-gray-700 max-w-2xl mt-8 lg:mt-0">
          <p>
            Our mission is to simplify remote hiring providing most aligned
            freelancers for a day, month or a year fulfilling your professional
            needs.
          </p>
          <p>
            Our easy-to-use platform enables you to manage
            <strong className="mr-1">off-balance sheet</strong>
            talented workers in a single click with confidence and trust so you
            can save time and focus on your success.
          </p>
          <a
            href="/future-of-work"
            className="cursor-pointer mt-8 ml-auto items-end flex flex-col px-6 lg:px-8"
          >
            <div className="cursor-pointer inline-flex gap-0.5 justify-between text-sm font-medium transition rounded-full bg-zinc-200 py-1 px-3 text-zinc-900 hover:bg-zinc-200">
              Know more
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
        </div>
      </div>
    </section>
  );
};

export default FutureOfWork;
