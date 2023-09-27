import { useState } from "react";
import { useRouter } from "next/router";
import classes from "./RIDropDownMenu.module.css";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ArrowDownIcon, EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import copy from "copy-to-clipboard";
import SharePost from "./ShareComponents/SharePost";
import Cookies from "js-cookie";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const RIDropdownMenu = (props) => {
  const [addOnID, setAddOnID] = useState([]);
  const [addOnSelected, setAddOnSelected] = useState([]);
  const [copied, setCopied] = useState(false);
  const [shareModalShow, setShareModalShow] = useState(false);
  const [closeModalShow, setCloseModalShow] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);

  const router = useRouter();

  const statusDropDownMenuOptions =
    props.status === "Approved" || props.status === "Draft"
      ? [
        {
          key: "1",
          option: "Manage Requirement",
          icon: "A",
          onClick: "/clientrequirementdetail/",
        },
        {
          key: "2",
          option: `${props.status === "Draft"
              ? "Edit Posting"
              : props.status === "Approved"
                ? "Close Posting"
                : ""
            }`,
          icon: "B",
          onClick: `${props.status === "Draft"
              ? "/par-stepfirst/"
              : props.status === "Approved"
                ? "Close Posting"
                : ""
            }`,
        },
        {
          key: "3",
          option: `${props.status === "Approved" ? "Share on Social" : ""}`,
          icon: "B",
          onClick: `${props.status === "Approved" ? "Share on Social" : ""}`,
        },
        {
          key: "4",
          option: `${props.status === "Approved" ? "Copy link" : ""}`,
          icon: "B",
          onClick: `${props.status === "Approved" ? "copy" : ""}`,
        },
      ]
      : props.status === "Closed" ||
        props.status === "Submitted" ||
        props.status === "Disapproved"
        ? [
          {
            key: "1",
            option: "Manage Requirement",
            icon: "A",
            onClick: "/clientrequirementdetail/",
          },
        ]
        : [
          {
            key: "1",
            option: "Manage Requirement",
            icon: "A",
            onClick: "/clientrequirementdetail/",
          },
          {
            key: "2",
            option: "Share on Social",
            icon: "B",
            onClick: "Share on Social",
          },
          {
            key: "4",
            option: "Copy link",
            icon: "B",
            onClick: "copy",
          },
        ];

  const openpaymentForAddon = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 52e6faf229b4c8d1f6832edd4dde9a9d60a8c0d3"
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      RequirementID: props.RequirementID,
      AddonIDs: addOnID.toString(),
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      process.env.BASE_URL + "/api/rozgaarapi/AddonsPaymentInitiate",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "SUCCESS" && result.status_code === 200) {
          router.push(
            "/razorpaygateway/" + result.data.PGOrderId + "/" + props.RequirementID
            // { state: { RequirementID: props.RequirementID } }
          );
        } else {
        }
      })
      .catch((error) => console.log("error", error));
  };

  const UrlType = (workType) => {
    if (workType === "commission") {
      return "commission";
    }
    if (workType === "monthly-basis") {
      return "monthly";
    }
    if (workType === "onetime") {
      return "one-time";
    }

    if (workType === "contract") {
      return "contract";
    }
  };
  const shareOnMobile = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "rozgaarindia.com",
          text: " ",
          url: `https://rozgaarindia.com/freelancer-${UrlType(
            props.requirementType
          )}-job/${props.Title.split(" ")
            .join("-")
            .replace(/[^a-zA-Z ]/g, "-")}/${props.RequirementID}`,
        })
        .then(() => {
          console.log("Successfully shared");
        })
        .catch((error) => {
          console.error("Something went wrong", error);
        });
    }
  };
  const ClosePost = () => {
    return (
      <CustomModalTheme onClose={() => setCloseModalShow(false)} open = {closeModalShow}>
        <div className={classes.btnContainer}>
          <div className={classes.closePostHeading}>
            Are you sure want to close this requirement?
          </div>
          <div className={classes.closePostButtonsConatiner}>
            <div className={classes.closePostButtons}>
              <ActionButton
                buttonText={"Yes"}
                buttonType={"small"}
                onClick={() => props.onClick()}
              />
              <ActionButton
                buttonText={"No"}
                buttonType={"small"}
                onClick={() => setCloseModalShow(false)}
              />
            </div>
          </div>
        </div>
      </CustomModalTheme>
    );
  };

  const copytoClipboard = () => {
    copy(
      // `https://rozgaarindia.com/ClientRequirementDetail/${props.RequirementID}`
      `https://rozgaarindia.com/freelancer-${UrlType(
        props.requirementType
      )}-job/${props.Title.split(" ")
        .join("-")
        .replace(/[^a-zA-Z ]/g, "-")}/${props.RequirementID}`
    );
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const handleAddOn = (item) => {
    addOnSelected.includes(item.AddonName) ? (
      <>
        {setAddOnSelected(addOnSelected.filter((i) => i !== item.AddonName))}
        {setTotalAmount(totalAmount - Math.round(parseInt(item.AddonAmount)))}
        {setAddOnID(addOnID.filter((i) => i !== item.AddonID))}
      </>
    ) : (
      <>
        {setAddOnSelected(addOnSelected.concat(item.AddonName))}
        {setTotalAmount(totalAmount + Math.round(parseInt(item.AddonAmount)))}
        {setAddOnID(addOnID.concat(item.AddonID))}
      </>
    );
  };

  return (
    <div className={""}>
      {shareModalShow && (
        <SharePost
          closeModal={() => setShareModalShow(false)}
          url={`https://rozgaarindia.com/freelancer-${UrlType(
            props.requirementType
          )}-job/${props.Title.split(" ")
            .join("-")
            .replace(/[^a-zA-Z ]/g, "-")}/${props.RequirementID}`}
        />
      )}

      <Menu as="div" className="relative flex-none">
        <Menu.Button className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
          <span className="sr-only">Open options</span>
          {props.dropdownType === "Profile" ? (
            <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
          ) : (
            <ArrowDownIcon
              className="h-7 w-8 bg-white text-blue-700 ml-2 rounded p-1"
              aria-hidden="true"
            />
          )}
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <div>
                  {(props.dropdownType === "Addons"
                    ? props.optionData
                    : statusDropDownMenuOptions
                  ).map((item, idx) => (
                    <>
                      {props.dropdownType === "Addons" ? (
                        <div
                          key={item.key}
                          className="px-3 py-1 text-sm leading-6 text-gray-900 flex hover:bg-gray-100"
                        >
                          <div className="flex items-center ">
                            <input
                              id="checkbox"
                              name="isGoing"
                              type="checkbox"
                              value=""
                              checked={addOnSelected.includes(item.AddonName)}
                              onChange={() => handleAddOn(item)}
                              className="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-400 rounded focus:ring-blue-500"
                            />
                            <label
                              for="checkbox"
                              className="w-full py-1.5 ml-2 text-sm font-medium text-gray-900"
                            >
                              {item.AddonName}
                              <b>
                                {item.AddonAmount ? (
                                  "-" + "₹" + item.AddonAmount
                                ) : (
                                  <></>
                                )}
                              </b>
                            </label>
                          </div>
                        </div>
                      ) : item.onClick === "Close Posting" ? (
                        <div
                          key={item.key}
                          className={
                            "px-3 py-1 text-sm leading-6 text-gray-900 flex hover:bg-gray-100 font-medium cursor-pointer"
                          }
                        OnSharePOst={() => setShareModalShow(true)}
                        // OnSharePOst={() => shareOnMobile()}
                        onClick={() => setCloseModalShow(true)}
                        >
                          {item.option}
                        </div>
                      ) : item.onClick === "Share on Social" ? (
                        <div
                          key={item.key}
                          className={
                            "px-3 py-1 text-sm leading-6 text-gray-900 flex hover:bg-gray-100 font-medium cursor-pointer"
                          }
                          // onClick={() => setShareModalShow(true)}
                          onClick={() =>
                            props.device === "Mobile"
                              ? shareOnMobile()
                              : setShareModalShow(true)
                          }
                        >
                          <span className="">{item.option}</span>
                        </div>
                      ) : item.onClick === "copy" ? (
                        <div
                          key={item.key}
                          className={
                            "px-3 py-1 text-sm leading-6 text-gray-900 flex hover:bg-gray-100 font-medium cursor-pointer"
                          }
                          onClick={() => copytoClipboard()}
                        >
                          {!copied ? item.option : "Copied!"}
                        </div>
                      ) : (
                        <a
                          href={
                            // process.env.PUBLIC_URL +
                            props.status === "Draft"
                              ? item.onClick + props.RequirementID
                              : item.onClick + props.RequirementID
                          }
                          className={classNames(
                            active ? "bg-gray-50" : "",
                            "px-3 py-1 text-sm leading-6 text-gray-900 flex hover:bg-gray-100 font-medium cursor-pointer"
                          )}
                        >
                          <span className="">{item.option}</span>
                        </a>
                      )}
                    </>
                  ))}
                </div>
              )}
            </Menu.Item>
            {addOnSelected.length !== 0 &&
              props.dropdownType === "Addons" &&
              totalAmount > 0 && (
                <>
                  <div
                    className={
                      "px-3 py-1 text-sm leading-6 text-gray-900 flex font-medium cursor-pointer"
                    }
                  >
                    <label>
                      TOTAL : &nbsp;₹
                      {totalAmount}
                    </label>
                  </div>
                  <div
                  // className={classes.buttonAlignment}
                  >
                    {/*   <ActionButton
                buttonText="Pay Now"
                buttonType={"small"}
                onClick={() => openpaymentForAddon()}
              /> */}
                  </div>

                  <button
                    type="button"
                    onClick={() => {openpaymentForAddon(); Cookies.set("RedirectURL", router.asPath); Cookies.set("AsPath", router.asPath)}}
                    className="mx-auto justify-center w-full text-blue-500 bg-gray-100 hover:bg-gray-200 focus:ring-1 focus:outline-none focus:ring-gray-100 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center mt-2"
                  >
                    {/* <svg
                      className="w-4 h-4 mr-2 -ml-1 text-[#626890]"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="ethereum"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
                      ></path>
                    </svg> */}
                    <span className="text-center">Pay Now</span>
                  </button>
                </>
              )}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default RIDropdownMenu;
