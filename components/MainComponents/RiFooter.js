import React, { useState } from "react";
import { BsYoutube, BsLinkedin } from "react-icons/bs";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
// import SuccessMessage from "./SuccessMessage";

const RiFooter = (props) => {
  const [email, setEmail] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const SubscribeApi = (e) => {
    e.preventDefault();
    setLoading(true);

    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 8cb23c1e5efb27dbadefabe601226a4264f59daa"
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      Email: email,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://promote.onecorp.co.in/api/v1/social/EmailSubscriptionInsert",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (
          result.status_code === 200 &&
          result.status === "Success" &&
          result.message === "Data  Inserted successFully"
        ) {
          setSuccessMsg("success");

          setEmail("");
        }
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setLoading(false);
      });
  };

  const navigation = {
    solutions: [
      { name: "About us", href: "/aboutus" },
      {
        name: "Become a Freelancer ",
        href: props.UserLoggedIn ? "freelancerworkplace" : "/signup",
      },
      { name: "How it works", href: "/howtohire" },
      { name: "Explore Skills", href: "/exploreskills" },
      { name: "SAS ONE", href: "https://www.sasone.in/" },
    ],
    support: [
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Privacy Policy", href: "/privacypolicy" },
      { name: "FAQ", href: "/faq" },
    ],

    security: [
      { name: "Help & Support", href: "/contactus" },
      { name: "Career", href: "/reportabug" },
      { name: "Report a Bug", href: "/reportabug" },
      { name: "Partnership", href: "/products/kyc" },
      { name: "Advertisement", href: "/products/stockone" },
      { name: "Feedback", href: "/products/dhanush" },
    ],
    legal: [
      { name: "About us", href: "/aboutsasone" },
      { name: "Privacy Policy", href: "/privacypolicy" },
      { name: "Terms & Conditions ", href: "/termsandconditions" },
      { name: "Careers ", href: "/careers" },
      { name: "Contact ", href: "/contactus" },
      { name: "Embedded-Services ", href: "/embedded-product" },
      { name: "Customers", href: "/customers" },
      {
        name: "Site Map",
        href: "https://www.sasone.in/sitemaps/sitemap.xml",
        target: "_blank",
      },
      // { name: 'Customer Schedule an appointment', href: '/customers/scheduleanappointment',  },
      // { name: 'Request Prouduct Information form', href: '/customers/requestproductinformation',  },
      // { name: 'Customer request a quote form', href: '/customers/customerrequestaquote',  },
      // { name: 'Customers request contact Form', href: '/customers/customersrequestcontact',  },
      // { name: 'Q&A', href: '/questions-and-answers',  },
    ],
    social: [
      {
        name: "Facebook",
        href: "https://www.facebook.com/HireFreelancersRemotely",
        icon: <AiFillFacebook size={24} />,
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/accounts/login/?next=/rozgaar_india/",
        icon: <AiOutlineInstagram size={24} />,
      },
      {
        name: "Twitter",
        href: "https://twitter.com/RozgaarI",
        icon: <AiOutlineTwitter size={24} />,
      },
      {
        name: "Youtube",
        href: "https://www.youtube.com/channel/UCyeAcFCvAo4ZVdUfpBrn4hQ",
        icon: <BsYoutube size={24} />,
      },
      {
        name: "Linkedin",
        href: "https://www.linkedin.com/authwall?trk=gf&trkInfo=AQFYH0Ik6vc73wAAAX8_jAPY2W4EF1cWECFh7PsI0_N2J2C3-ks5Dqhi1D56w8w5YR9DBzZBXBU2y1nuJGdpfoKW_2GJ1e1l6Pb8FhU_F70xYAvLujfYFLsD5k1D9sKkcgYxeDc=&originalReferer=https://rozgaarindia.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Frozgaar-india",
        icon: <BsLinkedin size={20} />,
      },
    ],
  };
  return (
    <footer className="bg-gray-800" aria-labelledby="footer-heading">
      {successMsg && (
        <SuccessMessage
          Alert={"success"}
          onClick={() => setSuccessMsg(false)}
          success={"Congratulations !!"}
          text={"Your email subscription has been successful."}
        />
      )}

      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-14 lg:px-12">
        <div className="xl:grid xl:grid-cols-2 xl:gap-8">
          <div className="grid grid-cols-1 gap-8 xl:col-span-2">
            <div className="grid grid-cols-2 md:grid md:grid-cols-3 md:gap-8">
              <div>
                <div>
                  <h3 className="text-base font-medium text-white">COMPANY</h3>
                </div>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a href={item.href}>
                        <div
                          onClick={() => {
                            Cookies.remove("ProductPage");
                            Cookies.remove("ProductName");
                            router.push(item.href);
                          }}
                          className="cursor-pointer text-base text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-0 md:mt-0">
                <div>
                  {" "}
                  <h3 className="text-base font-medium text-white">POLICIES</h3>
                </div>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        target={item.target}
                        className="text-base text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <div>
                  {" "}
                  <h3 className="text-base font-medium text-white">CONTACT</h3>
                </div>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.security.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        target={item.target}
                        className="text-base text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <div><h3 className="text-base font-medium text-white" >CONTACT
                </h3></div>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.security.map((item) => (
                    <li key={item.name}>
                      <a href={item.href}>
                        <div onClick={() => { Cookies.remove("ProductPage"); router.push(item.href) }} className="cursor-pointer text-base text-gray-300 hover:text-white">
                          {item.name}
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <div><h3 className="text-base font-medium text-white" >CONTACT
                </h3></div>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.security.map((item) => (
                    <li key={item.name}>
                      <a href={item.href}>
                        <div onClick={() => { Cookies.remove("ProductPage"); router.push(item.href) }} className="cursor-pointer text-base text-gray-300 hover:text-white">
                          {item.name}
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            
            </div> */}
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={"_blank"}
                className="text-gray-400 hover:text-gray-300"
              >
                <span className="sr-only">{item.name}</span>

                {item.icon}
              </a>
            ))}
          </div>
          <p className="mt-8 text-base text-gray-400 md:order-1 md:mt-0">
            &copy; {new Date().getFullYear()} SAS ONE PRIVATE LIMITED. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default RiFooter;
