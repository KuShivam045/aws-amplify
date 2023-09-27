import { GrAlert } from "react-icons/gr";

const TopAlertNotification = (props) => {
  const profileRoundOff = (profilePercent) => {
    let profileNum = parseInt(profilePercent);
    let roundOff = Math.round(profileNum);

    return roundOff;
  };

  return (
    <>
      {props.profileCompletion !== "100.0%" ? (
        <div className="border border-gray-300 p-4 mt-2 mb-4">
          <div className="flex gap-3 items-center mb-4">
            <GrAlert color="red" className="w-12 h-12" />
            <div>
              <div className="text-base font-bold">
                {" "}
                Account Activation Pending{" "}
              </div>
              <div className="">
                Please complete your freelancer profile to activate your account
              </div>
            </div>
          </div>
          <div className="">
            <div
              style={{
                width: props.profileCompletion,
                backgroundColor: "rgb(184, 184, 255)",
                padding: 3,
                fontSize: 12,
                fontWeight: "bold",
                paddingLeft: 10,
                justifyContent: "center",
              }}
            >
              {profileRoundOff(props.profileCompletion)} %
            </div>
          </div>
        </div>
      ) : (
        <div className=""> </div>
      )}
    </>
  );
};

export default TopAlertNotification;
