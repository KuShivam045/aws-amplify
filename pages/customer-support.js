import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import BreadCrumb from '../components/MainComponents/BreadCrumb';
import ContactUs from '../components/ContactUs';
import Faq from '../components/HowtoHire/Faq';
import Footer from '../components/Footer';
import RiHeader from '../components/MainComponents/RiHeader';
import Head from 'next/head';

const customersupport = (props) => {
  let mob = Cookies.get("Client_USERMOBILENO");
  let locemail = Cookies.get("Client_USEREMAIL");
  let locname = Cookies.get("Client_FirstName") + ' ' + Cookies.get("Client_LastName");
  let userLoggedIn = Cookies.get("Client_userLoggedIn");
  const [show, setShow] = useState(false);
  const [Data, setData] = useState([]);
  const [question, setQuestion] = useState([]);
  const [answer, setAnswer] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [checkMObileVal, setCheckMObileVal] = useState(false);
  const [dialCode, setDialCode] = useState("+91");
  const [name, setName] = useState(userLoggedIn ? locname : "");
  const [email, setEmail] = useState(userLoggedIn ? locemail : "");
  const [mobile, setMobile] = useState(userLoggedIn ? mob : "");
  const [message, setMessage] = useState();
  const [subject, setSubject] = useState();
  const [fileUpload, setFileUpload] = useState();
  const [error, setError] = useState({});
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    FrequentlyAskedQuestions();
  }, []);

  useEffect(() => {
    if (mobile && mobile.length >= 10) {
      setCheckMObileVal(true);
    }
    if (mobile && mobile.length < 10) {
      setCheckMObileVal(false);
    }
  }, [mobile]);

  const handleMobileChange = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setMobile(e.target.value);
    }
  };

  const ContactDetails = () => {
    setIsLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 52e6faf229b4c8d1f6832edd4dde9a9d60a8c0d3"
    );
    var formdata = new FormData();
    formdata.append("Name", name);
    formdata.append("Email", email);
    formdata.append("Mobile", mobile);
    formdata.append("Subject", subject);
    formdata.append("Message", message);
    formdata.append("FileUpload", fileUpload ? fileUpload : "");
    formdata.append("ContactType", "Client");
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };
    fetch(
      process.env.BASE_URL + "/api/rozgaarapi/rzContactUshhh"
      , requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "SUCCESS" && result.status_code === 200) {
          setModalShow(true);
        }
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setIsLoading(false);
      });
  };

  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  const idProofFront = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileUpload(e.target.files[0]);
    }
  };

  const formValidation = () => {
    let errors = {};
    let isValid = true;
    if (!name || name === "") {
      errors.name = "Please Enter your Full name";
      isValid = false;
    }
    if (!email || email === "") {
      errors.email = "Please enter your E-mail Id";
      isValid = false;
    } else if (reg.test(email) === false) {
      errors.email = "Please enter your Correct E-mail Id";
      isValid = false;
    }
    if (!mobile || mobile === "") {
      errors.mobile = "Please enter your mobile no.";
      isValid = false;
    }
    if (!subject || subject === "" || subject === "Select Subject") {
      errors.subject = "Please select your subject!";
      isValid = false;
    }
    if (!message || message === "") {
      errors.message = "Please enter your message!";
      isValid = false;
    }

    setError(errors);
    return isValid;
  };

  const FrequentlyAskedQuestions = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 52e6faf229b4c8d1f6832edd4dde9a9d60a8c0d3"
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      Question: question,
      Answer: answer,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(process.env.BASE_URL + "/api/rozgaarapi/GetFaq", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => console.log("error", error));
  };

  const pages = [
    {
      name: "Customer Support",
      href: "https://www.rozgaarindia.com/customer-support",
      current: true,
    },
  ];
  return (
    <div>
      <Head>
      <meta
          name="google-site-verification"
          content="u54uZFqgNrTkSuahTM5I6bofhv_If1lA4yajPDkIaVg"
        />
        <title>
        Rozgaar Customer Service and Support | Rozgaar Help
        </title>
        <link rel="canonical" href="https://www.rozgaarindia.com/customer-support" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Visit Rozgaar help center and get support on Freelancer or Employer account creation, withdraw , payments, proposals, partnerships, complaints and feedback"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/IPassets/rozgaarIcon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/IPassets/rozgaarIcon.png"
        />
        <meta
          property="og:title"
          content="Rozgaar Customer Service and Support | Rozgaar Help"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Visit Rozgaar help center and get support on Freelancer or Employer account creation, withdraw , payments, proposals, partnerships, complaints and feedback"
        />
        <meta
          property="og:url"
          content="https://www.rozgaarindia.com/customer-support"
        />
        <meta
          property="og:image"
          content="https://www.sasone.in/IPassets/rozgaarIcon.png"
        />
        <meta
          property="twitter:image"
          content="https://www.sasone.in/IPassets/rozgaarIcon.png"
        />
        <meta
          property="twitter:title"
          content="Rozgaar Customer Service and Support | Rozgaar Help"
        />
        <meta
          property="twitter:description"
          content="Visit Rozgaar help center and get support on Freelancer or Employer account creation, withdraw , payments, proposals, partnerships, complaints and feedback"
        />
        <meta property="twitter:card" content="summary" />
        <meta
          property="twitter:site"
          content="https://twitter.com/sasonesocial"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        
      </Head>
      <RiHeader
        userLoggedIn={props.UserLoggedIn}
        profile={props.ProfilePicture}
        firstName={props.FirstName}
        lastName={props.LastName}
      />
      <BreadCrumb pages={pages} />
      <div className="mx-auto max-w-7xl px-4 pb-4 lg:pb-6 lg:px-10">
        <ContactUs
          handleMobileChange={handleMobileChange}
          ContactDetails={ContactDetails}
          idProofFront={idProofFront}
          formValidation={formValidation}
          FrequentlyAskedQuestions={FrequentlyAskedQuestions}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          mobile={mobile}
          setMobile={setMobile}
          message={message}
          subject={setSubject}
          fileUpload={fileUpload}
          setFileUpload={setFileUpload}
          modalShow={modalShow}
          setModalShow={setModalShow}
          Data={Data}
          setData={setData}
          dialCode={dialCode}
          setDialCode={setDialCode}
          error={error}
        />
        <div className='mt-10 lg:mt-12'>
          <Faq faqs={Data} onClick={() => setShow(!show)} show={show} setShow={setShow} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

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
export default customersupport