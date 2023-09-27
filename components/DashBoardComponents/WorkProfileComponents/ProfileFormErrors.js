import { BiErrorCircle } from "react-icons/bi";

const ProfileFormErrors = (props) => {
  return (
    <div className="border border-red-500 rounded-lg py-1  bg-[#faebd7]">
      <div className="flex items-center p-[5px]">
        {" "}
        <BiErrorCircle />
        <div className="pl-[10px] text-sm font-bold">{props.errorMessage}</div>
      </div>
    </div>
  );
};

export default ProfileFormErrors;
