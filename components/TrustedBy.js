import Image from "next/image";
import React from "react";

const TrustedBy = () => {
  return (
    <section className="">
      <div className="bg-neutral-900 ">
        <div className="mx-auto max-w-7xlpy-6 py-8">
          <h2 className="font-display tracking-wider text-center font-semibold leading-8 text-white">
            Trusted by the world’s most innovative teams
          </h2>
          <div
            className="flex flex-wrap justify-center gap-y-10 gap-x-2 sm:gap-x-8 mt-8"
          >
            <Image
              className="max-h-10 object-contain"
              src="/assets/TrustedCompaniesLogo/Hero_Insurance.svg"
              alt="Hero_Insurance"
              width={158}
              height={48}
            />
            <Image
              className="max-h-10 object-contain"
              src="/assets/TrustedCompaniesLogo/Hyundai.svg"
              alt="Hyundai"
              width={158}
              height={48}
            />
            <Image
              className="max-h-10 object-contain"
              src="/assets/TrustedCompaniesLogo/Hero.svg"
              alt="Hero"
              width={158}
              height={48}
            />
            <Image
              className="max-h-10 object-contain"
              src="/assets/TrustedCompaniesLogo/Amazon_logo.svg"
              alt="Amazon_logo"
              width={158}
              height={48}
            />
            <Image
              className="max-h-10 object-contain"
              src="/assets/TrustedCompaniesLogo/TimesAscent.svg"
              alt="TimesAscent"
              width={158}
              height={48}
            />
            <Image
              className="max-h-10 object-contain"
              src="/assets/TrustedCompaniesLogo/Digital_India.svg"
              alt="Digital_India"
              width={158}
              height={48}
            />
            <Image
              className="max-h-10 object-contain"
              src="/assets/TrustedCompaniesLogo/Skill_India.svg"
              alt="Skill_India"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
