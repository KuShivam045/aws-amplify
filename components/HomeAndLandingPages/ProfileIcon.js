import { useRouter } from "next/router";
import classes from "./ProfileIcon.module.css";
import Image from "next/image";

const ProfileIcon = (props) => {
  const FirstName = props.FirstName
    ? props.FirstName.charAt(0).toUpperCase()
    : " ";
  const LastName = props.LastName
    ? props.LastName.charAt(0).toUpperCase()
    : " ";
  const ProfilePicture =
    props.ProfilePicture === "undefined" || !props.ProfilePicture
      ? false
      : true;

  const router = useRouter();

  return (
    <>
      {props.type === "freelancerProfiles" ? (
        <div>
          {true ? (
            <div className={classes.logooverlaped}>
              {props.appliedUser &&
                props.appliedUser.map((item, index) => {
                  return (
                    index < 5 && (
                      <div className={classes.freelancerProfileContainer}>
                        {item.ProfilePicture !== "" ? (
                          <img
                            src={item.ProfilePicture}
                            alt={item.FullName}
                            className={classes.requirementcard_icons}
                            onClick={() =>
                              router.push(
                                "/freelancer-profile/" + item.FreelancerId
                              )
                            }
                            loading="lazy"
                            title={item.FullName}
                            height={100}
                            width={100}
                          />
                        ) : (
                          <div
                            className={classes.profileImageDisplay}
                            onClick={() =>
                              router.push("/freelancer-profile/" +
                                  item.FreelancerId
                              )
                            }
                          >
                            {props.ProfilePicture ? (
                              <Image
                                src={props.ProfilePicture}
                                className={classes.profilePicture}
                                alt={item.FullName}
                                loading="lazy"
                                title={item.FullName}
                                height={100}
                                width={100}
                              />
                            ) : (
                              <div className="text-center">
                                {item.FullName.charAt(0).toUpperCase()}{" "}
                                {item.LastName.charAt(0).toUpperCase()}{" "}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )
                  );
                })}
            </div>
          ) : (
            <div className={classes.smalliconContainer}>
              <div className={classes.smallinnerInitial}>
                {FirstName}
                {LastName}
              </div>
            </div>
          )}
        </div>
      ) : props.type === "topFiveFreelaners" ? (
        <>
          <div
            className={classes.profileImageDisplay}
            onClick={() =>
              router.push(
                  "/freelancer-profile/" +
                  props.FreelancerId
              )
            }
          >
            {props.ProfilePicture ? (
              <Image
                src={props.ProfilePicture}
                className={classes.topProfilePicture}
                alt={props.FirstName + " " + props.LastName}
                loading="lazy"
                title={props.FirstName + " " + props.LastName}
                height={100}
                width={100}
              />
            ) : (
              <div className={classes.nameAlign}>
                {FirstName}
                {LastName}
              </div>
            )}
          </div>
        </>
      ) : (
        <div
          className={
            props.leftMenu
              ? classes.iconContainerLeftMenu
              : classes.iconContainer
          }
        >
          {ProfilePicture ? (
            <div
              className={
                props.leftMenu
                  ? classes.profileImageLeftMenu
                  : classes.profileImage
              }
            >
              <Image
                src={props.ProfilePicture}
                className={classes.profilePicture}
                alt="Freelancer_Profile_Picture"
                loading="lazy"
                title={props.FirstName + " " + props.LastName}
                height={100}
                width={100}
              />
            </div>
          ) : (
            <div
              className={
                props.leftMenu
                  ? classes.innerInitialLeftMenu
                  : classes.innerInitial
              }
            >
              {FirstName}
              {LastName}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ProfileIcon;
