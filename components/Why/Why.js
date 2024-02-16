import { Hyphen } from "@/assets/svg";
import Image from "next/image";

const WhySection = () => {
  return (
    <>
      <div className="second py-20 md:py-40 px-[8%]">
        <div className="text-center">
          <p>Dependable education technology</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3 leading-normal">
            Designed to help you run schools
            <br /> that are modern and fast.
          </h2>
        </div>
        <div className="my-20">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="md:w-[43%]">
              <div className="flex items-end">
                <Image src={Hyphen} alt="hyphen" className="mb-2 mr-1" />
                <h5 className="mb-0 font-semibold text-2xl">Easy to use</h5>
              </div>
              <p className="leading-normal mt-4">
                With a modern and minimalistic design, using Roodi is as easy as
                texting on WhatsApp.{" "}
              </p>
            </div>
            <div className="mt-8 md:mt-0 md:w-[43%]">
              <div className="flex items-end">
                <Image src={Hyphen} alt="hyphen" className="mb-2 mr-1" />
                <h5 className="mb-0 font-semibold text-2xl">
                  Fast and reliable
                </h5>
              </div>
              <p className="leading-normal mt-4">
                Roodi is built on the world’s fastest cloud infrastructures with
                99.99% uptime.{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start mt-12">
            <div className="md:w-[43%]">
              <div className="flex items-end">
                <Image src={Hyphen} alt="hyphen" className="mb-2 mr-1" />
                <h5 className="mb-0 font-semibold text-2xl">
                  Top-level security
                </h5>
              </div>
              <p className="leading-normal mt-4">
                We protect your data with a 256-bit AES algorithm, both at rest
                and on transit.{" "}
              </p>
            </div>
            <div className="mt-8 md:mt-0 md:w-[43%]">
              <div className="flex items-end">
                <Image src={Hyphen} alt="hyphen" className="mb-2 mr-1" />
                <h5 className="mb-0 font-semibold text-2xl">No hidden costs</h5>
              </div>
              <p className="leading-normal mt-4">
                One simple, transparent fee for every student, that’s all we
                charge. No surprises.{" "}
              </p>
            </div>
          </div>
          <div className="flex justify-between md:justify-center items-start mt-8 md:mt-12">
            <div className="md:w-[43%] md:text-center">
              <div className="flex md:justify-center items-end">
                <Image src={Hyphen} alt="hyphen" className="mb-2 mr-1" />
                <h5 className="mb-0 font-semibold text-2xl">
                  Dedicated support
                </h5>
              </div>
              <p className="leading-normal mt-4">
                Get personalized support from our dedicated team, from setup to
                growth and beyond.{" "}
              </p>
            </div>
          </div>
            <div className="flex justify-center mb-8 md:mb-40">
              <button className="bg-[#351D6B] w-full md:auto text-[#FFA100] py-3 px-12 mt-12">
                Join the waitlist
              </button>
            </div>
        </div>
      </div>
    </>
  );
};

export { WhySection };
