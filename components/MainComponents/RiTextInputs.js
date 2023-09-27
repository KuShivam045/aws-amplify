import React, { useState } from "react";
import classes from "./RITheme.module.css";
import { BsEyeSlash, BsCaretUpFill, BsCaretDownFill } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import { RiTapeFill, RiImageFill, RiFileListFill } from "react-icons/ri";
import countries from "../../JsonFiles/countries.json";
import states from "../../JsonFiles/states.json";
import currency from "../../JsonFiles/Currency.json";
import { countryCode } from "../../JsonFiles/ContryCodes";

const yearsData = [
  {
    type: "One",
    value: "1",
  },
  {
    type: "Two",
    value: "2",
  },
  {
    type: "Three",
    value: "3",
  },
  {
    type: "Four",
    value: "4",
  },
  {
    type: "Five",
    value: "5",
  },
  {
    type: "Six",
    value: "6",
  },
  {
    type: "Seven",
    value: "7",
  },
  {
    type: "Eight",
    value: "8",
  },
  {
    type: "Nine",
    value: "9",
  },
  {
    type: "Ten",
    value: "10",
  },
  {
    type: "Eleven",
    value: "11",
  },
  {
    type: "Twelve",
    value: "12",
  },
  {
    type: "More than twelve",
    value: "12+",
  },
];
let genderData1 = [
  "Signup or Login",
  "Profile ",
  "KYC",
  "Freelance Jobs",
  "Payment",
  "Career",
  "Feedback",
  "Complaints",
  "Other",
];
let reportaBug = ["General improvements", "Minor", "Major", "Critical"];

const RiTextInputs = (props) => {
  const [passwordShow, setPasswordShow] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [mobileFocus, setMobileFocus] = useState();
  const [dropDownFocus, setDropDownFocus] = useState();
  const [countryNameFilter, setCountryNameFilter] = useState(false);

  const [focused, setFocused] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState();
  const [flag, setFlag] = useState();
  const [searchItem, setSearchItem] = useState("India");
  const [countryDialCode, setCountryCode] = useState();
  const toggling = () => setIsOpen(!isOpen);

  let genderData = ["Male", "Female", "Others"];
  let idProof = [
    "Passport",
    "Driving License ",
    "Adhaar(UID)",
    "Election Commission ID Card",
  ];

  const onOptionClicked = (item, value, flag, countryDialCode, country) => {
    setSelectedOption(value);
    setSearchItem(value);
    setIsOpen(false);
    setFlag(flag);
    setCountryCode(countryDialCode);
    if (props.setCountry) {
      props.setCountry(value);
    }

    if (props.setCountryObject) {
      props.setCountryObject(item);
    }
  };

  searchItem === undefined && setSearchItem("");

  const DropdowonOptions = () => {
    switch (props.label || props.placeHolder) {
      case "Country":
        return (
          <>
            {props.displayData
              .filter((data) => {
                if (
                  searchItem === "" ||
                  searchItem === "India" ||
                  countryNameFilter
                ) {
                  return props.displayData;
                } else if (
                  data.name.toLowerCase().startsWith(searchItem.toLowerCase())
                ) {
                  return data.name;
                }
              })
              .map((item, index) => {
                return (
                  <>
                    <li
                      onClick={() =>
                        onOptionClicked(
                          item,
                          item.name,
                          `https://flagpedia.net/data/flags/normal/${item.code.toLowerCase()}.png`,
                          item.dial_code,
                          item.name,
                          item
                        )
                      }
                      className="flex items-center px-2 py-2 gap-3"
                      key={item}
                    >
                      <div>
                        <img
                          className="w-8"
                          src={`https://flagpedia.net/data/flags/normal/${item.code.toLowerCase()}.png`}
                          alt="Country_Flag_Logo"
                        />
                      </div>
                      <div>{item.name}</div>
                    </li>
                  </>
                );
              })}
          </>
        );
      case "Select Gender":
        return (
          <>
            <option value="" disabled>
              select your gender
            </option>
            {!!genderData &&
              genderData.map((item, id) => {
                return <option key={item}>{item}</option>;
              })}
          </>
        );
      case "Select Document Name":
        return (
          <>
            <option value="" disabled>
              select your document name
            </option>
            {!!idProof &&
              idProof.map((item, id) => {
                return <option key={item}>{item}</option>;
              })}
          </>
        );
      case "Gender":
        return (
          <>
            <option value="" disabled>
              Select gender
            </option>
            {!!genderData &&
              genderData.map((item, id) => {
                return (
                  <option
                    key={item}
                    className="cursor-pointer"
                    selected={props.defaultGender === item ? true : false}
                  >
                    {item}
                  </option>
                );
              })}
          </>
        );

      case "Industry":
        return (
          <>
            {!!props.displayData &&
              props.displayData.map((item, id) => {
                return (
                  <option
                    key={item.id}
                    selected={
                      props.defaultIndustry === item.name ? true : false
                    }
                    value={item.name}
                  >
                    {item.name}
                  </option>
                );
              })}
          </>
        );
      case "Language":
        return (
          <>
            {!!props.displayData &&
              props.displayData.map((item, id) => {
                return <option key={item.id}>{item.name}</option>;
              })}
          </>
        );
      case "Select Country":
        return (
          <>
            <option value="" disabled>
              Select country
            </option>
            {!!countries &&
              countries.map((item, id) => {
                return (
                  <>
                    <option key={item.id} value={item.country}>
                      {item.country}
                    </option>
                  </>
                );
              })}
          </>
        );

      case "Select State":
        return (
          <>
            <option value="">Select state</option>
            {!!states &&
              states.map((item, id) => {
                return (
                  item.country_name === props.selectedCountry && (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  )
                );
              })}
          </>
        );
      case "Select City":
        return (
          <>
            <option value=""> Select city</option>
            {!!props.displayData &&
              props.displayData.map((item, id) => {
                return (
                  <option key={item.id} value={item.City}>
                    {item.City}
                  </option>
                );
              })}
          </>
        );
      case "Experience":
        return (
          <>
            <option value="0">{props.placeHolder}</option>
            {yearsData &&
              yearsData.map((item, id) => {
                return (
                  <option key={item.value} value={item.value}>
                    {item.type}
                  </option>
                );
              })}
          </>
        );
      case "Select Currency":
        return (
          <>
            <option value="0" disabled>
              Select your currency
            </option>
            {currency &&
              currency.map((item, id) => {
                return (
                  <option key={item.code} value={item.code}>
                    {item.name + " (" + item.symbolNative + ")"}
                  </option>
                );
              })}
          </>
        );
      case "Year":
        return (
          <>
            <option value="0">Select Year</option>
            {props.displayData &&
              props.displayData.map((item, id) => {
                return (
                  <option key={item.value} value={item.value}>
                    {item.type}
                  </option>
                );
              })}
          </>
        );
      case "Subject":
        return (
          <>
            <option value="">Select Subject</option>
            {!!genderData1 &&
              genderData1.map((item, id) => {
                return <option key={item}>{item}</option>;
              })}
          </>
        );
      case "Select Bugtype":
        return (
          <>
            <option value="">Select Subject</option>
            {!!reportaBug &&
              reportaBug.map((item, id) => {
                return <option key={item}>{item}</option>;
              })}
          </>
        );
      default:
        break;
    }
  };

  const inputType = (type) => {
    switch (type) {
      case "SingleLineInput":
        return (
          <div className="">
            <div className="text-base font-semibold tracking-wide text-left">
              {props.label}
            </div>
            <input
              type={props.type}
              readOnly={props.readOnly}
              name={props.label}
              onInput={props.onInput}
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm bg-white"
              disabled={props.disabled}
              placeholder={props.placeHolder}
              maxLength={props.maxLength}
              minLength={props.minLength}
              value={props.value}
              onChange={props.onChange}
              onFocus={props.onFocus}
              onKeyPress={props.onKeyPress}
            />
            <span className={"block text-sm font-medium text-red-700"}>
              {props.error}
            </span>
          </div>
        );
      case "SingleLineNameInput":
        return (
          <div className={classes.formContainer}>
            <label className={classes.lableDesign}>{props.label}</label>
            <input
              type={props.type}
              name={props.label}
              onInput={props.onInput}
              className={classes.inputArea_name}
              placeholder={props.placeHolder}
              maxLength={props.maxLength}
              minLength={props.minLength}
              value={props.value}
              onChange={props.onChange}
              onFocus={props.onFocus}
              onKeyPress={props.onKeyPress}
            />
          </div>
        );
      case "InputWithIcon":
        return (
          <div className={classes.formContainer}>
            <label className={classes.iconInputLabel}>{props.label}</label>
            <div className={classes.subLabel}>{props.subLabel}</div>
            <div
              className={
                focused === true
                  ? classes.focuedIconInputDiv
                  : classes.iconInputDiv
              }
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
            >
              <div className={classes.icon}>{props.currencyIcon}</div>
              <input
                type={props.type}
                name={props.label}
                onInput={props.onInput}
                className={classes.inputAreaIcon}
                placeholder={props.placeHolder}
                maxLength={props.maxLength}
                minLength={props.minLength}
                value={props.value}
                onChange={props.onChange}
                onFocus={props.onFocus}
                onKeyPress={props.onKeyPress}
              />
            </div>
          </div>
        );
      case "SmallMultiLineInput":
        return (
          <div className={classes.formContainer}>
            <div className="text-base font-semibold  tracking-wide text-left">
              {props.label}
            </div>
            <textarea
              rows="5"
              cols="20"
              name="text"
              onInput={props.onInput}
              onChange={props.onChange}
              value={props.value}
              className="w-full rounded-md border border-gray-300"
              placeholder={props.placeholder}
              maxLength={props.maxLength}
              onKeyPress={props.onKeyPress}
            />
          </div>
        );
      case "plainCheckBox":
        return (
          <div>
            <input
              type="checkbox"
              onClick={props.onClick}
              onChange={props.onChange}
              checked={props.checked}
              value={props.value}
              onInput={props.onInput}
              className={classes.plainCheckBoxClass}
              onKeyPress={props.onKeyPress}
            />
          </div>
        );
      case "JobAlertCheckBox":
        return (
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              onClick={props.onClick}
              value={props.value}
              onInput={props.onInput}
              className="cursor-pointer"
              checked={props.checked}
              onKeyPress={props.onKeyPress}
            />
            <h2 className={classes.checkLabel}>{props.value}</h2>
          </div>
        );
      case "newRadio":
        return (
          <div>
            <input
              type={"radio"}
              placeholder={props.placeholder}
              name={props.name}
              id={props.id}
              checked={props.checked}
              onInput={props.onInput}
              value={props.value}
              onChange={props.onChange}
              className={classes.newRadioButton}
              onKeyPress={props.onKeyPress}
            />
            <label className={classes.newRadioLabel}>{props.label}</label>
          </div>
        );
      case "MultiLineInput":
        return (
          <div className="">
            <div className="text-base font-semibold  tracking-wide text-left">
              {props.label}
            </div>
            <textarea
              rows="10"
              cols="30"
              name="text"
              onInput={props.onInput}
              onChange={props.onChange}
              value={props.value}
              className="w-full rounded-md border border-gray-300 mt-1"
              placeholder={props.placeholder}
              maxLength={props.maxLength}
              onKeyPress={props.onKeyPress}
            />
          </div>
        );
      case "CountryDropdown":
        return (
          <div className="">
            <label className="">{props.label}</label>
            <div onClick={props.onClick} value={props.value}>
              <div
                className="flex items-center gap-3 w-full text-sm px-3 border border-gray-300 focus:outline-none focus:white rounded-md"
                // className={
                //   dropDownFocus
                //     ? classes.flagContainerFocus
                //     : classes.flagContainer
                // }
                onClick={() => setCountryNameFilter(true)}
                onFocus={() => {
                  setDropDownFocus(true);
                }}
                onBlur={() => {
                  setDropDownFocus(false);
                }}
              >
                <div>
                  {" "}
                  <img
                    src={
                      flag || "https://flagpedia.net/data/flags/normal/in.png"
                    }
                    className="w-8"
                    alt="Country_Flag_Logo"
                  />
                </div>
                <input
                  type="text"
                  onInput={() => {
                    setCountryNameFilter(false);
                    props.setCountry("");
                  }}
                  value={searchItem}
                  // onClick={toggling}
                  className="w-full text-sm py-2.5  border-none focus:outline-none focus:border-white rounded-md outline-none"
                  // onKeyPress={props.onKeyPress}
                ></input>
                {isOpen ? (
                  <BsCaretUpFill
                    color="gray"
                    onClick={toggling}
                    onFocus={() => {
                      setDropDownFocus(true);
                    }}
                    onBlur={() => {
                      setDropDownFocus(false);
                    }}
                    className="cursor-pointer"
                  />
                ) : (
                  <BsCaretDownFill
                    color="gray"
                    onClick={toggling}
                    onFocus={() => {
                      setDropDownFocus(true);
                    }}
                    onBlur={() => {
                      setDropDownFocus(false);
                    }}
                    className="cursor-pointer"
                  />
                )}
              </div>
              {isOpen && (
                <div className="h-[200px] absolute overflow-y-scroll bg-gray-200 shadow-md z-30 w-[350px] sm:w-[365px] lg:w-[370px] ">
                  <ul className="border-gray-200">{DropdowonOptions()}</ul>
                </div>
              )}
            </div>
          </div>
        );
      case "Dropdown":
        return (
          <div className="w-full" ref={props.ref}>
            <div className="text-base font-semibold tracking-wide text-left">
              {props.label}
            </div>
            <select
              onChange={props.onChange}
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm cursor-pointer"
              value={props.value}
              disabled={props.disabled}
            >
              {DropdowonOptions()}
            </select>
          </div>
        );
      case "password":
        return (
          <div className={classes.formContainer}>
            <label className={classes.lableDesign}>{props.label}</label>
            <div
              className={
                passwordFocus
                  ? classes.input_fields_mobile
                  : classes.input_fields
              }
            >
              <input
                type={passwordShow ? "password" : "text"}
                onFocus={() => {
                  setPasswordFocus(true);
                }}
                onInput={props.onInput}
                onBlur={() => {
                  setPasswordFocus(false);
                }}
                name={props.label}
                className={classes.inputArea_withIcon}
                placeholder={props.placeHolder}
                value={props.value}
                onChange={props.onChange}
                onKeyPress={props.onKeyPress}
              />
              {passwordShow ? (
                <AiOutlineEye
                  onClick={() => setPasswordShow(!passwordShow)}
                  className={classes.eyeIcon}
                />
              ) : (
                <>
                  <BsEyeSlash
                    onClick={() => setPasswordShow(!passwordShow)}
                    className={classes.eyeIcon}
                  />
                </>
              )}
            </div>
          </div>
        );
      case "mobile":
        return (
          <div className="">
            <div className="text-base font-semibold tracking-wide text-left">
              {props.label}
            </div>
            <div className={mobileFocus ? "" : ""}>
              <div className="flex gap-4 ">
                <select
                  value={props.dialCodeValue}
                  className="rounded-md cursor-pointer border-gray-300"
                  onChange={props.onDialCodechange}
                >
                  {!!countryCode &&
                    countryCode.map((item, id) => {
                      return (
                        <option key={item.id} value={item.dial_code}>
                          {item.dial_code}
                        </option>
                      );
                    })}
                </select>
                <input
                  disabled={props.disabled}
                  type={"tel"}
                  onFocus={() => {
                    setMobileFocus(true);
                  }}
                  onBlur={() => {
                    setMobileFocus(false);
                  }}
                  onInput={props.onInput}
                  name={props.label}
                  className="w-full text-sm py-2.5 border px-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded-md"
                  placeholder={props.placeHolder}
                  value={props.value}
                  maxLength={props.maxLength}
                  minLength={props.minLength}
                  onChange={props.onChange}
                  onKeyPress={props.onKeyPress}
                />
              </div>
              {props.checkMObileVal ? (
                <AiFillCheckCircle className={classes.tickIcon} />
              ) : (
                ""
              )}
            </div>
          </div>
        );
      case "social":
        return (
          <div className="">
            {/* <label className={classes.lableDesign}>{props.label}</label> */}
            <div className="flex gap-4 items-center">
              {props.icon}

              <input
                type={props.type}
                name={props.label}
                onInput={props.onInput}
                className="block text-base w-full rounded-md border-gray-300 py-2 px-2 text-gray-900 shadow-sm focus:border-blue-600 focus:ring-blue-500 mt-1"
                placeholder={props.placeHolder}
                maxLength={props.maxLength}
                minLength={props.minLength}
                value={props.value}
                onChange={props.onChange}
                onFocus={props.onFocus}
                onKeyPress={props.onKeyPress}
              />
            </div>
          </div>
        );
      case "mobileWithDropdown":
        return (
          <div className="">
            <div className="">
              <label 
              className=""
              >{props.label}</label>
            </div>
            <div>
              <div className="flex border border-gray-300 items-center rounded-lg focus:border-blue-500 gap-2">
                <select
                  value={props.dialCodeValue}
                  className="border-0 cursor-pointer"
                  onChange={props.onDialCodechange}
                >
                  {!!countryCode &&
                    countryCode.map((item, id) => {
                      return (
                        <option key={item.id} value={item.dial_code}>
                          {item.dial_code}
                        </option>
                      );
                    })}
                </select>
                <input
                  type={"tel"}
                  onFocus={() => {
                    setMobileFocus(true);
                  }}
                  onBlur={() => {
                    setMobileFocus(false);
                  }}
                  onInput={props.onInput}
                  name={props.label}
                  className=" w-full hover:ring-0 border-0"
                  placeholder={props.placeHolder}
                  value={props.value}
                  maxLength={props.maxLength}
                  minLength={props.minLength}
                  onChange={props.onChange}
                  onKeyPress={props.onKeyPress}
                />
                <div>
                {props.checkMObileVal ? (
                <AiFillCheckCircle className={classes.tickIcon} />
              ) : (
                ""
              )}
              {props.checkWhatsAppMObile ? (
                <AiFillCheckCircle className={classes.tickIcon} />
              ) : (
                ""
              )}
              {props.checkAlternateMobile ? (
                <AiFillCheckCircle className={classes.tickIcon} />
              ) : (
                ""
              )}
              {props.button}
                </div>
              </div>
             
            </div>
          </div>
        );
      case "mobile":
          return (
            <div className="">
              <div className="text-base font-semibold tracking-wide text-left">{props.label}</div>
              <div
                className={
                  mobileFocus ? "" : ""
                }
              >
                <div className="flex gap-4">
                <select
                    value={props.dialCodeValue}
                    className="rounded-md"
                    onChange={props.onDialCodechange}
                  >
                    {!!countryCode &&
                      countryCode.map((item, id) => {
                        return (
                          <option key={item.id} value={item.dial_code}>
                            {item.dial_code}
                          </option>
                        );
                      })}
                  </select>
                  <input
                    disabled={props.disabled}
                    type={"tel"}
                    onFocus={() => {
                      setMobileFocus(true);
                    }}
                    onBlur={() => {
                      setMobileFocus(false);
                    }}
                    onInput={props.onInput}
                    name={props.label}
                    className="w-full text-sm py-2.5 border px-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded-md"
                    placeholder={props.placeHolder}
                    value={props.value}
                    maxLength={props.maxLength}
                    minLength={props.minLength}
                    onChange={props.onChange}
                    onKeyPress={props.onKeyPress}
                  />
                </div>
                {props.checkMObileVal ? (
                  <AiFillCheckCircle className={classes.tickIcon} />
                ) : (
                  ""
                )}
              </div>
            </div>
          );
      case "checkbox":
        return (
          <div onClick={props.onClick} className="border px-4 py-2 rounded-md">
            <div className="flex gap-2">
              <div className={classes.CheckBoxInput}>
                <input
                  type="checkbox"
                  onClick={props.onClick}
                  value={props.value}
                  onInput={props.onInput}
                  className="mt-1 w-5 h-5"
                  checked={props.checked}
                  onKeyPress={props.onKeyPress}
                />
              </div>
              <div>
                <div className="text-base font-semibold">{props.text}</div>
                <div className="text-sm text-gray-500">{props.subText}</div>
              </div>
            </div>
          </div>
        );
      case "radioOne":
        return (
          <div className={classes.formContainer}>
            <label className={classes.lableDesign}>{props.label}</label>
            <div className={classes.formContainer}>
              <div className={classes.inputArea}>
                <input
                  type={"radio"}
                  name={props.label}
                  placeholder={props.placeHolder}
                  onInput={props.onInput}
                  value={props.value}
                  onChange={props.onChange}
                  onKeyPress={props.onKeyPress}
                />
                <span>{props.value}</span>{" "}
              </div>
            </div>
          </div>
        );
      case "radioTwo":
        return (
          <div className={classes.formContainer}>
            <div className={classes.inputArea}>
              <input
                type={"radio"}
                name={props.name}
                placeholder={props.placeHolder}
                onInput={props.onInput}
                value={props.value}
                onChange={props.onChange}
                onKeyPress={props.onKeyPress}
              />
              <span>{props.value}</span>{" "}
            </div>
          </div>
        );

      case "file":
        return (
          <>
            <div className="">
              <div className="text-base font-semibold  tracking-wide text-left">
                {props.label}
              </div>
              <label
                className={
                  " w-full text-sm py-2 border px-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded-md mt-1" +
                  " " +
                  "flex justify-between items-center cursor-pointer"
                }
                vlaue={props.value}
                for={props.label === "" ? props.placeHolder : props.label}
              >
                {props.placeHolder !== "Audio/Video" &&
                  props.placeHolder !== "Document" &&
                  props.placeHolder !== "Image" &&
                  props.placeHolder}
                {props.placeHolder === "Audio/Video" && (
                  <div className={classes.uploadBoxIconContainer}>
                    <RiTapeFill size={40} className={classes.uploadBoxIcon} />
                    <b>Audio/Video</b>
                  </div>
                )}
                {props.placeHolder === "Document" && (
                  <div className={classes.uploadBoxIconContainer}>
                    <RiFileListFill
                      size={40}
                      className={classes.uploadBoxIcon}
                    />
                    <b>Document</b>
                  </div>
                )}
                {props.placeHolder === "Image" && (
                  <div className={classes.uploadBoxIconContainer}>
                    <RiImageFill size={40} className={classes.uploadBoxIcon} />
                    <b>Image</b>
                  </div>
                )}
                {props.icon}
              </label>
              <input
                type="file"
                hidden
                id={props.label === "" ? props.placeHolder : props.label}
                accept={props.accept}
                onInput={props.onInput}
                onChange={props.onChange}
                disabled={props.disabled}
                onKeyPress={props.onKeyPress}
              />
            </div>{" "}
          </>
        );
      case "upload":
        return (
          <>
            <div className={classes.formContainer}>
              <label className={classes.lableDesign}>{props.label}</label>
              <label className={classes.inputArea_upload} for={props.label}>
                {" "}
                <div className={classes.uploadIcon}>
                  <img
                    src={props.src}
                    alt=""
                    className={classes.uploadedImage}
                  />
                  {props.icon}
                  {props.placeHolder}
                </div>
              </label>
              <input
                type="file"
                id={props.label}
                onChange={props.onChange}
                className={classes.visibiltyCollapse}
                onKeyPress={props.onKeyPress}
              />
            </div>{" "}
          </>
        );
      case "file_screemshot":
        return (
          <>
            <div className="">
              <div className="text-base font-semibold  tracking-wide text-left">
                {props.label}
              </div>
              <label
                className="flex justify-between border py-1.5 rounded-md px-2 border-gray-300 outline-none focus:outline-none "
                vlaue={props.value}
                for="upload"
              >
                {" "}
                <input
                  type="file"
                  id="upload"
                  accept=".png, .jpg, .jpeg"
                  onChange={props.onChange}
                  onKeyPress={props.onKeyPress}
                />
                {props.icon}
              </label>
            </div>{" "}
          </>
        );
      case "date":
        return (
          <div ref={props.ref} className="">
            <div className="text-base font-semibold  tracking-wide text-left">
              {props.label}
            </div>
            <div className="">
              <input
                type={props.type}
                name={props.label}
                max={props.max}
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm dark:bg-white"
                placeholder={props.placeHolder}
                onInput={props.onInput}
                maxLength={props.maxLength}
                minLength={props.minLength}
                value={props.value}
                onChange={props.onChange}
                readOnly={props.readOnly}
                onKeyPress={props.onKeyPress}
                pattern="(?:19|20)(?:(?:[13579][26]|[02468][048])-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))|(?:[0-9]{2}-(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:29|30))|(?:(?:0[13578]|1[02])-31)))"
              />
            </div>
          </div>
        );

      default:
        console.log("Invalid Input");
        break;
    }
  };
  return <div>{inputType(props.input)}</div>;
};
export default RiTextInputs;
