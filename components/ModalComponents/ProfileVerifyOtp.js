import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { BiX } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import classes from "./VerifyOtpModal.module.css";
import ActionButton from "../ButtonComponents/ActionButton";

const ProfileVerifyOtp = (props) => {
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
              <Dialog.Panel className="w-[90%] relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm lg:max-w-lg xl:max-w-xl sm:p-6">
                <div>
                  <div
                    className="flex justify-end cursor-pointer"
                    onClick={props.onCancel}
                  >
                    <BiX className=" inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-100 p-2" />
                  </div>

                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      {props.success}
                    </Dialog.Title>
                    {/*  <div className="mt-2">
                          <p className="text-lg text-gray-900 font-semibold">
                            {props.text}
                          </p>
                        </div> */}
                    <div className="">
                      <div className="">
                        <div className={classes.mainContainer}>
                          {props.contact.includes("@") ? (
                            <h1 className="text-2xl lg:text-4xl font-bold tracking-wider">
                              Verify
                              <br /> Email Address
                            </h1>
                          ) : (
                            <h1>
                              Verify
                              <br /> MObile number
                            </h1>
                          )}
                          {props.contact.includes("@") ? (
                            <p className="mt-1">
                              An OTP has been sent to your email address
                            </p>
                          ) : (
                            <div className={classes.para_text}>
                              An OTP has been sent to your Mobile number
                            </div>
                          )}
                          <h2>{props.contact}</h2>
                          <div className={classes.outer_otp_div}>
                            <div className={classes.otp_div}>
                              <input
                                type="text"
                                className={classes.otp_input}
                                required
                                maxLength="4"
                                onInput={props.onInput}
                                value={props.value}
                                onChange={props.onChange}
                              />
                            </div>
                          </div>

                          <div className={classes.error_message}>
                            {props.otpError === "NotExist" && (
                              <div>Please enter correct otp</div>
                            )}
                          </div>

                          <div>
                            <div>
                              {props.isLoading ? (
                                <div className={classes.LoadingBtn}>
                                  loading...
                                </div>
                              ) : (
                                <ActionButton
                                  buttonText={"Verify"}
                                  onClick={props.onClick}
                                />
                              )}
                            </div>
                          </div>
                          {props.otpSent && (
                            <div className={classes.success_message}>
                              {props.otpError === "OtpSent" && (
                                <div>OTP resend on {props.contact}</div>
                              )}
                            </div>
                          )}
                          <div className={classes.forgot_password}>
                            Didn't recieve the otp?
                          </div>
                          <div
                            onClick={props.onResendClick}
                            className={classes.resend_code_link}
                          >
                            {props.resentOtpLoading === "primaryContact" ? (
                              <div>loading...</div>
                            ) : (
                              <div>Resend Code</div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-yellow-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 sm:text-sm"
                    onClick={props.onComplete}
                  >
                    Verify
                  </button>
                </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ProfileVerifyOtp;
