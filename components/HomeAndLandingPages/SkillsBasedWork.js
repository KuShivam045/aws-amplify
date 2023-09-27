import React from "react";

const SkillsBasedWork = (props) => {
  return (
    <aside
      id="skill-marketplace"
      aria-label="Explore our skill marketplace"
      className="relative bg-sky-50 py-12 sm:py-24"
    >
      <div className="text-slate-900/10">
        <svg
          aria-hidden="true"
          className="absolute inset-0 h-full w-full opacity-10"
        >
          <defs>
            <pattern
              id=":S4:"
              width="128"
              height="128"
              patternUnits="userSpaceOnUse"
              x="50%"
              patternTransform="translate(0 80)"
            >
              <path d="M0 128V.5H128" fill="none" stroke="currentColor"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#:S4:)"></rect>
        </svg>
      </div>
      <div className="relative flex flex-col lg:flex-row justify-between gap-y-8 lg:gap-y-0 px-6 lg:px-8">
        <figure>
          <blockquote className="mt-10 font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-start">
            <p>Exlpore our skill</p>
            <p>marketplace.</p>
          </blockquote>
        </figure>
        <div>
          <ul role="list" className="max-w-2xl flex flex-wrap gap-1.5">
            {props.data &&
              props.data.slice(0, 14).map((person, index) => (
                <li key={index} className="cursor-pointer ">
                  <a
                    target="_blank"
                    href="/freelance-job-posting"
                    className="flex items-center rounded-xl border border-sky-300 bg-sky-50/50 text-sky-800 px-2 py-1.5 hover:bg-sky-400 hover:text-sky-50"
                  >
                    {person.Skill}
                  </a>
                </li>
              ))}
          </ul>
          <a
            href="/skills"
            className="cursor-pointer mt-8 ml-auto items-end flex flex-col px-6 lg:px-8"
          >
            <div className="cursor-pointer inline-flex gap-0.5 justify-between text-sm font-medium transition rounded-full bg-zinc-200 py-1 px-3 text-zinc-900 hover:bg-zinc-200">
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
        </div>
      </div>
    </aside>
  );
};

export default SkillsBasedWork;
