import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const RedirectFreelancer = (props) => {
  return (
    <div>
      <Transition.Root show={props.modalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          //   initialFocus={cancelButtonRef}
          onClose={props.setModalOpen}
        >
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

          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div>
                    <div
                      className="flex text-end justify-end cursor-pointer"
                      onClick={() => props.setModalOpen(false)}
                    >
                      <XMarkIcon
                        className="h-6 w-6 text-gray-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex justify-center h-18 w-auto">
                      <Image
                        src={"/rozgaarIconNew.png"}
                        alt="Rozgaar Logo"
                        height={100}
                        width={100}
                        className="h-full w-60"
                        priority
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Join The Largest Freelancer Community Apply on Freelance
                        Jobs & Projects
                      </Dialog.Title>
                      {/* <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Eius aliquam laudantium explicabo pariatur iste
                          dolorem animi vitae error totam. At sapiente aliquam
                          accusamus facere veritatis.
                        </p>
                      </div> */}
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6 flex justify-center ">
                    {/*  <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Deactivate
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button> */}
                    <a
                      className="inline-flex justify-center rounded font-semibold py-2 px-3 bg-blue-200/40 text-blue-500 outline-none"
                      // href="https://freelancer.rozgaarindia.com/signup"
                      href={props.href}
                    >
                      <span>
                        Visit Freelancer <span aria-hidden="true">→</span>
                      </span>
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default RedirectFreelancer;
