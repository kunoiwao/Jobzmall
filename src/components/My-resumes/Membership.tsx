"use client";
import { useState } from "react";
import Image from "next/image";

interface Benefit {
  characteristic: string;
  content: string;
}

interface membershipData {
  planMode: string;
  description: string;
  price: number;
  lowPrice: number;
  order: string;
  benefits: Benefit[];
}

interface MembershipProps {
  membership: membershipData;
}

const Membership: React.FC<MembershipProps> = ({ membership }) => {
  const [show, setShow] = useState("h-0");
  const [isClick, setIsClick] = useState(false);
  const handleBenefits = () => {
    if (isClick) {
      setShow("h-auto");
    } else {
      setShow("h-0");
    }
    setIsClick(!isClick);
  };

  return (
    <>
      <div className="p-6 md:p-8 rounded-3xl xl:p-10 ring-1 ring-white/10">
        <div className="flex items-center justify-between gap-x-4 ">
          <h3
            id="tier-growth"
            className="text-xl font-semibold leading-8 text-white "
          >
            {membership.planMode}
          </h3>
        </div>
        <p className="text-md md:text-base md:mt-4 md:leading-6 text-gray-300 ">
          {membership.description}
        </p>
        <p className="flex items-baseline mt-2 md:mt-6 gap-x-1 ">
          <span className="mx-auto text-4xl font-bold tracking-tight text-white ">
            ${membership.price}
          </span>
        </p>
        <a
          className="flex items-center justify-center space-x-2 text-center text-white underline text-base "
          href="https://payments.jobzmall.com/b/28o8xickleVJ6nC3cd"
        >
          <span className="">or as low as ${membership.lowPrice}/mo with</span>
          <Image
            alt="Klarna"
            src="/image/logo/klarna-pink.svg"
            width={40}
            height={20}
            className="w-12"
          />
        </a>
        <a
          target="_blank"
          aria-describedby="tier-premium"
          className="flex justify-center px-3 py-2 mt-6 font-semibold leading-6 text-center text-white text-sm bg-indigo-500 rounded-md shadow-sm cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-indigo-400 focus-visible:outline-indigo-500 "
        >
          {membership.order}
        </a>

        <div
          className="relative text-md cursor-pointer flex md:hidden items-center mt-4 text-white "
          onClick={handleBenefits}
        >
          See Benefits
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            height="16px"
            width="16px"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            className={isClick ? "" : "rotate-180"}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>

        <ul
          role="list"
          className={`${show} md:h-auto transition-[height] duration-300 ease-in-out overflow-hidden mt-2 md:mt-8 space-y-3 leading-6 text-gray-300 xl:mt-10  ng-trigger ng-trigger-expandCollapse`}
        >
          {membership.benefits.map((benefit, idx) => (
            <li key={idx} className="flex gap-x-3 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="flex-none w-5 h-6 text-green-400 "
              >
                <path
                  fill-rule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clip-rule="evenodd"
                  className=""
                ></path>
              </svg>
              <span className="">
                <span className="font-bold ">{benefit.characteristic}:</span>
                {benefit.content}
              </span>
            </li>
          ))}
        </ul>
        <div></div>
      </div>
    </>
  );
};

export default Membership;
