import React from "react";
import Footer from "../components/Footer";
import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FunnelIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import AutoSuggestionSkills from "../components/ApplyRequirements/AutoSuggestionSkills";
import NewJobCard from "../components/CardComponents/NewJobCard";
import { useRouter } from "next/router";
import Pagination from "../components/MainComponents/Pagination";
import NoApplication from "../components/MainComponents/NoApplication";
import { RecommendedList } from "./api/RecommendedList";
import RequirementCard from "../components/CardComponents/RequirementCard";
import RiHeader from "../components/MainComponents/RiHeader";
import BreadCrumb from "../components/MainComponents/BreadCrumb";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: true },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "New Arrivals", checked: false },
      { value: "sale", label: "Sale", checked: false },
      { value: "travel", label: "Travel", checked: true },
      { value: "organization", label: "Organization", checked: false },
      { value: "accessories", label: "Accessories", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "2l", label: "2L", checked: false },
      { value: "6l", label: "6L", checked: false },
      { value: "12l", label: "12L", checked: false },
      { value: "18l", label: "18L", checked: false },
      { value: "20l", label: "20L", checked: false },
      { value: "40l", label: "40L", checked: true },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const freelancejobposting = (props) => {
  const router = useRouter();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [searchSkill, setSearchSkill] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);

  const [postArequirementDetails, setPostArequirementDetails] = useState([]);

  const [allPostArequirementDetails, setAllPostArequirementDetails] = useState(
    []
  );

  const [selectedFilter, setSelectedFilter] = useState();

  const [currentPage, setCurrentPage] = useState(
    router.query.page ? parseInt(router.query.page) : 1
  );
  const [maxPage, setMaxPage] = useState(1);

  const [recomendationSort, setRecomendationSort] = useState("");

  const [workType, setWorkType] = useState([]);
  const [loading, setLoading] = useState(true);
  const [workfilter, setworkFilter] = useState({
    onetime: false,
    contract: false,
    commission: false,
    monthlybasis: false,
  });
  const [freelancerPolicy, setFreelancerPolicy] = useState({
    Remote: false,
    Hybrid: false,
    OnSite: false,
  });
  const [count, setCount] = useState(props.RecommendedListData.datacount);

  useEffect(() => {
    workTypeFilter();
  }, [workfilter, freelancerPolicy]);

  useEffect(() => {
    setCurrentPage(router.query.page ? parseInt(router.query.page) : 1);
    setPostArequirementDetails(props.RecommendedListData.data);
    // console.log(props.RecommendedListData.data, "adsfkjasdklfjalsdfjkl")
    setAllPostArequirementDetails(props.RecommendedListData.data);
  }, [router.query.page]);

  useEffect(() => {
    setMaxPage(Math.ceil(count / 20));
  }, [count]);

  const pageChange = (val) => {
    router.push(`?page=${val}`);
  };

  const requirementsApi = () => {
    setAllPostArequirementDetails(props.RecommendedListData.data);
    setPostArequirementDetails(props.RecommendedListData.data);
  };

  const SkillsSearchApi = () => {
    setSearchLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 52e6faf229b4c8d1f6832edd4dde9a9d60a8c0d3"
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      Skills: searchSkill,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      process.env.BASE_URL + "/api/client/SearchSkillsRequirement",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status_code === 200) {
          setPostArequirementDetails(result.data);
        } else if (result.status_code === 300 && result.status === "Fail") {
          alert("Please enter valid skill");
        } else {
        }
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setSearchLoading(false);
      });
  };

  const AllSkills = () => {
    setSelectedFilter("All");
    setAllPostArequirementDetails(props.RecommendedListData.data);
    setPostArequirementDetails(props.RecommendedListData.data);
  };

  const sortByPrice = () => {
    setSelectedFilter("Price");
    const DataByPrice = postArequirementDetails?.sort(
      (a, b) => parseFloat(a.Budget) - parseFloat(b.Budget)
    );
    setPostArequirementDetails(() => [...DataByPrice]);
  };

  const sortByDate = () => {
    setSelectedFilter("Newest");
    const DataByDate = postArequirementDetails?.sort(
      (a, b) => new Date(b.UpdatedDate) - new Date(a.UpdatedDate)
    );

    setPostArequirementDetails(() => [...DataByDate]);
  };

  const sortByRecommendation = () => {
    setSelectedFilter("Recommended");
    setRecomendationSort(!recomendationSort);
    console.log("Recommended");
  };

  const subCategories = [
    { name: "All", href: AllSkills },
    { name: "Recommended", href: sortByRecommendation },
    { name: "Newest", href: sortByDate },
    { name: "Price", href: sortByPrice },
  ];

  const FilterType = [
    {
      WorkType: "One Time task",
      work: "onetime",
      key: "1",
    },
    {
      WorkType: "Monthly Basis",
      work: "monthly-basis",
      key: "2",
    },
    {
      WorkType: "Contract work",
      work: "contract",
      key: "3",
    },
    {
      WorkType: "Commission Based",
      work: "commission",
      key: "4",
    },
  ];

  const filterSelectedHandler = (e, key, work) => {
    if (workType.indexOf(work) === -1) {
      workType.push(work);
    }

    if (work === "onetime" && e) {
      const value = workfilter;
      setworkFilter((prevState) => {
        return { ...value, onetime: true };
      });
    }
    if (work === "onetime" && !e) {
      const value = workfilter;
      const removeWork = workType.filter((item, i) => item !== work);
      setWorkType(removeWork);
      setworkFilter((prevState) => {
        return { ...value, onetime: false };
      });
    }

    if (work === "contract" && e) {
      const value = workfilter;

      setworkFilter((prevState) => {
        return { ...value, contract: true };
      });
    }
    if (work === "contract" && !e) {
      const value = workfilter;
      const removeWork = workType.filter((item, i) => item !== work);
      setWorkType(removeWork);
      setworkFilter((prevState) => {
        return { ...value, contract: false };
      });
    }
    if (work === "commission" && e) {
      setworkFilter({ ...workfilter, commission: true });
    }
    if (work === "commission" && !e) {
      const removeWork = workType.filter((item, i) => item !== work);
      setWorkType(removeWork);
      setworkFilter({ ...workfilter, commission: false });
    }
    if (work === "monthly-basis" && e) {
      setworkFilter({ ...workfilter, monthlybasis: true });
    }
    if (work === "monthly-basis" && !e) {
      const removeWork = workType.filter((item, i) => item !== work);
      setWorkType(removeWork);
      setworkFilter({ ...workfilter, monthlybasis: false });
    }
  };

  const workTypeFilter = () => {
    const work = workType;
    if (
      !workfilter.onetime &&
      !workfilter.contract &&
      !workfilter.commission &&
      !workfilter.monthlybasis &&
      !freelancerPolicy.Remote
    ) {
      setPostArequirementDetails(allPostArequirementDetails);
    } else {
      setPostArequirementDetails([]);

      const workPolicy = "";
      const workTypeSel = allPostArequirementDetails?.filter(
        (item, i) =>
          workType.includes(item.RequirementType) ||
          workPolicy.includes(item.FreelancerPolicy)
      );

      setPostArequirementDetails(() => [...workTypeSel]);
    }
  };

  const pages = [
    {
      name: "Freelance Job Post",
      href: "https://www.rozgaarindia.com/freelance-job-posting",
      current: true,
    },
  ];
  return (
    <div>
      <RiHeader
        userLoggedIn={props.UserLoggedIn}
        profile={props.ProfilePicture}
        firstName={props.FirstName}
        lastName={props.LastName}
      />
       <BreadCrumb pages={pages} />
      <div className="bg-gray-50">
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <div className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>

                    <div className="flex gap-1 px-3 pt-4">
                      {" "}
                      <AutoSuggestionSkills
                        setSearchSkill={setSearchSkill}
                        placeholder={"Search by skill"}
                      />
                      {searchLoading ? (
                        <div className="bg-blue-600 h-10 w-10 flex justify-center items-center  pl-2">
                          <svg
                            aria-hidden="true"
                            class="mr-2 w-6  text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                            />
                          </svg>
                        </div>
                      ) : (
                        <div
                          className="bg-blue-600 border border-blue-600 h-10 w-10 py-0.5 flex justify-center items-center cursor-pointer"
                          onClick={() => {
                            SkillsSearchApi();
                            setSearchSkill("");
                          }}
                        >
                          <MagnifyingGlassIcon
                            className=" h-7 w-7  text-white"
                            aria-hidden="true"
                          />
                        </div>
                      )}
                    </div>
                    <div className="text-base font-semibold px-4 pt-1">
                      Sort by
                    </div>
                    <ul role="list" className="px-2  font-medium text-gray-900">
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <div
                            onClick={() => category.href()}
                            className={
                              selectedFilter === category.name
                                ? "text-blue-500 cursor-pointer py-2 px-2 text-sm"
                                : "text-black cursor-pointer py-2 px-2 text-sm"
                            }
                          >
                            {category.name}
                          </div>
                        </li>
                      ))}
                    </ul>

                    <div className="text-base font-semibold px-3 pt-4 pb-2">
                      Work Type
                    </div>
                    <div className="px-3">
                      {FilterType.map((item, i) => {
                        return (
                          <div
                            className="flex items-center gap-2 py-2 px-1"
                            key={item.key}
                          >
                            <input
                              type="checkbox"
                              id={item.key}
                              onChange={(e) =>
                                filterSelectedHandler(
                                  e.target.checked,
                                  item.key,
                                  item.work
                                )
                              }
                              className="w-4 h-4"
                            />
                            <div className="text-sm font-medium">
                              {item.WorkType}{" "}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-6">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Requirement List
            </h1>

            <div className="flex items-center">
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <div className="hidden lg:block bg-white py-3 px-2 border border-gray-300 shadow-md rounded-lg">
                <h3 className="sr-only">Categories</h3>
                <div className="flex gap-1">
                  {" "}
                  <AutoSuggestionSkills
                    setSearchSkill={setSearchSkill}
                    placeholder={"Search by skill"}
                  />
                  {searchLoading ? (
                    <div className="bg-blue-600 h-10 w-10 flex justify-center items-center pl-2">
                      <svg
                        aria-hidden="true"
                        class="mr-2 w-6  text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                    </div>
                  ) : (
                    <div
                      className="bg-blue-600 border border-blue-600 h-10 w-10 py-1 flex justify-center items-center cursor-pointer"
                      onClick={() => {
                        SkillsSearchApi();
                        setSearchSkill("");
                      }}
                    >
                      <MagnifyingGlassIcon
                        className="hidden lg:block h-7 w-7  text-white"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                </div>
                <div className="text-base font-semibold px-1 pt-4">Sort by</div>
                <ul
                  role="list"
                  className="space-y-4 border-b border-gray-200 pt-3 pb-6 px-1 text-sm font-medium text-gray-900"
                >
                  {subCategories?.map((category) => (
                    <li key={category.name}>
                      <div
                        onClick={() => category.href()}
                        className={
                          selectedFilter === category.name
                            ? "text-blue-500 cursor-pointer"
                            : "text-black cursor-pointer"
                        }
                      >
                        {category.name}
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="text-base font-semibold px-1 pt-4 pb-2">
                  Work Type
                </div>
                <div className="">
                  {FilterType?.map((item, i) => {
                    return (
                      <div
                        className="flex items-center gap-2 py-2 px-1"
                        key={item.key}
                      >
                        <input
                          type="checkbox"
                          id={item.key}
                          onChange={(e) =>
                            filterSelectedHandler(
                              e.target.checked,
                              item.key,
                              item.work
                            )
                          }
                          className="w-4 h-4"
                        />
                        <div className="text-sm font-medium">
                          {item.WorkType}{" "}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Product grid */}

              <div className="lg:col-span-3 lg:bg-white border border-gray-300 shadow-md rounded-lg lg:px-6 relative ">
                <div className="pb-10 ">
                  {postArequirementDetails?.length > 0 ? (
                    postArequirementDetails?.map((list, index) => {
                      return (
                        <div key={index} className="">
                          <RequirementCard data={list} />
                        </div>
                      );
                    })
                  ) : (
                    <NoApplication
                      Text={"You haven't applied on any requirement yet"}
                    />
                  )}
                </div>
                {/* <div>dhcoisdhoichsdzxoi</div> */}
                {postArequirementDetails?.length > 0 ? (
                  <div className="flex justify-center">
                    <Pagination
                      maxPage={maxPage}
                      page={currentPage}
                      pageChange={pageChange}
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export async function getServerSideProps(context) {
  const RecommendedListData = await RecommendedList(context.query.page);
  const UserLoggedIn = context.req.cookies.Client_userLoggedIn || null;
  const FirstName = context.req.cookies.Client_FirstName || null;
  const LastName = context.req.cookies.Client_LastName || null;
  const ProfilePicture = context.req.cookies.Client_ProfilePicture || "";

  return {
    props: {
      RecommendedListData,
      UserLoggedIn,
      FirstName,
      LastName,
      ProfilePicture,
    },
  };
}
export default freelancejobposting;
