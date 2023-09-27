import { GiFallingStar } from "react-icons/gi";

const ProfileHealth = (props) => {
  const profileRoundOff = (profilePercent) => {
    let profileNum = parseInt(profilePercent);

    let roundOff = Math.round(profileNum);

    return roundOff;
  };

  return (
    <div className="rounded-lg border border-gray-300 bg-white shadow-lg">
      {props.profileHealthData && (
        <div className="bg-gradient-to-r from-[#134e5e] to-[#71b280] p-4 rounded-t-lg">
          <div className="text-base font-semibold text-white">
            @{props.profileHealthData.userName}
          </div>

          {/* {props.profileHealthData.Packagename ? (
            <div className="text-lg text-right text-white">
              {props.profileHealthData.Packagename} MEMBERSHIP
            </div>
          ) : (
            <a
              href="/freelancerpackage"
              className="text-lg text-right text-white"
            >
              BUY MEMBERSHIP
            </a>
          )} */}
           <a
              href="/freelancerpackage"
              className="text-lg font-bold text-right text-white"
            >
              BASIC MEMBERSHIP
            </a>
        </div>
      )}
      <div className="bg-white border-t border-gray-300 p-4 flex items-center gap-2">
        <div>
          <GiFallingStar className="" />
        </div>
        <div className="">
          <div className="text-base font-semibold">
            Put your hiring on auto-pilot
          </div>
          <a
            href="/employer-workplace/hire-assistant"
            className="text-sm text-blue-500 hover:underline"
          >
            <div>Hire Rozgaar Assistant </div>
          </a>
        </div>
      </div>

      <div className="bg-white border-t border-gray-300 rounded-b-lg p-4">
        <div className="">
          <div className="text-base font-semibold">
            Achieve all-star profile
          </div>
          <div>
            <div className="text-sm leading-6 text-gray-600">
              Complete the recommended sections for relevant freelancers and
              receive more requirement views
            </div>
          </div>
        </div>
        <div className="mt-2">
          <div
            style={{
              width: props.profileHealthData.ProfileCompleted + "%",
              backgroundColor: "rgb(184, 184, 255)",
              padding: 5,
              fontSize: 12,
              fontWeight: "bold",
              paddingLeft: 10,
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            {profileRoundOff(props.profileHealthData.ProfileCompleted)} %
          </div>
        </div>
        {/*  {props.profileHealthData?.MandatoryFieldsLeft?.length && (
          <a href="/workprofile" class="aTag">
            <div className="pt-2 text-sm font-semibold">
              
              Add your
              {
                props.profileHealthData
                  .MandatoryFieldsLeft[0]
              }
            </div>
          </a>
        )} */}
        {Math.round(props.profileHealthData.ProfileCompleted) !== 100 && (
          <a href="/employer-workplace/my-profile" class="linkTag">
            <span className="pt-2 text-sm font-semibold">
              Add your {props.profileHealthData.EmptyProfileFields[0]}
            </span>
          </a>
        )}
      </div>
    </div>
  );
};
export default ProfileHealth;
