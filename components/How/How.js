import Image from "next/image";
import PrototypeImage from "../../assets/prototype.png";
import { Five, Four, One, Three, Two } from "@/assets/svg";

const HowSection = () => {
  return (
    <>
      <div className="my-3 md:my-12">
        <div className="md:w-[65%] px-[8%]">
          <h2 className="font-bold text-4xl md:text-5xl text-[#351D6B] leading-normal">
            Endless benefits,
            <br /> engineered precisely for you.
          </h2>
          <p className="text-2xl text-[#351D6B] mt-5 leading-normal">
            Discover how Roodi transforms your school into a paragon of modern
            education.
          </p>
        </div>
        <div>
          <div className="relative first px-[8%] py-24 mt-20 flex flex-col md:flex-row md:justify-between items-center">
            <div className="md:w-[49%]">
              <Image src={One} alt="one" className="absolute" />
              <div className="z-40 relative mt-16 pl-6">
                <h3 className="text-3xl font-semibold leading-normal">
                  Streamline attendance and detect health risk early with Roll
                  Call
                </h3>
                <p className="text-2xl font-light mt-5 leading-normal">
                  Help your teachers go the extra mile by capturing classroom
                  attendance alongside students’ wellbeing. Now, you can read
                  the mood in your whole school in real time.
                </p>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <Image src={PrototypeImage} alt="prototype" />
            </div>
          </div>
          <div className="relative second px-[8%] py-24 mt-3 md:mt-20 flex flex-col-reverse md:flex-row justify-between items-center">
            <div className="mt-12 md:mt-0">
              <Image src={PrototypeImage} alt="prototype" />
            </div>
            <div className="md:w-[49%]">
              <Image src={Two} alt="one" className="absolute" />
              <div className="z-40 mt-16 pl-6 relative">
                <h3 className="text-3xl font-semibold leading-normal">
                  The parent-teacher communication tool that keeps you in the
                  loop 24/7
                </h3>
                <p className="text-2xl font-light mt-5 leading-normal">
                  Correspondence allows teachers to communicate with parents
                  without revealing contact details. You also control the
                  narrative by approving which messages get delivered to
                  parents.
                </p>
              </div>
            </div>
          </div>
          <div className="relative first px-[8%] py-24 mt-3 md:mt-20 flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-[49%]">
              <Image src={Three} alt="one" className="absolute" />
              <div className="z-40 relative mt-16 pl-6">
                <h3 className="text-3xl font-semibold leading-normal">
                  Securely record all your students’ scores in one database
                </h3>
                <p className="text-2xl font-light mt-5 leading-normal">
                  Roodi removes the hassles of managing spreadsheets and keeps
                  your records secure with top-grade security. Empower your
                  teachers with the tool to record test and exam scores easily.
                </p>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <Image src={PrototypeImage} alt="prototype" />
            </div>
          </div>
          <div className="relative second px-[8%] py-24 mt-3 md:mt-20 flex flex-col-reverse md:flex-row justify-between items-center">
            <div className="mt-12 md:mt-0">
              <Image src={PrototypeImage} alt="prototype" />
            </div>
            <div className="md:w-[49%]">
              <Image src={Four} alt="one" className="absolute" />
              <div className="z-40 mt-16 pl-6 relative">
                <h3 className="text-3xl font-semibold leading-normal">
                  Generate hundreds of Report Cards™ in 2 minutes
                </h3>
                <p className="text-2xl font-light mt-5 leading-normal">
                  Report card compilation don’t have to take weeks. With Roodi,
                  you generate Report Cards™ for all your students instantly.
                  Now, parents receive their children’s report faster and your
                  holidays start sooner.
                </p>
              </div>
            </div>
          </div>
          <div className="relative first px-[8%] py-24 mt-3 md:mt-20 flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-[49%]">
              <Image src={Five} alt="one" className="absolute" />
              <div className="z-40 relative mt-16 pl-6">
                <h3 className="text-3xl font-semibold leading-normal">
                  Increase parent engagement with Homework™ assignments
                </h3>
                <p className="text-2xl font-light mt-5 leading-normal">
                  Roodi remedies low parent engagement experienced in
                  communication books by enabling your teachers to securely
                  assign home works that get delivered with notifications to
                  drive parents into action.
                </p>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <Image src={PrototypeImage} alt="prototype" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { HowSection };
