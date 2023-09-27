import React from "react";
import classes from "./CustomModalTheme.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const CustomModalTheme = (props) => {
  window.scrollTo({ top: 0, behavior: "auto" });
  return (
    <>
      <div className={classes.modalContainer}>
        <div
          className={
            props.width === "fullWidth"
              ? classes.modalContainerWidth
              : classes.modal
          }
        >
          <div className={classes.cancelModel}>
            <AiOutlineClose
              size="30"
              onClick={props.onClose}
              className={classes.backIcon}
            />
          </div>
          <div className={classes.mainContainer}>{props.children}</div>
        </div>
      </div>
    </>
  );
};

export default CustomModalTheme;
