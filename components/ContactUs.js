import { useRouter } from "next/router";
import classes from "./ContactUs.module.css";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import ActionButton from "./ButtonComponents/ActionButton";
import RiTextInputs from "./MainComponents/RiTextInputs";

const ContactUs = (props) => {
    const router = useRouter();
    return (
        <div>
            {/* {modalShow && (
                    <RIModal
                        Heading={"We have received your message"}
                        Text={"Will get in touch as soon as possible"}
                        onClick={() => router.push("/")}

                    />
                )} */}
            <div className="bg-white shadow-md border border-gray-300 rounded-lg px-4 py-4 mb-6 mt-6 lg:mt-0">
                <h1 className="text-xl lg:text-3xl font-semibold text-center">Get in Touch with Rozgaar support team</h1>
                <p className="text-center my-4">
                    We’re always happy to help. Drop us a line, we will be in touch
                    asap
                </p>
                <div className="grid grid-cols-1 gap-2">
                    <RiTextInputs
                        input={"SingleLineInput"}
                        type={"text"}
                        label={"Name"}
                        placeHolder={"Enter your name"}
                        onChange={(e) => props.setName(e.target.value)}
                        value={props.name}
                    />
                    <p className={classes.ErrorMessage}>{props.error.name}</p>
                    <RiTextInputs
                        input={"SingleLineInput"}
                        type={"email"}
                        label={"Email"}
                        placeHolder={"Enter your email"}
                        onChange={(e) => props.setEmail(e.target.value)}
                        value={props.email}
                    />
                    <p className={classes.ErrorMessage}>{props.error.email}</p>
                    <RiTextInputs
                        input={"mobileWithDropdown"}
                        label={"Mobile"}
                        maxLength="10"
                        minLength="10"
                        onInput={() => {
                            error.mobile = " ";
                        }}
                        dialCode={props.dialCode}
                        checkMObileVal={props.checkMObileVal}
                        onChange={(e) => {
                            props.handleMobileChange(e);
                        }}
                        value={props.mobile}
                        placeHolder={"Enter your mobile number"}
                    />
                    <div className={classes.ErrorMessage}>{props.error.mobile}</div>
                    <RiTextInputs
                        input={"Dropdown"}
                        type={"text"}
                        label={"Subject"}
                        onChange={(e) => props.setSubject(e.target.value)}
                        value={props.subject}
                    />
                    <div className={classes.ErrorMessage}>{props.error.subject}</div>
                    <RiTextInputs
                        input={"MultiLineInput"}
                        type={"text"}
                        label={"Write Message"}
                        onChange={(e) => props.setMessage(e.target.value)}
                        value={props.message}
                        placeHolder={"Type your message here"}
                    />
                    <p className={classes.ErrorMessage}>{props.error.message}</p>
                    <RiTextInputs
                        input={"file"}
                        type={"file"}
                        label={"Upload (Optional)"}
                        onChange={props.idProofFront}
                        value={props.fileUpload}
                        icon={
                            typeof props.fileUpload === "object" ? (
                                <AiFillCheckCircle size="25" color="green" />
                            ) : (
                                <BsLink45Deg size="25" />
                            )
                        }
                    />
                </div>
                {props.isLoading ? (
                    <div className={classes.LoadingBtn}>
                        {/* <Loader type="TailSpin" color="white" width={20} height={18} /> */}loading...
                    </div>
                ) : (
                    <div className={classes.ActionButton}>
                        <ActionButton
                            buttonText={"Submit"}
                            buttonType={"small"}
                            onClick={() => {
                                props.formValidation()
                                    ? props.ContactDetails()
                                    : console.log("Something's wrong");
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default ContactUs