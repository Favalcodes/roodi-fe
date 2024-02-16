import { Stroke } from "@/assets/svg";
import Image from "next/image";

const EarlyAdoptor = () => {
  return (
    <>
      <div>
        <div className="early h-[150vh] md:h-[180vh] flex justify-center items-center">
          <div className="px-[8%]">
            <div className="text-center">
              <h2 className="text-4xl font-bold leading-normal">
                Become an early adopter,
                <br /> pay 70% less forever.
              </h2>
              <div className="flex justify-center">
                <Image src={Stroke} width={370} alt="stroke" />
              </div>
            </div>
            <p className="text-center text-2xl font-light mt-8 leading-normal md:px-16">
              Roodi will be released in time for the new term starting April.
              Get ahead of competing schools, become an early adopter to enjoy
              3-month free trial, and pay 70% less than other schools.
            </p>
            <div className="flex justify-center">
              <button className="bg-[#351D6B] text-[#FFA100] py-3 px-12 mt-12">
                Join the waitlist
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="border border-[#351D6B59] mb-24 p-8 text-center">
            <h4 className="text-2xl font-semibold">See how much you’d save.</h4>
            <p className="mt-12">How many students do you have?</p>
            <input
              placeholder="100"
              type="number"
              className="bg-[#E4D9FE82] border-b border-[#FFA100] rounded p-3 w-full mt-4 active:shadow-none focus:shadow-none active:outline-none focus:outline-none"
            />
            <p className="mt-12">Other schools will pay</p>
            <p className="text-[#351D6BBD]">
              <span className="text-2xl line-through decoration-red-900">
                N4,080,000
              </span>
              /year
            </p>
            <p className="mt-12">You’ll pay</p>
            <p>
              <span className="text-2xl font-semibold">N1,200,000</span>/year
            </p>
            <div className="flex justify-center">
              <p className="p-3 bg-[#FFA10040] mt-5">
                Save <span className="font-semibold">N2,820,000</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { EarlyAdoptor };
