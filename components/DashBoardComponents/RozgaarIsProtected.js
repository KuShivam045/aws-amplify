import {
  FcOk,
  FcLock,
  FcDocument,
  FcDeployment,
  FcDeleteDatabase,
  FcSms,
} from "react-icons/fc";
import classes from "./RozgaarIsProtected.module.css";

const RozgaarIsProtected = () => {
  return (
    <div className="rounded-lg border border-gray-300 bg-white shadow-lg p-4">
      <h3 className="text-lg font-bold leading-6">
        Everything you do within Rozgaar is protected
      </h3>
      <div className={classes.contentContainer}>
        <div className={classes.rightContent}>
          <div className={classes.content}>
            <FcOk className={classes.RozgaarIsProtected_image} />
            <div className={classes.RozgaarIsProtected_text}>
              Verified Freelancers
            </div>
          </div>
          <div className={classes.content}>
            <FcDocument className={classes.RozgaarIsProtected_image} />
            <div className={classes.RozgaarIsProtected_text}>
              Non Disclosure Agreements
            </div>
          </div>
          <div className={classes.content}>
            <FcDeployment className={classes.RozgaarIsProtected_image} />
            <div className={classes.RozgaarIsProtected_text}>
              Payment Protection
            </div>
          </div>
          <div className={classes.content}>
            <FcDeleteDatabase className={classes.RozgaarIsProtected_image} />
            <div className={classes.RozgaarIsProtected_text}>
              Zero Commission
            </div>
          </div>
          <div className={classes.content}>
            <FcLock className={classes.RozgaarIsProtected_image} />
            <div className={classes.RozgaarIsProtected_text}>Data Security</div>
          </div>
          <div className={classes.content}>
            <FcSms className={classes.RozgaarIsProtected_image} />
            <div className={classes.RozgaarIsProtected_text}>
              Encrypted Chat
            </div>
          </div>
        </div>
      </div>
      {/*  <div
        className={classes.buttonText}
         onClick={() =>
          navigate(process.env.PUBLIC_URL + "/how-to-hire-freelancer")
        }
      >
        Learn More
      </div> */}
      <a
        href="/how-to-hire-freelancer"
        className="font-medium text-blue-500 hover:underline text-end"
      >
        <div>Learn more</div>
      </a>
    </div>
  );
};

export default RozgaarIsProtected;
