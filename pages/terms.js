import React, { useEffect } from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import BreadCrumb from "../components/MainComponents/BreadCrumb";
import RiHeader from "../components/MainComponents/RiHeader";


const terms = (props) => {

  const pages = [
    {
      name: "Terms & Conditions",
      href: "https://www.rozgaarindia.com/terms",
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
        Terms of Service | Rozgaar India
        </title>
        <link
          rel="canonical"
          href="https://www.rozgaarindia.com/terms"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="This user agreement defines the terms & conditions which you accept by using our website and services."
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
          content="Terms of Service | Rozgaar India"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="This user agreement defines the terms & conditions which you accept by using our website and services."
        />
        <meta
          property="og:url"
          content="https://www.rozgaarindia.com/terms"
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
          content="Terms of Service | Rozgaar India"
        />
        <meta
          property="twitter:description"
          content="This user agreement defines the terms & conditions which you accept by using our website and services."
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
      {/* <LogoSchema data={logoSchema} /> */}
      <RiHeader
        userLoggedIn={props.UserLoggedIn}
        profile={props.ProfilePicture}
        firstName={props.FirstName}
        lastName={props.LastName}
      />
      <BreadCrumb pages={pages} />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8">
        <div className="w-full px-4 ">
          <h1 className="text-4xl text-blue-600 font-bold pb-4">
            Terms & Conditions
          </h1>
          <h2 className="text-2xl font-bold pb-4">Introduction</h2>
          <div className="text-base font-normal pb-4">
            These terms and conditions applicable to the use of the Website (as
            defined below) ("Terms of Use"), together with the privacy policy
            applicable to the website, and available at rozgaarindia.com, and
            any other disclaimers and terms applicable to the use of the
            Website, govern your use of the Website and Services, and constitute
            an agreement between Rozgaar ("Rozgaar India" / "We" / "Us" and
            variations of these terms). These Terms of Use apply to you and are
            binding upon you and Rozgaar India and Rozgaar India’s licensors,
            subsidiaries, associates, affiliates and partners through your use
            of rozgaarindia.com ("Website")
          </div>
          <div className="text-base font-normal pb-4">
            These Terms of Use may be amended / updated from time to time. Upon
            amending / updating the Terms of Use, we will accordingly amend the
            date above. We suggest that you regularly check these Terms of Use
            to apprise yourself of any updates. Your continued use of the
            Website will imply your unconditional acceptance of such updates to
            these Terms of Use. By visiting, accessing and/or availing any of
            the Services (as defined below) offered on the Website;
          </div>
          <ol className="pt-3">
            <li className="list-decimal text-base font-normal pb-4">
              You agree that you have read, understood and agreed to these Terms
              of Use and you acknowledge that these Terms of Use shall apply to
              you and be binding on you.
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              You have read, understood and accepted our Privacy Policy
              available at http://www. rozgaarindia.com/privacyPolicy
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              You are competent under the laws of India to agree to these Terms
              of Use and the terms in our Privacy Policy, and to avail of the
              Services offered on the Website;
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              You have the mental capacity and are of sane mind to take
              responsibility for your own actions and consequences arising out
              of such actions involving availing the Services offered on the
              Website, such as inter alia foregoing money deposited by you with
              Rozgaar India.
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              You are bound by the rules of each of the Services that you avail
              on the Website. ("Services" refer to the technological platform
              and all IT related services provided to you on the Website offered
              on the Website to
            </li>
          </ol>
          <h2 className="text-lg font-semibold pt-3">Overview</h2>
          <div className="text-base pt-1 font-semibold pb-2">
            {" "}
            (Main terms, in a nutshell)
          </div>
          <ul className="pt-3">
            <li className="list-disc text-base font-normal pb-4">
              Only registered users may buy and sell services on Rozgaar India.
            </li>
            <li className="list-disc text-base font-normal pb-4">
              Clients can post one free requirement. After that clients will
              have to pay ₹79 per post. Amount once paid will not be refunded in
              any case
            </li>
            <li className="list-disc text-base font-normal pb-4">
              Any Add-on Purchased against a Requirement will only remain valid
              for that particular requirement and in no case will be transferred
              or assigned to any other requirement.
            </li>
            <li className="list-disc text-base font-normal pb-4">
              Clients can directly contact the Freelancers who have applied for
              the requirement through call, messageboard or email.
            </li>
            <ul className="pt-3">
              <li className="list-decimal text-base font-normal pb-4">
                Clients can unlock the waitlist by paying an amount of ₹99. By
                unlocking the waitlist client will have access to all the
                Freelancers who apply for the requirement. Waitlist unlocked
                will only remain valid for the specific post for which it is
                unlocked.
              </li>
              <li className="list-decimal text-base font-normal pb-4">
                Freelancer will have the option to choose between Basic, Plus
                and Pro memberships at the time of registration. Freelancer will
                have to choose at least any one of the memberships in order to
                activate his account.
              </li>
              <li className="list-decimal text-base font-normal pb-4">
                Rozgaar India in any way does not guarantee/ensure a job/work,
                but is a platform through which Freelancers can showcase their
                skills to Clients and Clients can choose/select the seller to
                award jobs/work.
              </li>
              <li className="list-decimal text-base font-normal pb-4">
                Portfolio created by the Freelancer can be removed by Rozgaar
                India for : Illegal or Fraudulent service
              </li>
              <li className="list-decimal text-base font-normal pb-4">
                Copyright Infringement, Trademark Infringement, and violation of
                a third party's terms of service reported through our
                Intellectual Property Claims Policy
              </li>
              <li className="list-decimal text-base font-normal pb-4">
                Adult oriented services, Pornographic, Inappropriate/Obscene
              </li>
              <li className="list-decimal text-base font-normal pb-4">
                Misleading to Clients
              </li>
              <li className="list-decimal text-base font-normal pb-4">
                Any activities violating the terms and conditions or prejudicial
                to the interest of Rozgaar India
              </li>
              <li className="list-decimal text-base font-normal pb-4">
                Any activities found which might bring disrepute to Rozgaar
                India
              </li>
            </ul>
            <li className="list-decimal text-base font-normal pb-4">
              Client will have the option to purchase an Non-Disclosure
              Agreement(NDA) against his/her requirement. In this case all the
              Freelancers who apply to the post will automatically be bound to
              sign the Non-Disclosure Agreement(NDA) unless mutually agreed
              between the Client and Freelancer.
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              Freelancer must complete his KYC (document & bank verification) in
              order to receive funds in his/her bank account.
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              Client will have to pay the deposit amount including taxes in
              order to get the work started.
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              Amount paid by the Client will remain with Rozgaar India for 24
              Hours, 5 days or 7 days, depending on the membership purchased by
              the Freelancer and will be transferred to his/her Bank Account on
              expiry of the specified period.
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              Freelancers must fulfil their orders, and may not cancel orders on
              a regular basis or without cause. Cancelling orders will affect
              Freelancers’ reputation and status. Freelancers may also withstand
              monetary penalties
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              Freelancers gain account statuses (Levels) based on their
              performance and reputation. Advanced levels provide their owners
              with benefits, including extra credits, reward coupons, profile
              boost etc
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              Rozgaar India retains the right to use all published delivered
              works for Rozgaar India marketing and promotion purposes.
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              Rozgaar India provides a platform to both Clients & Freelancers to
              connect with each other & to resolve the work related issue,
              complaints & un-satisfaction among themselves.
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              Both Client and Freelancer are expected to maintain the decorum of
              the platform and shall not use any abusive language, hate speech
              or threaten each other in any way. If found, his/her account shall
              be suspended and any balance in his/her account shall be freezed.
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              We care about your privacy. You can read our Privacy Policy. The
              Privacy Policy is a part of these Terms of Service and
              incorporated herein by reference
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              In case of any dispute, Rozgaar India management decision will be
              final.
            </li>
          </ul>
          <h2 className="text-lg font-semibold pt-3">
            USE OF THE WEBSITE / SERVICES
          </h2>
          <div className="text-base pt-1 font-semibold pb-2">
            You may not use the Website and / or the Services:
          </div>
          <ul className="pt-3">
            <li className="list-decimal text-base font-normal pb-4">
              For any purpose that is unlawful, illegal or forbidden by law;
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              No data shall be shared or any activities shall be carried out
              directly or indirectly through the website in any manner
              whatsoever which is breach of any of the conditions mentioned
              above or which are in contravention with any law of India.
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              Further Rozgaar India shall not be liable for any such breach or
              violation of any Law committed by any User. Further Rozgaar India
              reserve its right to initiate appropriate Legal Proceedings
              against the concerned person and in case of any such violation or
              breach of any condition or any activity prejudicial to the
              interest of Rozgaar India is committed appropriate action under
              prevalent laws of India shall be taken by the Company
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              Further Rozgaar India reserves its right to report any violation
              or breach of condition/ law to the Cyber fraud cell or to
              concerned authorities to initiate appropriate actions against the
              erring person
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              In any manner that harms the Rozgaar India, or Rozgaar India’s
              directors, employees, affiliates, distributors, partners, service
              providers, and / or any other User of the Website;
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              to remove any copyright and other proprietary notices contained in
              any content on the Website or Service;
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              for the purpose of accessing the Services, Website, or any user
              content, posted by a User on the Platform by the use of spiders or
              robots.
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              We care about your privacy. You can read our Privacy Policy. The
              Privacy Policy is a part of these Terms of Service and
              incorporated herein by reference
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              To send communications containing unsolicited / unauthorized
              advertisements, promotions or marketing material.
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              In any manner other than as agreed in the Terms of Use.
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              Belongs to another person and to which you have no right to;
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              Is grossly harmful, harassing, blasphemous, defamatory, obscene,
              pornographic, pedophilic, libelous, invasive of another’s privacy,
              hateful, or racially, ethnically objectionable, disparaging,
              relating or encouraging money laundering or gambling, or otherwise
              unlawful in any manner whatsoever;
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              Harms minors in anyway;
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              Infringes any patent, trademark, copyright, or other proprietary
              rights;
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              Violates any applicable laws;
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              Deceives or misleads the addressee about the origin of such
              messages or
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              communicates any information that is grossly offensive or menacing
              in nature; Impersonates another person;
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              Contains software viruses or any other computer code, files, or
              programs designed to interrupt, destroy, or limit the
              functionality of any computer resource;
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              Threatens the unity, integrity, defense, security, or sovereignty
              of India, friendly relations with foreign states, or public order
              or causes incitement to the commission of any cognizable offence
              or prevents investigation of any offence or is insulting any other
              nation.
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              Contains software viruses or any other computer code, files, or
              programs designed to interrupt, destroy, or limit the
              functionality of any computer resource;
            </li>
          </ul>

          <h2 className="text-lg font-semibold pt-3">USER REGISTRATION</h2>
          <div className="text-base pt-1 font-semibold pb-2">Eligibility</div>
          <div>
            The Services offered by the Company on the Platform are exclusive to
            its network of Registered Users. To use any of the Services
            available on the Platform, you will need to be registered as a
            Registered User of the Platform as per the process below to use the
            Services. Non-Registered Users / Visitors may have restricted access
            and can browse only certain sections of the Application without
            logging in though.
          </div>
          <div>
            You are eligible to be a Registered User of the Platform if you:
          </div>
          <ul className="pt-3">
            <li className="list-decimal text-base font-normal pb-4">
              are an individual and of sound mind and competent to enter into a
              legal binding contract under Applicable Laws
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              are above 16 years of age;
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              are not a person barred from contracting under the Applicable Laws
              and comply with the Applicable Laws at all times;
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              Have read the Terms and agree to be bound by the same.
            </li>
          </ul>

          <h2 className="text-lg font-semibold pt-3">REGISTRATION PROCESS</h2>
          <div className="pt-2">
            You can create an account by either accessing the Website or by
            downloading/installing the Application from
            <a
              href="https://rozgaarindia.com/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              www.rozgaarindia.com
            </a>
          </div>
          <div className="">
            To create the User Account, You will be required to provide all
            information so provided is collectively referred to as “Customer
            Information”
          </div>

          <ul className="pt-3">
            <li className="list-decimal text-base font-normal pb-4">
              Users are required to accurately provide the following
              information:
            </li>
            <ul className="pt-3">
              <li className="list-decimal text-base font-normal pb-4">
                {" "}
                Full Name
              </li>
              <li className="list-decimal text-base font-normal pb-4">
                Username
              </li>
              <li className="list-decimal text-base font-normal pb-4">
                E-mail address
              </li>
              <li className="list-decimal text-base font-normal pb-4">
                {" "}
                Password
              </li>
              <li className="list-decimal text-base font-normal pb-4">
                {" "}
                State of Residence
              </li>
              <li className="list-decimal text-base font-normal pb-4">
                {" "}
                Gender
              </li>
              <li className="list-decimal text-base font-normal pb-4">
                Date of birth
              </li>
            </ul>
            <li className="list-decimal text-base font-normal pb-4">
              Participants are also required to confirm that they have read, and
              shall abide by, these Terms and Conditions & Privacy Policy.
            </li>
          </ul>
          <h2 className="text-lg font-semibold pt-3">
            USER UNDERTAKINGS & OBLIGATIONS
          </h2>
          <ul className="pt-3">
            <li className="list-decimal text-base font-normal pb-4">
              You will also be required to choose a unique password for the
              purpose of signing in to Your User Account. For security reasons,
              we advise you to not share the password with any Person and you
              shall be solely responsible for maintaining the confidentiality of
              the same
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              Freelancer may ask the Client to deposit an amount before starting
              the work that will remain in his/her Rozgaar Wallet. The
              Freelancer will have the option to withdraw the amount after 7
              days, 5 days or 24 hours of payment by the Client, depending on
              his/her membership plan.
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              If the Client incurs any issue with the Order, he may raise a
              dispute with the Customer Support team. However Payment once
              released to the Freelancer will not be refunded in any case
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              Rozgaar does not take the responsibility for any amount paid by
              the Client to Freelancer outside our Platform.
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              Orders are not eligible to be cancelled based on the quality of
              service/materials delivered by the Seller. Clients may rate their
              experience with the Seller on the Order Page, including the
              overall level of service quality received..
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              Monies held in your account shall not attract any interest.
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              Payment of any direct or indirect taxes, including any GST, which
              may apply to seller/Client depending on residency or location will
              be the sole responsibility of the seller/Client
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              You are solely responsible for recording, paying and accounting to
              any relevant governmental, taxation or other authority for any tax
              or other levy that may be payable on any withdrawals paid to you.
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              You have verified and determined that your use of the Services
              does not violate any laws or regulations of any jurisdiction that
              applies to you
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              You fully understand the methods, rules and procedures of the
              Services in general. You understand that it is your responsibility
              to ensure the details of Services are correct. You will not commit
              any acts or disuse any conduct that damages the reputation of the
              Company
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              Currently Rogaar Charges No commission from its Freelancers or
              Clients. However in Future Rozgaar may charge commission from both
              Freelancers and Clients or either of them. The same will be
              updated in our Terms and Conditions.
            </li>

            <li className="list-decimal text-base font-normal pb-4">
              All communication will be recorded with the user and can be used
              by the company for any reason.
            </li>
          </ul>
          <h2 className="text-lg font-semibold pt-3">COMPANY OBLIGATIONS</h2>
          <ul className="pt-3">
            <li className="list-decimal text-base font-normal pb-4">
              The Company has no obligation to check whether users are using the
              Services in accordance with the User Agreement, as updated from
              time to time.
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              Under no circumstances shall the Company be obligated to
              investigate or pursue any complaints made by a user against any
              other user using the Services or to take any other action in
              connection therewith, or take any action against a user for any
              reason, including without limitation for violating the terms of
              the User Agreement. The Company may, at its sole discretion,
              decide to take appropriate action against any person it suspects
              of engaging in any unlawful behaviour or otherwise violating the
              terms of the User Agreement, but is under no obligation to do so
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              The Company has no obligation to maintain account names or
              passwords. If you misplace, forget or lose your account name or
              password because of anything other than the Company's negligence,
              the Company shall not be liable.
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              We encourage our Clients and Freelancers to try and settle
              conflicts amongst themselves. If for any reason this fails, users
              can contact Rozgaar India Customer Support department for
              assistance. The decision of Rozgaar India will be final in this
              case
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              The corporate office is situated in Lucknow.
            </li>
          </ul>
          <h2 className="text-lg font-semibold pt-3">
            CONFIDENTIAL INFORMATION
          </h2>
          <div className="">
            The User acknowledges that the Website and / Services may contain
            information which is designated confidential by Rozgaar India and
            agrees that the User shall not disclose such information without
            prior written consent of Rozgaar India
          </div>
          <h2 className="text-lg font-semibold pt-3">
            USER ACCOUNT SUSPENSION AND TERMINATION
          </h2>
          <div className="pt-2">
            There may be circumstances where we are required to freeze the
            monies in your account which will prevent You from using the
            Services / the website. In such events, we may also be required to
            supply relevant User details to the applicable authority, regulator,
            or other third parties. These actions will be taken where we have
            reason to believe that your account may be used for, including but
            not limited to, the following activities:
          </div>
          <ul className="pt-3">
            <li className="list-decimal text-base font-normal pb-4">
              Fraud or attempt to defraud
            </li>

            <li className="list-decimal text-base font-normal pb-4">
              Money laundering.
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              Unethical Behaviour
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              We have reason to believe you are less than 16 years old.
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              You are in a jurisdiction (or citizen of a jurisdiction) that
              makes the provision of Our Services to You or Your use of them
              illegal.
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              With your acknowledgement, Rozgaar India owns the right to record
              & save any interactive services and/or user content produced by
              you but not limited to chat on the website
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              You understand that Rozgaar India is not liable to carry any
              interest or return on the funds in your user account.
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              You are violating these Terms of Use in any manner
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              If our investigations are ongoing and unresolved issues remain
              then we will continue to freeze Your User Account, or we may take
              the decision to close such User Account. We have the right to
              close Your User Account at any time for any reason. Rozgaar India
              also reserves the right to initiate appropriate civil or criminal
              action against you in the event of violation of these Terms of Use
              or applicable law. To clarify, you will be required to make any
              payments due to Rozgaar India at the time of such closure of Your
              User Account.
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              Upon User Account termination or suspension, regardless of the
              reasons, Your right to use the Website or Services immediately
              ceases, and you acknowledge and agree that we may immediately
              deactivate or delete your account and all related information
              and/or bar any further access to the Website. Rozgaar India shall
              not be liable to you or any third party for any claims or damages
              arising out of any termination or suspension of Your User Account
              or any other actions taken in connection with such account
              termination or suspension
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              You can close Your User Account at any time. If you want to close
              your account you should inform us either in writing, via e-mail,
              or letter, using the details found in our Contact Us section. All
              monies / payments due to be paid to Rozgaar India, must be made
              prior to the closing of the User Account. To clarify, as described
              above, each User will only be permitted to register and create one
              User Account, and you will not be able to create a new User
              Account upon the closing of your existing User Account.Once we
              receive confirmation that you wish to close your account, if
              requested, You shall be sent the value of the balance currently in
              Your account by a method of payment determined by Us, subject to
              deductions of any payments due to be made by You to Us at the time
              of closing of Your User Account
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              The validity, construction and effect of these Terms and
              Conditions and each and every provision hereof shall be governed
              by and construed in accordance with the laws of Lucknow, Uttar
              Pradesh, India. Any dispute arising out of or in connection with
              these Terms and Conditions, whether in contract or tort and
              including any question regarding its existence, validity or
              termination, shall be referred to and finally resolved by
              arbitration under the rules of Lucknow, Uttar Pradesh India which
              Rules are deemed to be incorporated by reference into this clause.
              The arbitration proceedings shall be conducted in Lucknow, India
              before a single arbitrator. The arbitrator shall be appointed by
              Rozgaar India.
            </li>
          </ul>
          <h2 className="text-lg font-semibold pt-3">RIGHTS & RESERVATIONS</h2>

          <div className="pt-2">
            There may be circumstances where we are required to freeze the
            monies in your account which will prevent you from using the
            Services / the website. In such events, we may also be required to
            supply relevant User details to the applicable authority, regulator,
            or other third parties. These actions will be taken where we have
            reason to believe that your account may be used for, including but
            not limited to, the following activities:
          </div>

          <ul>
            <li className="list-decimal text-base font-normal pb-4">
              All decisions made by Rozgaar India in relation to inter alia your
              registration with Rozgaar India on the Website, Services offered
              including processes involved and outcomes of such Services offered
              on the Website shall be at the sole discretion of Rozgaar India
              and such decisions shall be final and binding on You.
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              Rozgaar India shall have the right to request additional documents
              and additional information from you for the purpose of Your
              registration on the Website, at the time of the additional
              verification required for You to use cash Services, or at any time
              during such time when You are a registered User on the Website and
              availing Our Services.
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              Rozgaar India shall have the right to suspend or terminate Your
              registration with Rozgaar India on the Website if Rozgaar India
              has any reason to believe that You are violating any of the
              provisions of these Terms of Use, Privacy Policy, any other rules
              / policies of the Website, or any applicable laws.
            </li>
          </ul>
          <h2 className="text-lg font-semibold pt-3">
            PERSONAL INFORMATION AND DATA SECURITY
          </h2>
          <div className="pt-2">
            Rozgaar India may collect certain personal information from you in
            connection with the Website / Service. Such personal information may
            be collected in various ways including:
          </div>
          <ul className="pt-3">
            <li className="list-decimal text-base font-normal pb-4">
              {" "}
              when You register on the Website,
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              when You use the Website / Services{" "}
            </li>
          </ul>
          <div className="">
            Your personal information may be collected used, stored, processed,
            disclosed and transferred) for the purposes noted below and in
            accordance with applicable data protection laws and the Privacy
            Policy:
          </div>
          <ul className="pt-3">
            <li className="list-decimal text-base font-normal pb-4">
              {" "}
              For the purpose of providing you with the Services, in accordance
              with these Terms.
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              {" "}
              For account administration, customer service and technical
              support, billing and reconciliation, operational maintenance and
              support, fraud detection and prevention, as required by law or
              regulation.
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              Marketing & promotions{" "}
            </li>
            <li className="list-decimal text-base font-normal pb-4">
              {" "}
              Rozgaar India collection, storage, use, disclosure and otherwise
              dealing of any information provided by You at the time of
              registration and creation of a User Account, or during the course
              of Your using Our Service, including your personal information
              shall be governed by Rogaar India’s Privacy Policy available at
              <a href="">http://www.rozgaarondia.com/privacy-policy</a> For more
              information on the security measures and systems that we have in
              place for the protection of your personal Information collected
              from you on the Website, kindly refer to our Privacy Policy
            </li>
          </ul>
          <div>
            Your acceptance of these Terms of Use, and use of the Website and /
            or the Services shall be deemed to constitute your acceptance of the
            terms of the Privacy Policy.
          </div>
          <h2 className="text-lg font-semibold pt-3">INDEMNITY</h2>
          <div className="pt-2">
            You agree to defend, hold harmless and indemnify Rozgaar India, its
            affiliates, directors and officers (collectively the Rozgaar India
            Indemnified Parties) from and against any cost, liability, loss,
            damage, cause of action, claim, suit, proceeding, demand or action
            brought by a third party against Rozgaar India due to or arising out
            of or in connection with (a) Your use of the Website or (b) Your
            breach of any provision of these Terms of Use (c) or any negligent
            or intentional wrongdoing on your part.
          </div>
          <div className="">
            You shall not settle or compromise any such matter without our prior
            written consent. We shall be entitled to participate in such defence
            through our own counsel at your cost and expense.
          </div>
          <h2 className="text-lg font-semibold pt-3">
            Limitation on Liability
          </h2>
          <div className="pt-2">
            IN NO EVENT WILL rozgaarindia.com, ITS AFFILIATES OR THEIR
            LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS OR
            DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY,
            ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE,
            THE WEBSITE, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE WEBSITE
            OR SUCH OTHER WEBSITES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE
            WEBSITE OR SUCH OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT,
            SPECIAL, INCIDENTAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING
            BUT NOT LIMITED TO, PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL
            DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR
            ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA,
            AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF
            CONTRACT OR OTHERWISE, EVEN IF FORESEEABLE.
          </div>
          <div className="">
            IN ACCEPTING LIABILITY AS THE LIMITED AUTHORIZED PAYMENT COLLECTION
            AGENT OF SELLER, ROZGAAR INDIA AND ITS AFFILIATES ASSUME NO
            LIABILITY FOR ANY ACTS OR OMISSIONS OF SELLER.
          </div>
          <div>
            THE FOREGOING DOES NOT AFFECT ANY LIABILITY WHICH CANNOT BE EXCLUDED
            OR LIMITED UNDER APPLICABLE LAW.
          </div>
          <h2 className="text-lg font-semibold pt-3">DISCLAIMER</h2>
          <div className="">
            We exclude all representations and warranties relating to the
            content on, services offered and use of this website.
          </div>
          <div className="">
            Rozgaar India disclaims any representation and warranties for the
            security, reliability, quality, timeliness, and performance of (i)
            the website, content on the website and services offered on the
            website; (ii) third party products or services advertised on or
            received through any links or other sources provided on the website;
            (iii) any information, content or advice received through the site
            or links provided on the site.
          </div>
          <div className="">
            Rozgaar India makes no warranty or representation that any errors in
            the website will be corrected
          </div>
          <div className="">
            You agree that any services availed from the site would be at your
            sole discretion and you would be responsible for any damage caused
            to your computer resource or for any loss of your money resulting
            from you availing services on the website. Rozgaar India is not
            responsible for any consequences arising out of you availing the
            services on the website.
          </div>
          <div className="">
            The website is provided on an “as is” and “as available” basis.
            Neither Rozgaar India nor any third party service providers are
            liable for any network, technical or other operational difficulties
            or problems which may result in loss of your data, monetary loss,
            personalization settings or other interruptions in the features
            offered on the site. Neither Rozgaar Indianor any third party is
            liable for the deletion, loss, mis-delivery, timeliness or failure
            to store or transmit any features or other aspects of the services
            offered on the website, content on the website or your
            personalization and/or account settings.
          </div>
          <h2 className="text-lg font-semibold pt-3">
            GOVERNING LAW & JURISDICTION
          </h2>
          <div className="pt-2">
            This Agreement along with your use of the Website is governed by and
            construed in accordance with the laws of India.
          </div>
          <div className="">
            The courts at Lucknow shall have exclusive jurisdiction over all
            matters connected with these Terms of Use and Your use of the
            Website.
          </div>
          <h2 className="text-lg font-semibold pt-3">CONTACT US</h2>
          <div className="pt-2 pb-6">
            If you have any questions or concerns regarding the Terms of Use or
            for any technical support on the Website, please contact us at{" "}
            <a href="">contact@rozgaarindia.com</a>
          </div>
        </div>
        {/* <RIFooter /> */}
      </div>
      <Footer UserLoggedIn={props.UserLoggedIn} />
    </div>
  );
};
export async function getServerSideProps(context) {
  const UserLoggedIn = context.req.cookies.Client_userLoggedIn || null;
  const FirstName = context.req.cookies.Client_FirstName || null;
  const LastName = context.req.cookies.Client_LastName || null;
  const ProfilePicture = context.req.cookies.Client_ProfilePicture || "";

  return {
    props: {
      UserLoggedIn,
      FirstName,
      LastName,
      ProfilePicture,
    },
  };
}
export default terms;
