import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ActionButton from "../../components/ButtonComponents/ActionButton";
import { MdOutlineArrowBack } from "react-icons/md";
import { BsCheckSquareFill } from "react-icons/bs";
import { BiRectangle } from "react-icons/bi";
import ProgressBar from "../../components/PostRequirement/ProgressBar";

const perstepfifth = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [payButton] = useState("free");
  const [getPARLoading, setGetPARLoading] = useState(false);
  const [data, setData] = useState({});
  const [addOn, setAddOn] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [policy, setPolicy] = useState("");
  let router = useRouter();
  const reqId = router.query.id;
  const RequirementID = reqId;

  useEffect(() => {
    //   pageViewTracker()
    GetPARapi();
  }, []);

  const PARapi = () => {
    setIsLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 52e6faf229b4c8d1f6832edd4dde9a9d60a8c0d3"
    );

    var formdata = new FormData();
    formdata.append("UserId", userID);
    formdata.append("RequirementID", RequirementID);
    formdata.append("Status", "Pending");
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      process.env.BASE_URL + "/api/rozgaarapi/PostARequirementSecond",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "SUCCESS" && result.status_code === 200) {
          Cookies.remove("Status");
          setShowModal(true);
        } else {
          alert(result.Reason);
        }
      })
      .catch((error) => {
        alert("There is some issue , please contact support!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const GetPARapi = () => {
    setGetPARLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 52e6faf229b4c8d1f6832edd4dde9a9d60a8c0d3"
    );

    var formdata = new FormData();
    formdata.append("UserId", userID);
    formdata.append("RequirementID", RequirementID);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      process.env.BASE_URL + "/api/rozgaarapi/PostARequirementSecond",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "SUCCESS" && result.status_code === 200) {
          setData(result.Data);
          setAddOn(result.Data.AddonName);
          setPolicy(result.Data.FreelancerPolicy);
        } else {
          alert(result.Reason);
        }
      })
      .catch((error) => {
        console.log("There is some issue , please contact support!");
      })
      .finally(() => {
        setGetPARLoading(false);
      });
  };

  const handlesubmit = () => {
    PARapi();
  };

  return (
    <div>
      <div className={classes.Pagewrapper}>
        <div className={classes.Maincontainer_border}>
          {getPARLoading ? (
            <div className={classes.pageLoader}>
              {/* <Loader
                            type="TailSpin"
                            color="#1678f2"
                            height={80}
                            width={80}
                            className="text-center my-5"
                        /> */}
              loading...
            </div>
          ) : (
            <>
              <button
                className={classes.back_button}
                onClick={() => navigate(-1)}
              >
                <MdOutlineArrowBack size="30" className={classes.backIcon} />
              </button>
              <div className={classes.mainContainer}>
                <h1 className={classes.Heading_text}>Post A Requirement</h1>
                <div className={classes.para_text}>
                  In 4 quick steps connect with top freelancers
                </div>
                <ProgressBar input={"stepfive"} />
                <div className={classes.input_fields}>
                  <label className={classes.labelSkill}>
                    Give a Title to your Requirement
                  </label>
                </div>
                <div className={classes.textArea}>{data.Title}</div>
                <div className={classes.input_fields}>
                  <label className={classes.labelSkill}>Select skills</label>
                </div>

                <div className={classes.textArea}>{data.Skill}</div>

                {data.ImageUrl ? (
                  <>
                    <div className={classes.input_fields}>
                      <label className={classes.label}>
                        Upload Sample for work
                      </label>
                    </div>
                    <div>
                      <img
                        className={classes.LogoImage}
                        src={data.ImageUrl}
                        alt="Upload_Sample_Work"
                      />
                    </div>
                  </>
                ) : (
                  <></>
                )}
                <div className={classes.input_fields}>
                  <label className={classes.label}>
                    Are you hiring for a company?
                  </label>
                </div>
                <div className={classes.textArea}>
                  {data.IsCompany === "1" ? "Yes" : "No"}
                </div>
                <div className={classes.input_fields}>
                  <label className={classes.label}>
                    Enter your company name
                  </label>
                </div>
                <div className={classes.textArea}>{data.CompanyName}</div>
                <div className={classes.input_fields}>
                  <label className={classes.label}>Company website</label>
                </div>
                <div className={classes.textArea}>{data.CompanyWebsite}</div>

                {data.LogoImage ? (
                  <>
                    <div className={classes.input_fields}>
                      <label className={classes.label}>Company Logo</label>
                    </div>
                    <div>
                      <img
                        src={data.CompanyLogo}
                        className={classes.LogoImage}
                        alt="Company_Logo"
                      />
                    </div>
                  </>
                ) : (
                  <></>
                )}
                <label className={classes.labelDesign}>Requirement Type</label>
                <div className={classes.textArea}>{data.RequirementType}</div>
                <label className={classes.labelDesign}>
                  Select the working policy for freelancer
                </label>
                <div className={classes.CheckboxStyle}>
                  <div>
                    <div className={classes.CheckBoxInput}>
                      {policy && policy.includes("Remote") ? (
                        <BsCheckSquareFill size={18} color={"#1778f2"} />
                      ) : (
                        <BiRectangle size={18} />
                      )}
                      <div className={classes.CheckBoxInput_Text}>
                        Remote(Recommended)
                      </div>
                    </div>
                    <div className={classes.CheckBox_Text}>
                      Freelancer can work from anywhere
                    </div>
                  </div>
                </div>
                <div className={classes.CheckboxStyle}>
                  <div>
                    <div className={classes.CheckBoxInput}>
                      {policy && policy.includes("Hybrid") ? (
                        <BsCheckSquareFill size={18} color={"#1778f2"} />
                      ) : (
                        <BiRectangle size={18} />
                      )}
                      <div className={classes.CheckBoxInput_Text}>Hybrid</div>
                    </div>
                    <div className={classes.CheckBox_Text}>
                      Freelancer will work on site and off site
                    </div>
                  </div>
                </div>
                <div className={classes.CheckboxStyle}>
                  <div>
                    <div className={classes.CheckBoxInput}>
                      {policy && policy.includes("Onsite") ? (
                        <BsCheckSquareFill size={18} color={"#1778f2"} />
                      ) : (
                        <BiRectangle size={18} />
                      )}
                      <div className={classes.CheckBoxInput_Text}>Onsite</div>
                    </div>
                    <div className={classes.CheckBox_Text}>
                      Freelancer will come to work in person
                    </div>
                  </div>
                </div>

                {data.FreelancerPolicy === "Onsite" ||
                data.FreelancerPolicy === "Hybrid" ? (
                  <>
                    <div className={classes.input_fields}>
                      <label className={classes.labelSkill}>
                        Select Country
                      </label>
                    </div>
                    <div className={classes.textArea}>{data.Country}</div>
                    <div className={classes.input_fields}>
                      <label className={classes.labelSkill}>Select State</label>
                    </div>
                    <div className={classes.textArea}>{data.State}</div>

                    <div className={classes.input_fields}>
                      <label className={classes.labelSkill}>Select City</label>
                    </div>
                    <div className={classes.textArea}>{data.City}</div>
                    <div className={classes.input_fields}>
                      <label className={classes.labelSkill}>Pincode</label>
                    </div>
                    <div className={classes.textArea}>{data.Pincode}</div>
                  </>
                ) : (
                  <></>
                )}
                <div className={classes.input_fields}>
                  <label className={classes.label}>
                    Do you want to more then 1 freelancer?
                  </label>
                </div>
                <div className={classes.textArea}>
                  {data.MultipleFreelancers === "1" ? "Yes" : "No"}
                </div>
                <div className={classes.input_fields}>
                  <label className={classes.label}>
                    How many freelancers do you require?
                  </label>
                </div>
                <div className={classes.textArea}>{data.FreelancersCount}</div>
                <div className={classes.input_fields}>
                  <label className={classes.label}>What is budget?</label>
                </div>
                <div className={classes.textArea}>
                  {data.BudgetCurrency} {data.Budget}
                </div>
                <div className={classes.input_fields}>
                  <label className={classes.label}>Budget unit</label>
                </div>
                <div className={classes.textArea}> {data.BudgetUnit} </div>
                <div className={classes.input_fields}>
                  <label className={classes.label}>Add Ons-</label>
                </div>

                <div className={classes.CheckboxStyle}>
                  <div>
                    <div className={classes.CheckBoxInput}>
                      {addOn.includes("urgent") ? (
                        <BsCheckSquareFill size={18} color={"#1778f2"} />
                      ) : (
                        <BiRectangle size={18} />
                      )}
                      <div className={classes.CheckBoxInput_Text}>Urgent</div>
                    </div>
                    <div className={classes.CheckBox_Text}>
                      Recive faster response from
                      <br /> freelancer
                    </div>
                  </div>
                  <div className={classes.CheckBox_RightText}>Free</div>
                </div>
                <div className={classes.CheckboxStyle}>
                  <div>
                    <div className={classes.CheckBoxInput}>
                      {addOn.includes("feature") ? (
                        <BsCheckSquareFill size={18} color={"#1778f2"} />
                      ) : (
                        <BiRectangle size={18} />
                      )}
                      <div className={classes.CheckBoxInput_Text}>Feature</div>
                    </div>
                    <div className={classes.CheckBox_Text}>
                      Feature your poost on top of the
                      <br /> page.
                    </div>
                  </div>
                  <div className={classes.CheckBox_RightText}>₹49</div>
                </div>
                <div className={classes.CheckboxStyle}>
                  <div>
                    <div className={classes.CheckBoxInput}>
                      {addOn.includes("Project Manager") ? (
                        <BsCheckSquareFill size={18} color={"#1778f2"} />
                      ) : (
                        <BiRectangle size={18} />
                      )}
                      <div className={classes.CheckBoxInput_Text}>
                        Project Manager
                      </div>
                    </div>
                    <div className={classes.CheckBox_Text}>
                      Our Representative will personally
                      <br />
                      assist you in getting your work done.
                    </div>
                  </div>
                  <div className={classes.CheckBox_RightText}>₹99</div>
                </div>
                <div className={classes.CheckboxStyle}>
                  <div>
                    <div className={classes.CheckBoxInput}>
                      {addOn.includes("Non Disclosure Agreement") ? (
                        <BsCheckSquareFill size={18} color={"#1778f2"} />
                      ) : (
                        <BiRectangle size={18} />
                      )}
                      <div className={classes.CheckBoxInput_Text}>
                        Non Disclosure Agreement
                      </div>
                    </div>
                    <div className={classes.CheckBox_Text}>
                      Freelancer signs an agreement
                      <br />
                      to keep the work details confidential.
                    </div>
                  </div>
                  <div className={classes.CheckBox_RightText}>₹499</div>
                </div>

                <div className={classes.TotalAmountText}>
                  <label>
                    TOTAL :&nbsp; &nbsp;
                    <strong>₹{data.AddonAmount}</strong>
                  </label>
                </div>

                {showModal ? (
                  <Step6PAR onClick={() => setShowModal(false)} />
                ) : (
                  <></>
                )}
                {isLoading ? (
                  <div className={classes.LoadingBtn}>
                    {/* <Loader
                                        type="TailSpin"
                                        color="white"
                                        width={20}
                                        height={18}
                                    /> */}
                    loading...
                  </div>
                ) : (
                  <div className={classes.ActionBtn}>
                    {payButton === "free" ? (
                      <ActionButton
                        buttonText={"Submit"}
                        onClick={handlesubmit}
                      />
                    ) : (
                      <ActionButton
                        buttonText={"Pay & Submit"}
                        onClick={GetPARapi}
                      />
                    )}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export async function getServerSideProps(context) {
  const UserLoggedIn = context.req.cookies.Client_userLoggedIn || null;
  const FirstName = context.req.cookies.Client_FirstName || null;
  const LastName = context.req.cookies.Client_LastName || null;
  const ProfilePicture = context.req.cookies.Client_ProfilePicture || "";

  if (!context.req.cookies.Client_userLoggedIn) {
    return {
      props: {},
      redirect: { destination: "/login" },
    };
  }

  return {
    props: {
      UserLoggedIn,
      FirstName,
      LastName,
      ProfilePicture,
    },
  };
}
export default perstepfifth;
