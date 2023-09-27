import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import CustomModalTheme from "../CustomModalTheme";
import classes from "./SocialHandles.module.css";
import ActionButton from "../ButtonComponents/ActionButton";
import RiTextInputs from "../MainComponents/RiTextInputs";
import Cookies from "js-cookie";
import { BiX } from "react-icons/bi";

const SocialHandles = (props) => {
    const [facebook, setFacebook] = useState(props.socialLinks.FacebookUrl);
    const [twitter, setTwitter] = useState(props.socialLinks.TwitterUrl);
    const [linkedin, setLinkedin] = useState(
      props.socialLinks.LinkedinUrl ? props.socialLinks.LinkedinUrl : ""
    );
    const [successMessage, setSuccessMessage] = useState();
    const [isLoading, setIsLoading] = useState(false);
  
    let userID = Cookies.get("Client_userID");
   
  
    const UpdateSocialLinks = (value) => {
      setIsLoading(true);
      var myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        "Token 52e6faf229b4c8d1f6832edd4dde9a9d60a8c0d3"
      );
      var formdata = new FormData();
      formdata.append("UserId", userID);
      formdata.append("LinkedinUrl ", linkedin);
      formdata.append("FacebookUrl ", facebook);
      formdata.append("TwitterUrl ", twitter);
  
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };
  
      fetch(process.env.BASE_URL + "/api/rozgaarapi/ClientProfile", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.status_code === 200 && result.status === "Success") {
            setSuccessMessage("Link added successfully");
            window.location.reload()
          } else {
            console.log("Something went wrong, please contact support!");
          }
        })
        .catch((error) => console.log("error", error))
        .finally(() => {
          setIsLoading(false);
        });
    };

  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog as="div" className="relative z-30" onClose={props.setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="w-[90%] relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <div
                    className="flex justify-end cursor-pointer"
                    onClick={props.onCancel}
                  >
                    <BiX className=" inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-100 p-2" />
                  </div>
                  <div className="my-3 text-center sm:my-5">
                    <Dialog.Title
                      as="h3"
                      className="text-xl lg:text-2xl font-bold leading-6 text-gray-900"
                    >
                      {props?.heading}
                    </Dialog.Title>
                    {/* <div className="mt-2">
                      <p className="text-base text-gray-700">{props.text}</p>
                    </div> */}
                  </div>

                  <div className="space-y-4">
                      <>
                        <div className={classes.companyInfoInput}>
                          <RiTextInputs
                            input={"SingleLineInput"}
                            placeHolder={"Enter facebook profile URL"}
                            type={"text"}
                            onInput={() => setSuccessMessage("")}
                            onChange={(e) => setFacebook(e.target.value)}
                            value={facebook}
                          />
                        </div>
                        <div className={classes.companyInfoInput}>
                          <RiTextInputs
                            input={"SingleLineInput"}
                            placeHolder={"Enter twitter profile URL"}
                            onInput={() => setSuccessMessage("")}
                            onChange={(e) => setTwitter(e.target.value)}
                            value={twitter}
                          />
                        </div>
                        <div className={classes.companyInfoInput}>
                          <RiTextInputs
                            input={"SingleLineInput"}
                            placeHolder={"Enter linkedIn profile URL"}
                            type={"text"}
                            onInput={() => setSuccessMessage("")}
                            onChange={(e) => setLinkedin(e.target.value)}
                            value={linkedin}
                          />
                        </div>
                        <div className={classes.successMessage}>
                          {successMessage}
                        </div>
                        <div className={classes.submitbutton}>
                          <ActionButton
                            buttonType={"small"}
                            isLoading={isLoading}
                            buttonText={"Submit"}
                            onClick={() => UpdateSocialLinks()}
                          />
                        </div>{" "}
                      </>
                    </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default SocialHandles;
