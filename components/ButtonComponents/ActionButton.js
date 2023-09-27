import classes from "../MainComponents/RITheme.module.css";

const ActionButton = (props) => {
  return (
    <>
      {props.buttonType === "left" ? (
        <button
          className={
            props.color ? classes.buttonBoxWhite : classes.buttonBoxLeft
          }
          onClick={props.onClick}
        >
          <div className={classes.buttonText}>{props.buttonText}</div>
        </button>
      ) : props.buttonType === "small" ? (
        <button
          className={
            props.color
              ? classes.buttonBoxWhite
              : "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-4 mt-6"
          }
          onClick={props.onClick}
        >
          <div className={classes.buttonText}>
            {props.isLoading ? <div>Loading...</div> : <> {props.buttonText}</>}
          </div>
        </button>
      ) : props.buttonType === "smallForReqCard" ? (
        <button
          className={
            props.color
              ? classes.buttonBoxWhite
              : classes.buttonBoxsmallForReqCard
          }
          onClick={props.onClick}
        >
          <div className={classes.buttonText}>{props.buttonText}</div>
        </button>
      ) : props.buttonType === "green" ? (
        <button
          className={
            props.color
              ? "bg-white text-gray-700"
              : "text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-2 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          }
          onClick={props.onClick}
        >
          {props.buttonText}
        </button>
      ) : props.buttonType === "medium" ? (
        <button
          className={
            props.color ? classes.buttonBoxWhite : classes.buttonBoxmedium
          }
          onClick={props.onClick}
        >
          <div className={classes.buttonText}>{props.buttonText}</div>
        </button>
      ) : props.buttonType === "signUp" ? (
        <button
          className={
            props.color ? classes.buttonBoxWhite : classes.buttonBoxSignup
          }
          onClick={props.onClick}
        >
          <div className={classes.buttonTextSignUp}>{props.buttonText}</div>
        </button>
      ) : props.buttonType === "reject" ? (
        <button
          className={
            props.color
              ? classes.buttonBoxWhite
              : "text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          }
          onClick={props.onClick}
        >
          {props.buttonText}
        </button>
      ) : props.buttonType === "alertsubmit" ? (
        <button
          className={
            props.color ? classes.buttonBoxWhite : classes.buttonBoxAlert
          }
          onClick={props.onClick}
        >
          <div className={classes.buttonText}>
            {props.isLoading ? <div>Loading...</div> : <> {props.buttonText}</>}
          </div>
        </button>
      ) : props.buttonType === "dual" ? (
        <div className={classes.dualButton}>
          <button
            className={classes.buttonBoxdualSecond}
            onClick={props.onCancelClick}
          >
            <div className={classes.buttonText}>{props.secondButtonText}</div>
          </button>
          <button className={classes.buttonBoxdual} onClick={props.onClicK}>
            <div className={classes.buttonText}>
              {props.isLoading ? (
                <div>Loading...</div>
              ) : (
                <> {props.buttonText}</>
              )}
            </div>
          </button>
        </div>
      ) : (
        <button
          className={props.color ? classes.buttonBoxWhite : classes.buttonBox}
          onClick={props.onClick}
        >
          <div className={classes.buttonText}>{props.buttonText}</div>
        </button>
      )}
    </>
  );
};

export default ActionButton;
