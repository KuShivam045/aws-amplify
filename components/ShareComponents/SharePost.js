import React, { useRef, useState } from "react";
import CustomModalTheme from "../CustomModalTheme";
import classes from "./SharePost.module.css";
import {
  FaClone,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const SharePost = (props) => {
  const textAreaRef = useRef(null);
  const [success, setSuccess] = useState(false);
  const share = [
    {
      fa: (
        <a
          className={classes.iconHref}
          target="_blank"
          rel="noreferrer"
          href={"https://twitter.com/intent/tweet?url=" + props.url}
        >
          <FaTwitter className={classes.iconColor} />
        </a>
      ),
      faName: "Twitter",
    },
    {
      fa: (
        <a
          className={classes.iconHref}
          target="_blank"
          rel="noreferrer"
          href={"https://facebook.com/sharer/sharer.php?u=" + props.url}
        >
          <FaFacebookF className={classes.iconColor} />
        </a>
      ),
      faName: "Facebook",
    },
    {
      fa: (
        <a
          className={classes.iconHrefSmall}
          target="_blank"
          rel="noreferrer"
          href={
            props.device === "Mobile"
              ? "whatsapp://send?text=" + props.url
              : "https://web.whatsapp.com/send?text=" + props.url
          }
        >
          <FaWhatsapp className={classes.iconColor} />
        </a>
      ),
      faName: "Whatsapp",
    },

    {
      fa: (
        <a
          className={classes.iconHrefSmall}
          target="_blank"
          rel="noreferrer"
          href={
            "https://www.linkedin.com/shareArticle?mini=true&url=" + props.url
          }
        >
          <FaLinkedinIn className={classes.iconColor} />
        </a>
      ),
      faName: "LinkedIn",
    },
    {
      fa: (
        <a
          className={classes.iconHref}
          target="_blank"
          rel="noreferrer"
          href={process.env.BASE_URL + "mailto:?body=" + props.url}
        >
          <FaEnvelope className={classes.iconColor} />
        </a>
      ),
      faName: "Email",
    },
  ];

  const copyToClipboard = (e) => {
    textAreaRef.current.select();
    document.execCommand("copy");
    setSuccess(true);
  };
  return (
    <div>
      <CustomModalTheme onClose={props.closeModal} open = {props.open}>
        <div className={classes.shareIconContainer}>
          {share.map((item, index) => {
            return (
              <>
                <div className={classes.ShareIcon}>
                  <div className={`${classes.iconBg} ${classes[item.faName]}`}>
                    {item.fa}
                  </div>
                  <span>{item.faName}</span>
                </div>
              </>
            );
          })}
        </div>
        {success && (
          <div className={classes.error_message}>Link copied to clipboard</div>
        )}
        <div className={classes.textInputLabel}>
          <input
            type="url"
            ref={textAreaRef}
            value={props.url}
            className={classes.textInput}
          />
          <button
            className={classes.copyIcon}
            onClick={() => {
              copyToClipboard();
              setTimeout(() => {
                setSuccess(false);
              }, 1000);
            }}
          >
            <FaClone />
          </button>
        </div>
      </CustomModalTheme>
    </div>
  );
};

export default SharePost;
