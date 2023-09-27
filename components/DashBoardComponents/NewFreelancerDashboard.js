import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LeftMenu from "./LeftMenu";
import Cookies from "js-cookie";

const NewFreelancerDashBoard = (props) => {
  const [optionSelected, setOptionSelected] = useState();
  const router = useRouter();
  const pathName = router.asPath;

  useEffect(() => {
    if (
      pathName !== "/employer-workplace/my-profile" &&
      pathName !== "/personaldetails" &&
      pathName !== "/personaldetails" &&
      pathName !== "/professionandeducation" &&
      pathName !== "/portfolio" &&
      pathName !== "/companydetails" &&
      pathName !== "/freelancerpackage" &&
      pathName !== "/kycform" &&
      pathName !== "/dashboardcontact" &&
      Cookies.get("freelancerProfileStatus") === "false"
    ) {
      router.push("/employer-workplace/my-profile");
    }
    // if(Cookies.get("freelancerProfileStatus")){
    //    setFreelancerpackage(Cookies.get("freelancerProfileStatus"))
    // }
  }, []);

  const menuOptions = (menu) => {
    setOptionSelected(menu);
  };
  return (
    <div>
      <div className="lg:flex bg:[#fcd01708] lg:gap-6">
        <LeftMenu option={menuOptions} />
        <div className="pb-[5%] w-[100%]">{props.children}</div>
      </div>
    </div>
  );
};

export default NewFreelancerDashBoard;
