"use clinet";
import Image from "next/image";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import PauseIcon from "@mui/icons-material/Pause";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import ForwardToInboxRoundedIcon from "@mui/icons-material/ForwardToInboxRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import TranslateRoundedIcon from "@mui/icons-material/TranslateRounded";
import WorkHistoryRoundedIcon from "@mui/icons-material/WorkHistoryRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import ApplyButton from "./applybutton";
import RoundedButton from "./roundedButton";
import JobProperty from "./jobProperty";
import Map from "./Map";

const property = [
  {
    buttonIcon: <AccessTimeFilledIcon fontSize="small" />,
    buttonProperty: "4 Hours Ago",
  },
  {
    buttonIcon: <AssignmentTurnedInRoundedIcon fontSize="small" />,
    buttonProperty: "Full-Time",
  },
  {
    buttonIcon: <MonetizationOnIcon fontSize="small" />,
    buttonProperty: "Depends on Experience",
  },
  {
    buttonIcon: <SignalCellularAltIcon fontSize="small" />,
    buttonProperty: "Senior Level",
  },
  {
    buttonIcon: <SchoolRoundedIcon fontSize="small" />,
    buttonProperty: "Masters",
  },
];

interface PropsType {
  setIsClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const JobModal: React.FC<PropsType> = ({ setIsClose }) => {
  const handlemodal = () => {
    setIsClose(false);
  };
  return (
    <>
      <div className="absolute flex top-0 w-full 1h-full z-30 ">
        <div className="absolute bg-black w-full h-full opacity-80"></div>
        <div
          className="absolute right-10 top-10 z-20 bg-white rounded-full cursor-pointer"
          onClick={handlemodal}
        >
          <CloseOutlinedIcon className="text-2xl m-2 text-gray-600" />
        </div>
        <div className="flex justify-center w-full pt-8">
          <div className="flex flex-col z-10 bg-white max-w-[768px] justify-centeroverflow-y-auto rounded-xl">
            <div className="relative bg-black rounded-xl">
              <div className="absolute flex flex-col h-full right-4 items-center justify-center gap-4">
                <PauseIcon
                  className="text-white rounded-full hover:bg-gray-50 hover:bg-opacity-10 p-1 cursor-pointer z-10"
                  fontSize="large"
                />
                <VolumeUpIcon
                  className="text-white rounded-full hover:bg-gray-50 hover:bg-opacity-10 p-1 cursor-pointer z-10"
                  fontSize="large"
                />
              </div>
              <div className="absolute flex w-full bottom-4 items-center justify-end gap-4">
                <ArrowBackIosIcon
                  className="text-white rounded-full hover:bg-gray-50 hover:bg-opacity-10 p-1 pl-2 cursor-pointer z-10"
                  fontSize="large"
                />
                <ArrowForwardIosIcon
                  className="text-white rounded-full hover:bg-gray-50 hover:bg-opacity-10 p-1 pr-2 cursor-pointer z-10"
                  fontSize="large"
                />
              </div>
              <div className="absolute top-2 left-4 z-10 line-clamp-2 text-white text-sm">
                About City of Jersey City
              </div>
              <video className="rounded-xl w-full" loop>
                <source src="/videos/story1.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="flex-col px-4 pb-12">
              <div className="flex flex-row items-center justify-between h-[72px]">
                <Image
                  className="rounded-full -translate-y-7"
                  src={"/image/logo/City of Jersey City.png"}
                  alt=""
                  width={104}
                  height={104}
                />
                <div className="flex gap-3">
                  <RoundedButton
                    buttonIcon={
                      <BookmarkBorderRoundedIcon className="text-gray-500" />
                    }
                  />
                  <RoundedButton
                    buttonIcon={
                      <ForwardToInboxRoundedIcon className="text-gray-500" />
                    }
                  />
                  <RoundedButton
                    buttonIcon={
                      <MoreHorizRoundedIcon className="text-gray-500" />
                    }
                  />
                </div>
              </div>
              <div className="flex text-[#262626] font-medium text-[32px]">
                Lead Poisoning Inspector
              </div>
              <a className="cursor-pointer text-[#262626] text-sm">
                City of Jersey City
              </a>
              <div className="text-[#737373] text-sm">Jersey City, NJ, USA</div>
              <div className="flex items-center my-4 space-x-2">
                <ApplyButton buttonIcon={<></>} buttonName="Apply Now" />
                <ApplyButton
                  buttonIcon={<VideocamOutlinedIcon />}
                  buttonName="Video Apply"
                />
              </div>
              <div className="flex flex-row flex-wrap items-center justify-start">
                {property.map((item, idx) => (
                  <JobProperty
                    key={idx}
                    buttonIcon={item.buttonIcon}
                    buttonProperty={item.buttonProperty}
                  />
                ))}
              </div>
              <div className="flex flex-col mt-5">
                <div className="mb-3 text-lg text-[#262626] font-medium">
                  Job Description
                </div>
                <p className="text-[#262626] text-base mb-5">
                  We are seeking a passionate and dedicated individual to join
                  our team as a Lead Poisoning Inspector at the City of Jersey
                  City. In this role, you will play a critical role in ensuring
                  the safety and well-being of our community by identifying and
                  addressing potential lead hazards. You will have the
                  opportunity to work closely with residents, property owners,
                  and other city officials to promote healthy living
                  environments and prevent lead poisoning. We are looking for
                  someone who is detail-oriented, empathetic, and has a strong
                  understanding of lead poisoning prevention and remediation. If
                  you are passionate about public health and making a positive
                  impact in the community, we encourage you to apply for this
                  important position.
                </p>
              </div>

              <ol className="list-decimal mt-5 pl-[26px] marker:text-[#262626]">
                <li className="text-[#262626] text-base my-2 pl-1.5">
                  Conduct inspections of residential properties to ensure
                  compliance with building codes, regulations, and safety
                  standards.
                </li>
                <li className="text-[#262626] text-base my-2 pl-1.5">
                  Identify and document building violations and work with
                  property owners to correct them.
                </li>
                <li className="text-[#262626] text-base my-2 pl-1.5">
                  Lead a team of inspectors, providing guidance, training, and
                  support to ensure consistent and accurate inspections.
                </li>
                <li className="text-[#262626] text-base my-2 pl-1.5">
                  Collaborate with other city departments and agencies to
                  address housing issues and coordinate inspections.
                </li>
                <li className="text-[#262626] text-base my-2 pl-1.5">
                  Maintain accurate and up-to-date records of inspections,
                  violations, and corrective actions taken.
                </li>
                <li className="text-[#262626] text-base my-2 pl-1.5">
                  Provide exceptional customer service to residents, property
                  owners, and other stakeholders.
                </li>
                <li className="text-[#262626] text-base my-2 pl-1.5">
                  Stay current on changes to building codes and regulations and
                  implement them in inspections.
                </li>
                <li className="text-[#262626] text-base my-2 pl-1.5">
                  Conduct follow-up visits to ensure that violations have been
                  corrected.
                </li>
                <li className="text-[#262626] text-base my-2 pl-1.5">
                  Investigate complaints and take appropriate action.
                </li>
                <li className="text-[#262626] text-base my-2 pl-1.5">
                  Participate in community outreach and education efforts to
                  promote housing preservation and safety.
                </li>
                <li className="text-[#262626] text-base my-2 pl-1.5">
                  Prepare reports and present findings to city officials and
                  boards.
                </li>
                <li className="text-[#262626] text-base my-2 pl-1.5">
                  Monitor and track department budget and expenses.
                </li>
                <li className="text-[#262626] text-base my-2 pl-1.5">
                  Oversee and ensure the proper use and maintenance of
                  inspection equipment.
                </li>
                <li className="text-[#262626] text-base my-2 pl-1.5">
                  Serve as a point of contact for questions and concerns related
                  to housing preservation and inspections.
                </li>
                <li className="text-[#262626] text-base my-2 pl-1.5">
                  Uphold and promote ethical standards and professional conduct
                  in all interactions and decisions.
                </li>
              </ol>

              <div className="flex flex-col mt-5 text-[#262626]">
                <div className="mb-3 text-lg font-semibold">
                  Where is this job?
                </div>
                <div className="pb-8 text-sm">
                  This job is located at Jersey City, NJ, USA
                </div>
                <div className="rounded-xl">
                  <Map />
                </div>
              </div>

              <div className="flex flex-col mt-5 text-[#262626]">
                <div className="mb-3 text-lg font-semibold">
                  Job Qualifications
                </div>
                <ul className="mt-2 mb-5 space-y-5">
                  <li className="flex items-start lg:col-span-1 ng-star-inserted">
                    <div className="flex-shrink-0">
                      <CheckOutlinedIcon />
                    </div>
                    <p className="ml-3">
                      Extensive Knowledge Of Housing Preservation Regulations
                      And Standards: The Lead Inspector Must Possess A Thorough
                      Understanding Of Local, State, And Federal Regulations
                      Related To Housing Preservation In Order To Effectively
                      Evaluate Properties And Ensure Compliance.
                    </p>
                  </li>
                  <li className="flex items-start lg:col-span-1 ng-star-inserted">
                    <div className="flex-shrink-0">
                      <CheckOutlinedIcon />
                    </div>
                    <p className="ml-3">
                      Strong Communication And Interpersonal Skills: As A Lead
                      Inspector, The Individual Will Be Interacting With
                      Property Owners, Tenants, And Other City Officials On A
                      Daily Basis. Excellent Communication And Interpersonal
                      Skills Are Essential For Effectively Conveying Information
                      And Resolving Conflicts.{" "}
                    </p>
                  </li>
                  <li className="flex items-start lg:col-span-1 ng-star-inserted">
                    <div className="flex-shrink-0">
                      <CheckOutlinedIcon />
                    </div>
                    <p className="ml-3">
                      {" "}
                      Experience In Conducting Property Inspections: The Ideal
                      Candidate Should Have Prior Experience In Conducting
                      Property Inspections, Preferably In A Municipal Setting.
                      This Includes Knowledge Of Inspection Procedures, Building
                      Codes, And Safety Regulations.{" "}
                    </p>
                  </li>
                  <li className="flex items-start lg:col-span-1 ng-star-inserted">
                    <div className="flex-shrink-0">
                      <CheckOutlinedIcon />
                    </div>
                    <p className="ml-3">
                      {" "}
                      Detail-Oriented And Organized: The Lead Inspector Will Be
                      Responsible For Maintaining Accurate Records And Reports
                      Of Inspections, Violations, And Corrective Actions Taken.
                      Therefore, They Must Be Detail-Oriented And Organized To
                      Ensure All Necessary Documentation Is Complete And
                      Up-To-Date.{" "}
                    </p>
                  </li>
                  <li className="flex items-start lg:col-span-1 ng-star-inserted">
                    <div className="flex-shrink-0">
                      <CheckOutlinedIcon />
                    </div>
                    <p className="ml-3">
                      {" "}
                      Leadership And Supervisory Skills: As A Lead Inspector,
                      The Individual Will Be Responsible For Supervising A Team
                      Of Inspectors And Coordinating Their Schedules And
                      Assignments. Strong Leadership Skills Are Necessary To
                      Effectively Manage The Team And Ensure Timely Completion
                      Of Tasks.{" "}
                    </p>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col mt-5 text-[#262626]">
                <div className="mb-3 text-lg font-semibold">
                  Required Skills
                </div>

                <ul className="mt-2 mb-5 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                  <li className="flex items-start lg:col-span-1 ng-star-inserted">
                    <div className="flex-shrink-0">
                      <CheckOutlinedIcon />
                    </div>
                    <p className="ml-3 capitalize"> Communication Skills </p>
                  </li>
                  <li className="flex items-start lg:col-span-1 ng-star-inserted">
                    <div className="flex-shrink-0">
                      <CheckOutlinedIcon />
                    </div>
                    <p className="ml-3 capitalize"> Project Management </p>
                  </li>
                  <li className="flex items-start lg:col-span-1 ng-star-inserted">
                    <div className="flex-shrink-0">
                      <CheckOutlinedIcon />
                    </div>
                    <p className="ml-3 capitalize"> Time Management </p>
                  </li>
                  <li className="flex items-start lg:col-span-1 ng-star-inserted">
                    <div className="flex-shrink-0">
                      <CheckOutlinedIcon />
                    </div>
                    <p className="ml-3 capitalize"> Quality Control </p>
                  </li>
                  <li className="flex items-start lg:col-span-1 ng-star-inserted">
                    <div className="flex-shrink-0">
                      <CheckOutlinedIcon />
                    </div>
                    <p className="ml-3 capitalize"> Safety regulations </p>
                  </li>
                  <li className="flex items-start lg:col-span-1 ng-star-inserted">
                    <div className="flex-shrink-0">
                      <CheckOutlinedIcon />
                    </div>
                    <p className="ml-3 capitalize"> Structural Analysis </p>
                  </li>
                  <li className="flex items-start lg:col-span-1 ng-star-inserted">
                    <div className="flex-shrink-0">
                      <CheckOutlinedIcon />
                    </div>
                    <p className="ml-3 capitalize"> Problem-Solving </p>
                  </li>
                  <li className="flex items-start lg:col-span-1 ng-star-inserted">
                    <div className="flex-shrink-0">
                      <CheckOutlinedIcon />
                    </div>
                    <p className="ml-3 capitalize"> Attention to </p>
                  </li>
                  <li className="flex items-start lg:col-span-1 ng-star-inserted">
                    <div className="flex-shrink-0">
                      <CheckOutlinedIcon />
                    </div>
                    <p className="ml-3 capitalize"> Hazard Recognition </p>
                  </li>
                  <li className="flex items-start lg:col-span-1 ng-star-inserted">
                    <div className="flex-shrink-0">
                      <CheckOutlinedIcon />
                    </div>
                    <p className="ml-3 capitalize"> Building Codes </p>
                  </li>
                  <li className="flex items-start lg:col-span-1 ng-star-inserted">
                    <div className="flex-shrink-0">
                      <CheckOutlinedIcon />
                    </div>
                    <p className="ml-3 capitalize"> Inspection Techniques </p>
                  </li>
                  <li className="flex items-start lg:col-span-1 ng-star-inserted">
                    <div className="flex-shrink-0">
                      <CheckOutlinedIcon />
                    </div>
                    <p className="ml-3 capitalize"> Construction Materials </p>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col mt-5 text-[#262626]">
                <div className="mb-3 text-lg font-semibold">Soft Skill</div>

                <ul className="mt-2 mb-5 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 ng-tns-c283-54">
                  <li className="flex items-start lg:col-span-1 ng-tns-c283-54 ng-star-inserted">
                    <div className="flex-shrink-0 ng-tns-c283-54">
                      <CheckOutlinedIcon />
                    </div>
                    <p className="ml-3 capitalize ng-tns-c283-54">
                      {" "}
                      Communication{" "}
                    </p>
                  </li>
                  <li className="flex items-start lg:col-span-1 ng-tns-c283-54 ng-star-inserted">
                    <div className="flex-shrink-0 ng-tns-c283-54">
                      <CheckOutlinedIcon />
                    </div>
                    <p className="ml-3 capitalize ng-tns-c283-54">
                      {" "}
                      Conflict Resolution{" "}
                    </p>
                  </li>
                  <li className="flex items-start lg:col-span-1 ng-tns-c283-54 ng-star-inserted">
                    <div className="flex-shrink-0 ng-tns-c283-54">
                      <CheckOutlinedIcon />
                    </div>
                    <p className="ml-3 capitalize ng-tns-c283-54">
                      {" "}
                      Leadership{" "}
                    </p>
                  </li>
                  <li className="flex items-start lg:col-span-1 ng-tns-c283-54 ng-star-inserted">
                    <div className="flex-shrink-0 ng-tns-c283-54">
                      <CheckOutlinedIcon />
                    </div>
                    <p className="ml-3 capitalize ng-tns-c283-54">
                      {" "}
                      Time management{" "}
                    </p>
                  </li>
                  <li className="flex items-start lg:col-span-1 ng-tns-c283-54 ng-star-inserted">
                    <div className="flex-shrink-0 ng-tns-c283-54">
                      <CheckOutlinedIcon />
                    </div>
                    <p className="ml-3 capitalize ng-tns-c283-54">
                      {" "}
                      creativity{" "}
                    </p>
                  </li>
                  <li className="flex items-start lg:col-span-1 ng-tns-c283-54 ng-star-inserted">
                    <div className="flex-shrink-0 ng-tns-c283-54">
                      <CheckOutlinedIcon />
                    </div>
                    <p className="ml-3 capitalize ng-tns-c283-54">
                      {" "}
                      Attention to detail{" "}
                    </p>
                  </li>
                  <li className="flex items-start lg:col-span-1 ng-tns-c283-54 ng-star-inserted">
                    <div className="flex-shrink-0 ng-tns-c283-54">
                      <CheckOutlinedIcon />
                    </div>
                    <p className="ml-3 capitalize ng-tns-c283-54"> Teamwork </p>
                  </li>
                  <li className="flex items-start lg:col-span-1 ng-tns-c283-54 ng-star-inserted">
                    <div className="flex-shrink-0 ng-tns-c283-54">
                      <CheckOutlinedIcon />
                    </div>
                    <p className="ml-3 capitalize ng-tns-c283-54">
                      {" "}
                      Adaptability{" "}
                    </p>
                  </li>
                  <li className="flex items-start lg:col-span-1 ng-tns-c283-54 ng-star-inserted">
                    <div className="flex-shrink-0 ng-tns-c283-54">
                      <CheckOutlinedIcon />
                    </div>
                    <p className="ml-3 capitalize ng-tns-c283-54">
                      {" "}
                      Problem-Solving{" "}
                    </p>
                  </li>
                  <li className="flex items-start lg:col-span-1 ng-tns-c283-54 ng-star-inserted">
                    <div className="flex-shrink-0 ng-tns-c283-54">
                      <CheckOutlinedIcon />
                    </div>
                    <p className="ml-3 capitalize ng-tns-c283-54"> Empathy </p>
                  </li>
                </ul>
              </div>

              <div className="flex rounded-xl bg-[#EFF6FF] p-5">
                <div className="w-8">
                  <InfoRoundedIcon color="primary" fontSize="small" />
                </div>
                <div className="text-[#1D4ED8] text-sm pl-4">
                  According to JobzMall, the average salary range for a Lead
                  Inspector - Housing Preservation in Jersey City, NJ, USA is
                  between $55,000 and $75,000 per year. This may vary depending
                  on the specific company, experience level, and education of
                  the individual. <br />
                  <br />
                  City of Jersey City is an Equal Opportunity Employer. We
                  celebrate diversity and are committed to creating an inclusive
                  environment for all employees. We do not discriminate based
                  upon race, religion, color, national origin, sex, sexual
                  orientation, gender identity, age, status as a protected
                  veteran, status as an individual with a disability, or other
                  applicable legally protected characteristics.
                </div>
              </div>

              <div className="flex flex-col mt-5 text-[#262626]">
                <div className="mb-3 text-lg font-semibold ">
                  Additional Information
                </div>
                <div className="flex flex-row mb-2">
                  <TranslateRoundedIcon
                    className="text-gray-500"
                    fontSize="small"
                  />
                  <div className="mr-1 font-semibold text-sm pl-2">
                    Required Languages
                  </div>
                  <div className="text-sm">English</div>
                </div>
                <div className="flex flex-row mb-2">
                  <AccessTimeFilledIcon
                    className="text-gray-500"
                    fontSize="small"
                  />
                  <div className="mr-1 font-semibold text-sm pl-2">
                    Job Posted
                  </div>
                  <div className="text-sm">September 13th, 2024</div>
                </div>
                <div className="flex flex-row mb-2">
                  <WorkHistoryRoundedIcon
                    className="text-gray-500"
                    fontSize="small"
                  />
                  <div className="mr-1 font-semibold text-sm pl-2">
                    Apply Before
                  </div>
                  <div className="text-sm">October 12th, 2024</div>
                </div>
                <div className="flex flex-row mb-2 text-[#262626]">
                  <VerifiedRoundedIcon
                    className="text-gray-500"
                    fontSize="small"
                  />
                  <div className="mr-1 font-semibold text-sm pl-2">
                    This is a verified job listing.
                  </div>
                  <a className="text-sm">Learn More</a>
                </div>
              </div>
              {/* end */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobModal;
