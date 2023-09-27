import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const LogoutModal = (props) => {
  const router = useRouter();

  const Logout = () => {
    props.setShowModal(false);
    Cookies.remove("Client_userLoggedIn");
    Cookies.remove("Client_IsLoginType");
    Cookies.remove("Client_userID");
    Cookies.remove("Client_USERMOBILENO");
    Cookies.remove("Client_USEREMAIL");
    Cookies.remove("Client_FirstName");
    Cookies.remove("Client_LastName");
    Cookies.remove("Client_UserName");
    Cookies.remove("Client_ProfilePicture");
    Cookies.remove("UserOtp");
    Cookies.remove("RedirectUrl");
    Cookies.remove("freelancerProfileStatus");
    router.push("/");
  };

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={props.showModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-30"
        initialFocus={cancelButtonRef}
        onClose={props.setShowModal}
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

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
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
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <CheckIcon
                      className="h-6 w-6 text-green-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Are you sure you want to logout ?
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Your unsaved data will be lost, so make sure to save
                        your data.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3  mx-auto">
                  <div
                    className="cursor-pointer rounded-md w-full text-center border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2  sm:text-sm"
                    onClick={() => Logout()}
                  >
                    Log Out
                  </div>

                  <div
                    type="button"
                    className="cursor-pointer w-full text-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2  sm:mt-0 sm:text-sm"
                    onClick={() => props.setShowModal(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
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

export default LogoutModal;
