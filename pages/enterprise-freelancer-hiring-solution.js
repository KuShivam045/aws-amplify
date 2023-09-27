import Head from "next/head";
import Footer from "../components/Footer";
import BreadCrumb from "../components/MainComponents/BreadCrumb";
import RiHeader from "../components/MainComponents/RiHeader";

const InsideSales = (props) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      version="1"
      viewBox="0 0 48 48"
      enable-background="new 0 0 48 48"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="#00BCD4">
        <rect x="19" y="22" width="10" height="20"></rect>
        <rect x="6" y="12" width="10" height="30"></rect>
        <rect x="32" y="6" width="10" height="36"></rect>
      </g>
    </svg>
  );
};
const SupportExecutives = (props) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      version="1"
      viewBox="0 0 48 48"
      enable-background="new 0 0 48 48"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="#FFA726">
        <circle cx="10" cy="26" r="4"></circle>
        <circle cx="38" cy="26" r="4"></circle>
      </g>
      <path
        fill="#FFB74D"
        d="M39,19c0-12.7-30-8.3-30,0c0,1.8,0,8.2,0,10c0,8.3,6.7,15,15,15s15-6.7,15-15C39,27.2,39,20.8,39,19z"
      ></path>
      <path
        fill="#FF5722"
        d="M24,3C14.6,3,7,10.6,7,20c0,1.2,0,3.4,0,3.4L9,25v-3l21-9.8l9,9.8v3l2-1.6c0,0,0-2.1,0-3.4 C41,12,35.3,3,24,3z"
      ></path>
      <g fill="#784719">
        <circle cx="31" cy="26" r="2"></circle>
        <circle cx="17" cy="26" r="2"></circle>
      </g>
      <path
        fill="#757575"
        d="M43,24c-0.6,0-1,0.4-1,1v-7c0-8.8-7.2-16-16-16h-7c-0.6,0-1,0.4-1,1s0.4,1,1,1h7c7.7,0,14,6.3,14,14v10 c0,0.6,0.4,1,1,1s1-0.4,1-1v2c0,3.9-3.1,7-7,7H24c-0.6,0-1,0.4-1,1s0.4,1,1,1h11c5,0,9-4,9-9v-5C44,24.4,43.6,24,43,24z"
      ></path>
      <g fill="#37474F">
        <path d="M43,22h-1c-1.1,0-2,0.9-2,2v4c0,1.1,0.9,2,2,2h1c1.1,0,2-0.9,2-2v-4C45,22.9,44.1,22,43,22z"></path>
        <circle cx="24" cy="38" r="2"></circle>
      </g>
    </svg>
  );
};
const CustomerSupportAssociates = (props) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      version="1"
      viewBox="0 0 48 48"
      enable-background="new 0 0 48 48"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="#3F51B5"
        d="M39,43H9c-2.2,0-4-1.8-4-4V9c0-2.2,1.8-4,4-4h30c2.2,0,4,1.8,4,4v30C43,41.2,41.2,43,39,43z"
      ></path>
      <path
        fill="#B3E5FC"
        d="M33.6,25.4c0.1-0.4,0.1-0.9,0.1-1.4s0-0.9-0.1-1.4l2.8-2c0.3-0.2,0.4-0.6,0.2-0.9l-2.7-4.6 c-0.2-0.3-0.5-0.4-0.8-0.3L30,16.3c-0.7-0.6-1.5-1-2.4-1.4l-0.3-3.4c0-0.3-0.3-0.6-0.6-0.6h-5.3c-0.3,0-0.6,0.3-0.6,0.6L20.4,15 c-0.9,0.3-1.6,0.8-2.4,1.4l-3.1-1.4c-0.3-0.1-0.7,0-0.8,0.3l-2.7,4.6c-0.2,0.3-0.1,0.7,0.2,0.9l2.8,2c-0.1,0.4-0.1,0.9-0.1,1.4 s0,0.9,0.1,1.4l-2.8,2c-0.3,0.2-0.4,0.6-0.2,0.9l2.7,4.6c0.2,0.3,0.5,0.4,0.8,0.3l3.1-1.4c0.7,0.6,1.5,1,2.4,1.4l0.3,3.4 c0,0.3,0.3,0.6,0.6,0.6h5.3c0.3,0,0.6-0.3,0.6-0.6l0.3-3.4c0.9-0.3,1.6-0.8,2.4-1.4l3.1,1.4c0.3,0.1,0.7,0,0.8-0.3l2.7-4.6 c0.2-0.3,0.1-0.7-0.2-0.9L33.6,25.4z M24,29c-2.8,0-5-2.2-5-5c0-2.8,2.2-5,5-5c2.8,0,5,2.2,5,5C29,26.8,26.8,29,24,29z"
      ></path>
    </svg>
  );
};
const AgentAndSurveyors = (props) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      version="1"
      viewBox="0 0 48 48"
      enable-background="new 0 0 48 48"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <polygon fill="#FF9800" points="24,37 19,31 19,25 29,25 29,31"></polygon>
      <g fill="#FFA726">
        <circle cx="33" cy="19" r="2"></circle>
        <circle cx="15" cy="19" r="2"></circle>
      </g>
      <path
        fill="#FFB74D"
        d="M33,13c0-7.6-18-5-18,0c0,1.1,0,5.9,0,7c0,5,4,9,9,9s9-4,9-9C33,18.9,33,14.1,33,13z"
      ></path>
      <path
        fill="#424242"
        d="M24,4c-6.1,0-10,4.9-10,11c0,0.8,0,2.3,0,2.3l2,1.7v-5l12-4l4,4v5l2-1.7c0,0,0-1.5,0-2.3c0-4-1-8-6-9l-1-2 H24z"
      ></path>
      <g fill="#784719">
        <circle cx="28" cy="19" r="1"></circle>
        <circle cx="20" cy="19" r="1"></circle>
      </g>
      <polygon fill="#fff" points="24,43 19,31 24,32 29,31"></polygon>
      <polygon
        fill="#D32F2F"
        points="23,35 22.3,39.5 24,43.5 25.7,39.5 25,35 26,34 24,32 22,34"
      ></polygon>
      <path
        fill="#546E7A"
        d="M29,31L29,31l-5,12l-5-12c0,0-11,2-11,13h32C40,33,29,31,29,31z"
      ></path>
    </svg>
  );
};
const SocialMediaInfluencers = (props) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      version="1"
      viewBox="0 0 48 48"
      enable-background="new 0 0 48 48"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="#512DA8"
        d="M33.9,12.1H14.2L17.6,7c0.4-0.6,1-0.9,1.7-0.9h9.6c0.7,0,1.3,0.3,1.7,0.9L33.9,12.1z"
      ></path>
      <path
        fill="#8667C4"
        d="M14,11H8V9.2C8,8.5,8.5,8,9.2,8h3.6C13.5,8,14,8.5,14,9.2V11z"
      ></path>
      <path
        fill="#5E35B1"
        d="M40,42H8c-2.2,0-4-1.8-4-4V14c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v24C44,40.2,42.2,42,40,42z"
      ></path>
      <circle fill="#512DA8" cx="24" cy="26" r="12"></circle>
      <circle fill="#B388FF" cx="24" cy="26" r="9"></circle>
      <path
        fill="#C7A7FF"
        d="M28.8,23c-1.2-1.4-3-2.2-4.8-2.2s-3.6,0.8-4.8,2.2c-0.5,0.5-0.4,1.3,0.1,1.8c0.5,0.5,1.3,0.4,1.8-0.1 c1.5-1.7,4.3-1.7,5.8,0c0.3,0.3,0.6,0.4,1,0.4c0.3,0,0.6-0.1,0.9-0.3C29.2,24.4,29.3,23.5,28.8,23z"
      ></path>
      <ellipse fill="#8667C4" cx="11" cy="13.5" rx="2" ry="1.5"></ellipse>
      <path
        fill="#8BC34A"
        d="M48,33.8c0-1.3-1.1-2.4-2.4-2.4H42c-0.4,0-0.7-0.5-0.4-0.8c0.4-0.6,0.5-1.3,0.4-2.1 c-0.2-1.2-1.1-2.1-2.3-2.4C37.7,25.7,36,27.1,36,29c0,0.6,0.2,1.1,0.4,1.6c0.2,0.4,0,0.8-0.5,0.8h-3.6c-1.3,0-2.4,1.1-2.4,2.4V37 c0,0.4,0.5,0.7,0.8,0.4c0.6-0.4,1.3-0.5,2.1-0.4c1.2,0.2,2.1,1.1,2.4,2.3c0.4,1.9-1.1,3.6-2.9,3.6c-0.6,0-1.1-0.2-1.6-0.4 c-0.4-0.2-0.8,0-0.8,0.5v2.6c0,1.3,1.1,2.4,2.4,2.4h13.2c1.3,0,2.4-1.1,2.4-2.4V33.8z"
      ></path>
    </svg>
  );
};
const PointOfSalesPerson = (props) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      version="1"
      viewBox="0 0 48 48"
      enable-background="new 0 0 48 48"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="#FFB74D"
        d="M10,12c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S12.8,12,10,12z"
      ></path>
      <path
        fill="#607D8B"
        d="M2,22v8l3,2l1,14h8l1-14l3-2v-8c0-4.4-3.6-8-8-8h0C5.6,14,2,17.6,2,22z"
      ></path>
      <g fill="#263238">
        <path d="M22.4,40.4c-0.6,2.5-1,3.6-2.4,3.6c-0.6,0-1.2-0.5-1.9-1.1c-1-0.8-2.2-1.9-4.1-1.9v2c1.1,0,1.9,0.7,2.8,1.4 c0.9,0.7,1.9,1.6,3.2,1.6c3.1,0,3.8-2.9,4.4-5.2C25,38.2,25.4,37,27,37v-2C23.7,35,22.9,38.1,22.4,40.4z"></path>
        <polygon points="14.4,40 10,40 10,44 14.1,44"></polygon>
      </g>
      <circle fill="#4CAF50" cx="36" cy="36" r="10"></circle>
      <path
        fill="#fff"
        d="M35,34c0.1,0.2,0.1,0.3,0.3,0.4c0.1,0.1,0.3,0.2,0.5,0.4c0.2,0.1,0.5,0.2,0.8,0.3c0.5,0.2,0.9,0.4,1.3,0.6 c0.4,0.2,0.7,0.4,1,0.7c0.3,0.3,0.5,0.6,0.7,0.9c0.2,0.4,0.2,0.8,0.2,1.3c0,0.4-0.1,0.8-0.2,1.2c-0.1,0.4-0.3,0.7-0.6,0.9 c-0.3,0.3-0.6,0.5-0.9,0.6c-0.4,0.2-0.8,0.3-1.2,0.3v1.5h-1.2v-1.5c-0.4,0-0.8-0.1-1.2-0.3c-0.4-0.2-0.7-0.4-1-0.6 c-0.3-0.3-0.5-0.6-0.7-1.1c-0.2-0.4-0.3-0.9-0.3-1.5h2.2c0,0.4,0,0.7,0.1,0.9c0.1,0.2,0.2,0.4,0.4,0.6c0.2,0.1,0.3,0.2,0.5,0.3 c0.2,0.1,0.4,0.1,0.6,0.1c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.3-0.2,0.4-0.3c0.1-0.1,0.2-0.3,0.3-0.4c0.1-0.2,0.1-0.3,0.1-0.5 c0-0.2,0-0.4-0.1-0.6c-0.1-0.2-0.1-0.3-0.3-0.4c-0.1-0.1-0.3-0.3-0.5-0.4c-0.2-0.1-0.4-0.2-0.7-0.3c-0.5-0.2-0.9-0.4-1.3-0.6 c-0.4-0.2-0.7-0.4-1-0.7c-0.3-0.3-0.5-0.6-0.7-0.9c-0.2-0.4-0.2-0.8-0.2-1.3c0-0.4,0.1-0.8,0.2-1.2c0.1-0.3,0.3-0.7,0.6-0.9 c0.3-0.3,0.6-0.5,0.9-0.6c0.4-0.2,0.8-0.3,1.2-0.3v-1.6h1.2v1.6c0.4,0.1,0.8,0.2,1.2,0.4c0.4,0.2,0.6,0.4,0.9,0.7 c0.2,0.3,0.4,0.6,0.6,1c0.1,0.4,0.2,0.9,0.2,1.4h-2.2c0-0.6-0.1-1-0.4-1.3c-0.2-0.3-0.6-0.4-1-0.4c-0.2,0-0.4,0-0.6,0.1 c-0.2,0.1-0.3,0.2-0.4,0.3C35.1,32.7,35,32.8,35,33s-0.1,0.3-0.1,0.5C34.9,33.7,34.9,33.9,35,34z"
      ></path>
    </svg>
  );
};
const perks = [
  {
    name: "Inside Sales",
    imageUrl: <InsideSales className="mx-auto h-12 w-auto" />,
    imageAlt:
      "Person sitting at a wooden desk with paper note organizer, pencil and tablet.",
  },
  {
    name: "Same day delivery",
    imageUrl: <SupportExecutives className="mx-auto h-12 w-auto" />,
    imageAlt: "Man wearing a comfortable and casual cotton t-shirt.",
  },
  {
    name: "All year discount",
    imageUrl: <CustomerSupportAssociates className="mx-auto h-12 w-auto" />,
    imageAlt: "Woman wearing a comfortable cotton t-shirt.",
  },
  {
    name: "For the planet",
    imageUrl: <AgentAndSurveyors className="mx-auto h-12 w-auto" />,
    imageAlt: "Woman wearing a comfortable cotton t-shirt.",
  },
  {
    name: "For the planet",
    imageUrl: <SocialMediaInfluencers className="mx-auto h-12 w-auto" />,
    imageAlt: "Woman wearing a comfortable cotton t-shirt.",
  },
  {
    name: "For the planet",
    imageUrl: <PointOfSalesPerson className="mx-auto h-12 w-auto" />,
    imageAlt: "Woman wearing a comfortable cotton t-shirt.",
  },
];

const enterprisefreelancerhiringsolution = (props) => {
  const pages = [
    {
      name: "Enterprise freelancer hiring solution",
      href: "https://www.rozgaarindia.com/employer-workplace/enterprise-freelancer-hiring-solution",
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
        Enterprise Hiring Solution | Rozgaar
        </title>
        <link rel="canonical" href="https://www.rozgaarindia.com/enterprise-freelancer-hiring-solution" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Remote, Onsite, Hybrid and flexible short-term contract workforce that fits your freelance hiring needs."
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
          content="Enterprise Hiring Solution | Rozgaar"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Remote, Onsite, Hybrid and flexible short-term contract workforce that fits your freelance hiring needs."
        />
        <meta
          property="og:url"
          content="https://www.rozgaarindia.com/employer-workplace/enterprise-freelancer-hiring-solution"
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
          content="Enterprise Hiring Solution | Rozgaar"
        />
        <meta
          property="twitter:description"
          content="Remote, Onsite, Hybrid and flexible short-term contract workforce that fits your freelance hiring needs."
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
      <main>
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute inset-0 hidden sm:flex sm:flex-col"
          >
            <div className="relative w-full flex-1 bg-gray-800">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="/assets/bulkhiring/Bulk_hiring_web_main_banner.webp"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          <div className="relative max-w-7xl px-4 text-center lg:text-start sm:px-6 sm:pb-0 lg:px-8 mx-auto">
            <div
              aria-hidden="true"
              className="absolute inset-0 flex flex-col sm:hidden"
            >
              <div className="relative w-full flex-1 bg-gray-800">
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src="/assets/bulkhiring/Bulk_hiring_web_main_banner.webp"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
            <div className="relative py-32">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Bulk Remote Freelancer Hiring
              </h1>
              <p className="font-medium tracking-tight text-white text-2xl mt-3">
                Cut costs and time with our enterprise mass hiring solution
              </p>
              <div className="">
                <a
                  href="/par-stepfirst"
                  className="mt-4 sm:mt-6 inline-block rounded-md border border-transparent bg-white px-8 py-3 font-medium text-blue-900 cursor-pointer"
                >
                  Post a requirement
                </a>
              </div>
            </div>
          </div>
        </div>
        <section
          aria-labelledby="perks-heading"
          className="border-t border-gray-200 bg-gray-50 pb-10"
        >
          <h2 id="perks-heading" className="sr-only">
            Our perks
          </h2>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mt-8 space-y-6">
              <dl>
              <dd class="line-clamp-6 text-base leading-7 text-gray-600">
                    Rozgaar bulk hiring is a one stop solution that helps
                    businessess find high-quality pool of skilled gig workers
                    that fulfil the requirements and accelerate the business
                    growth. We transform the way employees and businesses are
                    collaborating with freelancers to generate extraordinary
                    results working remotely. We give global enterprises an
                    access to the best talents to drive their business
                    priorities and scale effectively.
                  </dd>
              </dl>
              <dl className="">
              <dt class="text-lg font-semibold">
              Leverage our 1 Lac+ on-demand talent pool available across all major cities in India.
                  </dt>
              </dl>
            </div>

            <section aria-labelledby="collection-heading" className="py-18 lg:my-24">
              {/*  <h2 id="collection-heading" className="">
                Collections
              </h2> */}
              <h2 class="text-3xl font-bold tracking-tight text-neutral-900 text-center mt-8 lg:mt-0">
                Popular Solutions to expand your business
              </h2>
              <div className="mt-16 sm:mt-20 mx-auto grid max-w-lg grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:grid-cols-3 sm:gap-x-6 sm:gap-y-6 sm:px-6 lg:gap-x-8 lg:px-8">
                {perks.map((collection) => (
                  <a
                    key={collection.name}
                    href="/par-stepfirst"
                    className="group relative rounded-lg bg-white shadow-xl flex flex-col justify-center p-4 text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                  >
                    <div className="md:flex-shrink-0">
                      <div className="flow-root">
                        {/* <img
                          className="mx-auto h-12 w-auto"
                          src={collection.imageUrl}
                          alt=""
                        /> */}
                        {collection.imageUrl}
                      </div>
                    </div>
                    <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6 flex flex-col-reverse">
                      <h3 className="mt-3 text-base font-medium text-gray-900">
                        {collection.name}
                      </h3>
                      {/* <p className="text-sm text-gray-500 h-16">
                        {collection.description}
                      </p> */}
                    </div>
                  </a>
                ))}
              </div>
            </section>
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-0">
            <div class="relative rounded-3xl ring-1 ring-gray-200 mt-16 lg:mx-8 sm:flex sm:justify-end bg-white">
              <div
                aria-hidden="true"
                className="absolute inset-0 hidden sm:flex sm:flex-col"
              >
                <div className="relative w-full flex-1">
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src="/assets/bulkhiring/bulkHiringBanner.jpg"
                      alt=""
                      className="h-full w-auto object-cover object-center rounded-3xl"
                    />
                  </div>
                </div>
              </div>
              <div className="relative max-w-lg px-4 text-center lg:text-start sm:px-6  lg:px-8">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex flex-col sm:hidden opacity-50"
                >
                  <div className="relative w-full flex-1">
                    <div className="absolute inset-0 overflow-hidden">
                      <img
                        src="/assets/bulkhiring/bulkHiringBanner.jpg"
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative py-32">
                  <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
                    Have a Bulk Hiring
                  </h1>
                  <p className="font-semibold tracking-tight text-neutral-900 text-2xl mt-3">
                    Requirement?
                  </p>
                  <a
                  href="/par-stepfirst">
                    <div className="mt-4 sm:mt-6 inline-block rounded-md border border-transparent bg-blue-900 px-8 py-3 font-medium text-white">
                      Post a requirement
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

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

export default enterprisefreelancerhiringsolution;
